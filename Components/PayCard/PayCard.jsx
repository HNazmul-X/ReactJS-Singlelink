import React from 'react';

const PayCard = () => {
  return (
    <>
      <div
          className="accordion mb-3 rounded shadow-sm bg-white overflow-hidden"
          id="accordionExample"
        >
          <div className="osahan-card bg-white border-bottom overflow-hidden">
            <div className="osahan-card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="d-flex p-3 align-items-center btn btn-link w-100"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i className="feather-credit-card mr-3"></i> Credit/Debit Card
                  <i className="feather-chevron-down ml-auto"></i>
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="osahan-card-body border-top p-3">
                <h6 className="m-0">Add new card</h6>
                <p className="small">
                  WE ACCEPT{" "}
                  <span className="osahan-card ml-2 font-weight-bold">
                    ( Master Card / Visa Card / Rupay )
                  </span>
                </p>
                <form>
                  <div className="form-row">
                    <div className="col-md-12 form-group">
                      <label className="form-label font-weight-bold small">
                        Card number
                      </label>
                      <div className="input-group">
                        <input
                          placeholder="Card number"
                          type="number"
                          className="form-control"
                        />
                        <div className="input-group-append">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <i className="feather-credit-card"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 form-group">
                      <label className="form-label font-weight-bold small">
                        Valid through(MM/YY)
                      </label>
                      <input
                        placeholder="Enter Valid through(MM/YY)"
                        type="number"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-4 form-group">
                      <label className="form-label font-weight-bold small">
                        CVV
                      </label>
                      <input
                        placeholder="Enter CVV Number"
                        type="number"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <label className="form-label font-weight-bold small">
                        Name on card
                      </label>
                      <input
                        placeholder="Enter Card number"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12 form-group mb-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          id="custom-checkbox1"
                          className="custom-control-input"
                        />
                        <label
                          title=""
                          type="checkbox"
                          htmlFor="custom-checkbox1"
                          className="custom-control-label small pt-1"
                        >
                          Securely save this card for a faster checkout next
                          time.
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="osahan-card bg-white border-bottom overflow-hidden">
            <div className="osahan-card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="d-flex p-3 align-items-center btn btn-link w-100"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="feather-globe mr-3"></i> Net Banking
                  <i className="feather-chevron-down ml-auto"></i>
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="osahan-card-body border-top p-3">
                <form>
                  <div
                    className="btn-group btn-group-toggle w-100"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-outline-secondary active">
                      <input type="radio" name="options" id="option1" checked />{" "}
                      HDFC
                    </label>
                    <label className="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option2" /> ICICI
                    </label>
                    <label className="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option3" /> AXIS
                    </label>
                  </div>
                  <hr />
                  <div className="form-row">
                    <div className="col-md-12 form-group mb-0">
                      <label className="form-label small font-weight-bold">
                        Select Bank
                      </label>
                      <br />
                      <select className="custom-select form-control">
                        <option>Bank</option>
                        <option>KOTAK</option>
                        <option>SBI</option>
                        <option>UCO</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="osahan-card bg-white overflow-hidden">
            <div className="osahan-card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="d-flex p-3 align-items-center btn btn-link w-100"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <i className="feather-dollar-sign mr-3"></i> Cash on Delivery
                  <i className="feather-chevron-down ml-auto"></i>
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body border-top">
                <h6 className="mb-3 mt-0 mb-3 font-weight-bold">Cash</h6>
                <p className="m-0">
                  Please keep exact change handy to help us serve you better
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default PayCard;