import React from "react";

const DeliveryAddress = () => {
  return (
    <>
        <div className="osahan-cart-item mb-3 rounded shadow-sm bg-white overflow-hidden">
          <div className="osahan-cart-item-profile bg-white p-3">
            <div className="d-flex flex-column">
              <h6 className="mb-3 font-weight-bold">Delivery Address</h6>
              <div className="row">
                <div className="custom-control col-lg-6 custom-radio mb-3 position-relative border-custom-radio">
                  <input
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    className="custom-control-input"
                    checked
                  />
                  <label
                    className="custom-control-label w-100"
                    htmlFor="customRadioInline1"
                  >
                    <div>
                      <div className="p-3 bg-white rounded shadow-sm w-100">
                        <div className="d-flex align-items-center mb-2">
                          <h6 className="mb-0">Home</h6>
                          <p className="mb-0 badge badge-success ml-auto">
                            <i className="icofont-check-circled"></i> Default
                          </p>
                        </div>
                        <p className="small text-muted m-0">
                          1001 Veterans Blvd
                        </p>
                        <p className="small text-muted m-0">
                          Redwood City, CA 94063
                        </p>
                      </div>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="btn btn-block btn-light border-top"
                      >
                        Edit
                      </a>
                    </div>
                  </label>
                </div>
                <div className="custom-control col-lg-6 custom-radio position-relative border-custom-radio">
                  <input
                    type="radio"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label w-100"
                    htmlFor="customRadioInline2"
                  >
                    <div>
                      <div className="p-3 rounded bg-white shadow-sm w-100">
                        <div className="d-flex align-items-center mb-2">
                          <h6 className="mb-0">Work</h6>
                          <p className="mb-0 badge badge-light ml-auto">
                            <i className="icofont-check-circled"></i> Select
                          </p>
                        </div>
                        <p className="small text-muted m-0">
                          Model Town, Ludhiana
                        </p>
                        <p className="small text-muted m-0">
                          Punjab 141002, India
                        </p>
                      </div>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="btn btn-block btn-light border-top"
                      >
                        Edit
                      </a>
                    </div>
                  </label>
                </div>
              </div>
              <a
                className="btn btn-primary"
                href="#"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                {" "}
                ADD NEW ADDRESS{" "}
              </a>
            </div>
          </div>
        </div> 
    </>
  );
};

export default DeliveryAddress;
