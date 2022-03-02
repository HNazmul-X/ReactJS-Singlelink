import MostPopularSingleCard from "./MostPopularSingleCard";
const mostPopularData = [1, 2, 3, 4, 4, 4, 4, 4];

function HomeMostPopular() {
  return (
    <>
      <div className="py-3 title d-flex align-items-center">
        <h5 className="m-0">Most popular</h5>
        <a className="font-weight-bold ml-auto" href="most_popular.html">
          26 places <i className="feather-chevrons-right"></i>
        </a>
      </div>
      <div className="most_popular">
        <div className="row">
          {mostPopularData.map((data, index) => (
            <MostPopularSingleCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeMostPopular;
