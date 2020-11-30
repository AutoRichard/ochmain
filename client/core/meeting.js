import React, { Component } from 'react';
import { Header } from './../menu/header';
import auth from './../auth/auth-helper';
import swal from 'sweetalert';
import { create } from './../api/api-meeting';



class Meeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            owner: '',
            topic: '',
            topicValidation: '',
            duration: '',
            durationValidation: '',
            start_time: '',
            start_timeValidation: ''
        }
    }


    componentDidMount() {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            this.setState({ owner: userId })
        }
    }

    onchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        event.target.name === 'topic' ? this.setState({ topicValidation: '' }) : '';
        event.target.name === 'start_time' ? this.setState({ start_timeValidation: '' }) : '';
        event.target.name === 'duration' ? this.setState({ durationValidation: '' }) : '';
    }

    submitMeeting = () => {
        if (this.state.topic == '' || this.state.start_time == '' || this.state.duration == '' || isNaN(this.state.duration)) {
            //this.setState({ loading: false });
            this.state.topic === '' ? (this.setState({ topicValidation: 'MEETING TOPIC IS REQUIRED' })) : this.setState({ topicValidation: '' });
            this.state.start_time === '' ? (this.setState({ start_timeValidation: 'MEETING START TIME IS REQUIRED' })) : this.setState({ start_timeValidation: '' });
            this.state.duration === '' ? (this.setState({ durationValidation: 'MEETING DURATION IS REQUIRED' })) : this.setState({ durationValidation: '' });

            if (this.state.duration != '' && isNaN(this.state.duration)) {
                this.setState({ durationValidation: 'DURATION SHOULD BE IN NUMBER' })
            }
        } else {

            if (auth.isAuthenticated()) {
                let meeting = {
                    topic: this.state.topic,
                    duration: this.state.duration,
                    owner: this.state.owner,
                    start_time: this.state.start_time
                }

                console.log(meeting)

                create(meeting).then((data) => {
                    if(data.error){
                        swal(data.error)
                    }else{
                        this.setState({topic: '', duration: '', start_time: ''})
                        swal(data.status)
                    }
                })
            }
        }
    }


    render() {
        return (
            <div>
                <Header
                    path={this.props.location.pathname}
                />

                <section className="padd-b padd-top">
                    <div className="container-fluid">
                        <div className="text-center studio">
                            <h1>Meeting Creation Form</h1>
                            <div className="div-box"></div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-spacez">
                                    <label>Topic <span id="validationError">{this.state.topicValidation}</span></label>
                                    <input name="topic" type="text" value={this.state.topic} onChange={this.onchange} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-spacez">
                                    <label>Start Time <span id="validationError">{this.state.start_timeValidation}</span></label>
                                    <input name="start_time" type="time" value={this.state.start_time} onChange={this.onchange} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-spacez">
                                    <label>Duration in Minutes <span id="validationError">{this.state.durationValidation}</span></label>
                                    <input name="duration" type="text" value={this.state.duration} onChange={this.onchange} />
                                </div>
                            </div>
                        </div>
                        <div className="input-spacez"><input type="submit" value="Submit" onClick={this.submitMeeting} /></div>

                    </div>
                </section>

            </div>
        )
    }
}

export default Meeting;