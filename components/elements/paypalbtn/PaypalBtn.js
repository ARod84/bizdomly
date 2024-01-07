import React, { useState } from 'react'
import styles from './PaypalBtn.module.scss'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

const PaypalBtn = ({ 
  paypalDetails,
  purchaseDetails
}) => {
  const [approve, setApprove] = useState(null)
  const createPaypalOrder = async () => {
    const res = await fetch('/api/check', {
      method: 'POST',
      body: JSON.stringify({
        price: purchaseDetails.courseACF.price, 
        name: purchaseDetails.title,
        description: purchaseDetails.databaseId
      })
    })
    const order = await res.json()
    return order.id
  }

  const handleApprove = (data, actions) => {
    actions.order.capture()
    setApprove(data?.orderID)
  }

  return (
    <PayPalScriptProvider 
      options={{
        clientId: paypalDetails?.paypalClientID
      }}>
      {!approve ? (
      <React.Fragment>
        <h3>Complete your order on PayPal</h3>
        <PayPalButtons 
          style={{
            color: 'black',
            layout: 'horizontal',
            shape: 'rect',
            tagline: 'false',
            height: 40
          }}
          createOrder={createPaypalOrder}
          onApprove={handleApprove}
          className={styles.paypal_btn}
        />
      </React.Fragment>
      ):(
        <p className={styles.approved_text}>
          Your order is complete, we will email you soon with your course details.
        </p>
      )}
    </PayPalScriptProvider>
  )
}

export default PaypalBtn