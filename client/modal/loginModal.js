import React from 'react';
import { signin } from './../auth/api-auth';
import auth from './../auth/auth-helper';
import swal from 'sweetalert';





class LoginModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailValidate: '',
            passwordValidate: '',
            loading: false
        };
    }


    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        event.target.name == 'email' ? this.setState({ emailValidate: '' }) : '';
        event.target.name == 'password' ? this.setState({ passwordValidate: '' }) : '';
    }

    signIn = () => {
        this.setState({ loading: true });
        if (this.state.email === '' || this.state.password === '') {
            this.setState({ loading: false });
            this.state.email === '' ? this.setState({ emailValidate: 'Email is required' }) : this.setState({ emailValidate: '' });
            this.state.password === '' ? this.setState({ passwordValidate: 'Password is required' }) : this.setState({ passwordValidate: '' });

        } else {
            const user = {
                email: this.state.email,
                password: this.state.password
            }

            signin(user).then((data) => {
                if (data.error) {
                    //this.setState({ error: data.error })
                    this.setState({ loading: false });
                    swal(data.error)
                } else {

                    if (data.user.suspend == false && data.user.approve == true) {
                        auth.authenticate(data, () => {
                            window.location = '/'
                        })
                    } else {
                        if (data.user.suspend == true) {
                            this.setState({ loading: false });                            
                            swal("Account Suspended")
                        }
                        if (data.user.approve == false) {
                            this.setState({ loading: false });
                            swal("Account Under Review, we will contact you using the email address you provided")
                        }

                    }

                }
            });
        }
    }

    closeLogin = () => {
        let close = document.getElementById('closeLogin');
        close.click();
    }



    render() {
        const loadingStyle = {
            width: '20%',
            height: '20%'
        }
        return (
            <div className="modal" id="signin">
                <div className="modal-dialog modal-dialog-centered signin">
                    <div className="modal-content">

                        <div className="modal-header">
                            <button id="closeLogin" type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body bg-black text-center">
                            <h1>SIGN IN </h1>
                            <div className="input-box">
                                <div className="input-area">
                                    <label>EMAIL ADDRESS</label>
                                    <input type="email" name="email" onChange={this.onChange} autoComplete="off" value={this.state.email} />
                                    <div className="text-left" id="validationError">{this.state.emailValidate}</div>
                                </div>
                                <div className="input-area">
                                    <label>PASSWORD</label>
                                    <input type="password" name="password" autoComplete="off" onChange={this.onChange} value={this.state.password} />
                                    <div className="text-left" id="validationError">{this.state.passwordValidate}</div>
                                </div>
                                {/*<a href="#" className="pull-right">Forgot Password?</a>*/}
                                <div className="control-group">
                                    <label className="control control-checkbox">
                                        STAY SIGNED IN
								<input type="checkbox" />
                                        <div className="control_indicator"></div>
                                    </label>
                                </div>
                                {this.state.loading == true ? (<a href="javascript:void(0)" className="white-btn red">SIGN IN<img style={loadingStyle} src="/client/assets/images/loading4.gif" /></a>) : (<a href="javascript:void(0)" className="white-btn red" onClick={this.signIn}>SIGN IN</a>)}
                                <h5>Not a member yet? <a href="#" data-toggle="modal" onClick={this.closeLogin} data-target="#applicaion-form">APPLY
								NOW</a></h5>
                                <h5>Forgot Password? <a href="/resetpassword">Reset Password</a></h5>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default LoginModal