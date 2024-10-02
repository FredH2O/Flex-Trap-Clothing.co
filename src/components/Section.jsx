import FakeStore from "./FakeStoreAPI";
import "./Section.css";
export default function Section() {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div
          id="card-container"
          className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center"
        >
          <FakeStore />
        </div>
      </div>
    </section>
  );
}
