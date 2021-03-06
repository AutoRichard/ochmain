import React from 'react';
import { ZoomMtg } from "@zoomus/websdk";
import '../api-zoom/tool';
import swal from 'sweetalert'
import auth from '../auth/auth-helper';

class Zoomin extends React.Component {

    constructor(props) {
        super(props)


        this.state = {
            meeting_number: '',
            meeting_pwd: '',
            link: 'https://ochback.herokuapp.com',
            //link: 'http://localhost:8080',
            meeting_topic: 'MEETING'
        }
    }

    componentDidMount() {

        if (!auth.isAuthenticated()) {
            window.location = '/'
        }

        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        const instructor_id = urlParams.get('instructor_id')

        const event_id = urlParams.get('event_id')

        if (instructor_id == '' || instructor_id == undefined || event_id == '' || event_id == undefined) {
            window.location = '/'
        }

        fetch(this.state.link + '/api/readevent',
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({ _id: instructor_id, eventId: event_id })
            }).then(result => result.json())
            .then(response => {

                this.setState({
                    meeting_number: response.event[0].meeting_number,
                    meeting_pwd: response.event[0].password,
                    meeting_topic: response.event[0].title
                })

                ZoomMtg.preLoadWasm();
                ZoomMtg.prepareJssdk();

                console.log("checkSystemRequirements");
                console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

                testTool = window.testTool;

                setInterval(this.join(), 3000)

            });
    }


    join = () => {
        //const link = 'http://localhost:8080';
        const link = 'https://ochback.herokuapp.com';


        fetch(link + '/api/signature', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ mn: this.state.meeting_number })
        })
            .then(result => result.json())
            .then(response => {

                const meetingConfig = testTool.getMeetingConfig();
                if (!meetingConfig.mn || !meetingConfig.name) {
                    alert("Meeting number or username is empty");
                    return false;
                }
                testTool.setCookie("meeting_number", meetingConfig.mn);
                testTool.setCookie("meeting_pwd", meetingConfig.pwd);
                meetingConfig.signature = response.signature;
                meetingConfig.apiKey = "Btgunvr4RuufCPGoJ8eDSA";

                const joinUrl = "/meeting.html?" + testTool.serialize(meetingConfig);
                window.open(joinUrl);
            });

    }


    render() {
        return (
            <div>
                <input type="hidden" value={this.state.meeting_number} id="meeting_number" />
                <input type="hidden" value="OCHIT" id="display_name" />
                <input type="hidden" value={this.state.meeting_pwd} id="meeting_pwd" />
                <input type="hidden" value="0" id="meeting_role" />
                <input type="hidden" value="" id="meeting_email" />
                <input type="hidden" value="en-US" id="meeting_lang" />
                <input type="hidden" value="0" id="meeting_china" />
                <section class="padd-b padd-top">
                    <div class="container-fluid">
                        <div class="text-center studio">
                            <a className="navbar-brand" href="/"><img src="/client/assets/images/logo.png" className="img-responsive" /></a>
                            <br/><br/>
                            <h1>{this.state.meeting_topic}</h1>
                            <div class="div-box"></div>

                        </div>
                        <div class="z-area">
                            <img src="/client/assets/images/z-logo.png" alt="" class="img-fluid z-log" />
                            <a href="#" onClick={this.join}>Join Now</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Zoomin