import React, { Component } from 'react';
import { Header } from './../menu/header';
import { listMeetingByUser } from './../api/api-meeting';
import auth from './../auth/auth-helper';
import Invite from './../modal/invite';
import { read } from './../api/api-user';



class Studios extends Component {

    constructor(props) {
        super(props);

        this.state = {
            meetings: [],
            meetingsLength: 0
        }
    }


    componentDidMount() {
        this.fetchMeetiong()
    }

    fetchMeetiong = () => {

        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const user_id = jwt.user._id;

            listMeetingByUser(user_id).then((data) => {
                if (data.error) {
                    swal(data.error)
                } else {


                    this.setState({
                        meetings: data, meetingsLength: data.length

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

                    {this.state.meetingsLength == 0 ? <div className="text-center">NO MEETING CREATED YET <a href="/meeting" className="watch-btn marg m-s">CREATE MEETING</a></div> :
                        <div id="v-studio" className="owl-carousel owl-theme">

                            {this.state.meetings.map((el, i) =>


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
        this.setState({ meeting_image: '/client/assets/images/v1.jpg', meeting_title: data.topic, meeting_id: data._id })
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