import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import menuItems from '../../data/menuItems.json';
import { Helmet } from 'react-helmet';

const Layout = function () {
  return (
    <>
    <Helmet>
    <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
    </Helmet>
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
