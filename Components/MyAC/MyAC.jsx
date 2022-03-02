import React from "react";

const MyAC = () => {
  return (
    <>
      <div className="rounded shadow-sm p-4 bg-white">
        <h5 className="mb-4">My account</h5>
        <div id="edit_profile">
          <div>
            <form action="my_account.html">
              <div className="form-group">
                <label htmlFor="exampleInputName1">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1d"
                  value="Gurdeep"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  value="Singh"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputNumber1">Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputNumber1"
                  value="1234567890"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value="iamosahan@gmail.com"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
          <div className="additional">
            <div className="change_password my-3">
              <a
                href="forgot_password.html"
                className="p-3 border rounded bg-white btn d-flex align-items-center"
              >
                Change Password
                <i className="feather-arrow-right ml-auto"></i>
              </a>
            </div>
            <div className="deactivate_account">
              <a
                href="forgot_password.html"
                className="p-3 border rounded bg-white btn d-flex align-items-center"
              >
                Deactivate Account
                <i className="feather-arrow-right ml-auto"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAC;
