import React from 'react';





class Footer extends React.Component {

    render() {
        return (
            <footer>

                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>NAVIGATION</h2>
                            <ul className="list">
                                <li> <a href="index.html">HOME</a></li>
                                <li><a href="about.html">ABOUT</a></li>
                                <li><a href="services.html">SERVICES </a></li>
                                <li><a href="studio.html">STUDIOS</a></li>
                                <li><a href="news.html">NEWS</a></li>
                                <li><a href="network.html">NETWORK</a></li>
                                <li><a href="my-page.html">MY PAGE</a></li>
                                <li><a href="#">MY ACCOUNT</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 p-right">


                            <div className="footer-logo"><img src="/client/assets/images/logo.png" className="img-responsive" /></div>
                            <ul className="social-list">

                                <li><a href="#"><img src="/client/assets/images/facebook.png" className="img-responsive" /></a></li>
                                <li><a href="#"><img src="/client/assets/images/insta.png" className="img-responsive" /></a></li>
                                <li><a href="#"><img src="/client/assets/images/spotify.png" className="img-responsive" /></a></li>
                                <li><a href="#"><img src="/client/assets/images/twitter.png" className="img-responsive" /></a></li>
                                <li><a href="#"><img src="/client/assets/images/youtube.png" className="img-responsive" /></a></li>

                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h2>COMPANY INFO</h2>
                            <ul className="list">

                                <li><a href="#">ABOUT OCT HIT ACADEMY</a></li>
                                <li><a href="#">CONTACT US</a></li>

                            </ul>
                            <h2>ONLINE SERVICES</h2>
                            <ul className="list">

                                <li><a href="#">TERMS OF SERVICE</a></li>
                                <li><a href="#">PRIVACY POLICY</a></li>
                                <li><a href="#">FAQ</a></li>

                            </ul>

                        </div>
                    </div>
                </div>

            </footer>
        );
    }
}
export default Footer