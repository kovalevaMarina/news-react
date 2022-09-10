import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function Layout() {
  return (
    <div
      className="main-wrapper"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <main style={{ flexGrow: '1' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
