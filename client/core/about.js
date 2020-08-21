import React, { Component } from 'react';
import {Header} from './../menu/header';


const Description = () => {
    return (
        <section className="padd-small padd-top">
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

const Mvideo = () => {
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
            </div>
        </section>
    );
}

const TGallery = () => {
    return (
        <section className="team-area">
            <div className="container-fluid">
                <h1>TEAM</h1>

                <div className="row">
                    <div className="col-md-4">

                        <div className="team-box">
                            <h2>THOMAS BARSOE</h2>
                            <h6>FOUNDER - PRODUCER - MANAGER</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a1.jpg" title="THOMAS BARSOE"><img src="/client/assets/images/a1.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>With over 15 years of experience as a platinum selling international #1 recording
                                        artist, songwriter, and producer, Thomas Barsoe says," I am blessed to be the
                                        captain of a ship filled with such tremendously talented and inspiring young
                                        artists who remind my every single day of why I love music so much!" OC Hit
                                        ACADEMy has been a lifelong dream of Thomas's and has proven to be the most
                                        fulfilling achievement of his career. His greatest ambition is discovering,
                                        guiding, and developing extraordinary young talent while preparing them for a
                                        life and career in the music induStry.

									</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>LARS HALVOR JENSEN</h2>
                            <h6>COO - PRODUCER - INSTRUCTOR</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a2.jpg" title="LARS HALVOR JENSEN"><img src="/client/assets/images/a2.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>Lars Halvor Jensen is an award-winning Danish record producer AND songwriter
                                        based in LOS ANGELES, CA. He has achieved success in many genres of music,
                                        incl. pop, dance, rock and R&B, and is the co-founder of DEEKAY Music, a
                                        production and publishing company with studios in
                                        both Copenhagen, Denmark and Los Angeles, California. He has written songs
                                        performed by artists around the world, incl. Jordin Sparks, Pitbull, New Kids On
                                        The Block, Mel B, Orianthi, JLS, Tinie Tempah, Blue, Sugababes, Lemar, Il
                                        Volo, TVXQ, Ronan Keating, SHINee, Girls' Generation and many more with combined
										record sales in excess of 30 million copies worldwide.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>STEPHEN EASLEY</h2>
                            <h6>CFO - INSTRUCTOR</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a3.jpg" title="STEPHEN EASLEY"><img src="/client/assets/images/a3.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>
                                            Award-winning attorney and CPA, Stephen Easley has worked with artists such as
                                            R.E.M. and worked with Ted Turner to create CNN and Turner Broadcasting. Mr.
                                            Easley serves as counsel to the BUDDY HOLYW EDUCATIONAL FOUNDATION, AS WELL AS
                                            THE Estate of Buddy Holly in all areas, including licensing, merchandising,
                                            trademarks, and litigation, and created and directed Buddy Holly Licensing,
                                            LLC.  Stephen helped friends who founded the SXSW Music and Media conference,
                                            and has worked at, taught at, or attended every SXSW since 1987. .
									</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>ANNA BARSOE</h2>
                            <h6>CO-FOUNDER</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a4.jpg" title="ANNA BARSOE"><img src="/client/assets/images/a4.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>
                                            Anna is a marriage and family therapist with her own private practice in Newport
                                            Beach, CA. At OC Hit ACADEMY, Anna PROVIDES PERSONAL DEVELOPMENT SUPPORT TO OUR
                                            TALENT, organizes charity events and non-profit concerts, as well as manages
                                            several of our artists. She has been a huge part of the development, growth, and
                                            success of OC Hit ACADEMy.
									</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>CURTIS YOUNG</h2>
                            <h6>HEAD OF OCHA URBAN DIVISION</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a5.jpg" title="CURTIS YOUNG"><img src="/client/assets/images/a5.jpg"
                                    className="img-responsive" /></a>

                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>MR. YOUNG IS A Recording artist AND RECORD producer. HE IS THE son of legendary
                                        hip hop mogul Dr Dre AND IS THE HEAD OF THE OC HIT ACADEMY URBAN MUSIC DIVISION
									</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>LAURIEANN GIBSON</h2>
                            <h6>HEAD OF TALENT</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a6.jpg" title="LAURIEANN GIBSON"><img src="/client/assets/images/a6.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>
                                            LaurieAnn has worked with some of the biggest stars in the world FROM Michael
                                            Jackson, Beyoncé, Lady Gaga, Alicia Keyes, Katy Perr TO P Diddy. She was the
                                            creative director of ‘The Four’ and ‘Making The Band’ as well as having her own
                                            TV show ‘Beyond The Lights’. She is also a judge on ‘So You Think You Can Dance.
									</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>ANGELICA HENRY</h2>
                            <h6>HEAD OF PR/MARKETING</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a7.jpg" title="ANGELICA HENRY"><img src="/client/assets/images/a7.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>Angelica is the director of operations for the PR / Marketing side of OC Hit
										ACADEMY.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>MARTIN M. LARSSON</h2>
                            <h6>CCO - PRODUCER - INSTRUCTOR</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a8.jpg" title="MARTIN M. LARSSON"><img src="/client/assets/images/a8.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>






                                            MARTIN CO-Founded DEEKAY Music with Mr. Jensen and is an award-winning music
                                            producer and mixer with hundreds of releases and numerous Gold and Platinum
                                            records under his belt. Martin has co-written and produced several #1 hits and
										albums</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>JOSEPH WILLIS</h2>
                            <h6>CASTING DIRECTOR - CONSULTANT</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a9.jpg" title="JOSEPH WILLIS"><img src="/client/assets/images/a9.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>



                                            A music professional who has spent his life in and around music as an artist, at
                                            labels, as a talent expert, and TV producer, Joe served as Vice President of
                                            Talent for American Idol and 19 Entertainment for 9 seasons. He currently
                                            manages pop superstar Jordin Sparks, and is responsible for developing
										relationships and strategic partnerships for OC HIT ACADEMY.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>NICK STONE</h2>
                            <h6>HEAD OF PR/MARKETING</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a10.jpg" title="NICK STONE"><img src="/client/assets/images/a10.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>
                                            NICK IS ONE OF OC HIT ACADEMY’S SUPER TALENTED STAFF PRODUCERS.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>ROBBIE DEAN</h2>
                            <h6>STAFF PRODUCER - SONGWRITER</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a11.jpg" title="MARTIN M. LARSSON"><img src="/client/assets/images/a11.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>

                                            Robbie Dean, 20 years old from Orange County California is a
                                            singer/songwriter/producer, and multi-instrumentalist. Robbie for years has
                                            played over 50 venues around Orange County and LA. Robbie has a great ear for
                                            pop vocals and productions and loves working with stripped down musical ideas
                                            and building on them. Having graduated from the Orange County school of arts
                                            Robbie has had much experience with working with other musicians and developing
										his own craft. </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>PAUL NAJERA</h2>
                            <h6>STAFF PRODUCER - SONGWRITER</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a12.jpg" title="PAUL NAJERA"><img src="/client/assets/images/a12.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>
                                            Paul is a multi-instrumentalist music producer/ songwriter having earned
                                            co-production credits to his name with Grammy Award winning artists and has
                                            produced many independent artists in various genres. Often hired as a session
                                            guitarist, Paul specializes in producing songs from scratch as well as molding
										and bringing an artist's vision to life.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>JACKIE HISHMEH</h2>
                            <h6>SONGWRITER - VOCAL COACH</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a13.jpg" title="JACKIE HISHMEH"><img src="/client/assets/images/a13.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>Jackie is a twenty-one year old singer-songwriter and vocal coach. She is a
                                        graduate of the Orange County High School of the Arts (OSCA) where she majored
                                        in Commercial Voice & Acting. She has been in the entertainment industry since
                                        age 4 and starred in her first Disney role at age 5. Since then, she has
                                        continued to grow her artistry by constantly working on new music, developing
                                        new sounds, and songwriting with Grammy Award-Winning artists and producers.
                                        Jackie is working on releasing her debut full-length album soon under her artist
                                        name, Jacquie. She is passionate about developing vocalists into artists and
										helping her students find their true voice.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>CHRISTINE SADEÉ</h2>
                            <h6>VOCAL COACH</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a14.jpg" title="CHRISTINE SADEÉ"><img src="/client/assets/images/a14.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>CHRISTINA IS ONE OF OC HIT ACADEMY’S BEST VOCAL COACHES - YOU CAN BOOK HER UNDER
										“INDIVIDUAL SESSIONS” IN THE SERVICES SECTION.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-box">
                            <h2>JESSICA CABRAL</h2>
                            <h6>SONGWRITER - VOCAL COACH</h6>
                            <div className="hover-box">
                                <a href="/client/assets/images/a15.jpg" title="JESSICA CABRAL"><img src="/client/assets/images/a15.jpg"
                                    className="img-responsive" /></a>
                                <div className="overlay-bg animate__animated animate__fadeIn">
                                    <div className="para-center">
                                        <p>Jessica is a world-class vocalist and instructor. Her experience touring
                                        worldwide and recording with grammy award winning artists, as well as working
                                        with grammy award winning producers, has prepared her to pass her own skills on
                                        to her students. Jessica is passionate about making good singers into master
                                        vocalists, and she is successful in doing so with all of our clients. This year
                                        Jessica released her debut single "Taste the Smoke" under her artist name,
                                        JESKA, and she is planning to release a full album soon. Along with vocal
                                        coaching, Jessica comes alongside our artists to develop their songwriting
                                        skills and their artistic integrity.
									</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const News = () => {
    return (
        <section className="newsletter text-center">
            <div className="container">
                <h1>NEWSLETTER</h1>
                <p>STAY UP TO DATE - SIGN UP TO OUR NEWSLETTER</p>
                <div className="news-input">
                    <input type="text" placeholder="YOUR EMAIL ADDRESS" />
                    <a href="#" className="book-now">SIGN UP</a>
                </div>
                <a href="#" className="watch-btn marg big">CONTACT US</a>
            </div>
        </section>
    );
}

class About extends Component {
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

                <Description />

                <Gallery />

                <Talent />

                <Mvideo />

                <TGallery />

                <News />

            </div>
        )
    }
}

export default About;