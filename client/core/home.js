import React, { Component } from 'react';
import { Header, socket } from './../menu/header';
import auth from './../auth/auth-helper'
import ContactList from '../chat/contact';
import Chat from '../chat/chat';
import Messages from '../chat/messages';


const SVG = () => {
    return (
        <div className="html-embed w-embed">
            <div className="heroblob">
                <svg x="0px" y="0px" viewBox="0 0 1120 900">
                    <g fill="white">
                        <lineargradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                            <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
                            <stop offset="100%" stop-color="#fff" stop-opacity="1"></stop>
                        </lineargradient>

                        <path fill="#PSgrad_0"
                            d="M 0 0 V 1000 H 1120 V 0 Z M 914.759 823.118 C 754.731 918.386 633.384 806.988 363.461 768.441 S 28.0226 453.735 201.712 287.374 s 461.29 -190.707 668.62 -58.7382 S 1074.79 727.85 914.759 823.118 Z">
                            <animate repeatCount="indefinite" attributeName="d" dur="15s"
                                values="M0,0V1000h1120V0ZM907.97,843.418C747.942,938.686,639.238,776.5,377.432,749.713S22.78,447.918,195.31,252.846s466.7-144.373,667.349-12.018S1068,748.15,907.97,843.418Z;
M0,0V1000h1120V0ZM907.97,803.489c-160.027,95.268-354.89-17.855-621.385-22.319S26.34,541.682,198.869,346.609,707.318,62.481,907.97,194.837,1068,708.222,907.97,803.489Z;
M0,0V1000h1120V0ZM935.412,761.36c-160.027,95.268-319.838,138.382-614.455,64.057s-276.985-353.987-99.769-433S666.018,60.752,893.676,191.544,1095.439,666.093,935.412,761.36Z;
M0,0V1000h1120V0ZM907.97,843.418C747.942,938.686,639.238,776.5,377.432,749.713S22.78,447.918,195.31,252.846s466.7-144.373,667.349-12.018S1068,748.15,907.97,843.418Z;">
                            </animate>
                        </path>
                    </g>
                </svg>
            </div>
        </div>
    );
}

const Video = () => {
    return (
        <div data-autoplay="true" data-loop="true" data-wf-ignore="true" className="hero-video-p w-background-video "
            autoplay="true">
            <video autoplay="true" loop="true" muted="true"
                playsinline="true" data-wf-ignore="true">
                <source src="/client/assets/video/vidz.mp4" data-wf-ignore="true" />
                <source src="/client/assets/video/vidz.mp4" data-wf-ignore="true" />
            </video>
        </div>
    );
}

const About = () => {
    return (
        <section className="padd-small">
            <div className="container text-center">

                <div className="heading-area">
                    <h1>ABOUT OC HIT ACADEMY</h1>
                    <div className="div-box"></div>

                </div>

                <div className="video-box">
                    <div className="row">
                        <div className="col-md-6 p-r">
                            <div className="v-container">
                                <iframe width="100%" className="video" height="315"
                                    src="https://www.youtube.com/embed/-QTNFALG3U0" frameborder="0"
                                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-6 p-l">
                            <div className="v-container">
                                <iframe width="100%" height="315" className="video"
                                    src="https://www.youtube.com/embed/8ACUmae79Z8" frameborder="0"
                                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>

                            </div>
                        </div>
                        <div className="col-md-6 p-r">
                            <div className="v-container">
                                <iframe width="100%" height="315" className="video"
                                    src="https://www.youtube.com/embed/gS1c3-iKwfk" frameborder="0"
                                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-6 p-l">
                            <div className="v-container">
                                <iframe width="100%" height="315" className="video"
                                    src="https://www.youtube.com/embed/J-dv_DcDD_A" frameborder="0"
                                    allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="bod">FOUNDED BY NO. 1 INTERNATIONAL RECORDING ARTIST THOMAS BARSOE, OC HIT ACADEMY HAS ESTABLISHED
                ITSELF AS AN INNOVATIVE MUSIC POWER HOUSE SPECIALIZING IN PRODUCTION AND ARTIST DEVELOPMENT.
                A SUBSIDIARY RECORD COMPANY TO SONY MUSIC GROUP, OC HIT ACADEMY IS A FULL-SERVICE FACILITY
                PROVIDING THE HIGHEST QUALITY SERVICES AVAILABLE, INCLUDING RECORDING, MIXING, MASTERING, MUSIC
                EDUCATION, AND OUR CRITICALLY ACCLAIMED SONGWRITING CAMPS. OUR GOAL IS TO DISCOVER, GUIDE, AND
                DEVELOP EXTRAORDINARY TALENTED SINGERS, BANDS, AND SONGWRITERS WHILE PREPARING THEM FOR A
                LIFE AND CAREER IN THE MUSIC INDUSTRY. OC HIT ACADEMY WORKS CLOSELY WITH MAJOR TV NETWORKS
                AND REGULARLY HOSTS AUDITIONS AND PROVIDES TALENT FOR SHOWS SUCH AS THE VOICE, AMERICAN IDOL,
                AMERICA'S GOT TALENT, THE FOUR, AND MAKING THE BAND (MTV).

			</p>

            </div>
        </section>

    );
}

const Gallery = () => {
    return (
        <section className="studio-gal padd-small">
            <div className="container-fluid">
                <h1>GALLERY</h1>
                <div className="imageGallery1">
                    <div id="studio-gal" className="owl-carousel owl-theme">
                        <div className="item"><a href="/client/assets/images/s1.jpg"><img src="/client/assets/images/s1.jpg" className="img-responsive" /></a></div>
                        <div className="item"><a href="/client/assets/images/s2.jpg"><img src="/client/assets/images/s2.jpg" className="img-responsive" /></a></div>
                        <div className="item"><a href="/client/assets/images/s3.jpg"><img src="/client/assets/images/s3.jpg" className="img-responsive" /></a></div>
                        <div className="item"><a href="/client/assets/images/s4.jpg"><img src="/client/assets/images/s4.jpg" className="img-responsive" /></a></div>
                        <div className="item"><a href="/client/assets/images/s5.jpg"><img src="/client/assets/images/s5.jpg" className="img-responsive" /></a></div>
                        <div className="item"><a href="/client/assets/images/s6.jpg"><img src="/client/assets/images/s6.jpg" className="img-responsive" /></a></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Talent = () => {
    return (
        <section className="studio-gal padd-small">
            <div className="container-fluid">
                <h1>Featured Talent</h1>
                <div className="imageGallery2">
                    <div id="featured-tal" className="owl-carousel owl-theme">
                        <div className="item"><a href="/client/assets/images/f1.jpg" title="ZHAVIA"><img src="/client/assets/images/f1.jpg"
                            className="img-responsive" /></a></div>
                        <div className="item"><a href="/client/assets/images/f2.jpg" title="JACQUIE"><img src="/client/assets/images/f2.jpg"
                            className="img-responsive" /></a></div>
                        <div className="item"><a href="/client/assets/images/f3.jpg" title="ROBBIE DEAN"><img src="/client/assets/images/f3.jpg"
                            className="img-responsive" /></a></div>
                        <div className="item"><a href="/client/assets/images/f4.jpg" title="JESSICA CABRAL"><img src="/client/assets/images/f4.jpg"
                            className="img-responsive" /></a></div>
                        <div className="item"><a href="/client/assets/images/f5.jpg" title="CLOI CRIDER"><img src="/client/assets/images/f5.jpg"
                            className="img-responsive" /></a></div>
                        <div className="item"><a href="/client/assets/images/f6.jpg" title="ELLIE SOUFI"><img src="/client/assets/images/f6.jpg"
                            className="img-responsive" /></a></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const MusicVideo = () => {
    return (
        <section className="studio-gal padd-small">
            <div className="container-fluid">
                <h1>MUSIC VIDEOS</h1>
                <div id="music-gal" className="owl-carousel owl-theme">
                    <div className="item"><a data-toggle="modal" data-target="#exampleModal" href="#"><img
                        src="/client/assets/images/thumb-1.jpg" className="img-responsive" /></a></div>
                    <div className="item"><a data-toggle="modal" data-target="#exampleModal" href="#"><img
                        src="/client/assets/images/thumb-2.jpg" className="img-responsive" /></a></div>
                    <div className="item"><a data-toggle="modal" data-target="#exampleModal" href="#"><img
                        src="/client/assets/images/thumb-3.jpg" className="img-responsive" /></a></div>

                </div>
                <div className="text-center">
                    <a href="#" className="watch-btn marg sp lg">THE TEAM</a><a href="#" className="watch-btn marg lg">CONTACT
					US</a>
                </div>
            </div>


        </section>
    );
}

const Service = () => {
    return (
        <section className="plans padd-t">
            <div className="container-fluid">
                <div className="heading-area">
                    <h1>SERVICES</h1>
                    <div className="div-box"></div>

                    <p>We offer group classes, artist development & songwriting camps, individual sessions <br />
					in-person as well as Zoom video sessions, EP & music video production</p>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <div className="session-box">
                            <img src="/client/assets/images/c1.jpg" className="img-responsive" />
                            <h2>GROUP SESSIONS</h2>
                            <p>Group classes, artist development & <br />
							songwriting camps
						</p>
                            <a href="#">BROWSE CLASSES</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="session-box">
                            <img src="/client/assets/images/c2.jpg" className="img-responsive" />
                            <h2>INDIVIDUAL SESSIONS</h2>
                            <p>Vocal, piano, guitar, music production,
                            career coaching & dance/performance
						</p>
                            <a href="#">BOOK A SESSION</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="session-box">
                            <img src="/client/assets/images/c3.jpg" className="img-responsive" />
                            <h2>PREMIUM PLANS</h2>
                            <p>For the ulitmate experience, join our
                            silver, gold or platinum plan
						</p>
                            <a href="#">PICK YOUR PLAN</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="session-box">
                            <img src="/client/assets/images/c4.jpg" className="img-responsive" />
                            <h2>PRODUCTION</h2>
                            <p>We provide world-class EP & Music video
                            production - contact us for details
						</p>
                            <a href="#">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Studio = () => {
    return (
        <section className="shadow-top padd">
            <div className="container-fluid">
                <div className="text-center studio">
                    <h1>STUDIOS</h1>
                    <div className="div-box"></div>
                    <p>Book/access a virtual Zoom studio or a real one at one of our locations</p>
                </div>
                <h2 className="text-center">VIRTUAL STUDIOS (ZOOM)</h2>
                <div id="virtual-st" className="owl-carousel owl-theme">


                    <div className="item">
                        <div className="v-box">
                            <h3>V-STUDIO 1</h3>
                            <img src="/client/assets/images/v1.jpg" className="img-responsive" />
                            <a href="#" className="book-now">BOOK NOW</a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="v-box">
                            <h3>V-STUDIO 2</h3>
                            <img src="/client/assets/images/v2.jpg" className="img-responsive" />
                            <a href="#" className="book-now">BOOK NOW</a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="v-box">
                            <h3>V-STUDIO 3</h3>
                            <img src="/client/assets/images/v3.jpg" className="img-responsive" />
                            <a href="#" className="book-now">BOOK NOW</a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="v-box">
                            <h3>V-STUDIO 4</h3>
                            <img src="/client/assets/images/v4.jpg" className="img-responsive" />
                            <a href="#" className="book-now">BOOK NOW</a>
                        </div>
                    </div>
                </div>
                <h2 className="text-center">VIRTUAL AUDITORIUMS (ZOOM)</h2>
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
                <div className="text-center"><a href="#" className="watch-btn marg">GO TO STUDIOS</a></div>
            </div>
        </section>
    );
}

const News = () => {
    return (
        <div className="container">
            <div className="heading-area">
                <h1>NEWS & PRESS</h1>
                <div className="div-box"></div>

                <p className="p-center">Book a virtual studio or auditorium for your next session or join an
			</p>
            </div>
        </div>
    );
}

const VideoNews = () => {
    return (
        <section className="video-section">
            <div className="container-fluid">
                <div className="heading-area">
                    <h1>30 JUNE, 2020</h1>
                    <div className="div-box"></div>
                    <h2>OCHA ARTIST ZHAVIA ACHIEVES PLATINUM STATUS</h2>

                    <p>For the single "Welcome To The Party", lead single from Deadpool 2 where she performed alongside
                    Diplo, French Montana & Lil Pump
				</p>
                    <a href="#" className="watch-btn">Watch the Video</a>
                </div>
            </div>
        </section>
    );
}

const MainNews = () => {
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

                                <p>For the single "Welcome To The Party", lead single from Deadpool 2 where she performed
                                alongside Diplo, French Montana & Lil Pump
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
        </section >
    );
}


const Instagram = () => {
    //access_token=747835755717033|03d55d810a52dad374ac7a538378e06d
    //IGQVJVb2oyWkR0S1dYOXVNUEpfMkpLdnc0cWJva1JxN2FEemNMSUNxd2tUVHZAuRnByTHZAFVkp1YklWdG1KeXdVMV9NYV9TNUxsTzFQQ1l5WU50aUwxcHg0UHJsNUpUOEJocEsyNEtLS0ktMGJBSDlVTQZDZD
    return (
        <section className="studio padd-small light">
            <div className="container-fluid">
                <h1>INSTAGRAM FEED</h1>
                {/*<div id="insta-feed" className="owl-carousel owl-theme">
                </div>*/}

                <div id="instafeed" class="instagram-gallery-medium"></div>
            </div>
        </section>
    );
}


const Press = () => {
    return (
        <section className="studio padd-small light">
            <div className="container-fluid">
                <h1>PRESS</h1>
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



const Modal = () => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">

                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="v-container">
                            <iframe width="100%" height="315" className="video" src="https://www.youtube.com/embed/8ACUmae79Z8"
                                frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

const ContactModal = () => {
    return (
        <div className="modal" id="user-box">
            <div className="modal-dialog modal-dialog-centered ex-small-box">
                <div className="modal-content">

                    <div className="modal-header">

                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body bg-white  e-small-m">
                        <img src="/client/assets/images/hut.png" className="hut-right" />
                        <img src="/client/assets/images/msg.png" className="msg-left" />
                        <img src="/client/assets/images/user-five-ring.png" className="f-ring" />
                        <h1>MARCUS MILES</h1>
                        <span>SINGER - SONGWRITER</span>
                        <a href="#">FOLLOWING</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CancelModal = () => {
    return (
        <div className="modal" id="cancel-box">
            <div className="modal-dialog modal-dialog-centered small-box">
                <div className="modal-content">

                    <div className="modal-header">

                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body bg-white  small-m">
                        <div className="adsf">
                            <b className="d-block text-center bold">Are you sure you wish to cancel?</b>
                            <div className="line3"></div>
                            <div className="btn-b">
                                <a href="#" className="outline-btn">NO - KEEP IT</a>
                                <a href="#" className="cancel-small">YES - CANCEL IT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            //message: [],
            //receiver: '',
            //sender: '',
            //name: '',
            //open: false,
            //userStatus: ''
        }
    }

    render() {
        return (
            <div>

                <Header
                    path={this.props.location.pathname}
                />

                <div id="top" data-w-id="5128ec97-a564-2394-6f85-7bcbf8a9391d" style={{ opacity: 1 }} className="hero-mask-pocket">
                    <img src="/client/assets/images/mask.svg" width="2356" height="750" alt="" className="hero-mask-img" />

                    <div className="caption-text">
                        <h1>DEVELOP YOUR <span>CREATIVITY</span><br />
                            EXPAND YOUR <span>NETWORK</span></h1>
                        <a onClick={this._viewMessage} href="#">Apply Now</a>
                    </div>

                    <SVG />

                    <Video />
                </div>

                <About />

                <Gallery />

                <Talent />

                <MusicVideo />

                <Service />

                <News />

                <VideoNews />

                <MainNews />

                <Instagram />

                <Modal />

                <ContactModal />

                <CancelModal />
            </div>
        );
    }
}


export default Home