import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="rounded shadow-sm">
        <div className="osahan-cart-item-profile bg-white rounded shadow-sm p-4">
          <div className="flex-column">
            <h6 className="font-weight-bold">Tell us about yourself</h6>
            <p className="text-muted">
              Whether you have questions or you would just like to say hello,
              contact us.
            </p>
            <form>
              <div className="form-group">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="small font-weight-bold"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Gurdeep Osahan"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="small font-weight-bold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="iamosahan@gmail.com"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="small font-weight-bold"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="1-800-643-4500"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="small font-weight-bold"
                >
                  HOW CAN WE HELP YOU?
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Hi there, I would like to ..."
                  rows="3"
                ></textarea>
              </div>
              <a className="btn btn-primary btn-block" href="#">
                SUBMIT
              </a>
            </form>
            {/* <!-- Map --> */}
            <div className="mapouter pt-3">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="100%"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=dugri%20ludhiana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
