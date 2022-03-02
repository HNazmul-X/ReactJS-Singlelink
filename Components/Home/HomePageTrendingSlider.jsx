;
import Slider from "react-slick";
import { homePageTrandingSliderSetting } from "./../../Data/HomePageData";

function HomePageTrendingSlider() {
    return (
        <>
            <div className="pt-4 pb-2 title d-flex align-items-center">
                <h5 className="m-0">Trending this week</h5>
                <a className="font-weight-bold ml-auto" href="trending.html">
                    View all <i className="feather-chevrons-right"></i>
                </a>
            </div>
            <div className="trending-slider">
                <Slider {...homePageTrandingSliderSetting}>
                    {[1, 1, 1, 1, 1].map((data, index) => (
                        <div key={index}>
                            <div className="osahan-slider-item">
                                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-img">
                                        <div className="star position-absolute">
                                            <span className="badge badge-success">
                                                <i className="feather-star"></i> 3.1 (300+)
                                            </span>
                                        </div>
                                        <div className="favourite-heart text-danger position-absolute">
                                            <a href="#">
                                                <i className="feather-heart"></i>
                                            </a>
                                        </div>
                                        <div className="member-plan position-absolute">
                                            <span className="badge badge-dark">Promoted</span>
                                        </div>
                                        <a href="restaurant.html">
                                            <img alt="#" src="img/trending1.png" className="img-fluid item-img w-100" />
                                        </a>
                                    </div>
                                    <div className="p-3 position-relative">
                                        <div className="list-card-body">
                                            <h6 className="mb-1">
                                                <a href="restaurant.html" className="text-black">
                                                    {index} Famous Dave&apos;s Bar-B-Que
                                                </a>
                                            </h6>
                                            <p className="text-gray mb-3">Vegetarian • Indian • Pure veg</p>
                                            <p className="text-gray mb-3 time">
                                                <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                                    <i className="feather-clock"></i> 15–30 min
                                                </span>
                                                <span className="float-right text-black-50"> $350 FOR TWO</span>
                                            </p>
                                        </div>
                                        <div className="list-card-badge">
                                            <span className="badge badge-danger">OFFER</span>
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
    );
}

export default HomePageTrendingSlider;
