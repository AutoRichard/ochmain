import React from 'react';
import auth from './../auth/auth-helper';

import openSocket from 'socket.io-client'


class ContactList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sender: '',
            mesageList: [],
            link: 'https://ochbackend.herokuapp.com/'
        }

        this.socket = openSocket(this.state.link)
    }

    readMessage = () => {

        if (auth.isAuthenticated()) {
            let jwt = auth.isAuthenticated();
            let authId = jwt.user._id;

            if (authId) {
                let conversation = {
                    sender: authId
                }

                this.socket.emit('show_conversation', conversation);

                this.socket.on('conversations', this.viewNewMessage)
            }
        }
    }


    viewNewMessage = data => {
        if (data.sender === this.state.sender) {
            
            this.setState({
                mesageList: data.conversation
            });
        }
    }

    componentDidMount() {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            this.setState({ sender: userId })


            setInterval(this.readMessage, 200)
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

    /*openChat = (data, e) => {
        this.props._openChat(data)

        document.getElementById('chatInput').style.display = '';
    }*/


    render() {
        const contactArea = {
            height: '412px',
            overflow: 'auto'
        }

        return (
            <div className="white-box">
                <h2 className="in-h">MESSAGES</h2>
                <div className="line3 text-left"></div>
                <div className="likes-section new" style={contactArea}>

                    {this.state.mesageList.map((el, i) => {
                        let user;
                        if (el.recipients[0]._id == auth.isAuthenticated().user._id) {
                            user = el.recipients[1]
                            return (
                                <div className="img-area clearfix" onClick={this.viewMessageArea.bind(this, el)}>
                                    <div className="img-c">
                                        <img src={'https://ochbackend.herokuapp.com/api/usersPhoto/' + user._id} className="img-responsive circled" />
                                        <span className="msg"></span>
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
                                        <img src={'https://ochbackend.herokuapp.com/api/usersPhoto/' + user._id} className="img-responsive circled" />
                                        <span className="msg"></span>
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