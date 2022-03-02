import React from "react";

const ProductComment = () => {
  return (
    <>
      <div className="bg-white p-3 rating-review-select-page rounded shadow-sm">
        <h6 className="mb-3">Leave Comment</h6>
        <div className="d-flex align-items-center mb-3">
          <p className="m-0 small">Rate the Place</p>
          <div className="star-rating ml-auto">
            <div className="d-inline-block">
              <i className="feather-star text-warning"></i>
              <i className="feather-star text-warning"></i>
              <i className="feather-star text-warning"></i>
              <i className="feather-star text-warning"></i>
              <i className="feather-star"></i>
            </div>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label className="form-label small">Your Comment</label>
            <textarea className="form-control"></textarea>
          </div>
          <div className="form-group mb-0">
            <button type="button" className="btn btn-primary btn-block">
              {" "}
              Submit Comment{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductComment;
