import React, { Component } from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment'
import swal from 'sweetalert'

import { listById, bookEvent, findEvent } from './../api/api-instructor';
import { read } from './../api/api-user';
import auth from './../auth/auth-helper';


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer




class MyCalendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }

    bookEvent = (data) => {
        //console.log(this.props)
        //console.log(data)

        let booking = {
            'userId': this.props.userId,
            'eventId': data._id,
            '_id': this.props.instructorId,
            'pricing': this.props.pricing
        }

        bookEvent(booking).then((data) => {
            if (data.error) {
                swal(data.error, '', "warning");
            } else {
                swal(data.message, '', "success").then((value) => {
                    window.location = '/services'
                })
            }
        })




    }

    render() {
        return (
            <div>
                <Calendar
                    selectable
                    style={{ height: 500, width: '95%' }}
                    localizer={localizer}
                    events={this.props.events}
                    startAccessor="start"
                    endAccessor="end"
                    views={['month', 'week']}
                    onSelectEvent={event => swal('Title: ' + event.title + '\nStart Time: ' + moment(event.start).format("YYYY-MM-DD HH:mm") + '\nEnd Time: ' + moment(event.end).format("YYYY-MM-DD HH:mm"), {
                        buttons: {
                            cancel: "cancel",
                            catch: {
                                text: event.booked == true ? "Not Available" : "Book Now",
                                value: event.booked == true ? "cancel" : "catch",
                            },
                        },
                    })
                        .then((value) => {
                            switch (value) {
                                case "catch":
                                    this.bookEvent(event)
                                    //swal("Booked!", '', "success");
                                    break;
                            }
                        })}
                />
            </div>
        );
    }


}


class Coach extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
            Instructor_id: '',
            Instructor: {},
            user_id: '',
            creditBalance: 0
        }
    }

    readEvent = (id) => {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const token = jwt.token;

            listById(this.props._id).then((data) => {
                if (data.error) {
                    alert(data.error)
                    this.setState({ Instructor: { ...data } })
                } else {

                    let event = data.event.map((el, i) => {
                        const startTime = new Date(el.start)
                        const endTime = new Date(el.end)

                        return {
                            start: startTime,
                            end: endTime,
                            title: el.title,
                            link: el.link,
                            _id: el._id,
                            booked: el.booked
                        }
                    })


                    this.setState({ Instructor: { ...data }, events: event })
                }
            })
        }

    }

    componentDidMount() {
        this.readUser();


    }

    componentDidUpdate(prevProps) {
        if (this.props._id !== this.state.Instructor_id) {
            this.setState({ Instructor_id: this.props._id })

            this.readEvent(this.props._id)
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
            <div className="modal" id="coach">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div className="modal-body bg-white">
                            <div className="row">
                                <div className="col-md-12 col-lg-4 bod">

                                    <div className="__circular1">
                                        <img className="user-dp inst2" src={"https://ochback.herokuapp.com/api/instructorPhoto/" + this.state.Instructor._id} />
                                    </div>

                                    <img className="profile-ring4" src="/client/assets/images/profile-ring.png" />

                                    <h5>{this.state.Instructor.name}</h5>
                                    <h4>{this.state.Instructor.profession == 1 ? 'Vocal Coaching' : ''}</h4>
                                    <h4>{this.state.Instructor.profession == 2 ? 'Guitar' : ''}</h4>
                                    <h4>{this.state.Instructor.profession == 3 ? 'Production' : ''}</h4>
                                    <h4>{this.state.Instructor.profession == 4 ? 'Career Coaching' : ''}</h4>


                                    <ul className="info clearfix">
                                        <li><img src="/client/assets/images/tim.png" />1 hr Per session</li>
                                        <li><img src="/client/assets/images/vidz.png" />zoom VIDEO conferencing INFO <br />PROVIDED UPON CONFIRMATION</li>
                                    </ul>
                                    <div className="line2"></div>
                                    {/*<div className="control-group">
                                        <label className="control control-radio">
                                            SINGLE SESSION - 6 CREDits
<input type="radio" name="radio" checked="checked" />
                                            <div className="control_indicator"></div>
                                        </label>
                                        <label className="control control-radio">
                                            SUBSCRIPTION - 20 CREDITS <br />
                                    (BIlled NOW & THEN AFTER every 4 sessions)
<input type="radio" name="radio" />
                                            <div className="control_indicator"></div>
                                        </label>
                                    </div>*/}
                                    <div className="text-center">
                                        <p>SINGLE SESSION (1 hr):<br /> {this.state.Instructor.pricing} credits</p>
                                        <p>({this.state.creditBalance} CREDITS AVAILABLE)</p>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-8 spc">
                                    <br />
                                    <MyCalendar
                                        events={this.state.events}
                                        balance={this.state.creditBalance}
                                        pricing={this.state.Instructor.pricing}
                                        userId={this.state.user_id}
                                        instructorId={this.state.Instructor_id}
                                    />
                                </div>

                            </div>
                        </div>


                    </div>


                </div>
            </div>


        );
    }
}
export default Coach