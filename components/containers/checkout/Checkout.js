import React, { useState, useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'next-themes'
import styles from './Checkout.module.scss'
import PaypalBtn from '../../elements/paypalbtn/PaypalBtn'

const CREATE_ORDER = gql`
  mutation createPurchaseOn(
    $customerEmail: String!, 
    $customerName: String!, 
    $purchaseId: String!, 
    $purchaseProducts: String!, 
    $totalPrice: String!
    ) {
      createPurchaseOn(
      input: {
        customerEmail: $customerEmail, 
        customerName: $customerName, 
        purchaseId: $purchaseId, 
        purchaseProducts: $purchaseProducts, 
        totalPrice: $totalPrice
      }
    ) {
      purchaseCreated
    }
  }
`

const Checkout = ({ course, paypalDetails }) => {

  const [mounted, setMounted] = useState()
  const {theme} = useTheme()

  const [createOrder, {data, loading, error}] = useMutation(CREATE_ORDER)
  const wasOrderCreated = Boolean(data?.createOrder?.purchaseId)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const values = Object.fromEntries(data)
    createOrder({
      variables: values
    }).catch(error => {
      console.error(error)
    })
  }

  if (wasOrderCreated) {
    return (
      <p>Order successfully created.</p>
    )
  }

  return (
    <div className={`${theme === 'dark' ? styles.dark : styles.light} ${styles.checkout_wrapper} `}>
      <h1 className={styles.checkout_title}>
        <FontAwesomeIcon icon={faCreditCard} />
        Your Order
      </h1>
      <div className={styles.checkout_details}>
        <h3 className={styles.checkout_course__title}>
          {course?.title}
        </h3>
        <small>{course?.courseACF.shortDescription}</small>
        <p>Price: {course?.courseACF.price}$</p>
      </div>
      <form method='post' className={styles.checkout_form} onSubmit={handleSubmit}>
        <input type='hidden' name='purchaseId' id='purchaseId' value={uuidv4()}/>
        <input type='hidden' name='purchaseProducts' id='purchaseProducts' value={course?.databaseId}/>
        <input type='hidden' name='totalPrice' id='totalPrice' value={course?.courseACF?.price}/>
        <label htmlFor='customerName'>Your Name</label>
        <input type='text' name='customerName' id='customerName' />
        <label htmlFor='customerEmail'>Your Email</label>
        <input type='text' name='customerEmail' id='customerEmail' />
        { error ? (
          <p className="error-message">{error.message}</p>
        ) : null }
        <button type="submit" disabled={loading}>
          {loading ? 'Saving data...' : 'Join now!'}
        </button>
        <PaypalBtn paypalDetails={paypalDetails} order={data?.createOrder} />
      </form>
    </div>
  )
}

export default Checkout

