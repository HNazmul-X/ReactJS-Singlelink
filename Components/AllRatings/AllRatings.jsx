import React from "react";

const AllRatings = () => {
  return (
    <>
      <div className="bg-white p-3 mb-3 restaurant-detailed-ratings-and-reviews shadow-sm rounded">
        <a className="text-primary float-right" href="#">
          Top Rated
        </a>
        <h6 className="mb-1">All Ratings and Reviews</h6>
        <div className="reviews-members py-3">
          <div className="media">
            <a href="#">
              <img
                alt="#"
                src="/img/reviewer1.png"
                className="mr-3 rounded-pill"
              />
            </a>
            <div className="media-body">
              <div className="reviews-members-header">
                <div className="star-rating float-right">
                  <div className="d-inline-block" style={{ fontSize: "14px" }}>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star"></i>
                  </div>
                </div>
                <h6 className="mb-0">
                  <a className="text-dark" href="#">
                    Trump
                  </a>
                </h6>
                <p className="text-muted small">Tue, 20 Mar 2020</p>
              </div>
              <div className="reviews-members-body">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameNameical Latin
                  literature from 45 BC, making it over 2000 years old.
                </p>
              </div>
              <div className="reviews-members-footer">
                <a
                  className="total-like btn btn-sm btn-outline-primary"
                  href="#"
                >
                  <i className="feather-thumbs-up"></i> 856M
                </a>{" "}
                <a
                  className="total-like btn btn-sm btn-outline-primary"
                  href="#"
                >
                  <i className="feather-thumbs-down"></i> 158K
                </a>
                <span className="total-like-user-main ml-2" dir="rtl">
                  <a href="#" aria-describedby="tooltip-top0">
                    <img
                      alt="#"
                      src="/img/reviewer3.png"
                      className="total-like-user rounded-pill"
                    />
                  </a>
                  <a href="#" aria-describedby="tooltip-top1">
                    <img
                      alt="#"
                      src="/img/reviewer4.png"
                      className="total-like-user rounded-pill"
                    />
                  </a>
                  <a href="#">
                    <img
                      alt="#"
                      src="/img/reviewer5.png"
                      className="total-like-user rounded-pill"
                    />
                  </a>
                  <a href="#" aria-describedby="tooltip-top3">
                    <img
                      alt="#"
                      src="/img/reviewer6.png"
                      className="total-like-user rounded-pill"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="reviews-members py-3">
          <div className="media">
            <a href="#">
              <img
                alt="#"
                src="/img/reviewer2.png"
                className="mr-3 rounded-pill"
              />
            </a>
            <div className="media-body">
              <div className="reviews-members-header">
                <div className="star-rating float-right">
                  <div className="d-inline-block" style={{ fontSize: "14px" }}>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star"></i>
                  </div>
                </div>
                <h6 className="mb-0">
                  <a className="text-dark" href="#">
                    Jhon Smith
                  </a>
                </h6>
                <p className="text-muted small">Tue, 20 Mar 2020</p>
              </div>
              <div className="reviews-members-body">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="reviews-members-footer">
                <a
                  className="total-like btn btn-sm btn-outline-primary"
                  href="#"
                >
                  <i className="feather-thumbs-up"></i> 88K
                </a>{" "}
                <a
                  className="total-like btn btn-sm btn-outline-primary"
                  href="#"
                >
                  <i className="feather-thumbs-down"></i> 1K
                </a>
                <span className="total-like-user-main ml-2" dir="rtl">
                  <a href="#">
                    <img
                      alt="#"
                      src="/img/reviewer3.png"
                      className="total-like-user rounded-pill"
                    />
                  </a>
                  <a href="#">
                    <img
                      alt="#"
                      src="/img/reviewer4.png"
                      className="total-like-user rounded-pill"
                    />
                  </a>
                  <a href="#">
                    <img
                      alt="#"
                      src="/img/reviewer5.png"
                      className="total-like-user rounded-pill"
                    />
                  </a>
                  <a href="#">
                    <img
                      alt="#"
                      src="/img/reviewer6.png"
                      className="total-like-user rounded-pill"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <a className="text-center w-100 d-block mt-3 font-weight-bold" href="#">
          See All Reviews
        </a>
      </div>
    </>
  );
};

export default AllRatings;
