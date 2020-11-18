import React from 'react';
import auth from './../auth/auth-helper';
import swal from 'sweetalert'
import { createBooking, checkBooking } from './../api/api-booking';




class Booking extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meeting_title: '',
            meeting_image: '',
            credit: 1,
            meeting_id: '',
            user_id: '',
            creditBalance: 0,
            owner_id: ''
            
        }
    }


    componentDidMount() {
        this.BookingData = new FormData()
    }

    plus = () => {
        if (this.state.creditBalance > this.state.credit) {
            this.setState({ credit: this.state.credit + 1 })
        }
    }

    minus = () => {
        if (this.state.credit > 1) {
            this.setState({ credit: this.state.credit - 1 })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.meeting_id !== prevProps.meeting_id) {

            this.setState({ meeting_image: this.props.meeting_image, meeting_title: this.props.meeting_title, meeting_id: this.props.meeting_id, user_id: this.props.user_id, creditBalance: this.props.creditBalance, owner_id: this.props.owner_id })
        }
    }

    booking = (event) => {
        event.preventDefault();


        

        this.BookingData.set('meeting_id', this.state.meeting_id)
        this.BookingData.set('user_id', this.state.user_id)
        this.BookingData.set('hour', this.state.credit)
        this.BookingData.set('owner_id', this.state.owner_id)
        

        if (!auth.isAuthenticated) {
            window.location = '/'
            return
        }

        const jwt = auth.isAuthenticated();
        const token = jwt.token;

        checkBooking({
            user_id: this.state.user_id,
            meeting_id: this.state.meeting_id
        }).then((data) => {
            if (data.error) {
                swal(data.error)
            } else {
                let countBooking = data.booking.length;
                if (countBooking == 0) {
                    createBooking({
                        t: token
                    }, this.BookingData).then((data) => {
                        if (data.error) {
                            console.log(data.error);
                        } else {
                            swal("Meeting Booked")
                            console.log(data)
                            window.location = '/studio'
                        }
                    });
                } else if (countBooking > 0) {
                    swal("Meeting Already Booked")
                }
            }
        })
    }

    render() {
        return (
            <div class="modal" id="v-st">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">

                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body bg-white">
                            <div class="row">
                                <div class="col-md-12 col-lg-4 bod">
                                    <div class="v-box m-img">
                                        <h3>{this.state.meeting_title}</h3>
                                        <div class="request-box">
                                            <img src={this.state.meeting_image} class="img-responsive" />
                                            <div class="request-text d-block">
                                                <h5>SESSION IN PROGRESS</h5>
                                            </div>
                                        </div>
                                        <div class="qty clearfix">
                                            <label># OF HOURS</label>
                                            <span onClick={this.minus} class="minus bg-dark">-</span>
                                            <input type="number" class="count" name="qty" value={this.state.credit} />
                                            <span onClick={this.plus} class="plus bg-dark">+</span>
                                        </div>
                                        <span class="s-text">FIRST HOUR FREE <br />
                                            THEN 1 CREDIT/HR</span>

                                        <h3 class="total-p">TOTAL PRICE - {this.state.credit} CREDits<br />


                                                ({this.state.creditBalance} Credits available)</h3>
                                        {/*<a href="#" class="book-now sp">BUY CREDITS</a>*/}
                                        <a href="#" onClick={this.booking} class="book-now-green">BOOK NOW &#10094;</a>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-4 spc">
                                    <h6>Select Date & Time</h6>
                                    <div class="icalendar">
                                        <div class="icalendar__month">
                                            <div class="icalendar__prev" onclick="moveDate('prev')">
                                                <span>&#10094;</span>
                                            </div>
                                            <div class="icalendar__current-date">
                                                <h2 id="icalendarMonth"></h2>


                                            </div>
                                            <div class="icalendar__next" onclick="moveDate('next')">
                                                <span>&#10095;</span>
                                            </div>
                                        </div>
                                        <div class="icalendar__week-days">
                                            <div>Sun</div>
                                            <div>Mon</div>
                                            <div>Tue</div>
                                            <div>Wed</div>
                                            <div>Thu</div>
                                            <div>Fri</div>
                                            <div>Sat</div>
                                        </div>
                                        <div class="icalendar__days"></div>

                                        <div class="time-s">
                                            <p><i class="fa fa-globe" aria-hidden="true"></i> Eastern Time - US & Canada(4:34pm) <i class="fa fa-caret-down" aria-hidden="true"></i> </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-4 spc">
                                    <div>
                                        <div id="icalendarDateStr"></div>

                                    </div>
                                    <div class="time-area">
                                        <a href="#">1:00am</a>
                                        <a href="#">4:00pm</a>
                                        <a href="#">4:30pm</a>
                                    </div>

                                    <div class="total-cost">
                                        {/*TOTAL COST 4 CREDITS (42 AVAILABLE)*/}
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default Booking