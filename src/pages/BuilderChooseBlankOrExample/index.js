import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import BuilderHeader from '../../Components/BuilderWrapper/BuilderHeader/BuilderHeader';

export default function BuilderChooseBlankOrExample() {
  return (
    <div>
      <BuilderHeader builderData={{ length: 0 }} />
      <div className='BuilderChooseBlankOrExample'>
        <div className='BuilderChooseBlankOrExample_heading'>
          How will you like to get started?
        </div>
        <div className='BuilderChooseBlankOrExample_main'>
          <Link to='/builder'>
            <div className='blankTemplate'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                />
              </svg>
              Start with a Blank Template <br />
              Follow expert tips and guides
            </div>
          </Link>
          <Link to='/chooseTemplate'>
            <div className='resumeExample'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
              Choose Resume Template <br />
              Get started. Follow expert tips and examples.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
