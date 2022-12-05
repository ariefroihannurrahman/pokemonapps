import useEmberKirim from "../utils/useEmberKirim";

const ContactMe = () => {
  const getOpen = useEmberKirim((state)=>state.isOpen);
  const toggle = useEmberKirim((state)=>state.toggleOpen);

  return(
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h3>Hubungi Kami</h3>
        </div>
      </div>
      <div className='row'>
        <div className="col-4 mt-3">
          <label class="form-label" for="email">Alamat Email</label>
          <input type="email" id="email" class="form-control" />
        </div>
      </div>
      <div className='row'>
        <div className="col-4 mt-3">
          <label class="form-label" for="pesan">Pesan</label>
          <textarea rows="7" id="pesan" class="form-control" />
        </div>
      </div>
      <button onClick={toggle} className="btn btn-form mt-4 kirim">Kirim</button>
      {
        getOpen ? (<p className="pesan-terkirim mt-3">Pesan Terkirim!</p>) : ""
      }
    </div>
  );
}

export default ContactMe;