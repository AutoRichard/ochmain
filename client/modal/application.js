import React from 'react';
import { create } from './../api/api-user';





class ApplicationForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            fullNameValidate: '*',
            email: '',
            emailValidate: '*',
            password: '',
            passwordValidate: '*',
            passwordConfirm: '',
            passwordConfirmValidate: '*',
            link: '',
            linkValidate: '*',
            phoneNumber: '',
            about: '',
            aboutValidate: '*',
            agreement: false,
            agreementValidate: '',
            loading: false,
        }
    }

    onChange = (event) => {
        const value = event.target.name === 'agreement' ? event.target.checked : event.target.value;

        this.setState({
            [event.target.name]: value
        });

        event.target.name === 'fullName' ? this.setState({ fullNameValidate: '*' }) : '';
        event.target.name === 'email' ? this.setState({ emailValidate: '*' }) : '';
        event.target.name === 'password' ? this.setState({ passwordValidate: '*' }) : '';
        event.target.name === 'passwordConfirm' ? this.setState({ passwordConfirmValidate: '*' }) : '';
        event.target.name === 'link' ? this.setState({ linkValidate: '*' }) : '';
        event.target.name === 'about' ? this.setState({ aboutValidate: '*' }) : '';

        if (event.target.name === 'agreement') {
            event.target.checked === true ? this.setState({ agreementValidate: '' }) : '';
        }
    }

    scrollApplication = () => {
        document.getElementById('applicationError').scrollIntoView({ behavior: 'smooth' })
    }

    register = () => {

        this.setState({loading: true});


        if (this.state.fullName === '' || this.state.email === '' || this.state.password === '' || this.state.link === '' || this.state.agreement === false || this.state.about === '' || this.state.password != this.state.passwordConfirm) {
            this.setState({loading: false});
            this.state.fullName === '' ? (this.setState({ fullNameValidate: '* full name is required' }), this.scrollApplication()) : this.setState({ fullNameValidate: '*' });
            this.state.email === '' ? (this.setState({ emailValidate: '* email is required' }), this.scrollApplication()) : this.setState({ emailValidate: '*' });
            this.state.password === '' ? (this.setState({ passwordValidate: '* password is required' }), this.scrollApplication()) : this.setState({ passwordValidate: '*' });
            this.state.link === '' ? (this.setState({ linkValidate: '* required' }), this.scrollApplication()) : this.setState({ linkValidate: '*' });
            this.state.agreement === false ? this.setState({ agreementValidate: 'agreement to terms and condition is required' }, this.scrollApplication()) : this.setState({ agreementValidate: '*' });
            this.state.password != this.state.passwordConfirm ? this.setState({ passwordConfirmValidate: 'check password' }, this.scrollApplication()) : this.setState({ passwordConfirmValidate: '*' });
            this.state.about === '' ? this.setState({ aboutValidate: 'write about yourself' }, this.scrollApplication()) : this.setState({ aboutValidate: '*' });

        } else {
            let thankYou = document.getElementById('thankYou');
            let close = document.getElementById('closeApplication');

            const user = {
                fullName: this.state.fullName,
                email: this.state.email,
                password: this.state.password,
                link: this.state.link,
                phoneNumber: this.state.phoneNumber,
                about: this.state.about,
            }

            create(user).then((data) => {
                if (data.error) {
                    data.error[0] === 'email' ? this.setState({ emailValidate: '* ' + data.error[1] }) : this.setState({ emailValidate: '*' });
                    this.setState({loading: false});
                    this.scrollApplication();
                } else {
                    this.setState({ fullName: '', fullNameValidate: '*', email: '', emailValidate: '*', password: '', passwordValidate: '*', passwordConfirm: '', passwordConfirmValidate: '*', link: '', linkValidate: '*', phoneNumber: '', about: '', aboutValidate: '*', agreement: false, agreementValidate: '' });
                    this.setState({loading: false});
                    close.click();
                    thankYou.click();
                }
            });
        }
    }

    render() {
        const loadingStyle = {
            width: '40%',
            height: '40%'
        }
        return (
            <div className="modal" id="applicaion-form">
                <div className="modal-dialog modal-dialog-centered application" id="applicationError">
                    <div className="modal-content">

                        <div className="modal-header">

                            <button id="closeApplication" type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div className="modal-body bg-black-two text-center">
                            <h1>APPLICATION FORM</h1>
                            <div className="input-box-two">
                                <div className="row">
                                    <div className="col-md-6 padd-right">
                                        <div className="input-area sp">
                                            <label>FULL NAME <span id="validationError">{this.state.fullNameValidate}</span></label>
                                            <input type="text" name="fullName" placeholder="Beaux" onChange={this.onChange} value={this.state.fullName} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 padd-left">
                                        <div className="input-area sp">
                                            <label>EMAIL ADDRESS <span id="validationError">{this.state.emailValidate}</span></label>
                                            <input type="email" name="email" placeholder="michelledenise99@gmail.com" onChange={this.onChange} value={this.state.email} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 padd-right">
                                        <div className="input-area sp">
                                            <label>PHONE NUMBER (OPTIONAL) </label>
                                            <input type="text" name="phoneNumber" placeholder="(310) 954-3456" onChange={this.onChange} value={this.state.phoneNumber} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 padd-left">
                                        <div className="input-area sp">
                                            <label>YOUR MUSIC/VIDEO - LINK <span id="validationError">{this.state.linkValidate}</span></label>
                                            <input type="text" name="link" placeholder="Paste URL to show us your talent..." onChange={this.onChange} value={this.state.link} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 padd-right">
                                        <div className="input-area sp">
                                            <label>Password <span id="validationError">{this.state.passwordValidate}</span></label>
                                            <input type="password" name="password" placeholder="******" onChange={this.onChange} value={this.state.password} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 padd-left">
                                        <div className="input-area sp">
                                            <label>Retype-Password <span id="validationError">{this.state.passwordConfirmValidate}</span></label>
                                            <input type="password" name="passwordConfirm" placeholder="******" onChange={this.onChange} value={this.state.passwordConfirm} />
                                        </div>
                                    </div>
                                </div>
                                <div className="line3 sp-area"></div>
                                <div className="input-area sp">
                                    <label>TELL US A LITTLE ABOUT YOURSELF <span id="validationError">{this.state.aboutValidate}</span></label>
                                    <textarea name="about" value={this.state.about} onChange={this.onChange} placeholder="Examples: Background, dreams, ambitions, strengths, weaknesses..." />
                                </div>


                                <a id="thankYou" href="#" data-toggle="modal" data-target="#thankyou"></a>{this.state.loading == true ? (<img style={loadingStyle} src="/client/assets/images/loading.gif" />) : (<input type="submit" onClick={this.register} value="APPLY NOW"
                                    className="spc" />)}
                                <div className="control-group two">
                                    <label className="control control-checkbox">
                                        I agree to the <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>
                                        <input name="agreement" type="checkbox" checked={this.state.agreement} onChange={this.onChange} />
                                        <div className="control_indicator"></div>
                                    </label>
                                    <span id="agreementError">{this.state.agreementValidate}</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default ApplicationForm