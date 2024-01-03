import paypal from '@paypal/checkout-server-sdk'
import { OrdersCreateRequest } from '@paypal/checkout-server-sdk/lib/orders/lib'
import { NextResponse } from 'next/server'

const clientId = 'ASi6-ZLj4ijv9ufSFAVQHEeRNO7ihWU2l46EcUbLtf0lfqFXEd5P0_HDOLN98AANe8aiV1xMAxOHM95x'
const clientSecret = 'EHdN5ZyQbufc_WAQ_Gn2gLlmSdUolMBKzRtYTwnabP379CM98GYHgqELHsXiy_afN-r-qcT-xUzMU_Zd'

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret)
const client = new paypal.core.PayPalHttpClient(environment)

/*export async function POST() {

  const request = new paypal.orders.OrdersCreateRequest()

  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "100.00",
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: "100.00",
            }
          }
        },
        items: [{
          name: "woo",
          description: "hola",
          quantity: "1",
          unit_amount: {
            currency_code: "USD",
            value: "100.00"
          }
        }]
      }
    ]
  })
  
  const response = await client.execute(request)

  return NextResponse.json({
    id: response.result.id
  })
}*/

export default async function handler(req, res) {

  if (req.method === 'POST') {
      const request = new OrdersCreateRequest();
      request.requestBody({
          "intent": "CAPTURE",
          "purchase_units": [
            {
              "amount": {
                "currency_code": "USD",
                "value": "100.00",
                "breakdown": {
                  "item_total": {
                    "currency_code": "USD",
                    "value": "100.00",
                  }
                }
              },
              "items": [{
                "name": "woo",
                "description": "hola",
                "quantity": "1",
                "unit_amount": {
                  "currency_code": "USD",
                  "value": "100.00"
                }
              }]
            }
          ]
        
      });

      try {
          const response = await client.execute(request);
          console.log(response)
          res.status(200).json({ id: response.result.id });
      } catch (error) {
          // Handle errors here
          console.log(error)

          res.status(500).json({ error: 'Internal Server Error guei' });
      }
  } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

