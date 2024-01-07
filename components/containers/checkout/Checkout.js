import React, { useState, useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
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

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [nameMessage, setNameMessage] = useState('')

  const [createOrder, {data, loading, error}] = useMutation(CREATE_ORDER)
  const wasOrderCreated = Boolean(data?.createPurchaseOn?.purchaseCreated)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const validateEmail = (email) => {
    if (email.trim() === '') {
      return 'Email cannot be empty.';
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    return re.test(email.toLowerCase()) ? '' : 'Invalid email format.'
  }

  // Name validation function
  const validateName = (name) => {
    if (name.trim() === '') {
      return 'Name cannot be empty.'
    }

    if (/[^a-zA-Z -]/.test(name)) {
      return 'Name must not contain special characters.'
    }

    return ''
  }


  function handleSubmit(event) {
    event.preventDefault()
    const emailValidationResult = validateEmail(email)
    const nameValidationResult = validateName(name)

    setEmailMessage(emailValidationResult)
    setNameMessage(nameValidationResult)
    
    const data = new FormData(event.currentTarget)
    const values = Object.fromEntries(data)

    if (!emailValidationResult && !nameValidationResult) {
      createOrder({
        variables: values
      }).catch(error => {
        let err = error
      })
    }
  }


  return (
    <div className={`${theme === 'dark' ? styles.dark : styles.light} ${styles.checkout_wrapper} `}>
      <h1 className={styles.checkout_title}>
        <FontAwesomeIcon icon={faBolt} />
        Your Choice
      </h1>
      <div className={styles.checkout_details}>
        <h3 className={styles.checkout_course__title}>
          {course?.title}
        </h3>
        <p>Starts on: January 15th, 2024</p>
        <small>{course?.courseACF.shortDescription}</small>
        <p>Price: {course?.courseACF.price}$</p>
      </div>
      {!wasOrderCreated ? (
        <form method='post' className={styles.checkout_form} onSubmit={handleSubmit}>
          <input type='hidden' name='purchaseId' id='purchaseId' value={uuidv4()}/>
          <input type='hidden' name='purchaseProducts' id='purchaseProducts' value={course?.databaseId}/>
          <input type='hidden' name='totalPrice' id='totalPrice' value={course?.courseACF?.price}/>
          <label htmlFor='customerName'>Your Name</label>
          <input type='text' name='customerName' id='customerName' value={name} onChange={(e) => setName(e.target.value)} />
          <p> {nameMessage} </p>
          <label htmlFor='customerEmail'>Your Email</label>
          <input type='text' name='customerEmail' id='customerEmail' value={email} onChange={(e) => setEmail(e.target.value)} />
          <p> {emailMessage} </p>
          { error ? (
            <p className="error-message">{error.message}</p>
          ): null }
          <div className={styles.checkout_cta__wrapper}>
            <button type="submit" disabled={loading} className={styles.checkout_cta__button}>
              {loading ? 'Saving data...' : 'Join now!'}
            </button>
          </div>
        </form>
      ):(
        <PaypalBtn 
          paypalDetails={paypalDetails} 
          purchaseDetails={course} 
        /> 
      )}
    </div>
  )
}

export default Checkout

