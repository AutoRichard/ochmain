import React from 'react';
import auth from './../auth/auth-helper';
import { showMessage, sendMessage } from './socket';


class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            receiver: '',
            message: [],
            sender: '',
            name: '',
            msg: '',
            scroll: false
        }
    }


    componentDidMount() {
        this.setState({ receiver: this.props.receiver })
        //setInterval(this.viewMessage, 100);

        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            this.setState({ sender: userId })
        }

        this.setState({ scroll: true })
    }

    componentDidUpdate(prevProps) {
        if (this.props.receiver !== prevProps.receiver) {
            this.setState({ receiver: this.props.receiver })
            if (this.props.name != undefined && this.props.name != '') {
                this.setState({ name: this.props.name })
            } else {
                this.setState({ name: 'User' })
            }
        }
    }

    view = data => {
        if (data != this.state.message) {
            this.setState({ message: data })
            this.scrollTobottom()

            //console.log(data.length)
        }

    }

    viewMessage = () => {

        if (this.state.receiver !== '' && this.state.sender !== '') {
            let conversation = {
                reciever: this.state.receiver,
                sender: this.state.sender
            }
            showMessage(this.view, conversation)
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

                sendMessage(conversation)

                this.setState({ msg: '' })
            }
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
            <div className="col-md-4 col-lg-3 position-relative" id="chat-bx">
                <div className="popup" id="popup-r">
                    <div className="pop-header message-pop">
                        <a href="javascript:void(0)" id="hide-r" className="close-pop"><i className="fa fa-times"
                            aria-hidden="true"></i></a>
                        <div className="user-im"><img src={'https://ochbackend.herokuapp.com/api/usersPhoto/' + this.state.receiver} className="img-responsive" />
                            <div className="st"></div>
                        </div>
                        <a href="javascript:void(0)" className="arrow-left"><i className="fa fa-angle-left"
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

                <div className="input-space">
                    <a className="icon-arrow" id="pop-right-msg"><i className="rotate fa fa-angle-right"
                        aria-hidden="true"></i></a>
                    <input type="text" name="msg" value={this.state.msg} onChange={this.handleInput} placeholder="Type Message..." />
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