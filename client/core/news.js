import React, { Component } from 'react';
import Header from './../menu/header';

const Headline = () => {
    return (
        <section className="video-section">
            <div className="container-fluid">
                <div className="heading-area">
                    <h1>30 JUNE, 2020</h1>
                    <div className="div-box"></div>
                    <h2>OCHA ARTIST ZHAVIA ACHIEVES PLATINUM STATUS</h2>

                    <p>For the single "Welcome To The Party", lead single from Deadpool 2 where she performed alongside Diplo, French  Montana & Lil Pump
		            </p>
                    <a href="#" data-toggle="modal" data-target="#exampleModal" className="watch-btn">Watch the Video</a>
                </div>
            </div>
        </section>
    );
}

const Feeds = () => {
    return (
        <section className="posts padd-both">
            <div className="container-fluid">

                <div id="owl-main" className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="box-img">
                            <img src="/client/assets/images/t1.jpg" className="img-responsive" />
                            <div className="heading-area">
                                <h6>29 JUNE, 2020</h6>
                                <div className="div-box"></div>
                                <h2>"DREAM WARRIOR" VIDEO OUT NOW!</h2>

                                <p>For the single "Welcome To The Party", lead single from Deadpool 2 where she performed alongside Diplo, French  Montana & Lil Pump
		</p>
                                <a href="#" className="watch-btn-small">Watch the Video</a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box-img black">
                            <img src="/client/assets/images/t2.jpg" className="img-responsive" />
                            <div className="heading-area">
                                <h6>28 JUNE, 2020</h6>
                                <div className="div-box"></div>
                                <h2>NEW BEAUX EP RELEASE <br />
                                    DATE SET FOR 7/31/20!</h2>

                                <p>Our uber-taented songbird Beaux is releasing her very first EP next monht!</p>
                                <a href="#" className="watch-btn-small">CHECK BEAUX’S PAGE</a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box-img">
                            <img src="/client/assets/images/t3.jpg" className="img-responsive" />
                            <div className="heading-area">
                                <h6>27 JUNE, 2020</h6>
                                <div className="div-box"></div>
                                <h2>OC HIT ACADEMY PARTNERS UP WITH SPOTIFY</h2>

                                <p>OCHA is strengthening its position as a leader


                                when it comes to new talent and music by


                                partnering with the biggest streaming service


                                in the world to provide exclusive first look


                                access to all new single releases on Spotify
		</p>
                                <a href="#" className="watch-btn-small">READ THE FULL STORY</a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box-img">
                            <img src="/client/assets/images/t4.jpg" className="img-responsive" />
                            <div className="heading-area">
                                <h6>24 JUNE, 2020</h6>
                                <div className="div-box"></div>
                                <h2>SUPERSTAR NE-YO JOINING OUR FALL CAMP</h2>

                                <p>Songwriter and artist extraordinaire Ne-Y


                                will be joining our exclusive cam in Augist -


                                only few spots left!
		</p>
                                <a href="#" className="watch-btn-small">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Instagram = () => {
    return (
        <section className="studio padd-small light">
            <div className="container-fluid">
                <div className=" m-tp">
                    <h1>INSTAGRAM FEED</h1>
                    <div className="line3"></div></div>
                <div id="insta-feed" className="owl-carousel owl-theme">
                    <div className="item"><img src="/client/assets/images/i1.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/i2.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/i3.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/i4.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/i5.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/i6.jpg" className="img-responsive" /></div>
                </div>
            </div>
        </section>
    );
}

const Press = () => {
    return (
        <section className="studio padd-small light">
            <div className="container-fluid">
                <div className=" m-tp">
                    <h1>PRESS</h1>
                    <div className="line3"></div></div>
                <div id="press" className="owl-carousel owl-theme">
                    <div className="item"><img src="/client/assets/images/p1.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/p2.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/p3.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/p4.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/p5.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/p6.jpg" className="img-responsive" /></div>
                </div>
            </div>
        </section>
    );
}

class News extends Component {
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
                <section className="padd-top">
                    <div className="container">
                        <div className="heading-area ex-spc">
                            <h1>NEWS</h1>
                            <div className="div-box"></div>
                        </div>
                    </div>
                </section>

                <Headline />

                <Feeds />

                <Instagram />

                <Press />



            </div>
        )
    }
}

export default News;