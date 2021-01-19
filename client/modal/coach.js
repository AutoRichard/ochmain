import React, { Component } from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment'
import swal from 'sweetalert'

import { listById } from './../api/api-instructor';
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

    handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        const link = window.prompt('Zoom link')

        if (title, link)
            this.setState({
                events: [
                    ...this.state.events,
                    {
                        start,
                        end,
                        title,
                        link
                    },
                ],
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
                    onSelectEvent={event => swal(event.title/*, {
                        buttons: {
                            cancel: "cancel",
                            catch: {
                                text: "Book Now",
                                value: "catch",
                            },
                        },
                    })
                        .then((value) => {
                            switch (value) {
                                case "catch":
                                    swal("Booked!", '', "success");
                                    break;
                            }
                        }*/)}
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
            Instructor: []
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
                            link: el.link
                        }
                    })


                    this.setState({ Instructor: { ...data }, events: event })
                }
            })
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props._id !== this.state.Instructor_id) {
            this.setState({ Instructor_id: this.props._id })

            this.readEvent(this.props._id)
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
                                    <img style={{ width: 'auto', height: '20%' }} src={"https://ochback.herokuapp.com/api/instructorPhoto/" + this.state.Instructor._id} />

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
                                        <a href="#" className="book-now m-b">BOOK NOW</a>
                                        <p>(42 CREDITS AVAILABLE)</p>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-8 spc">
                                    <br />
                                    <MyCalendar
                                        events={this.state.events}
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