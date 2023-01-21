import React, { useState, lazy } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';
import Sidebar from '../../Components/Admin/Sidebar/Sidebar';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ProfileHeader from '../../Components/Profile/ProfileHeader';
export default function AdminLayout({ userLoggedIn, userData }) {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { page } = useParams();
  const [adminToggle, setAdminToggle] = useState('category');
  // // console.log(page);

  const loading = <div className=''>Loading...</div>;

  const Dashboard = lazy(() => import('../../pages/Admin/Dashboard/Dashboard'));
  const Linkedin = lazy(() => import('../../pages/Admin/LinkedIn/Linkedin'));
  const AllUsers = lazy(() => import('../../pages/Admin/AllUsers/AllUsers'));
  const CreateLinkedInTemp = lazy(() =>
    import('../../pages/Admin/LinkedIn/CreateLinkedInTemp')
  );
  const UpdateLinkedInTemp = lazy(() =>
    import('../../pages/Admin/LinkedIn/Update/UpdateLinkedInTemp')
  );
  const UpdateLinkedInHeading = lazy(() =>
    import('../../pages/Admin/LinkedIn/Update/UpdateLinkedInHeading')
  );
  const UpdateLinkedInCategory = lazy(() =>
    import('../../pages/Admin/LinkedIn/Update/UpdateLinkedInCategory')
  );
  const ViewLinkedInTemp = lazy(() =>
    import('../../pages/Admin/LinkedIn/View/ViewLinkedInTemp')
  );
  const ViewLinkedInHeading = lazy(() =>
    import('../../pages/Admin/LinkedIn/View/ViewLinkedInHeading')
  );
  const ViewLinkedInCategory = lazy(() =>
    import('../../pages/Admin/LinkedIn/View/ViewLinkedInCategory')
  );
  // // console.log(userData);

  return (
    // !userLoggedIn ? (<Redirect to='/login' />) : !userData ? (<Puff wrapperClass='adminRingLoader' />) : userData.role === 'Admin' ? (
    <div className='adminLayout profile'>
      <ProfileHeader
        userLoggedIn={userLoggedIn}
        userData={userData}
        admin={true}
      />
      <div className='profile_main'>
        <Sidebar userLoggedIn={userLoggedIn} userData={userData} />
        <div className='admin_hero'>
          {page === 'linkedIn' ? (
            <Linkedin
              adminToggle={adminToggle}
              setAdminToggle={setAdminToggle}
            />
          ) : page === 'linkedIn_createNew' ? (
            <CreateLinkedInTemp
              adminToggle={adminToggle}
              setAdminToggle={setAdminToggle}
            />
          ) : page === 'linkedIn_update' ? (
            <UpdateLinkedInTemp />
          ) : page === 'linkedIn_update_heading' ? (
            <UpdateLinkedInHeading />
          ) : page === 'linkedIn_update_category' ? (
            <UpdateLinkedInCategory />
          ) : page === 'linkedIn_view' ? (
            <ViewLinkedInTemp />
          ) : page === 'linkedIn_view_heading' ? (
            <ViewLinkedInHeading />
          ) : page === 'linkedIn_view_category' ? (
            <ViewLinkedInCategory />
          ) : page === 'all_users' ? (
            <AllUsers />
          ) : page === 'dashboard' ? (
            <Dashboard />
          ) : (
            <Dashboard />
          )}
        </div>
      </div>
    </div>
    // ) : (<Redirect to='/login' />
  );
}
