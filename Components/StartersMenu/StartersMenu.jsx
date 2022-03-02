;
import React from "react";

const StartersMenu = () => {
    return (
        <>
            <div className="row m-0">
                <h6 className="p-3 m-0 bg-light w-100">
                    Starters <small className="text-black-50">3 ITEMS</small>
                </h6>
                <div className="col-md-12 px-0 border-top">
                    <div className="">
                        <div className="p-3 border-bottom menu-list">
                            <span className="float-right">
                                <a href="#" className="btn btn-outline-secondary btn-sm" data-toggle="modal" data-target="#extras">
                                    ADD
                                </a>
                            </span>
                            <div className="media">
                                <img alt="#" src="/img/starter1.jpg" className="mr-3 rounded-pill " />
                                <div className="media-body">
                                    <h6 className="mb-1">Chicken Tikka Sub </h6>
                                    <p className="text-muted mb-0">$250</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border-bottom menu-list">
                            <span className="float-right">
                                <a href="#" className="btn btn-outline-secondary btn-sm" data-toggle="modal" data-target="#extras">
                                    ADD
                                </a>
                            </span>
                            <div className="media">
                                <img alt="#" src="/img/starter2.jpg" className="mr-3 rounded-pill " />
                                <div className="media-body">
                                    <h6 className="mb-1">
                                        Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span>
                                    </h6>
                                    <p className="text-muted mb-0">$600</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border-bottom menu-list">
                            <span className="float-right">
                                <a href="#" className="btn btn-outline-secondary btn-sm" data-toggle="modal" data-target="#extras">
                                    ADD
                                </a>
                            </span>
                            <div className="media">
                                <img alt="#" src="/img/starter3.jpg" className="mr-3 rounded-pill " />
                                <div className="media-body">
                                    <h6 className="mb-1">
                                        Chicken Tikka Sub <span className="badge badge-success">Pure Veg</span>
                                    </h6>
                                    <p className="text-muted mb-0">$250</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartersMenu;
