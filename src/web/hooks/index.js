// import { loadStripe } from '@stripe/stripe-js'
// import { useMutation, gql } from '@redwoodjs/web'

// const [useCheckout] = useMutation(
//     gql`
//       mutation Checkout {
//         checkout() {
//           id
//         }
//       }
//     `
//   )

export const checkoutHandler = () => {
  console.log("oh hi!")
    
    // Create checkout session and return session id
  //   const {
  //       data: {
  //       checkout: { id },
  //       },
  //   } = await useCheckout()
  // console.log("====================================")
  // console.log(id)
  // console.log("====================================")

    // // Redirect user to Stripe Checkout page
    // const stripe = await loadStripe(process.env.STRIPE_PK)

    // await stripe.redirectToCheckout({
    // sessionId: id,
    // })
}