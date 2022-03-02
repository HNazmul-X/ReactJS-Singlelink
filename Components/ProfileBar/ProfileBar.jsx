;
import Link from "next/link";
import React from "react";

const ProfileBar = () => {
    return (
        <>
            <div className="bg-white rounded shadow-sm sticky_sidebar overflow-hidden">
                <a href="profile.html" className="">
                    <div className="d-flex align-items-center p-3">
                        <div className="left mr-3">
                            <img alt="#" src="/img/user1.jpg" className="rounded-circle" />
                        </div>
                        <div className="right">
                            <h6 className="mb-1 font-weight-bold">
                                Gurdeep Singh <i className="feather-check-circle text-success"></i>
                            </h6>
                            <p className="text-muted m-0 small">iamosahan@gmail.com</p>
                        </div>
                    </div>
                </a>
                <div className="osahan-credits d-flex align-items-center p-3 bg-light">
                    <p className="m-0">Accounts Credits</p>
                    <h5 className="m-0 ml-auto text-primary">$52.25</h5>
                </div>
                {/* <!-- profile-details --> */}
                <div className="bg-white profile-details">
                    <a data-toggle="modal" data-target="#paycard" className="d-flex w-100 align-items-center border-bottom p-3">
                        <div className="left mr-3">
                            <h6 className="font-weight-bold mb-1 text-dark">Payment Cards</h6>
                            <p className="small text-muted m-0">Add a credit or debit card</p>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0">
                                <i className="feather-chevron-right"></i>
                            </h6>
                        </div>
                    </a>
                    <a data-toggle="modal" data-target="#exampleModal" className="d-flex w-100 align-items-center border-bottom p-3">
                        <div className="left mr-3">
                            <h6 className="font-weight-bold mb-1 text-dark">Address</h6>
                            <p className="small text-muted m-0">Add or remove a delivery address</p>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0">
                                <i className="feather-chevron-right"></i>
                            </h6>
                        </div>
                    </a>
                    <a className="d-flex align-items-center border-bottom p-3" data-toggle="modal" data-target="#inviteModal">
                        <div className="left mr-3">
                            <h6 className="font-weight-bold mb-1">Refer Friends</h6>
                            <p className="small text-primary m-0">Get $10.00 FREE</p>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0">
                                <i className="feather-chevron-right"></i>
                            </h6>
                        </div>
                    </a>
                    <Link href="/faq">
                        <a className="d-flex w-100 align-items-center border-bottom px-3 py-4">
                            <div className="left mr-3">
                                <h6 className="font-weight-bold m-0 text-dark">
                                    <i className="feather-truck bg-danger text-white p-2 rounded-circle mr-2"></i> Delivery Support
                                </h6>
                            </div>
                            <div className="right ml-auto">
                                <h6 className="font-weight-bold m-0">
                                    <i className="feather-chevron-right"></i>
                                </h6>
                            </div>
                        </a>
                    </Link>
                    <Link href="/contacts">
                        <a className="d-flex w-100 align-items-center border-bottom px-3 py-4">
                            <div className="left mr-3">
                                <h6 className="font-weight-bold m-0 text-dark">
                                    <i className="feather-phone bg-primary text-white p-2 rounded-circle mr-2"></i> Contact
                                </h6>
                            </div>
                            <div className="right ml-auto">
                                <h6 className="font-weight-bold m-0">
                                    <i className="feather-chevron-right"></i>
                                </h6>
                            </div>
                        </a>
                    </Link>
                    <Link href="/terms">
                        <a className="d-flex w-100 align-items-center border-bottom px-3 py-4">
                            <div className="left mr-3">
                                <h6 className="font-weight-bold m-0 text-dark">
                                    <i className="feather-info bg-success text-white p-2 rounded-circle mr-2"></i> Term of use
                                </h6>
                            </div>
                            <div className="right ml-auto">
                                <h6 className="font-weight-bold m-0">
                                    <i className="feather-chevron-right"></i>
                                </h6>
                            </div>
                        </a>
                    </Link>
                    <Link href="/privacy">
                        <a className="d-flex w-100 align-items-center px-3 py-4">
                            <div className="left mr-3">
                                <h6 className="font-weight-bold m-0 text-dark">
                                    <i className="feather-lock bg-warning text-white p-2 rounded-circle mr-2"></i> Privacy policy
                                </h6>
                            </div>
                            <div className="right ml-auto">
                                <h6 className="font-weight-bold m-0">
                                    <i className="feather-chevron-right"></i>
                                </h6>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProfileBar;
