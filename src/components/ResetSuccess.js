import React from 'react';

const ResetSuccess = () => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center mt-5'>
                        <img src={'https://modelsemarang.com/wp-content/uploads/2016/07/berhasil.png'} alt='Logo Berhasil'/>
                        <h1>Berhasil</h1>
                        <Link href='/login' className='col-4 btn btn-form'>Kembali Ke login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResetSuccess;