import React from 'react';
import Logo from '../../../components/Logo';
import LoginButton from '../../../components/LoginButton';

const Header = () => {
    return(
        <>
            <header>
                <div className='fluid-container'>
                    <div className='row'>
                        <div className='col'>
                            <Logo />
                        </div>
                        <div className='col'>
                            <LoginButton />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;