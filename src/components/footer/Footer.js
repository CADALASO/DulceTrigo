import React from 'react';
import './Footer.css'


function Footer(){
    return(
        <footer>
            <div class="box-footer">
                <p>Políticas de privacidad | Términos y condiciones</p>
            </div>
            <div>
                <a href="https://es-la.facebook.com/" target='_blank'><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                <a href="https://co.pinterest.com/" target='_blank'><i class="fa-brands fa-pinterest"></i></a>
            </div>
        </footer>
    );
}
export default Footer;