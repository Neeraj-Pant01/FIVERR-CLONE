import './payments.scss'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from 'react';
import makeApiRequest from '../../utils/newRequest';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../../components/checkout/CheckoutForm';
import { useSelector } from 'react-redux';

const stripePromise = loadStripe("pk_test_51NzZBFSBvwghmPr5z8Fhx6AhlpggOhAPZdMJVtKcm3pT4bt3dRwpEXdlnknlcXq14lFG1aq5SXfSwBg9LzkwkLmJ00z05MEczC");

const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");
  const token =useSelector((user)=>user.user.currentUser.accesstoken)
    const api = makeApiRequest(token)

  const {id} = useParams()

    useEffect(()=>{
        const makePaymentRequest = async (req,res,next) =>{
            try{
                const response = await api.post(`/orders//create-payment-intent/${id}`)
                setClientSecret(response.data.clientSecret)
            }catch(err){
                next(err)
            }
        }
        makePaymentRequest()
    },[])

    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };
    
  return (
    <div className='pay'>
            {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default Pay
