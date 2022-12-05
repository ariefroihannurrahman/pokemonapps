import React from "react";

const Footer = () => {
    return(
        <footer>
            <div className='footer'>
                <div className='footer-logo center'>
                    <a href="http://if.uinsgd.ac.id/">
                        <img src='http://if.uinsgd.ac.id/wp-content/uploads/2016/08/h4.png' alt="Logo Informatika UIN Bandung"/>
                    </a>
                    <p>The href attribute is required for an anchor to be keyboard accessible.</p>
                </div>
                <ul className='footer-list'>
                    <li>Layanan</li>
                    <li>Hubungi Kami</li>
                    <li>Bantuan</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;