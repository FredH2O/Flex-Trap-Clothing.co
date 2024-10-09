import "./Footer.css";

export default function Footer() {
  return (
    <footer className="py-5 bg-dark">
      <div className="container text-center">
        <div class="row">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
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
