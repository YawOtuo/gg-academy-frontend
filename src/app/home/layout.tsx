// components/Layout.js (or Layout.tsx for TypeScript)

const Layout = ({ children }) => {
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
