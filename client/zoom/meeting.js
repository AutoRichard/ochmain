import React from 'react';
import { ZoomMtg } from "@zoomus/websdk";
import '../api-zoom/tool';

class Meeting extends React.Component {

    componentDidMount() {
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();
        console.log("checkSystemRequirements");
        const tmpArgs = testTool.parseQuery();
        document.getElementById("zmmtg-root").style.display = 'block';

        const meetingConfig = {
            apiKey: tmpArgs.apiKey,
            meetingNumber: tmpArgs.mn,
            userName: (function () {
                if (tmpArgs.name) {
                    try {
                        return testTool.b64DecodeUnicode(tmpArgs.name);
                    } catch (e) {
                        return tmpArgs.name;
                    }
                }
                return (
                    "CDN#" +
                    tmpArgs.version +
                    "#" +
                    testTool.detectOS() +
                    "#" +
                    testTool.getBrowserInfo()
                );
            })(),
            passWord: tmpArgs.pwd,
            leaveUrl: "/studio",
            role: parseInt(tmpArgs.role, 10),
            userEmail: (function () {
                try {
                    return testTool.b64DecodeUnicode('ajibolarichardson@gmail.com');
                } catch (e) {
                    return 'ajibolarichardson@gmail.com';
                }
            })(),
            lang: tmpArgs.lang,
            signature: tmpArgs.signature || "",
            china: tmpArgs.china === "1",
        };

        //const link =  'http://localhost:8080';
        const link = 'https://ochbackend.herokuapp.com';


        fetch(link + '/api/check', {
            method: 'get',
        })
            .then(result => result.json())
            .then(response => {
                //meetingConfig.signature = response.signature;
                console.log(response.signature);
                ZoomMtg.init({
                    debug: true,
                    leaveUrl: meetingConfig.leaveUrl,
                    webEndpoint: meetingConfig.webEndpoint,
                    disableInvite: true, //optional
                    disableRecord: true, //optional
                    isSupportAV: true, //optional,
                    meetingInfo: [
                        'Topic', 'host',
                    ],
                    success: function () {
                        console.log(meetingConfig);
                        //console.log("signature", signature);
                        $.i18n.reload(meetingConfig.lang);
                        ZoomMtg.join({
                            meetingNumber: meetingConfig.meetingNumber,
                            userName: meetingConfig.userName,
                            signature: meetingConfig.signature,
                            apiKey: meetingConfig.apiKey,
                            userEmail: meetingConfig.userEmail,
                            passWord: meetingConfig.passWord,
                            success: function (res) {
                                console.log("join meeting success");
                                console.log("get attendeelist");
                                ZoomMtg.getAttendeeslist({});
                                ZoomMtg.getCurrentUser({
                                    success: function (res) {
                                        console.log("success getCurrentUser", res.result.currentUser);
                                    },
                                });
                            },
                            error: function (res) {
                                console.log(res);
                            },
                        });
                    },
                    error: function (res) {
                        console.log(res);
                    },
                });
            });
    }


    render() {
        return (
            <div>
                <div>Secured</div>
            </div>
        );
    }
}
export default Meeting