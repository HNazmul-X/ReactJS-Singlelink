import React from "react";

const AddressModal = () => {
  return (
    <>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Delivery Address</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="">
              <div className="form-row">
                <div className="col-md-12 form-group">
                  <label className="form-label">Delivery Area</label>
                  <div className="input-group">
                    <input
                      placeholder="Delivery Area"
                      type="text"
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="feather-map-pin"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 form-group">
                  <label className="form-label">Complete Address</label>
                  <input
                    placeholder="Complete Address e.g. house number, street name, landmark"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <label className="form-label">Delivery Instructions</label>
                  <input
                    placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-0 col-md-12 form-group">
                  <label className="form-label">Nickname</label>
                  <div
                    className="btn-group btn-group-toggle w-100"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-outline-secondary active">
                      <input type="radio" name="options" id="option1" checked />{" "}
                      Home
                    </label>
                    <label className="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option2" /> Work
                    </label>
                    <label className="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option3" /> Other
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer p-0 border-0">
            <div className="col-6 m-0 p-0">
              <button
                type="button"
                className="btn border-top btn-lg btn-block"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
            <div className="col-6 m-0 p-0">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressModal;
