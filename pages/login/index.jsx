import React from 'react';

const index = () => {
    return (
        <div className="login-page vh-100">
            <video src="/img/bg.mp4" loop autoPlay muted id="vid">
                Your browser does not support the video tag.
            </video>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="px-5 col-md-6 ml-auto">
                    <div className="px-5 col-10 mx-auto">
                        <h2 className="text-dark my-0">Welcome Back</h2>
                        <p className="text-50">Sign in to continue</p>
                        <form className="mt-5 mb-4" action="verification.html">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="text-dark">
                                    Email
                                </label>
                                <input type="email" placeholder="Enter Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="text-dark">
                                    Password
                                </label>
                                <input type="password" placeholder="Enter Password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button className="btn btn-primary btn-lg btn-block">SIGN IN</button>
                            <div className="py-2">
                                <button className="btn btn-lg btn-facebook btn-block">
                                    <i className="feather-facebook"></i> Connect with Facebook
                                </button>
                            </div>
                        </form>
                        <a href="forgot_password.html" className="text-decoration-none">
                            <p className="text-center">Forgot your password?</p>
                        </a>
                        <div className="d-flex align-items-center justify-content-center">
                            <a href="signup.html">
                                <p className="text-center m-0">Don&apos;t have an account? Sign up</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;