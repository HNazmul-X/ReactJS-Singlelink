import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="section-header">
        <section className="header-main shadow-sm bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-1">
                <a href="home.html" className="brand-wrap mb-0">
                  <img alt="#" className="img-fluid" src="img/logo_web.png" />
                </a>
              </div>
              <div className="col-3 d-flex align-items-center m-none">
                <div className="dropdown mr-3">
                  <a
                    className="text-dark dropdown-toggle d-flex align-items-center py-3"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div>
                      <i className="feather-map-pin mr-2 bg-light rounded-pill p-2 icofont-size"></i>
                    </div>
                    <div>
                      <p className="text-muted mb-0 small">Select Location</p>
                      Jawaddi Ludhiana...
                    </div>
                  </a>
                  <div
                    className="dropdown-menu p-0 drop-loc"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="osahan-country">
                      <div className="search_location bg-primary p-3 text-right">
                        <div className="input-group rounded shadow-sm overflow-hidden">
                          <div className="input-group-prepend">
                            <button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block">
                              <i className="feather-search"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="shadow-none border-0 form-control"
                            placeholder="Enter Your Location"
                          />
                        </div>
                      </div>
                      <div className="p-3 border-bottom">
                        <a href="home.html" className="text-decoration-none">
                          <p className="font-weight-bold text-primary m-0">
                            <i className="feather-navigation"></i> New York, USA
                          </p>
                        </a>
                      </div>
                      <div className="filter">
                        <h6 className="px-3 py-3 bg-light pb-1 m-0 border-bottom">
                          Choose your country
                        </h6>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio1"
                            name="location"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label py-3 w-100 px-3"
                            htmlFor="customRadio1"
                          >
                            Afghanistan
                          </label>
                        </div>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio2"
                            name="location"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label py-3 w-100 px-3"
                            htmlFor="customRadio2"
                          >
                            India
                          </label>
                        </div>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio3"
                            name="location"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label py-3 w-100 px-3"
                            htmlFor="customRadio3"
                          >
                            USA
                          </label>
                        </div>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio4"
                            name="location"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label py-3 w-100 px-3"
                            htmlFor="customRadio4"
                          >
                            Australia
                          </label>
                        </div>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio5"
                            name="location"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label py-3 w-100 px-3"
                            htmlFor="customRadio5"
                          >
                            Japan
                          </label>
                        </div>
                        <div className="custom-control  px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio6"
                            name="location"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label py-3 w-100 px-3"
                            htmlFor="customRadio6"
                          >
                            China
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="d-flex align-items-center justify-content-end pr-5">
                  <a
                    href="search.html"
                    className="widget-header mr-4 text-dark"
                  >
                    <div className="icon d-flex align-items-center">
                      <i className="feather-search h6 mr-2 mb-0"></i>{" "}
                      <span>Search</span>
                    </div>
                  </a>
                  <a
                    href="offers.html"
                    className="widget-header mr-4 text-white btn bg-primary m-none"
                  >
                    <div className="icon d-flex align-items-center">
                      <i className="feather-disc h6 mr-2 mb-0"></i>{" "}
                      <span>Offers</span>
                    </div>
                  </a>
                  <a
                    href="login.html"
                    className="widget-header mr-4 text-dark m-none"
                  >
                    <div className="icon d-flex align-items-center">
                      <i className="feather-user h6 mr-2 mb-0"></i>{" "}
                      <span>Sign in</span>
                    </div>
                  </a>
                  <div className="dropdown mr-4 m-none">
                    <a
                      href="#"
                      className="dropdown-toggle text-dark py-3 d-block"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        alt="#"
                        src="img/user/1.jpg"
                        className="img-fluid rounded-circle header-user mr-2 header-user"
                      />{" "}
                      Hi Osahan
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="profile.html">
                        My account
                      </a>
                      <a className="dropdown-item" href="faq.html">
                        Delivery support
                      </a>
                      <a className="dropdown-item" href="contact-us.html">
                        Contant us
                      </a>
                      <a className="dropdown-item" href="terms.html">
                        Term of use
                      </a>
                      <a className="dropdown-item" href="privacy.html">
                        Privacy policy
                      </a>
                      <a className="dropdown-item" href="login.html">
                        Logout
                      </a>
                    </div>
                  </div>
                  <a
                    href="checkout.html"
                    className="widget-header mr-4 text-dark"
                  >
                    <div className="icon d-flex align-items-center">
                      <i className="feather-shopping-cart h6 mr-2 mb-0"></i>{" "}
                      <span>Cart</span>
                    </div>
                  </a>
                  <a className="toggle" href="#">
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <nav id="main-nav">
        <ul className="second-nav">
          <li>
            <a href="home.html">
              <i className="feather-home mr-2"></i> Homepage
            </a>
          </li>
          <li>
            <a href="my_order.html">
              <i className="feather-list mr-2"></i> My Orders
            </a>
          </li>
          <li>
            <a href="#">
              <i className="feather-edit-2 mr-2"></i> Authentication
            </a>
            <ul>
              <li>
                <a href="login.html">Login</a>
              </li>
              <li>
                <a href="signup.html">Register</a>
              </li>
              <li>
                <a href="forgot_password.html">Forgot Password</a>
              </li>
              <li>
                <a href="verification.html">Verification</a>
              </li>
              <li>
                <a href="location.html">Location</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="favorites.html">
              <i className="feather-heart mr-2"></i> Favorites
            </a>
          </li>
          <li>
            <a href="trending.html">
              <i className="feather-trending-up mr-2"></i> Trending
            </a>
          </li>
          <li>
            <a href="most_popular.html">
              <i className="feather-award mr-2"></i> Most Popular
            </a>
          </li>
          <li>
            <a href="restaurant.html">
              <i className="feather-paperclip mr-2"></i> Restaurant Detail
            </a>
          </li>
          <li>
            <a href="checkout.html">
              <i className="feather-list mr-2"></i> Checkout
            </a>
          </li>
          <li>
            <a href="successful.html">
              <i className="feather-check-circle mr-2"></i> Successful
            </a>
          </li>
          <li>
            <a href="map.html">
              <i className="feather-map-pin mr-2"></i> Live Map
            </a>
          </li>
          <li>
            <a href="#">
              <i className="feather-user mr-2"></i> Profile
            </a>
            <ul>
              <li>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a>Delivery support</a>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a>Terms Of use</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a>Privacy & Policy</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="feather-alert-triangle mr-2"></i> Error
            </a>
            <ul>
              <li>
                <a href="not-found.html">Not Found</a>{" "}
              </li>
              <li>
                <a href="maintence.html"> Maintence</a>{" "}
              </li>
              <li>
                <a href="coming-soon.html">Coming Soon</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="feather-link mr-2"></i> Navigation Link Example
            </a>
            <ul>
              <li>
                <a href="#">Link Example 1</a>
                <ul>
                  <li>
                    <a href="#">Link Example 1.1</a>
                    <ul>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Link Example 1.2</a>
                    <ul>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Link Example 2</a>
              </li>
              <li>
                <a href="#">Link Example 3</a>
              </li>
              <li>
                <a href="#">Link Example 4</a>
              </li>
              <li data-nav-custom-content>
                <div className="custom-message">
                  You can add any custom content to your navigation items. This
                  text is just an example.
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="bottom-nav">
          <li className="email">
            <a className="text-danger" href="home.html">
              <p className="h5 m-0">
                <i className="feather-home text-danger"></i>
              </p>
              Home
            </a>
          </li>
          <li className="github">
            <a href="faq.html">
              <p className="h5 m-0">
                <i className="feather-message-circle"></i>
              </p>
              FAQ
            </a>
          </li>
          <li className="ko-fi">
            <a href="contact-us.html">
              <p className="h5 m-0">
                <i className="feather-phone"></i>
              </p>
              Help
            </a>
          </li>
        </ul>
      </nav>
      <div className="osahan-home-page">
        <div className="bg-primary p-3 d-none">
          <div className="text-white">
            <div className="title d-flex align-items-center">
              <a className="toggle" href="#">
                <span></span>
              </a>
              <h4 className="font-weight-bold m-0 pl-5">Browse</h4>
              <a
                className="text-white font-weight-bold ml-auto"
                data-toggle="modal"
                data-target="#exampleModal"
                href="#"
              >
                Filter
              </a>
            </div>
          </div>
          <div className="input-group mt-3 rounded shadow-sm overflow-hidden">
            <div className="input-group-prepend">
              <button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block">
                <i className="feather-search"></i>
              </button>
            </div>
            <input
              type="text"
              className="shadow-none border-0 form-control"
              placeholder="Search for restaurants or dishes"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
