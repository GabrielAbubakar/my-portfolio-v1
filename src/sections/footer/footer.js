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

                        <p>Talk about your next amazing idea.</p>
                        <a href="mailto:gabrielabudev@gmail.com" rel="noopener" >Send me an email</a>

                    </div>
                </div>
                <div className="footer__flex2">
                    <div className="footer__social">
                        <a href="#" target="_blank" rel="noreferrer" >LINKEDIN</a>
                        <a href="https://github.com/GabrielAbubakar" target="_blank" rel="noreferrer" >GITHUB</a>
                        <a href="https://twitter.com/GabeAbubakarr" target="_blank" rel="noreferrer" >TWITTER</a>
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