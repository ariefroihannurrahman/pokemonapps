const Body = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3 text-center">
                    <h1>Reset Password</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 offset-3 mt-3">
                    <form>
                        <small>Enter your email address and we'll send you an email with instructions to reset your password.</small>
                        <div class="form-outline mb-4 mt-4">
                            <label class="form-label" for="email">Email address</label>
                            <input type="email" id="email" class="form-control" />
                        </div>
                        <a href="/fs" class="btn btn-block mb-4 btn-form">Reset</a>
                        <div class="row text-center">
                            <div className="col-4">
                                <p>Back to home? <a href="/">Home</a></p>
                            </div>
                            <div className="col-4">
                                <p>Remember account? <a href="/login">Login</a></p>
                            </div>
                            <div className="col-4">
                                <p>Not a member? <a href="/register">Register</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Body;