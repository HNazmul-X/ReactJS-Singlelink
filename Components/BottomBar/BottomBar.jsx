import React from "react";

const BottomBar = () => {
  return (
    <>
      <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center d-none">
        <div className="row">
          <div className="col">
            <a
              href="home.html"
              className="text-dark small font-weight-bold text-decoration-none"
            >
              <p className="h4 m-0">
                <i className="feather-home text-dark"></i>
              </p>
              Home
            </a>
          </div>
          <div className="col">
            <a
              href="most_popular.html"
              className="text-dark small font-weight-bold text-decoration-none"
            >
              <p className="h4 m-0">
                <i className="feather-map-pin"></i>
              </p>
              Trending
            </a>
          </div>
          <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
            <div className="bg-danger rounded-circle mt-n0 shadow">
              <a
                href="checkout.html"
                className="text-white small font-weight-bold text-decoration-none"
              >
                <i className="feather-shopping-cart"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <a
              href="favorites.html"
              className="text-dark small font-weight-bold text-decoration-none"
            >
              <p className="h4 m-0">
                <i className="feather-heart"></i>
              </p>
              Favorites
            </a>
          </div>
          <div className="col selected">
            <a
              href="profile.html"
              className="text-danger small font-weight-bold text-decoration-none"
            >
              <p className="h4 m-0">
                <i className="feather-user"></i>
              </p>
              Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
