import React, { Component } from 'react';
import { Header } from './../menu/header';
import swal from 'sweetalert';
import { resetPasswordEmail } from './../api/api-user';



class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailValidate: ''
        }
    }

    onchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        event.target.name === 'email' ? this.setState({ emailValidate: '' }) : '';
    }

    submitEmail = () => {
        if (this.state.email == '') {
            this.state.email === '' ? (this.setState({ emailValidate: 'EMAIL IS REQUIRED' })) : this.setState({ emailValidate: '' });
        } else {

            let password = {
                email: this.state.email
            }

            resetPasswordEmail(password).then((data) => {
                if (data.error) {
                    swal(data.error)
                } else {

                    this.setState({
                        email: ''
                    })
                    swal(data)
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
                                    <label>Enter Email <span id="validationError">{this.state.emailValidate}</span></label>
                                    <input name="email" type="text" value={this.state.email} onChange={this.onchange} />
                                </div>
                            </div>
                        </div>
                        <div className="input-spacez"><input type="submit" value="Submit" onClick={this.submitEmail} /></div>

                    </div>
                </section>

            </div>
        )
    }
}

export default ResetPassword;