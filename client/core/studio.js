import React, { Component } from 'react';
import { Header } from './../menu/header';


const Studios = () => {
    return (
        <section className="padd-b padd-top">
            <div className="container-fluid">
                <div className="text-center studio">
                    <h1>STUDIOS</h1>
                    <div className="div-box"></div>
                    <p>Book or access a virtual Zoom “studio” or a real one at one of our locations</p>
                </div>
                <div className="text-center st-head">
                    <h2 className="text-center">VIRTUAL STUDIOS</h2>
                    <span>(ZOOM VIDEO MEETING - UP TO 10 PEOPLE)</span>
                    <div className="line2"></div>
                </div>
                <div id="v-studio" className="owl-carousel owl-theme">


                    <div className="item">
                        <div className="v-box">
                            <h3>V-STUDIO 1</h3>
                            <div className="request-box">
                                <img src="/client/assets/images/v1.jpg" className="img-responsive" />
                                <div className="request-text animate__animated animate__fadeIn">
                                    <h5>SESSION IN PROGRESS</h5>
                                    <a href="#" className="book-now">REQUEST ACCESS</a>
                                </div>
                            </div>
                            <a href="#" data-toggle="modal" data-target="#v-st" className="book-now">BOOK NOW</a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="v-box">
                            <h3>V-STUDIO 2</h3>
                            <div className="request-box">
                                <img src="/client/assets/images/v2.jpg" className="img-responsive" />
                                <div className="request-text animate__animated animate__fadeIn">
                                    <h5>SESSION IN PROGRESS</h5>
                                    <a href="#" className="book-now">REQUEST ACCESS</a>
                                </div>
                            </div>
                            <a href="#" className="book-now">BOOK NOW</a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="v-box">
                            <h3>V-STUDIO 3</h3>
                            <div className="request-box">
                                <img src="/client/assets/images/v3.jpg" className="img-responsive" />
                                <div className="request-text animate__animated animate__fadeIn">
                                    <h5>SESSION IN PROGRESS</h5>
                                    <a href="#" className="book-now">REQUEST ACCESS</a>
                                </div>
                            </div>
                            <a href="#" className="book-now">BOOK NOW</a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="v-box">
                            <h3>V-STUDIO 4</h3>
                            <div className="request-box">
                                <img src="/client/assets/images/v4.jpg" className="img-responsive" />
                                <div className="request-text animate__animated animate__fadeIn">
                                    <h5>SESSION IN PROGRESS</h5>
                                    <a href="#" className="book-now">REQUEST ACCESS</a>
                                </div>
                            </div>
                            <a href="#" className="book-now">BOOK NOW</a>
                        </div>
                    </div>
                </div>


                <div className="text-center st-head">
                    <h2 className="text-center">VIRTUAL AUDITORIUMS (ZOOM)</h2>
                    <span>(ZOOM VIDEO MEETING - UP TO 500 PEOPLE)</span>
                    <div className="line2"></div>
                </div>
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-3">
                        <div className="v-box">
                            <h3>V-HALL 1</h3>
                            <img src="/client/assets/images/vh1.jpg" className="img-responsive" />
                            <a href="#" className="book-now">BOOK NOW</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="v-box">
                            <h3>V-HALL 2</h3>
                            <img src="/client/assets/images/vh2.jpg" className="img-responsive" />
                            <a href="#" className="book-now">BOOK NOW</a>
                        </div>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>

                <div className="text-center rs">
                    <h1>RECORDING STUDIOS</h1>
                    <p>(TUSTIN, ORANGE COUNTY, USA & COPENHAGEN, DENMARK)</p>
                    <div className="line2"></div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="v-box n-f">
                            <h3>OC STUDIO 1</h3>
                            <img src="/client/assets/images/r1.jpg" className="img-responsive" />
                            <a href="#" className="book-now">BOOK NOW</a>
                            <span>(3 CREDits per hour)</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="v-box n-f">
                            <h3>OC STUDIO 2</h3>
                            <img src="/client/assets/images/r2.jpg" className="img-responsive" />
                            <a href="#" className="book-now">BOOK NOW</a>
                            <span>(2 CREDits per hour)</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="v-box n-f">
                            <h3>OC STUDIO 3</h3>
                            <img src="/client/assets/images/r3.jpg" className="img-responsive" />
                            <a href="#" className="book-now">BOOK NOW</a>
                            <span>(2 CREDits per hour)</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="v-box n-f">
                            <h3>DK STUDIO 1</h3>
                            <img src="/client/assets/images/r4.jpg" className="img-responsive" />
                            <a href="#" className="book-now">BOOK NOW</a>
                            <span>(3 CREDits per hour)</span>
                        </div>
                    </div>
                </div>
                <p className="text-center">If you have any questions regarding studio bookings, don’t hesitate to contact us by clicking the button below.</p>
                <div className="text-center"><a href="#" className="watch-btn marg m-s">CONTACT US</a></div>
            </div>
        </section>
    );
}


class Studio extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }


    }


    render() {
        return (
            <div>

                <Header
                    path={this.props.location.pathname}
                />

                <Studios />



            </div>
        )
    }
}

export default Studio;