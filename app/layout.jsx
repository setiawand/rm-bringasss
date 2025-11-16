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
      </body>
    </html>
  );
}