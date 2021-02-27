import React from 'react';
import auth from './../auth/auth-helper';




class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checkAuthenticated: false,
        }
        //socket = socketIOClient(this.state.endpoint);
    }

    componentDidMount() {
        if (auth.isAuthenticated()) {
            this.setState({ checkAuthenticated: true })
        } else {
            this.setState({ checkAuthenticated: false });
        }
    }

    render() {
        return (
            <footer>

                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>NAVIGATION</h2>
                            <ul className="list">
                                <li className={this.props.path == '/' ? "nav-item active" : "nav-item"}>
                                    <a href="/">Home <span className="sr-only">(current)</span></a>
                                </li >
                                <li className={this.props.path == '/about' ? "nav-item active" : "nav-item"}>
                                    <a href="/about">ABOUT</a>
                                </li>
                                {this.state.checkAuthenticated ? (<li className={this.props.path == '/studio' ? "nav-item active" : "nav-item"}>
                                    <a href="/studio">STUDIOS</a>
                                </li>) : ''}
                                {/*this.state.checkAuthenticated ? (<li className={this.props.path == '/meeting' ? "nav-item active" : "nav-item"}>
                                    <a href="/meeting">SESSION</a>
                                </li>) : ''*/}
                                <li className={this.props.path == '/news' ? "nav-item active" : "nav-item"}>
                                    <a href="/news">NEWS</a>
                                </li>
                                {this.state.checkAuthenticated ? (<li className={this.props.path == '/network' ? "nav-item active" : "nav-item"}>
                                    <a href="/network">NETWORK</a>
                                </li>) : ''}
                                {this.state.checkAuthenticated ? (<li className={this.props.path == '/my-page/' + auth.isAuthenticated().user._id ? "nav-item active" : "nav-item"}>
                                    <a href={'/my-page/' + this.state.link}>MY PAGE</a>
                                </li>) : ''}

                                {this.state.checkAuthenticated ? (<li>
                                    <a href="#" data-toggle="modal" data-target="#account-setting">MY ACCOUNT</a>
                                </li>) : ('')}
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

                                <li className={this.props.path == '/about' ? "nav-item active" : "nav-item"}>
                                    <a href="/about">ABOUT OC HIT ACADEMY</a></li>
                                <li className={this.props.path == '/contact' ? "nav-item active" : "nav-item"}>
                                    <a href="/contact">CONTACT US</a></li>

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