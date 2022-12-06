const Body = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3 text-center">
                    <h1>Ubah Password</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 offset-3 mt-3">
                    <form>
                        <small>Masukkan alamat email Anda dan kami akan mengirimkan email berisi instruksi untuk mereset kata sandi Anda.</small>
                        <div class="form-outline mb-4 mt-4">
                            <label class="form-label" for="email">Alamat Email</label>
                            <input type="email" id="email" class="form-control" />
                        </div>
                        <a href="/pokemonapps/fs" class="btn btn-block mb-4 btn-form">Ubah</a>
                        <div class="row text-center">
                            <div className="col-4">
                                <p>Kembali ke beranda? <a href="/pokemonapps">Beranda</a></p>
                            </div>
                            <div className="col-4">
                                <p>Ingat akun? <a href="/pokemonapps/login">Masuk</a></p>
                            </div>
                            <div className="col-4">
                                <p>Bukan member? <a href="/pokemonapps/register">Daftar</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Body;