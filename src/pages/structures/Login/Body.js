const Body = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3 text-center">
                    <h1>Masuk</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 offset-3 mt-3">
                    <form>
                        <div class="form-outline mb-4">
                            <label class="form-label" for="email">Alamat Email</label>
                            <input type="email" id="email" class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <label class="form-label" for="password">Password</label>
                            <input type="password" id="password" class="form-control" />
                        </div>
                        <div class="row mb-4">
                            <div class="col d-flex justify-content-center">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="remember"/>
                                    <label class="form-check-label" for="remember"> Ingat Saya </label>
                                </div>
                            </div>

                            <div class="col">
                            <a href="/pokemonapps/forgotpassword">Lupa password?</a>
                            </div>
                        </div>
                        <a href="/pokemonapps/ls" class="btn btn-block mb-4 btn-form">Masuk</a>
                        <div class="row text-center">
                            <div className="col">
                                <p>Kembali ke beranda? <a href="/pokemonapps">Beranda</a></p>
                            </div>
                            <div className="col">
                                <p>Bukan anggota? <a href="/pokemonapps/register">Daftar</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Body;