import React from "react";

const QuickBites = () => {
  return (
    <>
      <div className="row m-0">
        <h6 className="p-3 m-0 bg-light w-100">
          Quick Bites <small className="text-black-50">3 ITEMS</small>
        </h6>
        <div className="col-md-12 px-0 border-top">
          <div className="">
            <div className="p-3 border-bottom gold-members">
              <span className="float-right">
                <a
                  href="#"
                  className="btn btn-outline-secondary btn-sm"
                  data-toggle="modal"
                  data-target="#extras"
                >
                  ADD
                </a>
              </span>
              <div className="media">
                <div className="mr-3 font-weight-bold text-danger non_veg">
                  .
                </div>
                <div className="media-body">
                  <h6 className="mb-1">Chicken Tikka Sub </h6>
                  <p className="text-muted mb-0">$250</p>
                </div>
              </div>
            </div>
            <div className="p-3 border-bottom gold-members">
              <span className="float-right">
                <a
                  href="#"
                  className="btn btn-outline-secondary btn-sm"
                  data-toggle="modal"
                  data-target="#extras"
                >
                  ADD
                </a>
              </span>
              <div className="media">
                <div className="mr-3 font-weight-bold text-danger non_veg">
                  .
                </div>
                <div className="media-body">
                  <h6 className="mb-1">
                    Cheese corn Roll{" "}
                    <span className="badge badge-danger">BEST SELLER</span>
                  </h6>
                  <p className="text-muted mb-0">$600</p>
                </div>
              </div>
            </div>
            <div className="p-3 border-bottom gold-members">
              <span className="float-right">
                <a
                  href="#"
                  className="btn btn-outline-secondary btn-sm"
                  data-toggle="modal"
                  data-target="#extras"
                >
                  ADD
                </a>
              </span>
              <div className="media">
                <div className="mr-3 font-weight-bold text-danger non_veg">
                  .
                </div>
                <div className="media-body">
                  <h6 className="mb-1">
                    Chicken Tikka Sub{" "}
                    <span className="badge badge-danger text-white">
                      Non veg
                    </span>
                  </h6>
                  <p className="text-muted mb-0">$250</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickBites;
