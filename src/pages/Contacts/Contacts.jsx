import "./Contacts.css";

function Contacts() {
  return (
    <div className="container contacts py-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            className="img-fluid rounded mb-5"
            src={`${process.env.PUBLIC_URL}/images/flex-trap-model2.jpg`}
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <h2 className="mb-3">Contact Form</h2>
          <p>
            If you have any questions or queries about us and the Services we
            offer please submit your question or comments here! We will reply as
            soon as possible!
          </p>
          <form id="contact">
            <div className="mb-3">
              <label className="form-label" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                className="form-control mb-1"
                required
                placeholder="John Doe"
              />
              <label className="form-label" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="number"
                className="form-control mb-1"
                required
                placeholder="+353-861234567"
              />
              <label className="form-label" htmlFor="emailAddress">
                Email Address:
              </label>
              <input
                id="emailAddress"
                required
                type="email"
                className="form-control mb-1"
                placeholder="john.doe@yahoo.com"
              />
              <label className="form-label" htmlFor="enquirySelect">
                Enquiry:
              </label>
              <select
                className="form-select w-100"
                aria-label="Default select example"
                id="enquirySelect"
              >
                <option value="question">General Question</option>
                <option value="complaint">Complaint</option>
                <option value="feedback">Feedback</option>
                <option value="career">Career</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="textArea" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="textArea"
                rows="3"
                maxLength="120"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
