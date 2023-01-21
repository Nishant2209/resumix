import React from 'react';
import { Link } from 'react-router-dom';

export default function Landingpage() {
  return (
    <div className='App'>
      <div className='landingPge_logo'>
        <img src='/assets/images/logo.png' alt='logo' />
      </div>

      <div className='landingPge_heading'>Let's Get Started</div>

      <div className='landingPge_hero'>
        <div className='landingPge_img'>
          <img
            src='/assets/images/landing.png'
            alt='landingPage'
            style={{ margin: '1rem 0' }}
          />
        </div>
        <div className='landingPge_mainText'>
          <div>
            <h5>Choose</h5>
            <p>
              Browse over 40 professional resume templates ─ or create your own
              with a blank template.
            </p>
          </div>
          <div>
            <h5>Create Your Resume</h5>
            <p>
              No more writer's block! Get inspired with 55,000+ examples,
              profile summaries, bullet points, hard/soft skills, and expert
              tips.
            </p>
          </div>
          <div>
            <h5>Download ─ Print</h5>
            <p>Download your resume as a .txt or PDF file or print it.</p>
          </div>
          <div>
            <h5>The Final Touch!</h5>
            <p>
              Want the best resume ever? Our Premium Resume Editing team can
              proofread, edit, and improve your resume.
            </p>
          </div>
        </div>
      </div>

      <div className='landingPge_divider'>
        <div></div>
      </div>

      <div className='landingPge_btn'>
        <Link to='/chooseTemplate'>
          <button>Get Started on Resume Builder</button>
        </Link>
      </div>
      <div className='landingPge_terms'>
        <p>
          By clicking 'Get Started', you agree to our{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://cvjury.com/terms-and-conditions/'
          >
            Terms and Conditions{' '}
          </a>{' '}
          and{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://cvjury.com/privacy-policy/'
          >
            Privacy Policy
          </a>
          .{' '}
        </p>
      </div>
    </div>
  );
}
