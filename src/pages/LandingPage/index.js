import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [mins, setMins] = useState('');
  const [sec, setSec] = useState('');
  const [displayDate, setDisplayDate] = useState('');

  useEffect(() => {
    let countDownDate = new Date('Oct 12, 2021 16:00:00').getTime();

    // Update the count down every 1 second
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      // + minutes + "m " + seconds + "s ";
      setDays(days);
      setHours(hours);
      setMins(minutes);
      setSec(seconds);

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        setDisplayDate('EXPIRED');
        //document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  });

  return (
    <div
      className='App'
      style={{ backgroundImage: "url('/assets/images/bg1.jpg')" }}
    >
      {/* Delete this, just for now */}

      <h1 className='text-center text-white displayTitle'>
        <img src='/assets/images/logo.png' alt='Logo' className='logoCls' />{' '}
        <br />
      </h1>
      <div className='buttons'>
        <Link to='/resume-builder'> Home</Link>
        <Link to='/login'> Login </Link>
        <Link to='/account/reset-password'> UpdatePassword </Link>
        <Link to='/emailLink'> EmailLink </Link>
        <Link to='/profile/resume'> Resume </Link>
        <Link to='/subscription'> Subscription</Link>
        <Link to='/select-bundle'> Pricing</Link>
        <Link to='/builderChooseBlankOrExample'> Builder</Link>
        <Link to='/category'> Cover Letters</Link>
        <Link to='/linkedIn'>LinkedIn Summary</Link>
        <Link to='/linkedIn_headline'>LinkedIn Headline</Link>
        <Link to='/admin/linkedIn'>Admin-LinkedIn</Link>
      </div>
      {/* <h6 className="text-center text-white">Stay tuned for something amazing</h6>
        <div className="displayTime">
          
              <p className="designBoxCls"><p className="designTextCls">{days}<p className="subText">days</p></p></p>
              <p className="designBoxCls"><p className="designTextCls">{hours}<p className="subText">hours</p></p></p>
              <p className="designBoxCls"><p className="designTextCls">{mins}<p className="subText">minutes</p></p></p>
              <p className="designBoxCls"><p className="designTextCls">{sec}<p className="subText">seconds</p></p></p>
        </div> */}
    </div>
  );
}

export default LandingPage;
