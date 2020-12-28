import React, { Component } from 'react';
import { Header } from './../menu/header';
import auth from './../auth/auth-helper';
import swal from 'sweetalert';
import { create } from './../api/api-contact';



class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            nameValidation: '',
            text: '',
            textValidation: '',
            email: '',
            emailValidation: '',
            phoneNumber: '',
            phoneValidation: '',
        }
    }

    onchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        event.target.name === 'name' ? this.setState({ nameValidation: '' }) : '';
        event.target.name === 'text' ? this.setState({ textValidation: '' }) : '';
        event.target.name === 'email' ? this.setState({ emailValidation: '' }) : '';
        event.target.name === 'phoneNumber' ? this.setState({ phoneValidation: '' }) : '';
    }

    submitContact = () => {
        if (this.state.name == '' || this.state.text == '' || this.state.email == '' || this.state.phoneNumber == '') {
            //this.setState({ loading: false });
            this.state.name === '' ? (this.setState({ nameValidation: 'NAME IS REQUIRED' })) : this.setState({ nameValidation: '' });
            this.state.text === '' ? (this.setState({ textValidation: 'MESSAGE IS REQUIRED' })) : this.setState({ textValidation: '' });
            this.state.email === '' ? (this.setState({ emailValidation: 'EMAIL IS REQUIRED' })) : this.setState({ emailValidation: '' });
            this.state.phoneNumber === '' ? (this.setState({ phoneValidation: 'PHONE NUMBER IS REQUIRED' })) : this.setState({ phoneValidation: '' });

        } else {

            let contact = {
                name: this.state.name,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                text: this.state.text
            }

            create(contact).then((data) => {
                if (data.error) {
                    swal(data.error)
                } else {
                    this.setState({ name: '', email: '', text: '', phoneNumber: '' })
                    swal("Message Sent")
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
                            <h1>Contact Us</h1>
                            <div className="div-box"></div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-spacez">
                                    <label>Name <span id="validationError">{this.state.nameValidation}</span></label>
                                    <input autocomplete="off" name="name" type="text" value={this.state.name} onChange={this.onchange} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-spacez">
                                    <label>Phone Number <span id="validationError">{this.state.phoneValidation}</span></label>
                                    <input autocomplete="off" name="phoneNumber" type="text" value={this.state.phoneNumber} onChange={this.onchange} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-spacez">
                                    <label>Email <span id="validationError">{this.state.emailValidation}</span></label>
                                    <input autocomplete="off" name="email" type="text" value={this.state.email} onChange={this.onchange} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-area sp">
                                    <textarea name="text" autocomplete="off" className="textArea" value={this.state.text} onChange={this.onchange} placeholder="Enter Message"></textarea>                                    
                                    <label><span id="validationError">{this.state.textValidation}</span></label>
                                </div>
                            </div>
                        </div>
                        <div className="input-spacez"><input type="submit" value="Submit" onClick={this.submitContact} /></div>

                    </div>
                </section>

            </div>
        )
    }
} 

export default Contact;