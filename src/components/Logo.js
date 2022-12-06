import React from 'react';

const Logo = () => {
    return(
        <>
            <Link href='/pokemonapps'>
                <img className='pokemon-logo' alt='Pokemon Logo' src='https://vignette.wikia.nocookie.net/logopedia/images/2/27/Pok%C3%A9mon_GO_Favicon.svg/revision/latest/scale-to-width-down/480?cb=20161018084823' />
            </Link>
        </>
    );
}

export default Logo;