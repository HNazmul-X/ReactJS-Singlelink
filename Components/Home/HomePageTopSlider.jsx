
import { homePageBanner1Setting } from './../../Data/HomePageData';
import Slider from "react-slick";

function HomePageTopSlider() {
  return (
    <div className="container">
          <div className="cat-slider">
            <Slider {...homePageBanner1Setting}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                (data, index) => (
                  <div className="cat-item px-1 py-3">
                    <a
                      className="bg-white rounded d-block p-2 text-center shadow-sm"
                      href="trending.html"
                    >
                      <img
                        alt="#"
                        src="img/icons/Fries.png"
                        className="img-fluid mb-2"
                      />
                      <p className="m-0 small">Fries</p>
                    </a>
                  </div>
                )
              )}
            </Slider>           
          </div>
        </div>
  )
}

export default HomePageTopSlider