import React from 'react';
import auth from './../auth/auth-helper';
import swal from 'sweetalert'

import openSocket from 'socket.io-client'


class ContactList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sender: '',
            mesageList: [],
            link: 'https://ochbackend.herokuapp.com/',
            //link: 'http://localhost:8080',
            intervalId: '',
            check: 0,
            receiver: '',
            conversation: {
                sender: auth.isAuthenticated().user._id
            },
            socketId: ''
        }

        this.socket = openSocket(this.state.link)

        if (auth.isAuthenticated()) {

            this.socket.on('connect', () => {
                this.setState({ socketId: this.socket.id });
            });
            this.socket.emit('show_conversation', this.state.conversation);


            this.socket.on('conversations', function (data) {
                viewNewMessage(data);
            })

            this.socket.on('conversationNotification', function (data) {
                notifyMessage(data)
            })

            this.socket.on('fetch_update', function (data) {
                if (data == true) {
                    show_conversation()
                }
            })

            const show_conversation = () => {
                this.socket.emit('show_conversation', this.state.conversation);
            }

            const viewNewMessage = (data) => {

                if (this.state.sender != undefined && data[this.state.socketId] != undefined) {
                    if (data[this.state.socketId].sender === this.state.sender) {

                        this.setState({
                            mesageList: data[this.state.socketId].conversation
                        });

                    }
                }
            }

            const notifyMessage = (data) => {
                if (this.state.sender != undefined && data[this.state.socketId] != undefined) {
                    if (data[this.state.socketId].sender === this.state.sender) {
                        if (data[this.state.socketId].conversation4 > 0) {
                            document.getElementById('myAudio1').click()
                        }
                    }
                }
            }

        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.receiver !== prevProps.receiver) {
            this.setState({ receiver: this.props.receiver })
        }
    }

    componentDidMount() {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            this.setState({ sender: userId })
            //this.play1()

            let ios = (/iPad|iPhone|iPod/.test(navigator.platform) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
                !window.MSStream

            if (ios) {
                swal({
                    title: "Enable sound notification",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Yes, I am sure!',
                    cancelButtonText: "No, cancel it!"
                }).then(
                    function () {
                        let x = document.getElementById("myAudio1");
                        x.pause();
                        x.play();
                    });
            }



        }
    }

    viewMessageArea = (data) => {
        this.props._viewMessageArea(data)

        document.getElementById('chatInput').style.display = '';
    }

    showNewMessageStatus = (sender, status, data) => {


        if (sender == auth.isAuthenticated().user._id) {
            return (<div className="msg-icon"><a href="javascript:void(0)"><i className="fa fa-envelope-open" aria-hidden="true"></i></a>
            </div>)
        } else {
            if (status == true) {
                return (<div className="msg-icon"><a href="javascript:void(0)"><i className="fa fa-envelope-open" aria-hidden="true"></i></a>
                </div>)
            } else {
                return (
                    <div className="msg-icon"><a href="javascript:void(0)"><i className="fa fa-envelope" style={{ color: 'red' }} aria-hidden="true"></i></a>
                    </div>
                )
            }
        }
    }

    play1 = () => {
        let x = document.getElementById("myAudio1");
        x.pause();
        x.play();
        setTimeout(function () { x.pause(); }, 2500);
    }


    play2 = () => {

        var _snd = false;

        function playAudio(src) {
            if (!_snd)
                _snd = new Audio();
            else
                $(_snd).empty();

            for (var i = 0; i < src.length; i++) {
                var source = document.createElement('source');
                source.type = src[i].type;
                source.src = src[i].src;
                _snd.appendChild(source);
            }

            _snd.load(); // Needed on safari / idevice
            _snd.play();
        };

        let src = [
            { src: "/client/assets/audio/ring4.mp3", type: "audio/mpeg" }
        ];

        playAudio(src)

        /*var playAudio = function () {
            var src = [
                { src: "/client/assets/audio/ring4.mp3", type: "audio/mpeg" }
            ];
            playAudio(src);

        };

        //console.log(_snd)

        return {
            playAudio: playAudio,
        };*/
    }


    render() {
        const contactArea = {
            height: '412px',
            overflow: 'auto'
        }

        return (
            <div className="white-box">
                <h2 className="in-h" onClick={this.play1}>MESSAGES</h2>
                <audio onClick={this.play1} id="myAudio1">
                    <source src="/client/assets/audio/ring4.mp3" type="audio/mpeg" />
                </audio>
                <audio id="myAudio2">
                    <source src="/client/assets/audio/ring4.mp3" type="audio/mpeg" />
                </audio>
                <div className="line3 text-left"></div>
                <div className="likes-section new" style={contactArea}>

                    {this.state.mesageList.map((el, i) => {
                        let user;
                        if (el.recipients[0]._id == auth.isAuthenticated().user._id) {
                            user = el.recipients[1]
                            return (
                                <div className="img-area clearfix" onClick={this.viewMessageArea.bind(this, el)}>
                                    <div className="img-c">
                                        <img src={'https://ochbackend.herokuapp.com/api/usersPhoto/' + user._id} className="img-responsive circled __circular3" />
                                        <span className={"msg" + user.userStatus}></span>
                                    </div>

                                    <div className="cont w-70">
                                        <b>{user.displayName}</b>

                                        <p>{el.lastMessage}</p>


                                        {/*<p className="mins">2 mins ago</p>*/}
                                    </div>

                                    {this.showNewMessageStatus(el.sendLast, el.read, el)}



                                </div>
                            );
                        } else {
                            user = el.recipients[0]
                            return (
                                <div className="img-area clearfix" onClick={this.viewMessageArea.bind(this, el)}>
                                    <div className="img-c">
                                        <img src={'https://ochbackend.herokuapp.com/api/usersPhoto/' + user._id} className="img-responsive circled __circular3" />
                                        <span className={"msg" + user.userStatus}></span>
                                    </div>

                                    <div className="cont w-70">
                                        <b>{user.displayName}</b>

                                        <p>{el.lastMessage}</p>


                                        {/*<p className="mins">2 mins ago</p>*/}
                                    </div>

                                    {this.showNewMessageStatus(el.sendLast, el.read, el)}
                                </div>
                            );
                        }
                    }
                    )}

                    {/**/}




                </div>
                {/*<a href="" className="btn-spc"><i className="fa fa-ellipsis-h" aria-hidden="true"></i> See More
                                Messages</a>*/}
            </div>

        );
    }
}
export default ContactList;