import FakeStore from "./../FakeStoreAPI/FakeStoreAPI";
import SelectCategory from "../SelectCategory/SelectCategory";
import "./Section.css";
export default function Section() {
  return (
    <section className="py-5">
      <SelectCategory />
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
