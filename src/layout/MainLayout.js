import React from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';

function MainLayout({children}) {
  return (
    <div>
        <header>
            <Header />
        </header>

        <main>
            {children}
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
  );
}

export default MainLayout;
