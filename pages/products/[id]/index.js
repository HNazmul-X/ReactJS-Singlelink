import { useRouter } from "next/router";
import AllRatings from "../../../Components/AllRatings/AllRatings";
import DetailsBanner from "../../../Components/DetailsBanner/DetailsBanner";
import FeaturedItemsSlider from "../../../Components/FeaturedItemsSlider/FeaturedItemsSlider";
import ProductComment from "../../../Components/ProductComment/ProductComment";
import QuickBites from "../../../Components/QuickBites/QuickBites";
import RatingsBar from "../../../Components/RatingsBar/RatingsBar";
import SoupsItems from "../../../Components/SoupsItems/SoupsItems";
import StartersMenu from "../../../Components/StartersMenu/StartersMenu";
import ProductPay from './../../../Components/ProductPay/ProductPay';


const ProductDetails = () => {
  const router = useRouter()
  return (
    <>
      <DetailsBanner />
      <FeaturedItemsSlider />
      {/* <!-- Menu --> */}
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-8 pt-3">
            <div className="shadow-sm rounded bg-white mb-3 overflow-hidden">
              <div className="d-flex item-aligns-center">
                <p className="font-weight-bold h6 p-3 border-bottom mb-0 w-100">Menu</p>
                <a className="small text-primary font-weight-bold ml-auto" href="#">View all <i className="feather-chevrons-right"></i></a>
              </div>
              <QuickBites />
              <StartersMenu />
              <SoupsItems />
            </div>
            <div className="mb-3">
              <div id="ratings-and-reviews" className="bg-white shadow-sm d-flex align-items-center rounded p-3 mb-3 clearfix restaurant-detailed-star-rating">
                <h6 className="mb-0">Rate this Place</h6>
                <div className="star-rating ml-auto">
                  <div className="d-inline-block h6 m-0"><i className="feather-star text-warning"></i>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star"></i>
                  </div>
                  <b className="text-black ml-2">334</b>
                </div>
              </div>
              <RatingsBar />
              <AllRatings />
              <ProductComment />
            </div>
          </div>
          <div className="col-md-4 pt-3">
            <ProductPay />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;