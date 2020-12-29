import React from 'react';
import auth from './../auth/auth-helper';
import swal from 'sweetalert'
import { createBooking, checkBooking } from './../api/api-booking';
import { list } from './../api/api-user';
import { create, listContact } from './../api/api-invite'




class Invite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meeting_title: '',
            meeting_image: '',
            credit: 1,
            meeting_id: '',
            user_id: '',
            creditBalance: 0,
            _id: '',
            contact: []
        }
    }

    readUsers_ = (meeting_id) => {
        if (auth.isAuthenticated()) {
            let invite = {
                meeting_id: meeting_id
            }

            listContact(invite).then((data) => {
                if (data.error) {
                    swal(error)
                } else {
                    this.setState({
                        contact: data
                    })
                }
            })

        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.meeting_id !== prevProps.meeting_id) {

            this.setState({ meeting_image: this.props.meeting_image, meeting_title: this.props.meeting_title, meeting_id: this.props.meeting_id, user_id: this.props.user_id, creditBalance: this.props.creditBalance })
            this.readUsers_(this.props.meeting_id)

        }
    }

    booking = (event) => {
        event.preventDefault();

        this.BookingData.set('meeting_id', this.state.meeting_id)
        this.BookingData.set('user_id', this.state.user_id)
        this.BookingData.set('hour', this.state.credit)

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
                            window.location = '/studio'
                        }
                    });
                } else if (countBooking > 0) {
                    swal("Meeting Already Booked")
                }
            }
        })
    }

    invite = (key) => {

        let user_id = this.state.contact[key]._id
        let meeting_id = this.state.meeting_id
        let name = this.state.contact[key].displayName || this.state.contact[key].firstName || this.state.contact[key].lastName

        if (auth.isAuthenticated()) {

            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;

            let invite = {
                meeting_id: meeting_id,
                user_id: user_id,
                owner_id: userId
            }

            create(invite).then((data) => {
                if (data.error) {
                    swal(error)
                } else {


                    swal('Invitation sent to ' + name)

                    this.state.contact.splice(key, 1)
                    this.setState({
                        contact: this.state.contact
                    })

                }
            })

        }
    }



    render() {
        const contactArea = {
            height: '480px',
            overflow: 'auto'
        }
        return (
            <div className="modal" id="v-st">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body bg-white">
                            <div className="row">
                                <div className="col-md-12 col-lg-4 bod">
                                    <div className="v-box m-img">
                                        <h3>{this.state.meeting_title}</h3>
                                        <div className="request-box">
                                            <img src={this.state.meeting_image} className="img-responsive" />
                                            <div className="request-text d-block">
                                                <h5></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-8 bod">
                                    <div className="white-box">
                                        <h2 className="in-h">INVITE SUGGESTED CONNECTS</h2>
                                        <div className="line3 text-left"></div>
                                        <div className="likes-section suggest" style={contactArea}>
                                            {this.state.contact.map((el, i) =>

                                                el._id == auth.isAuthenticated().user._id ? '' :
                                                    (<div className="img-area clearfix">
                                                        <div className="img-c">
                                                            <img src={'https://ochbackend.herokuapp.com/api/usersPhoto/' + el._id} className="img-responsive circled __circular3" />
                                                            <span className={"msg" + el.userStatus}></span>
                                                        </div>
                                                        <div className="cont">
                                                            <b>{el.displayName}</b>
                                                            <p>{el.firstName} {el.lastName}</p>
                                                        </div>
                                                        <a value={el._id} onClick={this.invite.bind(this, i)} href="#chat-bx" id="pop-right"><i class="fa fa-user-plus" aria-hidden="true"></i></a>
                                                    </div>)
                                            )}

                                        </div>
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
export default Invite