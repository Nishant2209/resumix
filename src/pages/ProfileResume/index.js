import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import ProfileHeader from '../../Components/Profile/ProfileHeader';
import { ThreeDots } from 'react-loader-spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import ProfileSidebar from '../../Components/Profile/ProfileSidebar';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import graphic1 from '../../Assets/svg/Build-Your-Resume-With-Confidencee.svg';

import { delete_resume, get_resume_by_userId } from '../../API/index';

export default function ProfileResume({ userLoggedIn, userData, userResumes }) {
  const getPageData = JSON.parse(localStorage.getItem('pageData'));
  const userId = localStorage.getItem('id');
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  // const [pageData, setPageData] = useState(
  //   getPageData?.type === 'resume' && getPageData
  // );
  const [resumes, setResumes] = useState(false);

  useEffect(() => {
    get_resume_by_userId(userId).then((res) => {
      if (res.status === 200 || res.status === 304) {
        setResumes(
          res.data.map((userResume) => ({
            ...userResume,
            documentData: JSON.parse(userResume.documentData),
          }))
        );
        console.log(resumes);
      } else if (res === 'Resume not found') {
        setResumes([]);
      }
    });
  }, []);
  // const getAllResumes = userResumes.map((userResume) => ({
  //   ...userResume,
  //   documentData: JSON.parse(userResume.documentData),
  // }));
  // console.log(resumes.map((pageData) => pageData));

  const deleteResume = (id) => {
    setLoading(true);
    // console.log(id);
    delete_resume(id).then((res) => {
      if (res.status === 200 || res.status === 304) {
        console.log('deleted successfully');
        console.log(res);
        get_resume_by_userId(userId).then((resp) => {
          if (resp.status === 200 || resp.status === 304) {
            setLoading(false);
            setShowDeleteToast(true);
            setResumes(
              resp.data.map((userResume) => ({
                ...userResume,
                documentData: JSON.parse(userResume.documentData),
              }))
            );
            console.log(resumes);
          } else if (res === 'Resume not found') {
            setLoading(false);
            setResumes([]);
          }
        });
      } else {
        console.log(res);
      }
    });
  };

  const delete_Modal = (id, resume_name) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            style={{ width: '280px', height: '180px' }}
            className='custom-ui delete_modal'
          >
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Are you sure you want to delete the Resume {resume_name} ?
              </p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  deleteResume(id);
                  onClose();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        );
      },
    });
  };
  console.log(resumes);

  return userLoggedIn ? (
    <div className='profile'>
      <ProfileHeader userLoggedIn={userLoggedIn} userData={userData} />
      <div className='profile_main'>
        <ProfileSidebar
          page={'resume'}
          userLoggedIn={userLoggedIn}
          userData={userData}
        />
        {loading && (
          <div
            className='builder_loaderWrapper'
            style={{ position: 'absolute' }}
          >
            <ThreeDots
              style={{ top: '3rem' }}
              wrapperClass='builder_loader builder_profile_loader'
            />
          </div>
        )}
        <ToastContainer
          style={{ width: '210px', top: '3.5rem' }}
          className='p-3 save_toast'
          position={'top-center'}
        >
          <Toast
            onClose={() => setShowDeleteToast(false)}
            show={showDeleteToast}
            delay={3000}
            autohide
          >
            <Toast.Body>Deleted Successfully!</Toast.Body>
          </Toast>
        </ToastContainer>
        <div style={{ flexWrap: 'nowrap' }} className='profile_hero_resume'>
          <div className='profile_header'>
            <div className='profile_toast'>My Resumes</div>
            <Link to={'/builderChooseBlankOrExample'} className='go_to_builder'>
              <img
                src='/assets/images/resume_profile.png'
                alt='resume_profile'
              />
              Create New Resume
            </Link>
          </div>
          {!resumes ? (
            <Skeleton />
          ) : resumes.length !== 0 ? (
            <div className='profile_container'>
              <table>
                <thead>
                  <td>Image</td>
                  <td>Resume Name</td>
                  <td>Created On</td>
                  <td>Last Modified</td>
                  <td>Action</td>
                </thead>
                <tbody>
                  {resumes
                    .sort((a, b) => a.created < b.created)
                    .map(({ documentData, ...pageData }) => (
                      <tr id={pageData.id}>
                        <td>
                          <img
                            src={`/assets/images/Templates/${documentData.templateName}.png`}
                            alt={documentData.templateName}
                          />
                        </td>
                        <td>{documentData.document_name}</td>
                        <td>{documentData.date}</td>
                        <td>{documentData.date}</td>
                        <td>
                          <svg
                            onClick={() =>
                              history.push(
                                `/builder/${documentData.templateName}/${pageData.id}`
                              )
                            }
                            viewBox='0 0 24 24'
                            fill='#fff'
                            stroke='1.1'
                          >
                            <path d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z' />
                          </svg>
                          <a
                            href={`/builder_view/${documentData.templateName}/${pageData.id}`}
                            target='_blank'
                            rel='noreferrer'
                          >
                            <svg
                              // onClick={() =>history.push(`/builder_view/${documentData.templateName}/${pageData.id}`)}
                              x='0px'
                              y='0px'
                              viewBox='0 0 490 490'
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d='M245,0c-9.5,0-17.2,7.7-17.2,17.2v331.2L169,289.6c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l88.1,88.1
                            c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l88.1-88.1c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L262,348.4V17.1
                            C262.1,7.6,254.5,0,245,0z'
                                    />
                                    <path
                                      d='M462.1,472.9v-99.7c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v82.6H62.2v-82.6c0-9.5-7.7-17.2-17.1-17.2
                            s-17.2,7.7-17.2,17.2v99.7c0,9.5,7.7,17.1,17.2,17.1h399.8C454.4,490,462.1,482.4,462.1,472.9z'
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                          <svg
                            onClick={() => {
                              delete_Modal(
                                pageData.id,
                                documentData.document_name
                              );
                            }}
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='#fff'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                            />
                          </svg>
                        </td>
                      </tr>
                    ))}
                  <tr style={{ display: 'none' }}>
                    <td>
                      <img
                        src='/assets/images/Templates/template_1.png'
                        alt='template_1'
                      />
                    </td>
                    <td>Lorem Ipsum is simply</td>
                    <td>20 - Aug 2021</td>
                    <td>20 - Aug 2021</td>
                    <td>
                      <svg x='0px' y='0px' viewBox='0 0 490 490'>
                        <g>
                          <g>
                            <g>
                              <path
                                d='M245,0c-9.5,0-17.2,7.7-17.2,17.2v331.2L169,289.6c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l88.1,88.1
                          c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l88.1-88.1c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L262,348.4V17.1
                          C262.1,7.6,254.5,0,245,0z'
                              />
                              <path
                                d='M462.1,472.9v-99.7c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v82.6H62.2v-82.6c0-9.5-7.7-17.2-17.1-17.2
                          s-17.2,7.7-17.2,17.2v99.7c0,9.5,7.7,17.1,17.2,17.1h399.8C454.4,490,462.1,482.4,462.1,472.9z'
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <svg
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='#fff'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr style={{ display: 'none' }}>
                    <td>
                      <img
                        src='/assets/images/Templates/template_1.png'
                        alt='template_1'
                      />
                    </td>
                    <td>Lorem Ipsum is simply</td>
                    <td>20 - Aug 2021</td>
                    <td>20 - Aug 2021</td>
                    <td>
                      <svg x='0px' y='0px' viewBox='0 0 490 490'>
                        <g>
                          <g>
                            <g>
                              <path
                                d='M245,0c-9.5,0-17.2,7.7-17.2,17.2v331.2L169,289.6c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l88.1,88.1
                          c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l88.1-88.1c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L262,348.4V17.1
                          C262.1,7.6,254.5,0,245,0z'
                              />
                              <path
                                d='M462.1,472.9v-99.7c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v82.6H62.2v-82.6c0-9.5-7.7-17.2-17.1-17.2
                          s-17.2,7.7-17.2,17.2v99.7c0,9.5,7.7,17.1,17.2,17.1h399.8C454.4,490,462.1,482.4,462.1,472.9z'
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <svg
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='#fff'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div
              to='/builderChooseBlankOrExample'
              className='create_new'
              onClick={() => history.push('/builderChooseBlankOrExample')}
              style={{ cursor: 'pointer' }}
            >
              {/* <img src={graphic1} alt='create new resume' /> */}
              <img
                style={{ maxWidth: '150%' }}
                src='/assets/images/no_resume_yet.png'
                alt='create new linkedin resume'
              />
              {/* No Resumes Yet? <br /> Create New Resume */}
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Redirect to='/login' />
  );
}
