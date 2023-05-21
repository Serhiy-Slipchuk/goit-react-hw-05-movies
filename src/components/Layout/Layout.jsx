import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import menuItems from '../../data/menuItems.json';
import { Outlet } from 'react-router-dom';

const Layout = function () {
  return (
    <>
      <Header>
        <Navigation items={menuItems} />
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
