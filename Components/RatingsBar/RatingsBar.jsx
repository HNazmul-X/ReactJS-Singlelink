import React from "react";

const RatingsBar = () => {
  return (
    <>
      <div className="bg-white rounded p-3 mb-3 clearfix graph-star-rating rounded shadow-sm">
        <h6 className="mb-0 mb-1">Ratings and Reviews</h6>
        <p className="text-muted mb-4 mt-1 small">Rated 3.5 out of 5</p>
        <div className="graph-star-rating-body">
          <div className="rating-list">
            <div className="rating-list-left font-weight-bold small">
              5 Star
            </div>
            <div className="rating-list-center">
              <div className="progress">
                <div
                  role="progressbar"
                  className="progress-bar bg-info"
                  aria-valuenow="56"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "56%" }}
                ></div>
              </div>
            </div>
            <div className="rating-list-right font-weight-bold small">56 %</div>
          </div>
          <div className="rating-list">
            <div className="rating-list-left font-weight-bold small">
              4 Star
            </div>
            <div className="rating-list-center">
              <div className="progress">
                <div
                  role="progressbar"
                  className="progress-bar bg-info"
                  aria-valuenow="23"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "23%" }}
                ></div>
              </div>
            </div>
            <div className="rating-list-right font-weight-bold small">23 %</div>
          </div>
          <div className="rating-list">
            <div className="rating-list-left font-weight-bold small">
              3 Star
            </div>
            <div className="rating-list-center">
              <div className="progress">
                <div
                  role="progressbar"
                  className="progress-bar bg-info"
                  aria-valuenow="11"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "11%" }}
                ></div>
              </div>
            </div>
            <div className="rating-list-right font-weight-bold small">11 %</div>
          </div>
          <div className="rating-list">
            <div className="rating-list-left font-weight-bold small">
              2 Star
            </div>
            <div className="rating-list-center">
              <div className="progress">
                <div
                  role="progressbar"
                  className="progress-bar bg-info"
                  aria-valuenow="6"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "11%" }}
                ></div>
              </div>
            </div>
            <div className="rating-list-right font-weight-bold small">6 %</div>
          </div>
          <div className="rating-list">
            <div className="rating-list-left font-weight-bold small">
              1 Star
            </div>
            <div className="rating-list-center">
              <div className="progress">
                <div
                  role="progressbar"
                  className="progress-bar bg-info"
                  aria-valuenow="4"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "11%" }}
                ></div>
              </div>
            </div>
            <div className="rating-list-right font-weight-bold small">4 %</div>
          </div>
        </div>
        <div className="graph-star-rating-footer text-center mt-3">
          <button type="button" className="btn btn-primary btn-block btn-sm">
            Rate and Review
          </button>
        </div>
      </div>
    </>
  );
};

export default RatingsBar;
