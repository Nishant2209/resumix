import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';

import {
  register,
  register_social,
  resend_email,
  create_stripe_customer,
} from '../../API/index';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Signup({ userLoggedIn }) {
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [revealPwd, setRevealPwd] = useState(false);
  const [notRobot, setNotRobot] = useState(false);
  const [message, setMessage] = useState({ message: true, type: '' });
  // // console.log(userLoggedIn)

  const [type, setType] = useState('');
  // console.log(type)

  const main_data = useRef(null);
  const bar = useRef(null);
  const regSuccess = useRef(null);

  const data = {
    title: 'Mr',
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: pwd,
    confirmPassword: pwd,
    acceptTerms: true,
    notRobot: notRobot,
  };

  const model = (message) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='notaRobotModel'>
            {/* <div> */}
            {/* <h1>Are you sure?</h1> */}
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
            {/* </div> */}
          </div>
        );
      },
    });
  };

  const RegSuccessModel = (message) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='notaRobotModel regSuccessModel'>
            {/* <div> */}
            {/* <h1>Are you sure?</h1> */}
            <p>{message}</p>
            <button
              onClick={() => {
                onClose();
                history.push(`/login/${email}`);
              }}
            >
              Close
            </button>
            {/* </div> */}
          </div>
        );
      },
    });
  };

  const handleRegister = async (e) => {
    if (firstName !== '' && lastName !== '' && email !== '' && pwd !== '') {
      setMessage({ message: false, type: '' });

      register({ ...data }).then((resp) => {
        if (resp.status === 200) {
          setMessage({ message: resp.data.message, type: 'success' });
        } else {
          // // console.log(res)
          setMessage({ message: resp, type: 'error' });
        }
      });

      setTimeout(() => {
        main_data.current.style.display = 'none';
      }, 1000);
      setTimeout(() => {
        bar.current.style.display = 'block';
        bar.current.classList.add('expandBar');
      }, 2000);
      setTimeout(() => {
        bar.current.classList.add('expandBarAgain');
      }, 3000);
      setTimeout(() => {
        bar.current.style.display = 'none';
        regSuccess.current.style.display = 'flex';
      }, 4000);
    } else if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      pwd === ''
    ) {
      setMessage({ message: 'Fill the feilds', type: 'error' });
    }
  };

  const handleResend = (e) => {
    // // console.log(email)
    setMessage({ message: false, type: '' });

    resend_email(email).then((res) => {
      // // console.log(res)
      if (res.status === 200) {
        setMessage({ message: res.data.message, type: 'success' });
      }
    });
  };

  return userLoggedIn ? (
    // <div>Logged in</div>
    <Redirect to='/builder' /> //profile
  ) : (
    <div className='app'>
      <div className='resumeVector_login_left'>
        {/* <img src={graphic1} alt='graphic1' /> */}
        <img
          src='/assets/images/character_1.png'
          alt='graphic1'
          style={{ maxWidth: '400px' }}
        />
      </div>
      <div className='resumeVector_login_right' style={{ width: 'auto' }}>
        <img
          src='/assets/images/character_2.png'
          alt='graphic2'
          style={{ maxWidth: '400px', transform: 'scaleX(-1)' }}
        />
      </div>
      <div style={{ margin: '3rem' }} className=''>
        <img src='/assets/images/logo.png' alt='logo' />
      </div>
      <div className='hero_signup'>
        {/* <div className='logo'>
          <img src="/assets/images/logo.png" alt="logo" />
        </div> */}
        <div className='main'>
          <div ref={main_data}>
            <div className='main_header'>
              <div className='main_header_left'>
                <div>
                  <Link to='/login' className='main_login'>
                    Login
                  </Link>
                </div>
                <div>
                  <Link to='/signup' className='main_signup'>
                    Sign up
                  </Link>
                  <div className='main_header_active'></div>
                </div>
              </div>
              <div className={message.type === 'success' ? 'success' : 'error'}>
                <p>{message.message || <Skeleton className={'loader'} />}</p>
              </div>
            </div>
            <div className='name'>
              <input
                id='firstName'
                className='firstName'
                type='text'
                placeholder='first name'
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                id='lastName'
                className='lastName'
                type='text'
                placeholder='last name'
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              id='email'
              className='email'
              type='email'
              placeholder='john@example.com'
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='pwd_container'>
              <input
                id='password'
                className='password'
                type={revealPwd ? 'text' : 'password'}
                placeholder='Enter password'
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='pwd_eye'
                viewBox='0 0 20 20'
                fill='currentColor'
                title={revealPwd ? 'Show password' : 'Hide password'}
                onClick={() => setRevealPwd((show) => !show)}
                style={{ fill: revealPwd ? '#195190ff' : 'currentcolor' }}
              >
                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                <path
                  fillRule='evenodd'
                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>

            <button className='btn_register' onClick={handleRegister}>
              Register
            </button>
          </div>

          <div ref={bar} className='mail_footer_only'></div>
          <div ref={regSuccess} className='mailSuccess mailSuccess_signup'>
            <div className='reg_success_img'>
              <img
                className='mailSuccess_img'
                src='/assets/images/successful.png'
                alt='mailSended'
              />
            </div>

            <p className='mailSuccess_signUp'>
              {message.message || <Skeleton className={'loader_signUp'} />}
            </p>
            <div className='singnUp_links'>
              <Link to='/login' className='backToLogin'>
                Back to Login?
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
