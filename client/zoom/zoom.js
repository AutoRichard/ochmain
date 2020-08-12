import React from 'react';
import { ZoomMtg } from "@zoomus/websdk";
import '../api-zoom/tool';

class Zoom extends React.Component {

    componentDidMount() {
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();

        console.log("checkSystemRequirements");
        console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

        testTool = window.testTool;
    }


    join = () => {

        //const link =  'http://localhost:8080';
        const link = 'https://ochbackend.herokuapp.com';


        fetch(link + '/api/signature', {
            method: 'get',
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
                <input type="hidden" value="95339654036" id="meeting_number" />
                <input type="hidden" value="1.7.10#Local" id="display_name" />
                <input type="hidden" value="8167739200" id="meeting_pwd" />
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