import Slider from "react-slick";
import { homePageTrandingSliderSetting } from './../../Data/HomePageData';

function HomePageTrendingSlider() {
  return (
    <>
    <div class="pt-4 pb-2 title d-flex align-items-center">
            <h5 class="m-0">Trending this week</h5>
            <a class="font-weight-bold ml-auto" href="trending.html">
              View all <i class="feather-chevrons-right"></i>
            </a>
          </div>
          <div class="trending-slider">
            <Slider {...homePageTrandingSliderSetting}>
              {[1, 1, 1, 1, 1].map((data, index) => (
                <div>
                  <div class="osahan-slider-item">
                    <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div class="list-card-image">
                        <div class="star position-absolute">
                          <span class="badge badge-success">
                            <i class="feather-star"></i> 3.1 (300+)
                          </span>
                        </div>
                        <div class="favourite-heart text-danger position-absolute">
                          <a href="#">
                            <i class="feather-heart"></i>
                          </a>
                        </div>
                        <div class="member-plan position-absolute">
                          <span class="badge badge-dark">Promoted</span>
                        </div>
                        <a href="restaurant.html">
                          <img
                            alt="#"
                            src="img/trending1.png"
                            class="img-fluid item-img w-100"
                          />
                        </a>
                      </div>
                      <div class="p-3 position-relative">
                        <div class="list-card-body">
                          <h6 class="mb-1">
                            <a href="restaurant.html" class="text-black">
                              {index} Famous Dave's Bar-B-Que
                            </a>
                          </h6>
                          <p class="text-gray mb-3">
                            Vegetarian • Indian • Pure veg
                          </p>
                          <p class="text-gray mb-3 time">
                            <span class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                              <i class="feather-clock"></i> 15–30 min
                            </span>
                            <span class="float-right text-black-50">
                              {" "}
                              $350 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div class="list-card-badge">
                          <span class="badge badge-danger">OFFER</span>
                          <small> Use Coupon OSAHAN50</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          </>
  )
}

export default HomePageTrendingSlider