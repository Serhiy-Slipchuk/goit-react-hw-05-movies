import Container from 'components/Container/Container';
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
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default Layout;
