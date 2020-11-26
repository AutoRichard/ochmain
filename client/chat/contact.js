import React from 'react';
import { list } from './../api/api-user';
import auth from './../auth/auth-helper';
import swal from 'sweetalert';


class ContactList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            _id: '',
            contact: []
        }
    }

    readUsers = () => {

        let jwt, authId;

        if (auth.isAuthenticated()) {
            jwt = auth.isAuthenticated();
            authId = jwt.user._id;
        } else {
            authId = '';
        }

        this.setState({ _id: authId });

        list().then((data) => {
            if (data.error) {
                swal(data.error)
            } else {
                this.setState({
                    contact: data
                })
            }
        });
    }

    componentDidMount() {
        this.readUsers();
    }

    openChat = (data, e) => {
        this.props._openChat(data)

        document.getElementById('chatInput').style.display = '';
    }


    render() {
        const contactArea = {
            height: '480px',
            overflow: 'auto'
        }

        return (
            <div className="white-box">
                <h2 className="in-h">SUGGESTED CONNECTS</h2>
                <div className="line3 text-left"></div>
                <div className="likes-section suggest" style={contactArea}>
                    {this.state.contact.map((el, i) =>

                        el._id == auth.isAuthenticated().user._id ? '' :
                            (<div className="img-area clearfix">
                                <div className="img-c">
                                    <img src={'https://ochback.herokuapp.com/api/usersPhoto/' + el._id} className="img-responsive circled __circular3" />
                                    <span className={"msg"+el.userStatus}></span>
                                </div>
                                <div className="cont">
                                    <b>{el.displayName}</b>
                                    <p>{el.firstName} {el.lastName}</p>
                                </div>
                                <a onClick={this.openChat.bind(this, el)} value={el._id} href="#chat-bx" id="pop-right"> <img src="/client/assets/images/msg.png"
                                    className="img-responsive wd" /></a>
                            </div>)
                    )}

                </div>
            </div>

        );
    }
}
export default ContactList;