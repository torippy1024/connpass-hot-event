import {ReactNode} from 'react';
import Footer from './Footer';
import Navbar from './Header';
import DrawerContents from './DrawerContents';

type HeaderType = {
  children: ReactNode;
};

const Layout = ({children}: HeaderType) => {
  const drawerId = 'my-drawer';
  return (
    <div className='drawer'>
      <input id={drawerId} type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col min-h-screen'>
        <Navbar drawerId={drawerId} />
        <div className='flex-1 bg-base-200 justify-center items-center p-4'>
          {children}
        </div>
        <Footer />
      </div>
      <div className='drawer-side'>
        <label htmlFor={drawerId} className='drawer-overlay'></label>
        <DrawerContents />
      </div>
    </div>
  );
};

export default Layout;
