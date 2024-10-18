import "./AboutUs.css";
import aboutUs from "../../images/flex-trap-clothing.jpg";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="py-5 bg-light animate__animated animate__fadeIn"
    >
      <div className="container">
        <div className="row about-us">
          <div className="col-lg-6">
            <h2>About Us</h2>
            <p>
              Welcome to Flex-Trap Clothing! We are dedicated to providing you
              with the best selection of quality products at affordable prices.
              Our mission is to make shopping enjoyable and easy for everyone.
            </p>
            <p>
              At Flex-Trap Clothing, we believe in offering our customers a
              unique shopping experience. We carefully curate our collection,
              ensuring that every item meets our high standards for quality and
              style. Whether you're looking for the latest trends or timeless
              classics, we've got you covered.
            </p>
            <p>
              Our team is passionate about what we do, and we are always here to
              help you find exactly what you need. Thank you for choosing
              Flex-Trap Clothing, and we look forward to serving you!
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src={aboutUs}
              alt="Shop Image"
              className="img-fluid rounded blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
