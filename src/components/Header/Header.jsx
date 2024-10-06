import "./Header.css";
import HeroImages from "./HeroImages";

export default function Header() {
  return (
    <header className="bg-dark">
      <div className="container landing-page">
        <div className="text-center text-white">
          <HeroImages />
        </div>
      </div>
    </header>
  );
}
