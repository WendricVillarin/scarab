import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer" role="contentinfo">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Malware Privacy Policy Checker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;