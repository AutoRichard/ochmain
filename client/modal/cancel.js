import React from 'react';
import { signout } from './../auth/api-auth';
import auth from './../auth/auth-helper';
//import { read } from './../api/api-user';

 



    class Cancel extends React.Component {
        constructor(props) {
            super(props)
            this.state = {

            }
        }

        signout = () => {
            signout().then((data) => {
                if (data.error) {
                    alert(data.error)
                } else {

                    auth.signout(() => window.location = '/')
                }
            });
        }

        /*readUser = () => {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            const token = jwt.token;
            read({
                userId: userId
            }, { t: token }).then((data) => {
                if (data.error) {
                    alert(data.error)
                    //this.setState({ redirectToSignin: true })
                } else {
                    console.log(data)
                    //this.setState({ user: data })
                }
            })
        }*/

        render() {
            return (
                <div className="modal" id="cancel-box-two">
                    <div className="modal-dialog modal-dialog-centered small-box x-l">
                        <div className="modal-content">

                            <div className="modal-header">

                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body bg-white  small-m">
                                <div className="adsf">
                                    <b className="d-block text-center bold">ARE YOU SURE YOU WANT TO SIGN OUT?</b>

                                    <div className="btn-b">
                                        <a href="#" className="outline-btn" data-dismiss="modal">NO - TAKE ME BACK	</a>
                                        <a href="#" onClick={this.signout} className="cancel-small">YES - SIGN ME OUT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
export default Cancel;