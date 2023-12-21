import React from 'react'
import styles from './PaypalBtn.module.scss'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

const PaypalBtn = ({ paypalDetails, order }) => {

  const createPaypalOrder = () => {
    console.log(order)
    return order
  }

  return (
    <PayPalScriptProvider 
      options={{
        clientId: paypalDetails?.paypalClientID
      }}>
        <PayPalButtons 
          style={{
            color: 'black',
            layout: 'horizontal',
          }}
          createOrder={createPaypalOrder}
        />
    </PayPalScriptProvider>
  )
}

export default PaypalBtn