import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { withRouter } from 'react-router-dom';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Redirect } from 'react-router-dom';
import { getPriceyId } from '../../API/index';
import CheckoutForm from '../Stripe/CheckoutForm/checkoutForm';

const stripePromise = loadStripe('pk_test_RJgWhGMxoH382zC7NjEm7D7H001Z6jEqhN');

const SubscribeWrapper = (props) => (
  <Elements stripe={stripePromise}>
    <Subscribe {...props} />
  </Elements>
);

const Subscribe = ({ location }) => {
  // console.log(location);
  // Get the lookup key for the price from the previous page redirect.
  const [clientSecret] = useState(location?.state?.clientSecret);
  const [subscriptionId] = useState(location?.state?.subscriptionId);
  const [name, setName] = useState('Jenny Rosen');
  const [messages, _setMessages] = useState('');
  const [paymentIntent, setPaymentIntent] = useState();
  const [priceInfo, setPriceInfo] = useState();
  console.log(priceInfo);

  useEffect(() => {
    getPriceyId(location?.state?.priceId).then((res) => {
      // console.log(res);
      if (res.status === 200) {
        setPriceInfo(res.data.price);
      }
    });
  }, []);

  // helper for displaying status messages.
  const setMessage = (message) => {
    _setMessages(`${messages}\n\n${message}`);
  };

  // Initialize an instance of stripe.
  const stripe = useStripe();
  const elements = useElements();

  if (!stripe || !elements) {
    // Stripe.js has not loaded yet. Make sure to disable
    // form submission until Stripe.js has loaded.
    return '';
  }

  const options = {
    // passing the client secret obtained in step 2
    clientSecret: clientSecret,
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
      labels: 'floating',
    },
  };

  // When the subscribe-form is submitted we do a few things:
  //
  //   1. Tokenize the payment method
  //   2. Create the subscription
  //   3. Handle any next actions like 3D Secure that are required for SCA.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use card Element to tokenize payment details
    let { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: name,
          },
        },
      }
    );

    if (error) {
      // show error and collect new card details.
      setMessage(error.message);
      return;
    }
    setPaymentIntent(paymentIntent);
  };

  if (paymentIntent && paymentIntent.status === 'succeeded') {
    return <Redirect to={{ pathname: '/subscription' }} />;
  }

  return (
    <div className='pricing'>
      <div className='pricing_header'>
        <div className='pricing_logo'>
          <img src='/assets/images/logo.png' alt='cv_jury' />
        </div>
        <div className='pricing_step'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
            width={35}
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
              clipRule='evenodd'
            />
          </svg>
          Build
        </div>
        <div className='pricing_step '>
          <div className='step_no'>2</div>
          Select Bundle
        </div>
        <div className='pricing_step pricing_step_active'>
          <div className='step_no'>3</div>
          Payment Details
        </div>
        <div className='pricing_step'>
          <div className='step_no'>4</div>
          Download
        </div>
      </div>

      <div className='subscribe_body'>
        <div className='pricing_plan'>
          <div className='pricing_cards' style={{ width: '60%' }}>
            {priceInfo?.product.name === 'Silver' ? (
              <div className=' pricing_card silver'>
                <div>
                  <div className='pricing_title'>{priceInfo?.product.name}</div>
                  <div className='pricing_descp'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 resume/CV templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 matching cover letter templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Circa 55,000 pre-written content
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn summary Generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn headline generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Resume/CV/Job Description Scanner
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      14 downloads ─ Pdf, Word, txt
                    </div>
                  </div>
                </div>
                <div>
                  <div className='amount'>
                    ₤{priceInfo?.unit_amount / 100} <br />
                    <span>7-Day Trial</span>
                  </div>
                  <div className='action_btn'>
                    <button>Continue</button>
                  </div>
                </div>
              </div>
            ) : priceInfo?.product.name === 'Gold' ? (
              <div className=' pricing_card gold'>
                <div>
                  <div className='pricing_title'>{priceInfo?.product.name}</div>
                  <div className='pricing_descp'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 resume/CV templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 matching cover letter templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Circa 55,000 pre-written content
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn summary Generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn headline generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Resume/CV/Job Description Scanner
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Unlimited downloads ─ Pdf, Word, txt
                    </div>
                  </div>
                </div>
                <div>
                  <div className='amount'>
                    ₤{priceInfo?.unit_amount / 100} <br />
                    <span>Monthly</span>
                  </div>
                  <div className='action_btn'>
                    <button>Continue</button>
                  </div>
                </div>
              </div>
            ) : priceInfo?.product.name === 'Platinum' ? (
              <div className=' pricing_card platinum'>
                <div>
                  <div className='pricing_title'>{priceInfo?.product.name}</div>
                  <div className='pricing_descp'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 resume/CV templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 matching cover letter templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Circa 55,000 pre-written content
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn summary Generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn headline generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Resume/CV/Job Description Scanner
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Unlimited downloads ─ Pdf, Word, txt
                    </div>
                  </div>
                </div>
                <div>
                  <div className='amount'>
                    ₤{priceInfo?.unit_amount / 100} <br />
                    <span>Quarterly</span>
                  </div>
                  <div className='action_btn'>
                    <button>Continue</button>
                  </div>
                </div>
              </div>
            ) : priceInfo?.product.name === 'Diamond' ? (
              <div className=' pricing_card diamond'>
                <div>
                  <div className='pricing_title'>{priceInfo?.product.name}</div>
                  <div className='pricing_descp'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 resume/CV templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 matching cover letter templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Circa 55,000 pre-written content
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn summary Generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn headline generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Resume/CV/Job Description Scanner
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Unlimited downloads ─ Pdf, Word, txt
                    </div>
                  </div>
                </div>
                <div>
                  <div className='amount'>
                    ₤{priceInfo?.unit_amount / 100} <br />
                    <span>Annually</span>
                  </div>
                  <div className='action_btn'>
                    {/* <button>Continue</button> */}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className='product_payment'>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
          {/* <form onSubmit={handleSubmit}>
            <label>
              Full name
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <CardElement />

            <button>Subscribe</button>

            <div>{messages}</div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default withRouter(SubscribeWrapper);
