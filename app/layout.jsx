import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'RM Bringasss',
  description: 'Rumah Makan Bringasss'
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <header className="site-header">
          <div className="container brand-row">
            <h1 className="brand">RM BRINGASSs</h1>
          </div>
          <nav className="container nav-row">
            <ul className="nav">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/review">Review</Link></li>
            </ul>
          </nav>
        </header>
        <main className="container main-content">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} RM Bringasss. Semua hak dilindungi.</p>
          </div>
        </footer>
        <a
          href="https://wa.me/6281234567890?text=Halo%20RM%20Bringasss%2C%20saya%20ingin%20pesan."
          className="floating-wab"
          aria-label="Hubungi via WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a9 9 0 0 0-7.662 13.685L3 22l6.502-1.3A9 9 0 1 0 12 2zm0 2a7 7 0 0 1 5.97 10.79 1 1 0 0 0-.156.8l.586 2.345-2.368-.474a1 1 0 0 0-.81.166A7 7 0 1 1 12 4zm-3.03 3.97c.2-.003.41.07.57.23l1.02 1.02c.26.26.3.66.1.96l-.47.71c-.12.18-.12.41 0 .59.55.83 1.29 1.56 2.13 2.11.18.12.41.12.59 0l.71-.47c.3-.2.7-.16.96.1l1.02 1.02c.32.32.28.86-.09 1.14-.53.41-1.21.7-1.87.83-.96.2-2.05-.01-3.35-.69-1.08-.56-1.98-1.36-2.63-2.31-.8-1.15-1.08-2.19-.94-3.1.09-.63.35-1.28.77-1.8.15-.19.37-.3.57-.31z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}