;

function MostSaleSingleCard() {
    return (
        <div className="col-md-4 mb-3">
            <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
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
                        <img alt="#" src="img/sales3.png" className="img-fluid item-img w-100" />
                    </a>
                </div>
                <div className="p-3 position-relative">
                    <div className="list-card-body">
                        <h6 className="mb-1">
                            <a href="restaurant.html" className="text-black">
                                The osahan Restaurant
                            </a>
                        </h6>
                        <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                        <p className="text-gray mb-3 time">
                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                <i className="feather-clock"></i> 15–25 min
                            </span>
                            <span className="float-right text-black-50">$500 FOR TWO</span>
                        </p>
                    </div>
                    <div className="list-card-badge">
                        <span className="badge badge-danger">OFFER</span>
                        <small>65% OSAHAN50</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MostSaleSingleCard;
