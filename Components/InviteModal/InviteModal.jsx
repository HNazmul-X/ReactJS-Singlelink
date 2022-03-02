;
import React from "react";

const InviteModal = () => {
    return (
        <>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h5 className="modal-title font-weight-bold text-dark">Invite</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body py-0">
                        <button className="btn btn-light text-primary btn-sm">
                            <i className="feather-plus"></i>
                        </button>
                        <span className="ml-2 smal text-primary">Send an invite to a friend</span>
                        <p className="mt-3 small">Invited friends (2)</p>
                        <div className="d-flex align-items-center mb-3">
                            <div className="mr-3">
                                <img alt="#" src="img/user1.jpg" className="img-fluid rounded-circle" />
                            </div>
                            <div>
                                <p className="small font-weight-bold text-dark mb-0">Kate Simpson</p>
                                <p className="mb-0 small">katesimpson@outbook.com</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className="mr-3">
                                <img alt="#" src="img/user2.png" className="img-fluid rounded-circle" />
                            </div>
                            <div>
                                <p className="small font-weight-bold text-dark mb-0">Andrew Smith</p>
                                <p className="mb-0 small">andrewsmith@ui8.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-0"></div>
                </div>
            </div>
        </>
    );
};

export default InviteModal;
