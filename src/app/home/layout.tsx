// components/Layout.js (or Layout.tsx for TypeScript)
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}


const Layout:React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <main>

        <div>
          Layout working
        </div>
        <div>
            {children}
        </div>
      </main>

    </div>
  );
};

export default Layout;
