import React, { Component } from 'react';
import { Header } from './../menu/header';
import { listMeetingByUser, meetingByCategory } from './../api/api-meeting';
import auth from './../auth/auth-helper';
import Invite from './../modal/invite';
import { read } from './../api/api-user';



class Studios extends Component {

    constructor(props) {
        super(props);

        this.state = {
            meetingVS: [],
            meetingVA: [],
            meetingRS: [],
            meetingsLengthVS: 0,
            meetingsLengthVA: 0,
            meetingsLengthRS: 0,
        }
    }


    componentDidMount() {
        this.fetchMeetiongVS()
        this.fetchMeetiongVA()
        this.fetchMeetiongRS()
    }

    fetchMeetiongVS = () => {

        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const user_id = jwt.user._id;

            let meeting = {
                category: '1',
                id: user_id
            }



            meetingByCategory(meeting).then((data) => {
                if (data.error) {
                    swal(data.error)
                } else {
                    this.setState({
                        meetingVS: data, meetingsLengthVS: data.length
                    })

                    if ($('#v-studio').hasClass('owl-theme')) { //resize event was triggering an error, this if statement is to go around it

                        $('#v-studio').trigger('destroy.owl.carousel'); //these 3 lines kill the owl, and returns the markup to the initial state
                        $('#v-studio').find('.owl-stage-outer').children().unwrap();
                        $('#v-studio').removeClass("owl-center owl-loaded owl-text-select-on");

                        $("#v-studio").owlCarousel({
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

    fetchMeetiongVA = () => {

        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const user_id = jwt.user._id;

            let meeting = {
                category: '2',
                id: user_id
            }



            meetingByCategory(meeting).then((data) => {
                if (data.error) {
                    swal(data.error)
                } else {
                    this.setState({
                        meetingVA: data, meetingsLengthVA: data.length
                    })

                    if ($('#v-audi').hasClass('owl-theme')) { //resize event was triggering an error, this if statement is to go around it

                        $('#v-audi').trigger('destroy.owl.carousel'); //these 3 lines kill the owl, and returns the markup to the initial state
                        $('#v-audi').find('.owl-stage-outer').children().unwrap();
                        $('#v-audi').removeClass("owl-center owl-loaded owl-text-select-on");

                        $("#v-audi").owlCarousel({
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

    fetchMeetiongRS = () => {

        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const user_id = jwt.user._id;

            let meeting = {
                category: '3',
                id: user_id
            }



            meetingByCategory(meeting).then((data) => {
                if (data.error) {
                    swal(data.error)
                } else {
                    this.setState({
                        meetingRS: data, meetingsLengthRS: data.length
                    })

                    if ($('#v-record').hasClass('owl-theme')) { //resize event was triggering an error, this if statement is to go around it

                        $('#v-record').trigger('destroy.owl.carousel'); //these 3 lines kill the owl, and returns the markup to the initial state
                        $('#v-record').find('.owl-stage-outer').children().unwrap();
                        $('#v-record').removeClass("owl-center owl-loaded owl-text-select-on");

                        $("#v-record").owlCarousel({
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


    openMeeting = (data, e) => {
        this.props._openMeeting(data)
    }


    render() {
        return (
            <section className="padd-b padd-top">
                <div className="container-fluid">
                    <div className="text-center studio">
                        <h1>MY STUDIO</h1>
                        <div className="div-box"></div>
                    </div>
                    <div className="text-center st-head">
                        <h2 className="text-center">MY VIRTUAL STUDIOS</h2>
                        <span>(ZOOM VIDEO MEETING - UP TO 10 PEOPLE)</span>
                        <div className="line2"></div>
                    </div>

                    {this.state.meetingsLengthVS == 0 ? <div className="text-center">NO MEETING CREATED YET <a href="/meeting" className="watch-btn marg m-s">CREATE MEETING</a></div> :
                        <div id="v-studio" className="owl-carousel owl-theme">

                            {this.state.meetingVS.map((el, i) =>


                                <div className="item">
                                    <div className="v-box">
                                        <h3>{el.topic.substring(0, 15)}</h3>
                                        <div className="request-box">
                                            <img src="/client/assets/images/v1.jpg" className="img-responsive" />
                                        </div>
                                        <a href="#" onClick={this.openMeeting.bind(this, el)} data-toggle="modal" data-target="#v-st" class="book-now">INVITE</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    }

                    <div className="text-center st-head">
                        <h2 className="text-center">VIRTUAL AUDITORIUMS (ZOOM)</h2>
                        <span>(ZOOM VIDEO MEETING - UP TO 500 PEOPLE)</span>
                        <div className="line2"></div>
                    </div>

                    {this.state.meetingsLengthVA == 0 ? <div className="text-center">NO MEETING CREATED YET <a href="/meeting" className="watch-btn marg m-s">CREATE MEETING</a></div> :
                        <div id="v-audi" className="owl-carousel owl-theme">

                            {this.state.meetingVaA.map((el, i) =>


                                <div className="item">
                                    <div className="v-box">
                                        <h3>{el.topic.substring(0, 15)}</h3>
                                        <div className="request-box">
                                            <img src="/client/assets/images/vh1.jpg" className="img-responsive" />
                                        </div>
                                        <a href="#" onClick={this.openMeeting.bind(this, el)} data-toggle="modal" data-target="#v-st" class="book-now">INVITE</a>
                                    </div>
                                </div>
                            )}

                        </div>
                    }

                    <div className="text-center rs">
                        <h1>RECORDING STUDIOS</h1>
                        <p>(TUSTIN, ORANGE COUNTY, USA & COPENHAGEN, DENMARK)</p>
                        <div className="line2"></div>
                    </div>
                    {this.state.meetingsLengthRS == 0 ? <div className="text-center">NO MEETING CREATED YET <a href="/meeting" className="watch-btn marg m-s">CREATE MEETING</a></div> :
                        <div id="v-record" className="owl-carousel owl-theme">
                            {this.state.meetingRS.map((el, i) =>
                                <div className="item">
                                    <div className="v-box">
                                        <h3>{el.topic.substring(0, 15)}</h3>
                                        <div className="request-box">
                                            <img src="/client/assets/images/r1.jpg" className="img-responsive" />
                                        </div>
                                        <a href="#" onClick={this.openMeeting.bind(this, el)} data-toggle="modal" data-target="#v-st" class="book-now">INVITE</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    }
                    <p className="text-center">If you have any questions regarding studio bookings, don’t hesitate to contact us by clicking the button below.</p>
                    <div className="text-center"><a href="/contact" className="watch-btn marg m-s">CONTACT US</a></div>
                </div>
            </section>
        );
    }

}


class Studio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            meeting_image: '',
            meeting_title: '',
            meeting_id: '',
            user_id: '',
            creditBalance: 0
        }


    }

    componentDidMount() {
        if (!auth.isAuthenticated) {
            window.location = '/'
            return
        } else {
            this.readUser()
        }


    }

    openMeetings = (data) => {
        this.setState({ meeting_title: data.topic, meeting_id: data._id })

        if (data.category === '1') {
            this.setState({ meeting_image: '/client/assets/images/v1.jpg' })

        } else if (data.category === '2') {
            this.setState({ meeting_image: '/client/assets/images/vh1.jpg' })

        } else if (data.category === '3') {
            this.setState({ meeting_image: '/client/assets/images/r1.jpg' })

        } else {
            this.setState({ meeting_image: '/client/assets/images/v1.jpg' })

        }
    }


    readUser = () => {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            const token = jwt.token;
            read({
                userId: userId
            }, { t: token }).then((data) => {
                if (data.error) {
                    swal(data.error)
                } else {
                    this.setState({ user_id: data._id || '', creditBalance: data.creditBalance || 0 });
                }
            })
        }
    }


    render() {
        return (
            <div>

                <Header
                    path={this.props.location.pathname}
                />

                <Studios
                    _openMeeting={this.openMeetings}
                />

                <Invite
                    meeting_image={this.state.meeting_image}
                    meeting_title={this.state.meeting_title}
                    meeting_id={this.state.meeting_id}
                    user_id={this.state.user_id}
                    creditBalance={this.state.creditBalance}
                />



            </div>
        )
    }
}

export default Studio;