import React from "react";

const FeaturedItemsSlider = () => {
  return (
    <>
      <div className="container">
        <div className="">
          <p className="font-weight-bold pt-4 m-0">FEATURED ITEMS</p>
          {/* <!-- slider  */}
          <div className="trending-slider rounded">
            <div className="osahan-slider-item">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <a href="checkout.html">
                    <img
                      alt="#"
                      src="/img/trending1.png"
                      className="img-fluid item-img w-100"
                    />
                  </a>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href="checkout.html" className="text-black">
                        Famous Dave's Bar-B-Que
                      </a>
                    </h6>
                    <p className="text-gray mb-3">
                      Vegetarian • Indian • Pure veg
                    </p>
                    <p className="text-gray m-0">
                      {" "}
                      <span className="text-black-50"> $350 FOR TWO</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="osahan-slider-item">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <a href="checkout.html">
                    <img
                      alt="#"
                      src="/img/trending2.png"
                      className="img-fluid item-img w-100"
                    />
                  </a>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href="checkout.html" className="text-black">
                        Thai Famous Cuisine
                      </a>
                    </h6>
                    <p className="text-gray mb-3">
                      North Indian • Indian • Pure veg
                    </p>
                    <p className="text-gray m-0">
                      {" "}
                      <span className="text-black-50"> $250 FOR TWO</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="osahan-slider-item">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <a href="checkout.html">
                    <img
                      alt="#"
                      src="/img/trending3.png"
                      className="img-fluid item-img w-100"
                    />
                  </a>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href="checkout.html" className="text-black">
                        The osahan Restaurant
                      </a>
                    </h6>
                    <p className="text-gray mb-3">
                      North • Hamburgers • Pure veg
                    </p>
                    <p className="text-gray m-0">
                      {" "}
                      <span className="text-black-50"> $500 FOR TWO</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="osahan-slider-item">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <a href="checkout.html">
                    <img
                      alt="#"
                      src="/img/trending2.png"
                      className="img-fluid item-img w-100"
                    />
                  </a>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href="checkout.html" className="text-black">
                        Thai Famous Cuisine
                      </a>
                    </h6>
                    <p className="text-gray mb-3">
                      North Indian • Indian • Pure veg
                    </p>
                    <p className="text-gray m-0">
                      {" "}
                      <span className="text-black-50"> $250 FOR TWO</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedItemsSlider;
