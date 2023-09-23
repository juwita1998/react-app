import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
 import { NextResponse } from 'next/server';

export   async function POST(request) {
      const body = await request.json()
      // console.log(body)

      try {
        const params = {
          submit_type: 'pay',
          mode: 'payment',
          payment_method_types: ['card'],
          billing_address_collection: 'auto',
          shipping_options: [
            { shipping_rate: 'shr_1Nt1QwGzcKvg1PIHGp2FqKF3' },
          ],
          line_items: body.map((item) => {
            const img = item.image[0].asset._ref;
           
            const newImage = img.replace('image-','https://cdn.sanity.io/images/xs71viuy/agus-ecomerce/').replace('-jpg','.jpg')
  
            return {
              price_data: { 
                currency: 'usd',
                product_data: { 
                  name: item.name,
                  images: [newImage],
                },
                unit_amount: item.price * 100,
              },
              adjustable_quantity: {
                enabled:true,
                minimum: 1,
              },
              quantity: item.quantity
            }
          }),
         success_url: `${request.headers.get('origin')}/success`,
          cancel_url: `${request.headers.get('origin')}/?canceled=true`,
        }
        const session = await stripe.checkout.sessions.create(params);  
        // Create Checkout Sessions from body params.
       
        return NextResponse.json({session})
        res.redirect(303, session.url);
      } catch (err) {
        return NextResponse.json(err.message)
       
      }

   
//  


  // if (request.method === 'POST') {
  //   try {
  //     console.log(request.body)

  //       const params ={
  //            submit_type:'pay',
  //            mode:'payment',
  //            payment_method_types:['card'],
  //            billing_address_collection:'auto',
  //            shipping_options:[
  //                   {shipping_rates:'shr_1Nsg5rGzcKvg1PIHBDQw3aYj'},
  //                   {shipping_rates:'shr_1Nsg87GzcKvg1PIHKPztQD5L'}
  //            ],
  //           line_items: [
  //             {
  //               // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //               price: '{{PRICE_ID}}',
  //               quantity: 1,
  //             },
  //           ],
  //           mode: 'payment',
  //           success_url: `${request.headers.get('origin')}/?success=true`,
  //           cancel_url: `${request.headers.get('origin')}/?canceled=true`,
  //         }
  //     // Create Checkout Sessions from body params.
  //     const session = await stripe.checkout.sessions.create(params);
  //     return NextResponse.json({session});
  //   } catch (err) {
  //     console.error('Error:', err);

  //     // Set the status code and send a JSON error response
  //     return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  //   }
  // } else {
  //   // Return a 405 Method Not Allowed response
  //   return NextResponse.text('Method Not Allowed', { status: 405 });
  // }
}