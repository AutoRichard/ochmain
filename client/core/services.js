import React, { Component } from 'react';
import { Header } from './../menu/header';
import auth from './../auth/auth-helper';
import { plan } from './../api/api-subscription';
import UpgradePlan from './../modal/upgradeplan';
import Coach from '../modal/coach';
import moment from "moment";
import { listInstructor } from './../api/api-instructor';
import { create, listSession } from './../api/api-session'
import swal from 'sweetalert'

const ServiceList = () => {
    return (
        <section className="plans padd-t">
            <br /><br /><br />
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

                            <br />
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

                            <br />
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

                            <br />
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#change-plan">PICK YOUR PLAN</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="session-box">
                            <img src="/client/assets/images/c4.jpg" className="img-responsive" />
                            <h2>PRODUCTION</h2>
                            <p>We provide world-class EP & Music video
                            production - contact us for details
						</p>

                            <br />
                            <a href="/contact">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

class Session extends Component {

    constructor(props) {
        super(props);

        this.state = {
            session1: {},
            session2: {}
        }
    }

    fetchSession = () => {

        if (auth.isAuthenticated()) {



            listSession().then((data) => {
                if (data.error) {
                    swal(data.error)
                } else {
                    this.setState({
                        session1: data.filter(el => moment(new Date(el.start)).add(el.start, 'minutes').isAfter(new Date) == true)[0],
                        session2: data.filter(el => moment(new Date(el.start)).add(el.start, 'minutes').isAfter(new Date) == true)[1]
                    })

                }
            });
        }
    }

    componentDidMount() {
        this.fetchSession()
        this.linkData = new FormData()
    }

    bookSession = (data, e) => {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const user_id = jwt.user._id;
            let session_id = data._id;
            let pricing = data.pricing


            this.linkData.set('pricing', pricing)
            this.linkData.set('user_id', user_id)
            this.linkData.set('session_id', session_id)
            const token = jwt.token

            create({ t: token }, this.linkData).then((data) => {
                if (data.error) {
                    swal(data.error);
                } else {
                    swal(data.success)
                }
            });
        }
    }

    render() {
        return (
            <section className="group-session text-center">
                <h1>GROUP SESSIONS & CAMPS</h1>
                <div className="line2"></div>
                <div className="group-b">
                    <div className="overlay-wide"></div>
                    <div className="container position-relative">
                    {this.state.session1 != null ? (<h1>FEATURED</h1>) : (<h1>NO SESSION AVAILABLE</h1>)}
                        <div className="row">
                            <div className="col-md-6">
                                {this.state.session1 != null ? (<div className="gp-1">
                                    <div className="p-area">
                                        <h2>{this.state.session1.title}</h2>
                                        <h6>EVENT DETAILS:</h6>
                                        <div className="line3"></div>
                                        <p>
                                            Date: {moment(this.state.session1.start).format("YYYY-MM-DD HH:mm")}<br />
                                    duration: {this.state.session1.duration}<br />
                                    Price: {this.state.session1.pricing} Credits<br />
                                        </p>
                                        <a href="javascript:void(0)" onClick={this.bookSession.bind(this, this.state.session1)} className="book-now tp">BUY CREDITS</a>
                                    </div>
                                    <img src={'https://ochback.herokuapp.com/api/sessionPhoto/' + this.state.session1._id} className="img-responsive sessionS" />
                                </div>) : ('')}

                            </div>


                            <div className="col-md-6">
                                {this.state.session1 != null ? (<div className="gp-1">
                                    <div className="p-area">
                                        <h2>{this.state.session2.title}</h2>
                                        <h6>EVENT DETAILS:</h6>
                                        <div className="line3"></div>
                                        <p>
                                            Date: {moment(this.state.session2.start).format("YYYY-MM-DD HH:mm")}<br />
                                    duration: {this.state.session2.duration}<br />
                                    Price: {this.state.session2.pricing} Credits<br />
                                        </p>
                                        <a href="javascript:void(0)" onClick={this.bookSession.bind(this, this.state.session2)} className="book-now tp">BUY CREDITS</a>
                                    </div>
                                    <img src={'https://ochback.herokuapp.com/api/sessionPhoto/' + this.state.session2._id} className="img-responsive sessionS" />
                                </div>) : ('')
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Events extends Component {

    constructor(props) {
        super(props);

        this.state = {
            session: []
        }
    }

    fetchSession = () => {

        if (auth.isAuthenticated()) {



            listSession().then((data) => {
                if (data.error) {
                    swal(data.error)
                } else {
                    this.setState({
                        session: data.filter(el => moment(new Date(el.start)).add(el.start, 'minutes').isAfter(new Date) == true)
                    })

                    if ($('#event-list').hasClass('owl-theme')) { //resize event was triggering an error, this if statement is to go around it

                        $('#event-list').trigger('destroy.owl.carousel'); //these 3 lines kill the owl, and returns the markup to the initial state
                        $('#event-list').find('.owl-stage-outer').children().unwrap();
                        $('#event-list').removeClass("owl-center owl-loaded owl-text-select-on");

                        $("#event-list").owlCarousel({
                            margin: 30,
                            nav: true,
                            loop: false,
                            singleItem: true,
                            navText: ["<div class='nav-btn prev-btn'>Pre</div>", "<div class='nav-btn next-btn'>Next</div>"],
                            dots: true,
                            responsive: {
                                0: {
                                    items: 1
                                },
                                600: {
                                    items: 3
                                },
                                1000: {
                                    items: 4
                                },

                            },
                        }); //re-initialise the owl
                    }
                }
            });
        }
    }

    componentDidMount() {
        this.fetchSession()
        this.linkData = new FormData()
    }

    bookSession = (data, e) => {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const user_id = jwt.user._id;
            let session_id = data._id;
            let pricing = data.pricing


            this.linkData.set('pricing', pricing)
            this.linkData.set('user_id', user_id)
            this.linkData.set('session_id', session_id)
            const token = jwt.token

            create({ t: token }, this.linkData).then((data) => {
                if (data.error) {
                    swal(data.error);
                } else {
                    swal(data.success)
                }
            });
        }
    }

    render() {
        return (
            <section className="events-list">
                <div className="container-fluid-area">
                    <div id="event-list" className="owl-carousel owl-theme">

                        {this.state.session.map((el, i) =>
                            <div className="item">		<div className="gp-1 mg">
                                <div className="p-area">
                                    <h2>{el.title}</h2>
                                    <h6>EVENT DETAILS:</h6>
                                    <div className="line3"></div>
                                    <p>
                                        Date: {moment(el.start).format("YYYY-MM-DD HH:mm")}<br />
                                    duration: {el.duration}<br />
                                    Price: {el.pricing} Credits<br />
                                    </p>

                                    <a href="javascript:void(0)" onClick={this.bookSession.bind(this, el)} className="book-now tp">BUY NOW</a>
                                </div>
                                <img src={'https://ochback.herokuapp.com/api/sessionPhoto/' + el._id} className="img-responsive sessionS" />

                            </div></div>

                        )}


                    </div>
                </div>
            </section>
        );
    }

}

class Coaching extends Component {
    constructor(props) {
        super(props);

        this.state = {
            instructor: [],
            vocal: [],
            guitar: [],
            production: [],
            career: [],
            instructor_id: ''
        }
    }

    readInstructor = () => {

        if (auth.isAuthenticated()) {
            listInstructor().then((data) => {
                if (data.error) {
                    alert(data.error)
                } else {
                    this.setState({
                        vocal: data.filter(v => v.profession == 1),
                        guitar: data.filter(v => v.profession == 2),
                        production: data.filter(v => v.profession == 3),
                        career: data.filter(v => v.profession == 4)
                    })


                }
            });
        }
    }

    componentDidMount() {
        this.readInstructor();
    }

    checkAvailabilty = (data, e) => {
        this.props.parentCheckAvailabilty(data)
    }



    render() {
        return (
            <section className=" text-center indivi-s">
                <h1>INDIVIDUAL SESSIONS</h1>
                <div className="line2"></div>


                <div className="container-fluid  position-relative">
                    <h2>VOCAL COACHING</h2>
                    <div className="row">

                        {this.state.vocal.map((el, i) =>

                            <div className="col-md-6 col-lg-3">
                                <div className="production-box">
                                    <img style={{ width: 'auto', height: '20%', marginTop: '-70px' }} src={"https://ochback.herokuapp.com/api/instructorPhoto/" + el._id} />
                                    <div className="h-box">
                                        <h1>{el.name}	</h1>
                                    </div>
                                    <div className="h-content">
                                        <p>{el.about}</p>

                                        <h5>RATES:</h5>
                                        <div className="line4"></div>

                                        <h6>SINGLE SESSION (1 hr):<br /> {el.pricing} credits</h6>

                                        <a href="javascript:void(0)" onClick={this.checkAvailabilty.bind(this, el)} data-toggle="modal" data-target="#coach" className="book-now tp">CHECK AVAILABILITY</a>
                                    </div>
                                </div>
                            </div>

                        )}




                    </div>
                    {this.state.vocal.length == 0 ? <div className="col-md-6 col-lg-3 text-center">No Vocal Coaching Available</div> : ''}
                </div>

                <div className="container-fluid  position-relative">
                    <h2>GUITAR</h2>
                    <div className="row">
                        {this.state.guitar.map((el, i) =>

                            <div className="col-md-6 col-lg-3">
                                <div className="production-box">
                                    <img style={{ width: 'auto', height: '20%', marginTop: '-70px' }} src={"https://ochback.herokuapp.com/api/instructorPhoto/" + el._id} />
                                    <div className="h-box">
                                        <h1>{el.name}	</h1>
                                    </div>
                                    <div className="h-content">
                                        <p>{el.about}</p>

                                        <h5>RATES:</h5>
                                        <div className="line4"></div>

                                        <h6>SINGLE SESSION (1 hr):<br /> {el.pricing} credits</h6>

                                        <a href="javascript:void(0)" onClick={this.checkAvailabilty.bind(this, el)} data-toggle="modal" data-target="#coach" className="book-now tp">CHECK AVAILABILITY</a>
                                    </div>
                                </div>
                            </div>

                        )}


                    </div>
                    {this.state.guitar.length == 0 ? <div className="text-center">No Guitar Coaching Available</div> : ''}





                    <h2>PRODUCTION</h2>
                    <div className="row">
                        {this.state.production.map((el, i) =>

                            <div className="col-md-6 col-lg-3">
                                <div className="production-box">
                                    <img style={{ width: 'auto', height: '20%', marginTop: '-70px' }} src={"https://ochback.herokuapp.com/api/instructorPhoto/" + el._id} />
                                    <div className="h-box">
                                        <h1>{el.name}	</h1>
                                    </div>
                                    <div className="h-content">
                                        <p>{el.about}</p>

                                        <h5>RATES:</h5>
                                        <div className="line4"></div>

                                        <h6>SINGLE SESSION (1 hr):<br /> {el.pricing} credits</h6>

                                        <a href="javascript:void(0)" onClick={this.checkAvailabilty.bind(this, el)} data-toggle="modal" data-target="#coach" className="book-now tp">CHECK AVAILABILITY</a>
                                    </div>
                                </div>
                            </div>

                        )}

                    </div>
                    {this.state.production.length == 0 ? <div className="text-center">No Production Coaching Available</div> : ''}
                </div>

                <div className="container-fluid  position-relative">
                    <h1>CAREER COACHING</h1>
                    <div className="row">
                        {this.state.career.map((el, i) =>

                            <div className="col-md-6 col-lg-3">
                                <div className="production-box">
                                    <img style={{ width: 'auto', height: '20%', marginTop: '-70px' }} src={"https://ochback.herokuapp.com/api/instructorPhoto/" + el._id} />
                                    <div className="h-box">
                                        <h1>{el.name}	</h1>
                                    </div>
                                    <div className="h-content">
                                        <p>{el.about}</p>

                                        <h5>RATES:</h5>
                                        <div className="line4"></div>

                                        <h6>SINGLE SESSION (1 hr):<br /> {el.pricing} credits</h6>

                                        <a href="javascript:void(0)" onClick={this.checkAvailabilty.bind(this, el)} data-toggle="modal" data-target="#coach" className="book-now tp">CHECK AVAILABILITY</a>
                                    </div>
                                </div>
                            </div>
                        )}



                    </div>
                    {this.state.career.length == 0 ? <div className="text-center">No Career Coaching Available</div> : ''}
                </div>
            </section>
        );
    }

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
                                <td data-column="Silver"><a data-toggle="modal" onClick={this.__setPlan.bind(this, this.state.silver)} data-target="#upgrade-boxes" href="javascript:void(0)" className="book-now">Choose Plan</a></td>
                                <td data-column="Gold"><a href="javascript:void(0)" data-toggle="modal" onClick={this.__setPlan.bind(this, this.state.gold)} data-target="#upgrade-boxes" className="book-now gold">Choose Plan</a></td>
                                <td data-column="Platinum"><a href="javascript:void(0)" data-toggle="modal" onClick={this.__setPlan.bind(this, this.state.platinum)} data-target="#upgrade-boxes" className="book-now">Choose Plan</a></td>
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
            instructor_id: ''
        }


    }

    _parentAvailabilty = (data) => {
        this.setState({ instructor_id: data._id })

        console.log(data._id)
    }


    render() {
        return (
            <div>

                <Header
                    path={this.props.location.pathname}
                />

                <ServiceList />

                <Session />

                <Events />

                <Coaching
                    parentCheckAvailabilty={this._parentAvailabilty}
                />

                <Plan />

                <Production />

                <Coach
                    _id={this.state.instructor_id}
                />

            </div>
        )
    }
}

export default Services;