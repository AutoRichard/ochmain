import React from 'react';
import auth from './../auth/auth-helper';
//import { showMessage, sendMessage } from './socket';
//import { sendMessage } from './../api/api-chat';
import swal from "sweetalert"

import openSocket from 'socket.io-client'

class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            receiver: '',
            message: [],
            sender: '',
            name: '',
            msg: '',
            scroll: false,
            link: 'https://ochback.herokuapp.com/',
            //link: 'http://localhost:8080',
            userStatus: '',
            intervalId: '',
            socketId: ''

        }

        this.socket = openSocket(this.state.link)

        this.socket.on('connect', () => {
            this.setState({ socketId: this.socket.id });
        });
    }


    componentDidMount() {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            this.setState({ sender: userId })
        }
        this.setState({ receiver: this.props.receiver })

        this.viewMessage()

        //let intervalId = setInterval(this.viewMessage, 1100)
        //this.setState({ intervalId: intervalId })

        this.setState({ scroll: true })
    }

    componentWillUnmount() {
        //clearInterval(this.state.intervalId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.receiver !== prevProps.receiver) {
            this.setState({ receiver: this.props.receiver })

            this.viewMessage()
            if (this.props.name != undefined && this.props.name != '') {
                this.setState({ name: this.props.name })
            } else {
                this.setState({ name: 'User' })
            }
        }

        if (this.props.userStatus !== prevProps.userStatus) {
            this.setState({ userStatus: this.props.userStatus })
        }
    }

    view = data => {
        if (data[this.state.socketId] != undefined) {

            if (data[this.state.socketId].messages.length > 0) {

                if (data[this.state.socketId].messages[0].from == this.state.sender && data[this.state.socketId].messages[0].to == this.state.receiver) {
                    if (data[this.state.socketId].messages.length !== this.state.message.length) {
                        this.setState({ message: data[this.state.socketId].messages })
                        this.scrollTobottom()
                    }


                } else if (data[this.state.socketId].messages[0].to == this.state.sender && data[this.state.socketId].messages[0].from == this.state.receiver) {
                    if (data[this.state.socketId].messages.length !== this.state.message.length) {
                        this.setState({ message: data[this.state.socketId].messages })
                        this.scrollTobottom()
                    }

                }
            } else {
                this.setState({ message: [] })
            }
        }

    }

    viewMessage = () => {

        if (this.state.receiver == '' && this.state.sender != '') {
            if (this.props.receiver != '') {
                let receiver = this.props.receiver
                let conversation = {
                    reciever: receiver,
                    sender: this.state.sender
                }
                this.socket.emit('show_message', conversation);

                this.socket.on('messages', this.view)
            }
        } else if (this.state.receiver != '' && this.state.sender != '') {
            let receiver = this.props.receiver

            let conversation = {
                reciever: receiver,
                sender: this.state.sender
            }
            this.socket.emit('show_message', conversation);

            this.socket.on('messages', this.view)

        }

    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    sentMessage = () => {

        if (auth.isAuthenticated()) {
            if (this.state.msg != '') {


                let conversation = {
                    reciever: this.state.receiver,
                    sender: this.state.sender,
                    body: this.state.msg
                }

                if (this.state.receiver !== '') {
                    this.socket.emit('send_message', conversation)
                    this.socket.on('fetch_update', this.updateMessage)
                }


            }
        }
    }

    updateMessage = data => {
        if (data == true) {
            this.setState({
                msg: ''
            })

            this.viewMessage();
        }
    }

    scrollTobottom = () => {

        let hg = document.getElementById('_chatArea').scrollHeight

        document.getElementById('_chatArea').scrollTop = document.getElementById('_chatArea').scrollHeight


    }




    render() {

        const chatArea = {
            height: '400px',
            overflow: 'auto',
        }

        return (
            <div className="col-md-4 col-lg-3 position-relative networkStyling" id="chat-bx">
                <div className="popup" id="popup-r">
                    <div className="pop-header message-pop">
                        <a href="javascript:void(0)" id="hide-r" className="close-pop"><i className="fa fa-times"
                            aria-hidden="true"></i></a>
                        <div className="user-im"><img src={'https://ochback.herokuapp.com/api/usersPhoto/' + this.state.receiver} className="img-responsive __circular4" />
                            <div className={"st" + this.state.userStatus}></div>
                        </div>
                        <a href="javascript:void(0)" id="_hide-r" className="arrow-left"><i className="fa fa-angle-left"
                            aria-hidden="true"></i></a>
                        <h1>{this.state.name}</h1>
                        <span>Active Now</span>
                    </div>
                    <div id="chat-bx_"></div>
                    <div className="chat-area" id="_chatArea" style={chatArea}>
                        {this.state.message.map((el, i) =>
                            el.to !== auth.isAuthenticated().user._id ? (
                                <div>
                                    <div className="chat-bubble">
                                        {el.body}
                                    </div>

                                    <b className="d-block text-right">sent</b>
                                </div>
                            ) : (
                                    <div>
                                        <div className="w-ar">
                                            <div className="chat-bubble grey">
                                                {el.body}
                                            </div> 
                                            <b className="d-block text-right">received</b>
                                        </div>
                                    </div>)
                        )}
                    </div>


                </div>

                <div id="chatInput" style={{ display: 'none' }} className="input-space">
                    <a className="icon-arrow" id="pop-right-msg"><i className="rotate fa fa-angle-right"
                        aria-hidden="true"></i></a>
                    <input type="text" name="msg" value={this.state.msg} onKeyDown={e => {
                        if (e.keyCode === 13) {
                            this.sentMessage();
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }} onChange={this.handleInput} placeholder="Type Message..." />
                    <div className="env">
                        <i className="fa fa-paper-plane" onClick={this.sentMessage} aria-hidden="true"></i>
                    </div>
                </div>



                <div className="popup" id="popup-msg">
                    {/*<div className="pop-header">
                        <a href="javascript:void(0)" id="hide-msg" className="close-pop"><i className="fa fa-times"
                            aria-hidden="true"></i></a>
                        <h1>MESSAGES</h1>
                    </div>
                    <div className="chat-area">
                        <div className="img-area clearfix">
                            <div className="img-c">
                                <img src="/client/assets/images/user-six.png" className="img-responsive circled" />
                                <span className="msg"></span>
                            </div>

                            <div className="cont w-70">
                                <b>Cory Young</b>

                                <p>Unread Message</p>
                                <p className="mins">2 mins ago</p>
                            </div>
                            <div className="msg-icon"><a href="#" className="unread"><i className="fa fa-envelope"
                                aria-hidden="true"></i></a></div>
                        </div>
                        <div className="img-area clearfix">
                            <div className="img-c">
                                <img src="/client/assets/images/oct-hit.png" className="img-responsive circled" />
                                <span className="msg"></span>
                            </div>

                            <div className="cont w-70">
                                <b>OC Hit Academy</b>

                                <p>Read Message</p>
                                <p className="mins">2 mins ago</p>
                            </div>
                            <div className="msg-icon"><a href="#"><i className="fa fa-envelope-open"
                                aria-hidden="true"></i></a></div>
                        </div>

                        <div className="img-area clearfix">
                            <div className="img-c">
                                <img src="/client/assets/images/user-five.png" className="img-responsive circled" />
                                <span className="msg red"></span>
                            </div>

                            <div className="cont w-70">
                                <b>Marcus Miles</b>

                                <p>Read Message</p>
                                <p className="mins">2 mins ago</p>
                            </div>
                            <div className="msg-icon"><a href="#"><i className="fa fa-envelope-open"
                                aria-hidden="true"></i></a></div>
                        </div>


                        <div className="img-area clearfix">
                            <div className="img-c">
                                <img src="/client/assets/images/user-three.png" className="img-responsive circled" />
                                <span className="msg"></span>
                            </div>

                            <div className="cont w-70">
                                <b>LaurieAnn Gibson</b>

                                <p>Read Message</p>
                                <p className="mins">2 mins ago</p>
                            </div>
                            <div className="msg-icon"><a href="#"><i className="fa fa-envelope-open"
                                aria-hidden="true"></i></a></div>
                        </div>


                        <div className="img-area clearfix">
                            <div className="img-c">
                                <img src="/client/assets/images/elif.png" className="img-responsive circled" />
                                <span className="msg"></span>
                            </div>

                            <div className="cont w-70">
                                <b>Ellie Soufi</b>

                                <p>Read Message</p>
                                <p className="mins">2 mins ago</p>
                            </div>
                            <div className="msg-icon"><a href="#"><i className="fa fa-envelope-open"
                                aria-hidden="true"></i></a></div>
                        </div>
                    </div>
        */}
                </div>



            </div>


        );
    }
}
export default Chat; 