import HomePageTopSlider from "./../Components/Home/HomePageTopSlider";
import HomePageSlider2 from "./../Components/Home/HomePageSlider2";
import HomePageTrendingSlider from "./../Components/Home/HomePageTrendingSlider";
import HomeMostPopular from "./../Components/Home/HomeMostPopular";
import HomeMostSale from "./../Components/Home/HomeMostSale";

export default function Home() {
  return (
    <>
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
        <HomePageTopSlider />
        <HomePageSlider2 />

        <div className="container">
          <HomePageTrendingSlider />
          <HomeMostPopular />
          <HomeMostSale />
        </div>
      </div>
    </>
  );
}
