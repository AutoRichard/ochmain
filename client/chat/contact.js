import React from 'react';
import { list } from './../api/api-user';
import auth from './../auth/auth-helper';


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
                alert(data.error)
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
    }


    render() {
        const contactArea = {
            height: '500px',
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
                                    <img src={'https://ochbackend.herokuapp.com/api/usersPhoto/' + el._id} className="img-responsive circled" />
                                    <span className="status"></span>
                                </div>
                                <div className="cont">
                                    <b>{el.displayName == '' ? el.firstName + ' ' + el.lastName : el.displayName}</b>
                                </div>
                                <a onClick={this.openChat.bind(this, el)} value={el._id} href="#chat-bx_" id="pop-right"> <img src="/client/assets/images/msg.png"
                                    className="img-responsive wd" /></a>
                            </div>)
                    )}

                </div>
            </div>

        );
    }
}
export default ContactList;