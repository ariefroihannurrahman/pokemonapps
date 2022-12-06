import React from 'react';

const RegisterSuccess = () => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center mt-5'>
                        <img src={'https://modelsemarang.com/wp-content/uploads/2016/07/berhasil.png'} alt='Logo Berhasil'/>
                        <h1>Berhasil</h1>
                        <a href='/pokemonapps/login' className='col-4 btn btn-form'>Kembali Ke Login</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterSuccess;