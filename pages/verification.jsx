function Verification() {
  return (
    <>
      <div className="osahan-signup login-page">
        <video loop  autoPlay={true}  muted id="vid"  playsInline>
            <source src="/img/bg.mp4" type="video/mp4" />
            <source src="/img/bg.mp4" type="video/ogg" />
            Your browser does not support the video tag.
         </video>
        <div className="d-flex align-items-center justify-content-center flex-column vh-100">
          <div className="px-5 col-md-6 ml-auto">
            <div className="px-5 col-10 mx-auto mb-4">
              <h2 className="mb-3">Verify your phone number</h2>
              <h6 className="text-black-50">Enter your OTP code here</h6>
              <form action="home.html">
                <div className="row my-5 mx-0 otp">
                  <div className="col pr-1 pl-0">
                    <input
                      type="text"
                      value="4"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col px-2">
                    <input
                      type="text"
                      value="0"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col px-2">
                    <input
                      type="text"
                      value="8"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col pl-1 pr-0">
                    <input
                      type="text"
                      value="0"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <button className="btn btn-lg btn-primary btn-block">
                  Verify Now
                </button>
              </form>
            </div>
            <div className="new-acc d-flex align-items-center justify-content-center">
              <a href="login.html">
                <p className="text-center m-0">Already an account? Sign in</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Verification;
