import React from 'react';
import { signin } from './../auth/api-auth';
import auth from './../auth/auth-helper';





class LoginModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailValidate: '*',
            passwordValidate: '*',
            loading: false
        };
    }


    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        event.target.name == 'email' ? this.setState({ emailValidate: '*' }) : '';
        event.target.name == 'password' ? this.setState({ passwordValidate: '*' }) : '';
    }

    signIn = () => {
        this.setState({loading: true});
        if (this.state.email === '' || this.state.password === '') {
            this.setState({loading: false});
            this.state.email === '' ? this.setState({ emailValidate: '* email is required' }) : this.setState({ emailValidate: '*' });
            this.state.password === '' ? this.setState({ passwordValidate: '* password is required' }) : this.setState({ passwordValidate: '*' });

        } else {
            const user = {
                email: this.state.email,
                password: this.state.password
            }

            signin(user).then((data) => {
                if (data.error) {
                    //this.setState({ error: data.error })
                    this.setState({loading: false});
                    alert(data.error)
                } else {
                    auth.authenticate(data, () => {
                        window.location = '/'
                    })
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
            width: '40%',
            height: '40%'
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
                                    <label>EMAIL ADDRESS <small id="validationError">{this.state.emailValidate}</small></label>
                                    <input type="email" name="email" onChange={this.onChange} value={this.state.email} />
                                </div>
                                <div className="input-area">
                                    <label>PASSWORD <small id="validationError">{this.state.passwordValidate}</small></label>
                                    <input type="password" name="password" onChange={this.onChange} value={this.state.password} />
                                </div>
                                <a href="#" className="pull-right">Forgot Password?</a>
                                <div className="control-group">
                                    <label className="control control-checkbox">
                                        STAY SIGNED IN
								<input type="checkbox" />
                                        <div className="control_indicator"></div>
                                    </label>
                                </div>
                                {this.state.loading == true ? (<img style={loadingStyle} src="/client/assets/images/loading.gif" />) : (<input type="submit" onClick={this.signIn} value="SIGN IN" />)}                                
                                <h5>Not a member yet? <a href="#" data-toggle="modal" onClick={this.closeLogin} data-target="#applicaion-form">APPLY
								NOW</a></h5>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default LoginModal