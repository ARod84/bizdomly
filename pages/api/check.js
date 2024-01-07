import paypal from '@paypal/checkout-server-sdk'
import { OrdersCreateRequest } from '@paypal/checkout-server-sdk/lib/orders/lib'

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
const clientSecret = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret)
const client = new paypal.core.PayPalHttpClient(environment)

export default async function handler(req, res) {

  if (req.method === 'POST') {
    const body = JSON.parse(req.body)

      const request = new OrdersCreateRequest()
      request.requestBody({
          "intent": "CAPTURE",
          "purchase_units": [
            {
              "amount": {
                "currency_code": "USD",
                "value": body.price,
                "breakdown": {
                  "item_total": {
                    "currency_code": "USD",
                    "value": body.price,
                  }
                }
              },
              "items": [{
                "name": body.name,
                "description": "purchase",
                "quantity": "1",
                "unit_amount": {
                  "currency_code": "USD",
                  "value": body.price
                }
              }]
            }
          ]
        
      });

      try {
          const response = await client.execute(request);
          res.status(200).json({ id: response.result.id });
      } catch (error) {
          console.log('error', error)
          res.status(500).json({ error: 'Internal Server Error' });
      }
  } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

