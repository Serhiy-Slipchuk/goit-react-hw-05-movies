import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import menuItems from '../../data/menuItems.json';

const Layout = function () {
  return (
    <>
      <Header>
        <Navigation items={menuItems} />
      </Header>
      <Container>
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default Layout;
