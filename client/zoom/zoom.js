import React from 'react';
import { ZoomMtg } from "@zoomus/websdk";
import '../api-zoom/tool';
import swal from 'sweetalert'

class Zoom extends React.Component {

    constructor(props) {
        super(props)


        this.state = {
            meeting_number: '',
            meeting_pwd: '',
            link: 'https://ochbackend.herokuapp.com',
            //link: 'http://localhost:8080'
        }
    }

    componentDidMount() {


        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        const page_type = urlParams.get('meeting_id')

        if(page_type == '' || page_type == undefined){
            window.location = '/'
        }   

        fetch(this.state.link + '/api/meeting',
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({ _id: page_type })
            }).then(result => result.json())
            .then(response => {

                this.setState({
                    meeting_number: response.id,
                    meeting_pwd: response.password
                })

                ZoomMtg.preLoadWasm();
                ZoomMtg.prepareJssdk();

                console.log("checkSystemRequirements");
                console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

                testTool = window.testTool;
                this.join()
            });
    }


    join = () => {
        //const link = 'http://localhost:8080';
        const link = 'https://ochbackend.herokuapp.com';


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
                <a className="btn btn-primary" onClick={this.join}>Join</a>
            </div>
        );
    }
}
export default Zoom