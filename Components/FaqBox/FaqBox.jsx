import React from "react";

const FaqBox = () => {
  return (
    <>
      <div className="osahan-cart-item-profile">
        <div className="box bg-white mb-3 shadow-sm rounded">
          <div className="p-3 d-flex align-items-center">
            <i className="feather-message-circle display-4"></i>
            <div className="ml-3">
              <h6 className="text-dark mb-2 mt-0">Help Forum</h6>
              <p className="mb-0 text-muted">
                Find the answer to any question, from the basics ...
              </p>
            </div>
          </div>
          <div className="overflow-hidden border-top d-flex align-items-center p-3">
            <a className="font-weight-bold d-block" href="#">
              {" "}
              Swiggiweb Help Forum.{" "}
            </a>
            <i className="feather-arrow-right-circle ml-auto text-primary"></i>
          </div>
        </div>
        <div className="box bg-white mb-3 shadow-sm rounded">
          <div className="p-3 d-flex align-items-center">
            <i className="feather-lock display-4"></i>
            <div className="ml-3">
              <h6 className="text-dark mb-2 mt-0">Safety Center</h6>
              <p className="mb-0 text-muted">
                Want to learn more about setting up and managing ...
              </p>
            </div>
          </div>
          <div className="overflow-hidden border-top d-flex align-items-center p-3">
            <a className="font-weight-bold d-block" href="#">
              {" "}
              Swiggiweb Safety Center.{" "}
            </a>
            <i className="feather-arrow-right-circle ml-auto text-primary"></i>
          </div>
        </div>
        <div id="basics">
          {/* <!-- Title --> */}
          <div className="mb-2 mt-3">
            <h5 className="font-weight-semi-bold mb-0">Basics</h5>
          </div>
          {/* <!-- End Title --> */}
          {/* <!-- Basics Accordion --> */}
          <div id="basicsAccordion">
            {/* <!-- Card --> */}
            <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
              <div id="basicsHeadingOne">
                <h5 className="mb-0">
                  <button
                    className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed"
                    data-toggle="collapse"
                    data-target="#basicsCollapseOne"
                    aria-expanded="false"
                    aria-controls="basicsCollapseOne"
                  >
                    Do you have any built-in caching?
                    <span className="card-btn-arrow">
                      <span className="feather-chevron-down"></span>
                    </span>
                  </button>
                </h5>
              </div>
              <div
                id="basicsCollapseOne"
                className="collapse show"
                aria-labelledby="basicsHeadingOne"
                data-parent="#basicsAccordion"
              >
                <div className="card-body border-top p-3 text-muted">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid ...
                </div>
              </div>
            </div>
            <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
              <div id="basicsHeadingTwo">
                <h5 className="mb-0">
                  <button
                    className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed"
                    data-toggle="collapse"
                    data-target="#basicsCollapseTwo"
                    aria-expanded="false"
                    aria-controls="basicsCollapseTwo"
                  >
                    Can I add/upgrade my plan at any time?
                    <span className="card-btn-arrow">
                      <span className="feather-chevron-down"></span>
                    </span>
                  </button>
                </h5>
              </div>
              <div
                id="basicsCollapseTwo"
                className="collapse"
                aria-labelledby="basicsHeadingTwo"
                data-parent="#basicsAccordion"
              >
                <div className="card-body border-top p-3 text-muted">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid ...
                </div>
              </div>
            </div>
            <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
              <div id="basicsHeadingThree">
                <h5 className="mb-0">
                  <button
                    className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed"
                    data-toggle="collapse"
                    data-target="#basicsCollapseThree"
                    aria-expanded="false"
                    aria-controls="basicsCollapseThree"
                  >
                    What access comes with hosting plan?
                    <span className="card-btn-arrow">
                      <span className="feather-chevron-down"></span>
                    </span>
                  </button>
                </h5>
              </div>
              <div
                id="basicsCollapseThree"
                className="collapse"
                aria-labelledby="basicsHeadingThree"
                data-parent="#basicsAccordion"
              >
                <div className="card-body border-top p-3 text-muted">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid ...
                </div>
              </div>
            </div>
            <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
              <div id="basicsHeadingFour">
                <h5 className="mb-0">
                  <button
                    className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3"
                    data-toggle="collapse"
                    data-target="#basicsCollapseFour"
                    aria-expanded="false"
                    aria-controls="basicsCollapseFour"
                  >
                    How do I change my password?
                    <span className="card-btn-arrow">
                      <span className="feather-chevron-down"></span>
                    </span>
                  </button>
                </h5>
              </div>
              <div
                id="basicsCollapseFour"
                className="collapse"
                aria-labelledby="basicsHeadingFour"
                data-parent="#basicsAccordion"
              >
                <div className="card-body border-top p-3 text-muted">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid ...
                </div>
              </div>
            </div>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Basics Accordion --> */}
        </div>
        <div id="account">
          {/* <!-- Title --> */}
          <div className="mb-2 mt-3">
            <h5 className="font-weight-semi-bold mb-0">Account</h5>
          </div>
          {/* <!-- End Title --> */}
          {/* <!-- Account Accordion --> */}
          <div id="accountAccordion">
            {/* <!-- Card --> */}
            <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
              <div id="accountHeadingOne">
                <h5 className="mb-0">
                  <button
                    className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3"
                    data-toggle="collapse"
                    data-target="#accountCollapseOne"
                    aria-expanded="false"
                    aria-controls="accountCollapseOne"
                  >
                    How do I change my password?
                    <span className="card-btn-arrow">
                      <span className="feather-chevron-down"></span>
                    </span>
                  </button>
                </h5>
              </div>
              <div
                id="accountCollapseOne"
                className="collapse show"
                aria-labelledby="accountHeadingOne"
                data-parent="#accountAccordion"
              >
                <div className="card-body border-top p-3 text-muted">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid ...
                </div>
              </div>
            </div>
            {/* <!-- End Card --> */}
            {/* <!-- Card --> */}
            <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
              <div id="accountHeadingTwo">
                <h5 className="mb-0">
                  <button
                    className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3"
                    data-toggle="collapse"
                    data-target="#accountCollapseTwo"
                    aria-expanded="false"
                    aria-controls="accountCollapseTwo"
                  >
                    How do I delete my account?
                    <span className="card-btn-arrow">
                      <span className="feather-chevron-down"></span>
                    </span>
                  </button>
                </h5>
              </div>
              <div
                id="accountCollapseTwo"
                className="collapse"
                aria-labelledby="accountHeadingTwo"
                data-parent="#accountAccordion"
              >
                <div className="card-body border-top p-3 text-muted">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid ...
                </div>
              </div>
            </div>
            {/* <!-- End Card --> */}
            {/* <!-- Card --> */}
            <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
              <div id="accountHeadingThree">
                <h5 className="mb-0">
                  <button
                    className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3"
                    data-toggle="collapse"
                    data-target="#accountCollapseThree"
                    aria-expanded="false"
                    aria-controls="accountCollapseThree"
                  >
                    How do I change my account settings?
                    <span className="card-btn-arrow">
                      <span className="feather-chevron-down"></span>
                    </span>
                  </button>
                </h5>
              </div>
              <div
                id="accountCollapseThree"
                className="collapse"
                aria-labelledby="accountHeadingThree"
                data-parent="#accountAccordion"
              >
                <div className="card-body border-top p-3 text-muted">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid ...
                </div>
              </div>
            </div>
            {/* <!-- End Card --> */}
            {/* <!-- Card --> */}
            <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
              <div id="accountHeadingFour">
                <h5 className="mb-0">
                  <button
                    className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3"
                    data-toggle="collapse"
                    data-target="#accountCollapseFour"
                    aria-expanded="false"
                    aria-controls="accountCollapseFour"
                  >
                    I forgot my password. How do I reset it?
                    <span className="card-btn-arrow">
                      <span className="feather-chevron-down"></span>
                    </span>
                  </button>
                </h5>
              </div>
              <div
                id="accountCollapseFour"
                className="collapse"
                aria-labelledby="accountHeadingFour"
                data-parent="#accountAccordion"
              >
                <div className="card-body border-top p-3 text-muted">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid ...
                </div>
              </div>
            </div>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Account Accordion --> */}
        </div>
      </div>
    </>
  );
};

export default FaqBox;
