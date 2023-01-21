import React, { useState, useEffect, Suspense } from 'react';
import { Route } from 'react-router';
import HelmetMetaData from '../helpers/HelmetMetaData';
import jwt from 'jsonwebtoken';
import { BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from './../pages/LandingPage';
import Landingpage from './../pages/LandingPage/landingPage';
import Login from './../pages/Login/index';
import Signup from './../pages/Signup/index';
import ForgotPassword from './../pages/ForgotPassword/index';
import UpdatePassword from './../pages/UpdatePassword/index';
import EmailLink from './../pages/EmailLink/index';
import Profile from './../pages/Profile/index';
import ProfileDashboard from '../pages/ProfileDashboard/index';
import ProfileResume from '../pages/ProfileResume/index';
import ProfileUpdatePassword from '../pages/ProfileUpdatePassword/index';
import Builder from './../pages/Builder/index';
import BuilderChooseBlankOrExample from './../pages/BuilderChooseBlankOrExample/index';
import VerifyEmail from './../pages/VerifyEmail/index';
import ChooseTemplate from './../pages/ChooseTemplate/index';
import BuilderViewOnly from './../pages/BuilderViewOnly/index';

import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

import { get_account_by_id, get_resume_by_userId } from '../API/index';

axios.defaults.baseURL = 'https://resumix-backend.onrender.com';
// axios.defaults.baseURL = 'http://localhost:4000';

const Navigation = ({ tokenValidation }) => {
  const userId = localStorage.getItem('id');
  const jwtToken = localStorage.getItem('jwtToken');

  const [userData, setUserData] = useState(false);
  console.log(userData);
  const [userResumes, setUserResumes] = useState([]);

  const [userLoggedIn, setUserLoggedIn] = useState(
    tokenValidation ? true : false
  );

  useEffect(() => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + jwtToken,
      },
    };

    // COMMENT for temprory error. UN COMMENT IT

    userId &&
      get_account_by_id(userId, config).then((res) => {
        // // console.log(res);
        if (res === 'Unauthorized') {
          setUserLoggedIn(false);
        } else if (res.status === 200 || res.status === 304) {
          setUserData(res.data);
          setUserLoggedIn(true);
        }
      });

    userId &&
      get_resume_by_userId(userId, config).then((res) => {
        if (res.status === 200 || res.status === 304) {
          setUserResumes(res.data);
        } else {
          console.log(res);
        }
      });
  }, []);

  // // console.log(userData);

  const loading = (
    <div className='builder_loaderWrapper fallback_loader'>
      <ThreeDots wrapperClass='builder_loader ' />
    </div>
  );

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <HelmetMetaData></HelmetMetaData>
        <Switch>
          <Route exact path='/signup'>
            <Signup userLoggedIn={userLoggedIn} />{' '}
          </Route>
          <Route exact path='/login/:userEmail?'>
            <Login
              userData={userData}
              setUserData={setUserData}
              userLoggedIn={userLoggedIn}
              setUserLoggedIn={setUserLoggedIn}
            />{' '}
          </Route>
          <Route exact path='/forgot' component={ForgotPassword} />
          <Route exact path='/account/reset-password:token?'>
            <UpdatePassword />{' '}
          </Route>
          <Route exact path='/emailLink' component={EmailLink} />
          <Route exact path='/profile'>
            <Profile
              userLoggedIn={userLoggedIn}
              userData={userData}
              setUserData={setUserData}
            />
          </Route>
          <Route exact path='/profile/dashboard'>
            <ProfileDashboard userLoggedIn={userLoggedIn} userData={userData} />
          </Route>
          <Route exact path='/profile/resume'>
            <ProfileResume
              userLoggedIn={userLoggedIn}
              userData={userData}
              userResumes={userResumes}
            />
          </Route>
          {/* <Route exact path='/profile/linkedIn_headline'>
            <ProfileLinkedInHeadline
              userLoggedIn={userLoggedIn}
              userData={userData}
            />
          </Route>
          <Route exact path='/profile/linkedIn_summary'>
            <ProfileLinkedInSummary
              userLoggedIn={userLoggedIn}
              userData={userData}
              // userCoverLetters={userCoverLetters}
            />
          </Route>
          <Route exact path='/profile/cover_letter'>
            <ProfileCoverLetter
              userLoggedIn={userLoggedIn}
              userData={userData}
            />
          </Route> */}
          <Route exact path='/profile/update_password'>
            <ProfileUpdatePassword
              userLoggedIn={userLoggedIn}
              userData={userData}
            />
          </Route>
          {/* <Route exact path='/subscription'>
            <Subscription userLoggedIn={userLoggedIn} userData={userData} />
          </Route> */}
          <Route exact path='/builder/:chosenTemplate?/:resumeId?'>
            <Builder
              setUserLoggedIn={setUserLoggedIn}
              userLoggedIn={userLoggedIn}
              userData={userData}
            />{' '}
          </Route>
          <Route exact path='/builder_view/:chosenTemplate?/:resumeId?/:share?'>
            <BuilderViewOnly
              setUserLoggedIn={setUserLoggedIn}
              userLoggedIn={userLoggedIn}
              userData={userData}
            />{' '}
          </Route>
          <Route
            exact
            path='/builderChooseBlankOrExample'
            component={BuilderChooseBlankOrExample}
          />

          <Route exact path='/chooseTemplate' component={ChooseTemplate} />
          {/*<Route
            exact
            path='/account/verify-email:token?'
            component={VerifyEmail}
          />
          <Route exact path='/category' component={Category} />
          <Route exact path='/design/:category?' component={Design} />
          <Route exact path='/CoverLetter/:category?/:design?/:coverLetterId?'>
            <CoverLetter
              setUserLoggedIn={setUserLoggedIn}
              userLoggedIn={userLoggedIn}
              userData={userData}
            />
          </Route>
          <Route
            exact
            path='/CoverLetter_view/:category?/:design?/:coverLetterId?/:share?'
          >
            <CoverLetterViewOnly
              setUserLoggedIn={setUserLoggedIn}
              userLoggedIn={userLoggedIn}
              userData={userData}
            />
          </Route>
          <Route exact path='/linkedIn/:id?/:summaryId?'>
            <LinkedIn
              setUserLoggedIn={setUserLoggedIn}
              userLoggedIn={userLoggedIn}
              userData={userData}
            />
          </Route>
          <Route exact path='/linkedIn_view/:id?/:summaryId?/:share?'>
            <LinkedInSummaryViewOnly
              setUserLoggedIn={setUserLoggedIn}
              userLoggedIn={userLoggedIn}
              userData={userData}
            />
          </Route>
          <Route exact path='/linkedIn_headline/:headlineId?'>
            <LinkedInHeadline
              setUserLoggedIn={setUserLoggedIn}
              userLoggedIn={userLoggedIn}
              userData={userData}
            />
          </Route> */}
          {/* <Route exact path='/linkedIn_headline/:headingId?/:headlineId?'>
            <LinkedInHeadline
              setUserLoggedIn={setUserLoggedIn}
              userLoggedIn={userLoggedIn}
              userData={userData}
            />
          </Route>
          <Route
            exact
            path='/linkedIn_headline_view/:headingId?/:headlineId?/:share?'
          >
            <LinkedInHeadlineViewOnly
              setUserLoggedIn={setUserLoggedIn}
              userLoggedIn={userLoggedIn}
              userData={userData}
            />
          </Route> */}
          {/* <Route exact path="/:userEmail?"> <Login userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} /> </Route> */}
          <Route path='/resume-builder' component={Landingpage} />
          {/* <Route exact path='/admin/:page?/:id?'>
            <AdminLayout userLoggedIn={userLoggedIn} userData={userData} />
          </Route>
          <Route exact path='/select-bundle'>
            <Pricing userData={userData} />
          </Route>
          <Route exact path='/select-bundle/:subscriptionId'>
            <Pricing userData={userData} />
          </Route>
          <Route exact path='/subscribe'>
            <Subscribe userData={userData} />
          </Route> */}
          {/* <Route exact path='/stripe-account'>
            <StripeAccounts />
          </Route> */}
          {/* <Route exact path='/admin/Linkedin' component={Linkedin} /> */}

          {/* <Route exact path='/' component={LandingPage} /> */}
          <Route exact path='/' component={Landingpage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Navigation;
