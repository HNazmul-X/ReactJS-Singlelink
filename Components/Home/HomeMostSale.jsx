import React from 'react'
import MostSaleSingleCard from './MostSaleSingleCard';

function HomeMostSale() {
  return (
    <>
 <div className="pt-2 pb-3 title d-flex align-items-center">
            <h5 className="m-0">Most sales</h5>
            <a className="font-weight-bold ml-auto" href="#">
              26 places <i className="feather-chevrons-right"></i>
            </a>
          </div>
          <div className="most_sale">
            <div className="row mb-3">
              {[1, 2, 3].map((data, index) => (
                <MostSaleSingleCard key={index} />
              ))}
            </div>
          </div>
    </>
  )
}

export default HomeMostSale