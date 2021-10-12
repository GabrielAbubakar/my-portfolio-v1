import React from "react";
import './footer.scss';
import Heading from "../../components/heading/heading";

const Footer = () => {

    return (

        <footer className="footer">
            
            <Heading title="Connect." name="connect"/>
            <div className="footer__body">

                <div className="footer__flex">
                    <div className="footer__content">

                        <p>Lets talk about your next amazing idea.</p>
                        <a href="#" rel="noopener" >Send me an email</a>

                    </div>
                </div>
                <div className="footer__flex2">
                    <div className="footer__social">
                        <a href="#" target="_blank" rel="noopener" >LINKEDIN</a>
                        <a href="#" target="_blank" rel="noopener" >GITHUB</a>
                        <a href="#" target="_blank" rel="noopener" >TWITTER</a>
                    </div>
                    <p>
                        &copy; 2021 by GABRIEL ABUBAKAR.
                    </p>
                </div>
            </div>

        </footer>

    )
}

export default Footer;