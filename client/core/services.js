import React, { Component } from 'react';
import { Header } from './../menu/header';
import auth from './../auth/auth-helper';
import { plan } from './../api/api-subscription';
import UpgradePlan from './../modal/upgradeplan';


const ServiceList = () => {
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
                            <a href="/studio">BROWSE CLASSES</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="session-box">
                            <img src="/client/assets/images/c2.jpg" className="img-responsive" />
                            <h2>INDIVIDUAL SESSIONS</h2>
                            <p>Vocal, piano, guitar, music production,
                            career coaching & dance/performance
						</p>
                            <a href="/studio">BOOK A SESSION</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="session-box">
                            <img src="/client/assets/images/c3.jpg" className="img-responsive" />
                            <h2>PREMIUM PLANS</h2>
                            <p>For the ulitmate experience, join our
                            silver, gold or platinum plan
						</p>
                            <a href="#" data-toggle="modal" data-target="#change-plan">PICK YOUR PLAN</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="session-box">
                            <img src="/client/assets/images/c4.jpg" className="img-responsive" />
                            <h2>PRODUCTION</h2>
                            <p>We provide world-class EP & Music video
                            production - contact us for details
						</p>
                            <a href="/contact">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Session = () => {
    return (
        <section className="group-session text-center">
            <h1>GROUP SESSIONS & CAMPS</h1>
            <div className="line2"></div>
            <div className="group-b">
                <div className="overlay-wide"></div>
                <div className="container position-relative">
                    <h1>FEATURED</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="gp-1">
                                <div className="p-area">
                                    <h2>VIRTUAL SONGWRITING CAMP W/SPECIAL GUEST NE-YO</h2>
                                    <h6>EVENT DETAILS:</h6>
                                    <div className="line3"></div>
                                    <p>Date(s): Aug 23/24<br />
Time: 10 AM - 6 PM (PST)<br />
Price: 50 Credits<br />
(<span>42 Credits available</span>)</p>
                                    <a href="#" className="book-now tp">BUY CREDITS</a>
                                </div>
                                <img src="/client/assets/images/gp1.jpg" className="img-responsive" />
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="gp-1">
                                <div className="p-area">
                                    <h2>DREAM WARRIOR CAMP W/LAURIEANN GIBSON</h2>
                                    <h6>EVENT DETAILS:</h6>
                                    <div className="line3"></div>
                                    <p>
                                        Date(s): Jul 30/31<br />
Time: 10 AM - 6 PM (PST)<br />
Price: 25 Credits<br />
(42 Credits available)</p>
                                    <a href="#" className="book-now tp">BUY NOW</a>
                                </div>
                                <img src="/client/assets/images/gp-2.jpg" className="img-responsive" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Events = () => {
    return (
        <section className="events-list">
            <div className="container-fluid-area">
                <div id="event-list" className="owl-carousel owl-theme">


                    <div className="item">		<div className="gp-1 mg">
                        <div className="p-area">
                            <h2>MUSIC PUBLISHING<br /> FOR BEGINNERS<br /> W/LARS HALVOR JENSEN</h2>
                            <h6>EVENT DETAILS:</h6>
                            <div className="line3"></div>
                            <p>
                                Date: Aug 3<br />

Time: 1 PM - 3 PM (PST)<br />


Price: 4 Credits<br />

(42 Credits available)</p>

                            <a href="#" className="book-now tp">BUY NOW</a>
                        </div>
                        <img src="/client/assets/images/ev1.jpg" className="img-responsive" />

                    </div></div>
                    <div className="item">		<div className="gp-1 mg">
                        <div className="p-area">
                            <h2>SONGWRITING CIRCLE <br /> MOVIE SYNC SPECIAL</h2>
                            <h6>EVENT DETAILS:</h6>
                            <div className="line3"></div>
                            <p>
                                Date: Aug 1<br />

Time: 11 AM - 5 PM (PST)<br />


Price: 20 Credits<br />

(42 Credits available)</p>

                            <a href="#" className="book-now tp">BUY NOW</a>
                        </div>
                        <img src="/client/assets/images/ev2.jpg" className="img-responsive" />

                    </div></div>
                    <div className="item">		<div className="gp-1 mg">
                        <div className="p-area">
                            <h2>THE TRUTH <br />


REAL-TIME FEEDBACK FROM <br />


THOMAS BARSOE</h2>
                            <h6>EVENT DETAILS:</h6>
                            <div className="line3"></div>
                            <p>
                                Date: Jul 29<br />

Time: 11 AM - 5 PM (PST)<br />


Price: 20 Credits<br />

(42 Credits available)</p>

                            <a href="#" className="book-now tp">BUY NOW</a>
                        </div>
                        <img src="/client/assets/images/ev3.jpg" className="img-responsive" />

                    </div></div>

                    <div className="item">		<div className="gp-1 mg">
                        <div className="p-area">
                            <h2>PERFORMANCE CLASS <br />W/LAURIEANN GIBSON</h2>
                            <h6>EVENT DETAILS:</h6>
                            <div className="line3"></div>
                            <p>
                                Date: Jul 27<br />

Time: 1 PM - 6 PM (PST)<br />


Price: 25 Credits<br />

(42 Credits available)</p>

                            <a href="#" className="book-now tp">BUY NOW</a>
                        </div>
                        <img src="/client/assets/images/ev-4.jpg" className="img-responsive" />

                    </div></div>

                </div>
            </div>
        </section>
    );
}

const Coaching = () => {
    return (
        <section className=" text-center indivi-s">
            <h1>INDIVIDUAL SESSIONS</h1>
            <div className="line2"></div>


            <div className="container-fluid  position-relative">
                <h2>VOCAL COACHING</h2>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="production-box">
                            <img src="/client/assets/images/vc-1.png" />
                            <div className="h-box">
                                <h1>JACKIE HISHMEH	</h1>
                            </div>
                            <div className="h-content">
                                <p>Jackie is an experienced recording artist who teaches live performance techniques as well.</p>

                                <h5>RATES:</h5>
                                <div className="line4"></div>

                                <h6>SINGLE SESSION (1 hr):<br />
6 credits</h6>
                                <h6>MONTHLY SUBSCRIPTION:<br />
20 CREDITS / MONTH<br />
(4 sessions)</h6>
                                <a href="" data-toggle="modal" data-target="#coach" className="book-now tp">CHECK AVAILABILITY</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="production-box">
                            <img src="/client/assets/images/vc-2.png" />
                            <div className="h-box">
                                <h1>JESSICA CABRAL</h1>
                            </div>
                            <div className="h-content">
                                <p>Jessica is an incredible powerhouse of a singer who grew up singing in church. She also received a golden ticket from J. Lo in American Idol.</p>

                                <h5>RATES:</h5>
                                <div className="line4"></div>

                                <h6>SINGLE SESSION (1 hr):<br />
6 credits</h6>
                                <h6>MONTHLY SUBSCRIPTION:<br />
20 CREDITS / MONTH<br />
(4 sessions)</h6>
                                <a href="#" className="book-now tp">CHECK AVAILABILITY</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="production-box">
                            <img src="/client/assets/images/vc-3.png" />
                            <div className="h-box">
                                <h1>NICK YOUNG</h1>
                            </div>
                            <div className="h-content">
                                <p>Christine is one of our most talented vocal coaches.  </p>

                                <h5>RATES:</h5>
                                <div className="line4"></div>

                                <h6>SINGLE SESSION (1 hr):<br />
5 credits</h6>
                                <h6>MONTHLY SUBSCRIPTION:<br />
16 CREDITS / MONTH<br />
(4 sessions)</h6>
                                <a href="#" className="book-now tp">CHECK AVAILABILITY</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="production-box">
                            <img src="/client/assets/images/vc-4.png" />
                            <div className="h-box">
                                <h1>LACI MERCEDE</h1>
                            </div>
                            <div className="h-content">
                                <p>Laci is very versatile vocalist and an accomplished actress as well. </p>

                                <h5>RATES:</h5>
                                <div className="line4"></div>

                                <h6>SINGLE SESSION (1 hr):<br />
4 credits</h6>
                                <h6>MONTHLY SUBSCRIPTION:<br />
12 CREDITS / MONTH<br />
(4 sessions)</h6>
                                <a href="#" className="book-now tp">CHECK AVAILABILITY</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  position-relative">
                <h2>GUITAR</h2>
                <div className="row">
                    <div className="col-md-3 col-lg-3"></div>
                    <div className="col-md-6 col-lg-3">
                        <div className="production-box">
                            <img src="/client/assets/images/gui1.png" />
                            <div className="h-box">
                                <h1>CORY YOUNG</h1>
                            </div>
                            <div className="h-content">
                                <p>Cory is an unbelievably talented artist and guitarist. He masters every aspect of the craft.</p>

                                <h5>RATES:</h5>
                                <div className="line4"></div>

                                <h6>SINGLE SESSION (1 hr):<br />
6 credits</h6>
                                <h6>MONTHLY SUBSCRIPTION:<br />
20 CREDITS / MONTH<br />
(4 sessions)</h6>
                                <a href="#" className="book-now tp">CHECK AVAILABILITY</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="production-box">
                            <img src="/client/assets/images/gui2.png" />
                            <div className="h-box">
                                <h1>ROBBIE DEAN</h1>
                            </div>
                            <div className="h-content">
                                <p>Robbie is an amazing artist and multi-instrumentalist</p>

                                <h5>RATES:</h5>
                                <div className="line4"></div>

                                <h6>SINGLE SESSION (1 hr):<br />
5 credits</h6>
                                <h6>MONTHLY SUBSCRIPTION:<br />
16 CREDITS / MONTH<br />
(4 sessions)</h6>
                                <a href="#" className="book-now tp">CHECK AVAILABILITY</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3"></div>
                </div>





                <h2>PRODUCTION</h2>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="production-box">
                            <img src="/client/assets/images/p1.png" />
                            <div className="h-box">
                                <h1>NICK YOUNG</h1>
                            </div>
                            <div className="h-content">
                                <p>Nick is one of our new, supremely talented staff producers.  </p>

                                <h5>RATES:</h5>
                                <div className="line4"></div>

                                <h6>SINGLE SESSION (1 hr):<br />
4 credits</h6>
                                <h6>MONTHLY SUBSCRIPTION:<br />
12 CREDITS / MONTH<br />
(4 sessions)</h6>
                                <a href="#" className="book-now tp">CHECK AVAILABILITY</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="production-box">
                            <img src="/client/assets/images/p2.png" />
                            <div className="h-box">
                                <h1>ROBBIE DEAN</h1>
                            </div>
                            <div className="h-content">
                                <p>Robbie is an experienced producer who has produced numerous EP’s as well as his own releases as an artist.</p>

                                <h5>RATES:</h5>
                                <div className="line4"></div>

                                <h6>SINGLE SESSION (1 hr):<br />
5 credits</h6>
                                <h6>MONTHLY SUBSCRIPTION:<br />
16 CREDITS / MONTH<br />
(4 sessions)</h6>
                                <a href="#" className="book-now tp">CHECK AVAILABILITY</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="production-box">
                            <img src="/client/assets/images/p3.png" />
                            <div className="h-box">
                                <h1>PAUL NAJERA</h1>
                            </div>
                            <div className="h-content">
                                <p>Paul is a world-class music producer with credits on records by
Grammy Award-winning artists. </p>

                                <h5>RATES:</h5>
                                <div className="line4"></div>

                                <h6>SINGLE SESSION (1 hr):<br />
5 credits</h6>
                                <h6>MONTHLY SUBSCRIPTION:<br />
16 CREDITS / MONTH<br />
(4 sessions)</h6>
                                <a href="#" className="book-now tp">CHECK AVAILABILITY</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="production-box">
                            <img src="/client/assets/images/p4.png" />
                            <div className="h-box">
                                <h1>THOMAS BARSOE</h1>
                            </div>
                            <div className="h-content">
                                <p>THomas is the founder of OC Hit Academy and has produced more than 100 EP’s and albums.</p>

                                <h5>RATES:</h5>
                                <div className="line4"></div>

                                <h6>SINGLE SESSION (20 MINS):<br />
20 credits</h6>
                                <h6>MONTHLY SUBSCRIPTION:<br />
70 CREDITS / MONTH<br />
(4 sessions)</h6>
                                <a href="#" className="book-now tp">CHECK AVAILABILITY</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  position-relative">
                <h1>CAREER COACHING</h1>
                <div className="row">
                    <div className="col-md-3 col-lg-3"></div>
                    <div className="col-md-6 col-lg-3">
                        <div className="production-box">
                            <img src="/client/assets/images/cc1.png" />
                            <div className="h-box">
                                <h1>LAURIEANN GIBSON</h1>
                            </div>
                            <div className="h-content">
                                <p>LaurieAnn has worked with some of the biggest stars in the world: Michael Jackson, Beyoncé, Lady Gaga, Alicia Keyes, Katy Perry & P Diddy.</p>

                                <h5>RATES:</h5>
                                <div className="line4"></div>

                                <h6>SINGLE SESSION (20 MINS):<br />
75 credits</h6>
                                <h6>MONTHLY SUBSCRIPTION:<br />
N/A</h6>
                                <a href="#" className="book-now tp">CHECK AVAILABILITY</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="production-box">
                            <img src="/client/assets/images/p4.png" />
                            <div className="h-box">
                                <h1>THOMAS BARSOE</h1>
                            </div>
                            <div className="h-content">
                                <p>Thomas is the founder of OC Hit Academy and has been engaged in talent development for more than a decade. </p>

                                <h5>RATES:</h5>
                                <div className="line4"></div>

                                <h6>SINGLE SESSION (20 MINS):<br />
20 credits</h6>
                                <h6>MONTHLY SUBSCRIPTION:<br />
70 CREDITS / MONTH<br />
(4 sessions)</h6>
                                <a href="#" className="book-now tp">CHECK AVAILABILITY</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3"></div>
                </div>
            </div>
        </section>
    );
}

class Plan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            silver: '',
            gold: '',
            platinum: '',
            plan_id: ''
        }
    }

    componentDidMount() {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated()
            plan({
                t: jwt.token
            }).then((data) => {
                if (data.error) {
                    console.log(data.error)
                    //this.setState({ error: data.error })
                } else {
                    if (data.data.length) {
                        this.setState({
                            silver: data.data[2].id, gold: data.data[1].id, platinum: data.data[0].id
                        })
                    }
                }
            })
        }
    }


    __setPlan = (data) => {

        this.setState({
            plan_id: data
        })

        console.log(data)
    }

    render() {
        return (
            <section className=" text-center">
                <h1>PREMIUM PLANS</h1>
                <div className="line2"></div>

                <div className="container-fluid">

                    <UpgradePlan
                        plan_id={this.state.plan_id}
                        silver={this.state.silver}
                        gold={this.state.gold}
                        platinum={this.state.platinum}

                    />

                    <table>
                        <thead>
                            <tr style={{ background: "transparent" }}>
                                <th className="img-n"><img src="/client/assets/images/plans-logo.png" className="img-responsive" /></th>
                                <th><img src="/client/assets/images/silver.png" className="img-responsive" /></th>
                                <th><img src="/client/assets/images/gold.png" className="img-responsive" /></th>
                                <th><img src="/client/assets/images/platinum.png" className="img-responsive" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="d-n">
                                <td className="plan-heading">PLAN</td>
                                <td className="plan-heading silver">SILVER</td>
                                <td className="plan-heading gold">GOLD</td>
                                <td className="plan-heading plat">PLATINUM</td>
                            </tr>
                            <tr>
                                <td className="p-emp">CREDITS PER MONTH</td>
                                <td data-column="Silver">60</td>
                                <td data-column="Gold">120</td>
                                <td data-column="Platinum">200</td>
                            </tr>

                            <tr>
                                <td className="p-emp">MIN. NUMBER OF MONTHS</td>
                                <td data-column="Silver">3</td>
                                <td data-column="Gold">3</td>
                                <td data-column="Platinum">6</td>
                            </tr>

                            <tr>
                                <td className="p-emp">EXPERT CONSULTATIONS</td>
                                <td data-column="Silver">1 PER 3 MONTHS</td>
                                <td data-column="Gold">1 PER 2 MONTHS</td>
                                <td data-column="Platinum">1 PER MONTH</td>
                            </tr>

                            <tr>
                                <td className="p-emp">PRODUCTIONS INCLUDED</td>
                                <td data-column="Silver">1 PER 6 MONTHS</td>
                                <td data-column="Gold">1 PER 3 MONTHS</td>
                                <td data-column="Platinum">2 PER 3 MONTHS</td>
                            </tr>

                            <tr>
                                <td className="p-emp">ADVANCE EVENT BOOKING</td>
                                <td data-column="Silver">24 HR</td>
                                <td data-column="Gold">48 HR</td>
                                <td data-column="Platinum">72 HR</td>
                            </tr>

                            <tr>
                                <td className="p-emp">MUSIC VIDEO</td>
                                <td></td>
                                <td></td>
                                <td data-column="Platinum">1 PER 6 MONTHS</td>
                            </tr>
                            <tr>
                                <td className="p-emp">SOCIAL MEDIA PACKAGE</td>
                                <td></td>
                                <td></td>
                                <td data-column="Platinum">INCLUDED</td>
                            </tr>
                            <tr>
                                <td className="p-emp">PRICE PER MONTH</td>
                                <td data-column="Silver">$999</td>
                                <td data-column="Gold">$1,999</td>
                                <td data-column="Platinum">$2,999</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td data-column="Silver"><a data-toggle="modal" onClick={this.__setPlan.bind(this, this.state.silver)} data-target="#upgrade-boxes" href="#" className="book-now">Choose Plan</a></td>
                                <td data-column="Gold"><a href="#" data-toggle="modal" onClick={this.__setPlan.bind(this, this.state.gold)} data-target="#upgrade-boxes" className="book-now gold">Choose Plan</a></td>
                                <td data-column="Platinum"><a href="#" data-toggle="modal" onClick={this.__setPlan.bind(this, this.state.platinum)} data-target="#upgrade-boxes" className="book-now">Choose Plan</a></td>
                            </tr>

                        </tbody>
                    </table>


                </div>
            </section>
        );
    }


}

const Production = () => {
    return (
        <section className="text-center">

            <h1>PRODUCTION</h1>
            <div className="line2"></div>

            <div className="container-fluid">
                <div id="pro-list" className="owl-carousel owl-theme">


                    <div className="item"><img src="/client/assets/images/pro1.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/pro2.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/pro3.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/pro4.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/pro5.jpg" className="img-responsive" /></div>
                </div>
                <p>Since September 2013, OCHA has produced/co-written more than 100 EPs and numerous music videos for both upcoming and established artists. Our team consists of professional record producers of all levels, incl. international producers with production credits ranging from Diddy/Lil Wayne, Pitbull, Jason Derulo, Jordin Sparks, NKOTB, Boyz II Men, Super Junior, f(X), EXO and many more...</p>

                <p>Contact us for more information about how to get your music and/or music videos produced! </p>
                <a href="/contact" className="watch-btn marg mt">CONTACT US</a>
            </div>



        </section>
    );
}

class Services extends Component {
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

                <ServiceList />

                <Session />

                <Plan />

                <Production />

            </div>
        )
    }
}

export default Services;