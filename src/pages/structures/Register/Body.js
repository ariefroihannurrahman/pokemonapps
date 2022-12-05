const Body = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3 text-center">
                    <h1>Daftar</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 offset-3">
                    <form>
                        <div class="form-outline mb-4">
                            <label class="form-label" for="name">Nama</label>
                            <input type="name" id="name" class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <label class="form-label" for="username">Nama Panggilan</label>
                            <input type="username" id="username" class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <label class="form-label" for="email">Alamat Email</label>
                            <input type="email" id="email" class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <label class="form-label" for="password">Password</label>
                            <input type="password" id="password" class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <label class="form-label" for="confirm">Konfirmasi Password</label>
                            <input type="confirm" id="confirm" class="form-control" />
                        </div>
                        <a href="/rs" class="btn btn-block mb-4 btn-form">Daftar</a>
                        <div class="row text-center">
                            <div className="col">
                                <p>Kembali ke beranda? <a href="/">Beranda</a></p>
                            </div>
                            <div className="col">
                                <p>Punya Akun? <a href="/login">Masuk</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Body;