import { Outlet } from 'react-router-dom';
import StyledNavbar from '../components/StyledNavbar';

// This page holds the top navbar which is common to all the other pages, which become child pages in the routes
const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
