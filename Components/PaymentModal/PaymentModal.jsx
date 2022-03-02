import React from "react";

const PaymentModal = () => {
  return (
    <>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Credit/Debit Card</h5>
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
                      Securely save this card for a faster checkout next time.
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

export default PaymentModal;
