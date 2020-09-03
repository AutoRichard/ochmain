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
    return (
        <section className="studio padd-small light">
            <div className="container-fluid">
                <h1>INSTAGRAM FEED</h1>
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

const Network = () => {
    return (
        <section className="network padd-b">
            <div className="container-fluid">
                <div className="heading-area">
                    <h1>NETWORK</h1>
                    <div className="div-box"></div>


                </div>
            </div>
        </section>
    );
}






class Profile extends Component {

    constructor(props){
        super(props)

        this.state = {
            check: false,
            receiver: ''
        }
    }

    parentOpenChat = (data) => {
    this.props._parentOpenChat(data)
    }

    componentDidMount(){
        if (auth.isAuthenticated()) {
            this.setState({check: true});            
        }
    }

    parentViewMessageArea = (data) => {
        this.props.__parentOpenChat(data)   
    }

    componentDidUpdate(prevProps) {
        if (this.props.receiver !== prevProps.receiver) {
            this.setState({receiver: this.props.receiver})
        }
    }
    

    
    render(){
        return (
            <section className="grey">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 padd-right">
                            <div className="white-box">
                                <div className="user-box">
                                    <img src="/client/assets/images/user-bg.png" className="img-responsive bod" />
                                    <img src="/client/assets/images/user-dp.png" className="img-dp" />
                                </div>
                                <div className="h-area">
                                    <h2>BEAUX</h2>
                                    <h3> SINGER - SONGWRITER</h3>
                                    <p>JOINED JUNE 2018</p>
                                </div>
                            </div>
    
                            <div className="white-box clearfix">
                                <h2 className="in-h">PAGES YOU MAY LIKE</h2>
                                <div className="line3 text-left"></div>
                                <div className="likes-section new">
                                    <div className="img-area clearfix">
                                        <img src="/client/assets/images/mic.png" className="img-responsive circled" />
                                        <div className="cont">
                                            <b>Vocal Recording</b>
    
                                            <p>Studio Techniques</p>
                                        </div>
    
                                    </div>
                                    <div className="img-area clearfix">
                                        <img src="/client/assets/images/filez.png" className="img-responsive circled" />
                                        <div className="cont">
                                            <b>ASCAP vs BMI</b>
    
                                            <p>Music Business</p>
                                        </div>
    
                                    </div>
                                    <div className="img-area clearfix">
                                        <img src="/client/assets/images/filez.png" className="img-responsive circled" />
                                        <div className="cont">
                                            <b>10 Careers In Music</b>
    
                                            <p>Music Business</p>
                                        </div>
    
                                    </div>
                                    <div className="img-area clearfix">
                                        <img src="/client/assets/images/headphone.png" className="img-responsive circled" />
                                        <div className="cont">
                                            <b>Spotify Playlists</b>
    
                                            <p>Social Media</p>
                                        </div>
    
                                    </div>
    
    
                                </div> <a href="" className="btn-spc"><i className="fa fa-ellipsis-h" aria-hidden="true"></i> See More
                                Pages</a>
                            </div>
    
                            {this.state.check === true ?
                            (<ContactList
                            receiver={this.state.receiver}
                            _openChat={this.parentOpenChat}                            
                            />) : ''}
                        </div>
    
                        <div className="col-md-12 col-lg-6 padd-both">
    
    
                            <div className="white-box clearfix">
    
                                <div className="left-img">
    
                                    <img src="/client/assets/images/user-two.png" className="img-responsive circled no-b" />
    
                                </div>
                                <div className="right-content">
                                    <div className="search-area">
                                        <input type="text" placeholder="Share your thoughts and your music..." />
    
                                        <div className="button-wrap btn">
                                            <label className="new-button" for="upload1"> <img src="/client/assets/images/pic-up.png"
                                                className="img-responsive upload" />
                                                <input id="upload1" type="file" />
                                            </label>
                                        </div>
    
                                    </div>
                                </div>
    
                            </div>
                            <div className="white-box clearfix">
    
                                <div className="left-img">
    
                                    <img src="/client/assets/images/elif.png" className="img-responsive circled no-b" />
    
                                </div>
                                <div className="right-content position-relative">
                                    <b>Ellie Soufl</b>
                                    <span>5 min ago</span>
                                    <div className="dots-a">
                                        <div className="dropdown-share">
                                            <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
                                            <div className="dropdown-share-content">
                                                <b><a href="#">Hide Post</a></b>
                                                <p>Remove this post from your feed</p>
    
                                                <b><a href="#">Unfollow Ellie Soufi</a></b>
                                                <p>Stop seeing Ellie’s posts but stay connected</p>
    
                                                <b><a href="#">Report Post</a></b>
                                                <p>Something about this post concerns me</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="desc-box">
                                    <p>Really proud of this collabo with @robbiedean_ - we wrote it on a Sunday afternoon
    
                                    when we were just sitting in the sun contemplating the mysteries of the universe and
    
                                    our role in it - let me know what you guys think! <br />
    
    
                                    #feelsosmall #gottabesomeoneoutthere</p>
    
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"
                                        frameBorder="0">
                                    </iframe>
    
                                    <ul className="comments-area-two clearfix">
                                        <li><a href="#" className="like-btn"></a> <a href="javascript:void(0)" id="msg-bar"><img
                                            src="/client/assets/images/msg-right.png" className="img-responsive m-r" /> You and 267 others
                                            liked this</a></li>
    
                                        <li>
                                            <div className="dropdown-share">
                                                <span><img src="/client/assets/images/f-share.png" className="img-responsive share" /></span>
                                                <div className="dropdown-share-content">
                                                    <b><a href="#">Share Now</a></b>
                                                    <p>Instantly post to your content feed</p>
    
                                                    <b><a href="#">Write Post</a></b>
                                                    <p>Write new post based on this post</p>
    
                                                    <b><a href="#">Send As Direct Message</a></b>
                                                    <p>Send to one or more contacts directly </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="msg-area clearfix">
                                        <div className="left-img">
    
                                            <img src="/client/assets/images/user-two.png" className="img-responsive circled no-b" />
    
                                        </div>
                                        <div className="right-content">
                                            <div className="search-area">
                                                <input type="text" placeholder="Be the first to write a comment..." />
    
                                                <div className="button-wrap btn">
                                                    <label className="new-button" for="upload2"> <img src="/client/assets/images/pic-up.png"
                                                        className="img-responsive upload" />
                                                        <input id="upload2" type="file" />
                                                    </label></div>
                                                <a className="smly"><i className="fa fa-smile-o" aria-hidden="true"></i></a>
    
                                            </div>
                                        </div>
                                    </div>
                                    <p className="p-b"><b>robbiedean</b> So proud of this record! Let’s write another one!</p>
                                    <a className="grey" href="#">View all 6 comments</a>
                                </div>
                            </div>
    
                            <div className="white-box clearfix">
    
                                <div className="left-img">
    
                                    <img src="/client/assets/images/elif.png" className="img-responsive circled no-b" />
    
                                </div>
                                <div className="right-content position-relative">
                                    <b>Ellie Soufl</b>
                                    <span>5 min ago</span>
                                    <div className="dots-a">
                                        <div className="dropdown-share">
                                            <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
                                            <div className="dropdown-share-content">
                                                <b><a href="#">Hide Post</a></b>
                                                <p>Remove this post from your feed</p>
    
                                                <b><a href="#">Unfollow Ellie Soufi</a></b>
                                                <p>Stop seeing Ellie’s posts but stay connected</p>
    
                                                <b><a href="#">Report Post</a></b>
                                                <p>Something about this post concerns me</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="desc-box">
                                    <p>Looking for a really talented guitarist to play on my next single!! DM me for details!
                                    <br />
    
                                    #needguitarist #nextsingle</p>
    
    
                                    <ul className="comments-area-two clearfix">
                                        <li><a href="#" className="like-btn"></a> <a href="#"><img src="/client/assets/images/msg-right.png"
                                            className="img-responsive m-r" /> You and 267 others liked this</a></li>
    
                                        <li>
                                            <div className="dropdown-share">
                                                <span><img src="/client/assets/images/f-share.png" className="img-responsive share" /></span>
                                                <div className="dropdown-share-content">
                                                    <b><a href="#">Share Now</a></b>
                                                    <p>Instantly post to your content feed</p>
    
                                                    <b><a href="#">Write Post</a></b>
                                                    <p>Write new post based on this post</p>
    
                                                    <b><a href="#">Send As Direct Message</a></b>
                                                    <p>Send to one or more contacts directly </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
    
    
                                </div>
                                <div className="clearfix"></div>
                                <div className="left-img">
    
                                    <img src="/client/assets/images/user-two.png" className="img-responsive circled no-b" />
    
                                </div>
                                <div className="right-content">
                                    <div className="search-area">
                                        <input type="text" placeholder="Be the first to write a comment..." />
    
                                        <div className="button-wrap btn">
                                            <label className="new-button" for="upload3"> <img src="/client/assets/images/pic-up.png"
                                                className="img-responsive upload" />
                                                <input id="upload3" type="file" />
                                            </label>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
    
                            <div className="white-box clearfix">
    
                                <div className="left-img">
    
                                    <img src="/client/assets/images/oct-hit.png" className="img-responsive circled no-b" />
    
                                </div>
                                <div className="right-content position-relative">
                                    <b>OC Hit Academy</b>
                                    <span>5 min ago</span>
                                    <div className="dots-a">
                                        <div className="dropdown-share">
                                            <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
                                            <div className="dropdown-share-content">
                                                <b><a href="#">Hide Post</a></b>
                                                <p>Remove this post from your feed</p>
    
                                                <b><a href="#">Unfollow Ellie Soufi</a></b>
                                                <p>Stop seeing Ellie’s posts but stay connected</p>
    
                                                <b><a href="#">Report Post</a></b>
                                                <p>Something about this post concerns me</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="desc-box">
                                    <p>Signups for our August songwriting camp with superstar guest Ne-Yo is now open!<br />
    
                                    CLICK HERE to reserve your spot! Very limited availability!<br />
    
    
                                    #needguitarist #nextsingle</p>
    
    
                                    <ul className="comments-area-two clearfix">
                                        <li><a href="#" className="like-btn"></a> <a href="#"><img src="/client/assets/images/msg-right.png"
                                            className="img-responsive m-r" /> You and 267 others liked this</a></li>
    
                                        <li>
                                            <div className="dropdown-share">
                                                <span><img src="/client/assets/images/f-share.png" className="img-responsive share" /></span>
                                                <div className="dropdown-share-content">
                                                    <b><a href="#">Share Now</a></b>
                                                    <p>Instantly post to your content feed</p>
    
                                                    <b><a href="#">Write Post</a></b>
                                                    <p>Write new post based on this post</p>
    
                                                    <b><a href="#">Send As Direct Message</a></b>
                                                    <p>Send to one or more contacts directly </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
    
    
                                </div>
                                <div className="clearfix"></div>
                                <div className="left-img">
    
                                    <img src="/client/assets/images/user-two.png" className="img-responsive circled no-b" />
    
                                </div>
                                <div className="right-content">
                                    <div className="search-area">
                                        <input type="text" placeholder="Be the first to write a comment..." />
    
                                        <div className="button-wrap btn">
                                            <label className="new-button" for="upload4"> <img src="/client/assets/images/pic-up.png"
                                                className="img-responsive upload" />
                                                <input id="upload4" type="file" />
                                            </label>
    
                                        </div>
                                    </div>
                                </div>
                            </div>
    
    
                        </div>
                        <div className="col-lg-3 col-md-12 padd-left">
                            <div className="white-box">
                                <h2 className="in-h">RECENT NOTIFICATIONS</h2>
                                <div className="line3 text-left"></div>
                                <div className="likes-section new">
    
    
    
                                    <div className="img-area clearfix">
                                        <div className="img-c">
                                            <img src="/client/assets/images/user-four.png" className="img-responsive circled" />
                                            <span className="status"></span>
                                        </div>
                                        <div className="cont w-100">
                                            <b>Thomas Barsoe sent you</b>
    
                                            <p>a message</p><span>35 min ago</span>
                                        </div>
    
                                    </div>
                                    <div className="img-area clearfix">
                                        <div className="img-c">
                                            <img src="/client/assets/images/user-five.png" className="img-responsive circled" />
                                            <span className="status red"></span>
                                        </div>
                                        <div className="cont w-100">
                                            <b>Marcus Miles sent you</b>
    
                                            <p>a message</p><span>56 mins ago</span>
                                        </div>
    
                                    </div>
    
                                    <div className="img-area clearfix">
                                        <div className="img-c">
                                            <img src="/client/assets/images/elif.png" className="img-responsive circled" />
                                            <span className="status"></span>
                                        </div>
                                        <div className="cont w-100">
                                            <b>Ellie Soufi invited you</b>
    
                                            <p>in a session</p><span>2 hrs ago</span>
                                        </div>
    
                                    </div>
                                </div>
                                <a href="" className="btn-spc"><i className="fa fa-ellipsis-h" aria-hidden="true"></i> See More
                                Notifications</a>
                            </div>
    
                            <div className="white-box">
                                <h2 className="in-h">MY EVENTS</h2>
                                <div className="line3 text-left"></div>
                                <div className="likes-section new">
                                    <div className="img-area clearfix">
                                        <div className="img-c">
                                            <img src="/client/assets/images/user-four.png" className="img-responsive circled" />
                                            <span className="status"></span>
                                        </div>
                                        <div className="cont w-100">
                                            <b>Session w/Thomas Barsoe</b>
    
                                            <p>Now - V-Studio 1</p>
                                            <a href="#" data-toggle="modal" data-target="#join-session" className="g-btn">JOIN
                                            SESSION</a>
                                            <a href="#" data-toggle="modal" data-target="#cancel-box" className="red-btn">CANCEL</a>
                                        </div>
    
                                    </div>
                                    <div className="img-area clearfix">
                                        <div className="img-c">
                                            <img src="/client/assets/images/user-six.png" className="img-responsive circled" />
                                            <span className="status"></span>
                                        </div>
                                        <div className="cont w-100">
                                            <b>Session w/Cory Young
                                        </b>
    
                                            <p>6/15/20 @ 5 PM - V-Studio 14</p>
                                            <a href="#" data-toggle="modal" data-target="#detail-box" className="d-btn">Details</a>
                                        </div>
    
                                    </div>
    
                                    <div className="img-area clearfix">
                                        <div className="img-c">
                                            <img src="/client/assets/images/oct-hit.png" className="img-responsive circled" />
                                            <span className="status"></span>
                                        </div>
                                        <div className="cont w-100">
                                            <b>Virtual Songwriting Camp
                                        </b>
    
                                            <p>8/23/20 @ 10 AM - V-Hall 2</p>
                                            <a href="#" data-toggle="modal" data-target="#detail-box" className="d-btn">Details</a>
                                        </div>
    
                                    </div>
    
                                </div>
                                <a href="" className="btn-spc"><i className="fa fa-ellipsis-h" aria-hidden="true"></i> See More
                                Notifications</a>
                            </div>

                            {this.state.check === true ?
                            (<Messages
                                _viewMessageArea={this.parentViewMessageArea}
                                receiver={this.state.receiver}
                                /> ) : ''}


                               
                            
                        </div>
    
                    </div>
                </div>
            </section>
        );
    }
    
}

class Contact extends Component {
    constructor(props){
        super(props)

        this.state = {
            receiver: '',
            check: false,
            name: '',
            userStatus: ''
        }
    }

    componentDidMount(){
        this.setState({receiver: this.props.receiver, name: this.props.name})
        if(auth.isAuthenticated()){
            this.setState({check: true})
        }
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.receiver !== prevProps.receiver) {
            this.setState({receiver: this.props.receiver, name: this.props.name, userStatus: this.props.userStatus})
        }

        if(this.props.userStatus !== prevProps.userStatus){
            this.setState({userStatus: this.props.userStatus})

        }
    }

    render(){
        return (
            <div className="bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-lg-3 position-relative" id="add-cont">
    
                            {/*<div id="popup-l" className="popup">
                                <div className="pop-header">
                                    <a href="javascript:void(0)" id="hide-l" className="close-pop"><i className="fa fa-times"
                                        aria-hidden="true"></i></a>
                                    <h1>CONTACTS</h1>
                                </div>
                                <div className="img-area clearfix">
                                    <img src="/client/assets/images/user-four.png" className="img-responsive circled" />
                                    <div className="cont w-100">
                                        <b>Thomas Barsoe</b>
    
                                        <p>Active now - In The Studio</p>
                                        <span className="green"></span>
                                    </div>
    
                                </div>
                                <div className="img-area clearfix">
                                    <img src="/client/assets/images/elif.png" className="img-responsive circled" />
                                    <div className="cont w-100">
                                        <b>Ellie Soufi</b>
    
                                        <p>Active now - Available</p>
                                        <span className="green"></span>
                                    </div>
    
                                </div>
                                <div className="img-area clearfix">
                                    <img src="/client/assets/images/user-six.png" className="img-responsive circled" />
                                    <div className="cont w-100">
                                        <b>Cory Young</b>
    
                                        <p>Active now - Recording</p>
                                        <span className="green"></span>
                                    </div>
    
                                </div>
                                <div className="img-area clearfix">
                                    <img src="/client/assets/images/user-seven.png" className="img-responsive circled" />
                                    <div className="cont w-100">
                                        <b>Lars Halvor Jensen</b>
    
                                        <p>Active now - Busy</p>
                                        <span className="green"></span>
                                    </div>
    
                                </div>
                                <div className="img-area clearfix">
                                    <img src="/client/assets/images/user-eight.png" className="img-responsive circled" />
                                    <div className="cont w-100">
                                        <b>Jackie Hishmeh</b>
    
                                        <p>Active 1 hr ago</p>
                                        <span></span>
                                    </div>
    
                                </div>
                                <div className="img-area clearfix">
                                    <img src="/client/assets/images/user-nine.png" className="img-responsive circled" />
                                    <div className="cont w-100">
                                        <b>Robbie Dean</b>
    
                                        <p>Active 2 hrs ago</p>
                                        <span></span>
                                    </div>
    
                                </div>
                            </div>
    
                            <div className="input-space">
                                <a href="javascript:void(0)" className="icon-arrow" id="pop-left"><i
                                    className="rotate fa fa-angle-right" aria-hidden="true"></i></a>
                                <input type="text" placeholder="Search Network..." />
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </div>*/}
                        </div>
    
                        <div className="col-md-4 col-lg-6">
                            {/*<div id="chatbar" className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="position-relative"><a href="#" data-toggle="modal" data-target="#user-box"><img
                                        src="/client/assets/images/user.png" className="img-responsive" /><span className="status"></span></a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="position-relative"><a href="#" data-toggle="modal" data-target="#user-box"><img
                                        src="/client/assets/images/user.png" className="img-responsive" /><span className="status"></span></a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="position-relative"><a href="#" data-toggle="modal" data-target="#user-box"><img
                                        src="/client/assets/images/user.png" className="img-responsive" /><span className="status"></span></a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="position-relative"><a href="#" data-toggle="modal" data-target="#user-box"><img
                                        src="/client/assets/images/user.png" className="img-responsive" /><span className="status"></span></a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="position-relative"><a href="#" data-toggle="modal" data-target="#user-box"><img
                                        src="/client/assets/images/user.png" className="img-responsive" /><span className="status"></span></a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="position-relative"><a href="#" data-toggle="modal" data-target="#user-box"><img
                                        src="/client/assets/images/user.png" className="img-responsive" /><span className="status"></span></a>
                                    </div>
                                </div>
                            </div>
                            */}
                        </div>
    
                        {this.state.check === true ? <Chat
                        receiver={this.state.receiver}
                        name={this.state.name}
                        userStatus={this.state.userStatus}
                        /> : ''}
                    </div>
                </div>
            </div>
        );
    }
    
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
            message: [],
            receiver: '',
            sender: '',
            name: '',
            open: false,
            userStatus: ''
        }
    }

    /*view = data => {
        if (data != this.state.message)
            this.setState({ message: data })
    }

    componentDidMount() {
        //showMessage(this.view)
        setInterval(this.viewMessage, 100);

    }

    viewMessage = () => {
        showMessage(this.view)
    }*/

    _viewMessage = () => {
        console.log(this.state.message)
    }

    _grandOpenChat = (data) => {

        let user;
        let _name
        if(data.recipients[0]._id == auth.isAuthenticated().user._id){
            user = data.recipients[1]
        }else{
            user = data.recipients[0]   
        }

        this.setState({receiver: user._id, userStatus: user.userStatus})


        if(user.displayName == ''){
            _name = user.firstName + ' ' + user.lastName;
        }else{
            _name =  user.displayName
        }

        this.setState({name: _name})

        document.getElementById('pop-right-msg').click()
        this.setState({open : true})
        
    }

    grandOpenChat = (data) => {
        this.setState({receiver: data._id, userStatus: data.userStatus})
        let _name

        if(data.displayName == ''){
            _name = data.firstName + ' ' + data.lastName;
        }else{
            _name =  data.displayName
        }
        

        this.setState({name: _name})

        document.getElementById('pop-right-msg').click()
        this.setState({open : true})
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

                <Studio />

                <News />

                <VideoNews />

                <MainNews />

                <Instagram />

                <Press />

                <Network />

                <Profile 
                _parentOpenChat={this.grandOpenChat}
                __parentOpenChat={this._grandOpenChat}
                receiver={this.state.receiver}
                />

                <Contact
                receiver={this.state.receiver}
                name={this.state.name}
                userStatus={this.state.userStatus}
                />

                <Modal />

                <ContactModal />

                <CancelModal />
            </div>
        );
    }
}


export default Home