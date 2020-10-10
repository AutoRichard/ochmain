import React from 'react';





class Booking extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meeting_title: '',
            meeting_image: ''
        }
    }


    componentDidMount() {

    }

    componentDidUpdate(prevProps) {
        if (this.props.meeting_title !== prevProps.meeting_title) {
            this.setState({ meeting_image: this.props.meeting_image, meeting_title: this.props.meeting_title })
        }
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
                                            <span class="minus bg-dark">-</span>
                                            <input type="number" class="count" name="qty" value="1" />
                                            <span class="plus bg-dark">+</span>
                                        </div>
                                        <span class="s-text">FIRST HOUR FREE <br />
                                            THEN 1 CREDIT/HR</span>

                                        <h3 class="total-p">TOTAL PRICE - 0 CREDits<br />


                                                (42 Credits available)</h3>
                                        <a href="#" class="book-now sp">BUY CREDITS</a>
                                        <a href="#" class="book-now-green">BOOK NOW</a>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-4 spc">
                                    <h6>Select Date & Time</h6>
                                    <div class="icalendar">
                                        <div class="icalendar__month">
                                            <div class="icalendar__prev" onclick="moveDate('prev')">
                                                <span>&#10094</span>
                                            </div>
                                            <div class="icalendar__current-date">
                                                <h2 id="icalendarMonth"></h2>


                                            </div>
                                            <div class="icalendar__next" onclick="moveDate('next')">
                                                <span>&#10095</span>
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
                                        TOTAL COST 4 CREDITS (42 AVAILABLE)
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