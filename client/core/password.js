import React, { Component } from 'react';
import { Header } from './../menu/header';
import swal from 'sweetalert';
import { resetPassword } from './../api/api-user';



class Password extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailValidate: '',
            password: '',
            passwordValidate: '',
            passwordCheck: '',
            passwordCheckValidate: '',
            token: ''
        }
    }

    componentDidMount() {
        this.setState({
            token: this.props.match.params.token
        })
    }

    onchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        event.target.name === 'email' ? this.setState({ emailValidate: '' }) : '';
        event.target.name === 'password' ? this.setState({ passwordValidate: '' }) : '';
        event.target.name === 'passwordCheck' ? this.setState({ passwordCheckValidate: '' }) : '';
    }

    submitPassword = () => {
        if (this.state.email == '' || this.state.password == '' || this.state.password !== this.state.passwordCheck) {
            this.state.email === '' ? (this.setState({ emailValidate: 'MESSAGE IS REQUIRED' })) : this.setState({ emailValidate: '' });
            this.state.password === '' ? (this.setState({ passwordValidate: 'PASSWORD IS REQUIRED' })) : this.setState({ passwordValidate: '' });
            this.state.passwordCheck !== this.state.password ? (this.setState({ passwordCheckValidate: 'PASSWORD DOES NOT MATCH' })) : this.setState({ passwordCheckValidate: '' });

        } else {

            let passwordUpdate = {
                email: this.state.email,
                password: this.state.password,
                token: this.state.token
            }

            resetPassword(passwordUpdate).then((data) => {
                if (data.error) {
                    swal(data.error)
                    console.log(data)
                } else {
                    this.setState({ password: '', email: '', passwordCheck: '' })
                    swal("Password Updated")
                    console.log(data)
                }
            })

        }
    }


    render() {
        return (
            <div>
                <Header
                    path={this.props.location.pathname}
                />

                <section className="padd-b padd-top">
                    <div className="container-fluid">
                        <div className="text-center studio">
                            <h1>Reset Password</h1>
                            <div className="div-box"></div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-spacez">
                                    <label>Email <span id="validationError">{this.state.emailValidate}</span></label>
                                    <input name="email" type="text" value={this.state.email} onChange={this.onchange} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-spacez">
                                    <label>Password <span id="validationError">{this.state.passwordValidate}</span></label>
                                    <input name="password" type="password" value={this.state.password} onChange={this.onchange} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-spacez">
                                    <label>Re-Enter Password <span id="validationError">{this.state.passwordCheckValidate}</span></label>
                                    <input name="passwordCheck" type="password" value={this.state.passwordCheck} onChange={this.onchange} />
                                </div>
                            </div>
                        </div>
                        <div className="input-spacez"><input type="submit" value="Submit" onClick={this.submitPassword} /></div>

                    </div>
                </section>

            </div>
        )
    }
}

export default Password;