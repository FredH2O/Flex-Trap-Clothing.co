import "./Header.css";
import HeroImages from "./HeroImages";

export default function Header() {
  return (
    <header className="animate__animated animate__fadeIn">
      <div className="container landing-page" id="home">
        <div className="text-center text-white">
          <HeroImages />
        </div>
      </div>
    </header>
  );
}
