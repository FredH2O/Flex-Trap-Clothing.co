import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="py-5 bg-dark">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <h5 className="text-white">Quick Links</h5>
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0">
                <Link to="/about" className="text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <Link to="/contacts" className="text-decoration-none">
                  Contacts
                </Link>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <Link to="/terms" className="text-decoration-none">
                  Terms of Service
                </Link>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <Link to="/Privacy" className="text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h5 className="text-white">Contact Us</h5>
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0">
                Email:{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-decoration-none"
                >
                  flex-trap@clothing.ie
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0">
                Phone: (123) 456-7890
              </li>
              <li className="list-group-item bg-transparent border-0">
                Address: 123 Main St, City, Country
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h5 className="text-white">Follow Us</h5>
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0">
                <i className="bi bi-twitter"></i>&nbsp;
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <i className="bi bi-facebook"></i>&nbsp;
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <i className="bi bi-instagram"></i>&nbsp;
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <i className="bi bi-linkedin"></i>&nbsp;
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="m-0 pt-5 text-center text-white">
          <a href="https://github.com/FredH2O" target="_blank" rel="noreferrer">
            FredH2O / 2024
          </a>
        </p>
      </div>
    </footer>
  );
}
