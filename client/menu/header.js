import React from 'react';
import auth from './../auth/auth-helper';
import socketIOClient from "socket.io-client";


class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checkAuthenticated: false,
            link: '',
            endpoint: 'http://localhost:3001/'
        }
        //socket = socketIOClient(this.state.endpoint);
    }

    componentDidMount() {
        if (auth.isAuthenticated()) {
            this.setState({ checkAuthenticated: true })
            const jwt = auth.isAuthenticated();
            this.setState({ link: jwt.user._id });
        } else {
            this.setState({ checkAuthenticated: false });
        }
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src="/client/assets/images/logo.png" className="img-responsive" /></a>
                    <a href="#" data-toggle="modal" data-target={this.state.checkAuthenticated ? "#account-setting" : "#signin"} className="mob-profile"><i className="fa fa-user-circle-o"
                        aria-hidden="true"></i></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09"
                        aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample09">
                        <ul className="navbar-nav ml-auto mr-lg-3">
                            <li className={this.props.path == '/' ? "nav-item active" : "nav-item"}>
                                <a href="/">Home <span className="sr-only">(current)</span></a>
                            </li >
                            <li className={this.props.path == '/about' ? "nav-item active" : "nav-item"}>
                                <a href="/about">ABOUT</a>
                            </li>
                            <li className={this.props.path == '/services' ? "nav-item active" : "nav-item"}>
                                <a href="/services">SERVICES</a>
                            </li>
                            <li className={this.props.path == '/studio' ? "nav-item active" : "nav-item"}>
                                <a href="/studio">STUDIOS</a>
                            </li>
                            <li className={this.props.path == '/meeting' ? "nav-item active" : "nav-item"}>
                                <a href="/meeting">MEETING</a>
                            </li>
                            <li className={this.props.path == '/news' ? "nav-item active" : "nav-item"}>
                                <a href="/news">NEWS</a>
                            </li>
                            {this.state.checkAuthenticated ? (<li className={this.props.path == '/network' ? "nav-item active" : "nav-item"}>
                                <a href="/network">NETWORK</a>
                            </li>) : ''}
                            {this.state.checkAuthenticated ? (<li className={this.props.path == '/my-page/' + auth.isAuthenticated().user._id ? "nav-item active" : "nav-item"}>
                                <a href={'/my-page/' + this.state.link}>MY PAGE</a>
                            </li>) : ''}

                            <li>
                                <a href="#" data-toggle="modal" data-target={this.state.checkAuthenticated ? "#account-setting" : "#signin"}><i className="fa fa-user-circle-o"
                                    aria-hidden="true"></i></a>
                            </li>

                            {/*<li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown09">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>*/}
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}
export {Header}