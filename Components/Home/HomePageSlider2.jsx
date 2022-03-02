import Slider from "react-slick";
import { homePagSlider2Setting } from "../../Data/HomePageData";

function HomePageSlider2() {
  return (
    <div class="bg-white">
    <div class="container">
      <div class="offer-slider">
        <Slider {...homePagSlider2Setting}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => (
            <div key={index} class="cat-item px-1 py-3">
              <a
                class="d-block text-center shadow-sm"
                href="trending.html"
              >
                <img
                  alt="#"
                  src="img/pro1.jpg"
                  class="img-fluid rounded"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
  )
}

export default HomePageSlider2