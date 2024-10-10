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
                <a href="/about" className="text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <a href="/contact" className="text-decoration-none">
                  Contact
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <a href="/terms" className="text-decoration-none">
                  Terms of Service
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <a href="/privacy" className="text-decoration-none">
                  Privacy Policy
                </a>
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
                  info@example.com
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
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-decoration-none"
                >
                  Twitter
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-decoration-none"
                >
                  Facebook
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-decoration-none"
                >
                  Instagram
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-decoration-none"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="m-0 text-center text-white">
          Copyright &copy;
          <a href="https://github.com/FredH2O" target="_blank">
            FredH2O / 2024
          </a>
        </p>
      </div>
    </footer>
  );
}
