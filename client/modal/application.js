import React from 'react';
import { create } from './../api/api-user';





class ApplicationForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            firstNameValidate: '',
            lastName: '',
            lastNameValidate: '',
            email: '',
            emailValidate: '',
            link1: '',
            link1Validate: '',
            password: '',
            passwordValidate: '',
            passwordConfirm: '',
            passwordConfirmValidate: '',
            phoneNumber: '',
            link2: '',
            address: '',
            city: '',
            country: '',
            zipcode: '',
            about: '',
            aboutValidate: '',
            agreement: false,
            agreementValidate: '',
            loading: false,
        }
    }

    onChangeInput = (event) => {
        const value = event.target.name === 'agreement' ? event.target.checked : event.target.value;

        this.setState({
            [event.target.name]: value
        });

        event.target.name === 'firstName' ? this.setState({ firstNameValidate: '' }) : '';
        event.target.name === 'lastName' ? this.setState({ lastNameValidate: '' }) : '';
        event.target.name === 'email' ? this.setState({ emailValidate: '' }) : '';
        event.target.name === 'link1' ? this.setState({ link1Validate: '' }) : '';
        event.target.name === 'password' ? this.setState({ passwordValidate: '' }) : '';
        event.target.name === 'passwordConfirm' ? this.setState({ passwordConfirmValidate: '' }) : '';
        event.target.name === 'about' ? this.setState({ aboutValidate: '' }) : '';

        if (event.target.name === 'agreement') {
            event.target.checked === true ? this.setState({ agreementValidate: '' }) : '';
        }
    }

    scrollApplication = () => {
        document.getElementById('applicationError').scrollIntoView({ behavior: 'smooth' })
    }

    register = () => {

        this.setState({ loading: true });


        if (this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.link1 === '' || this.state.password === '' || this.state.agreement === false || this.state.about === '' || this.state.password != this.state.passwordConfirm) {
            this.setState({ loading: false });
            this.state.firstName === '' ? (this.setState({ firstNameValidate: 'FIRST NAME IS REQUIRED' }), this.scrollApplication()) : this.setState({ firstNameValidate: '' });
            this.state.lastName === '' ? (this.setState({ lastNameValidate: 'LAST NAME IS REQUIRED' }), this.scrollApplication()) : this.setState({ lastNameValidate: '' });
            this.state.email === '' ? (this.setState({ emailValidate: 'EMAIL' }), this.scrollApplication()) : this.setState({ emailValidate: '' });
            this.state.link1 === '' ? (this.setState({ link1Validate: 'LINK IS REQUIRED' }), this.scrollApplication()) : this.setState({ link1Validate: '' });
            this.state.password === '' ? (this.setState({ passwordValidate: 'PASSWORD IS REQUIRED' }), this.scrollApplication()) : this.setState({ passwordValidate: '' });
            this.state.agreement === false ? this.setState({ agreementValidate: 'agreement to terms and condition is required' }, this.scrollApplication()) : this.setState({ agreementValidate: '' });
            this.state.password != this.state.passwordConfirm ? this.setState({ passwordConfirmValidate: 'PASSWORD DOES NOT MATCH' }, this.scrollApplication()) : this.setState({ passwordConfirmValidate: '' });
            this.state.about === '' ? this.setState({ aboutValidate: 'ABOUT IS REQUIRED' }, this.scrollApplication()) : this.setState({ aboutValidate: '' });

        } else {
            let thankYou = document.getElementById('thankYou');
            let close = document.getElementById('closeApplication');

            const user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                link1: this.state.link1,
                phoneNumber: this.state.phoneNumber,
                link2: this.state.link2,
                address: this.state.address,
                city: this.state.city,
                country: this.state.country,
                state: this.state.state,
                zipcode: this.state.zipcode,
                about: this.state.about,
            }

            create(user).then((data) => {
                if (data.error) {
                    data.error[0] === 'email' ? this.setState({ emailValidate: data.error[1] }) : this.setState({ emailValidate: '' });
                    this.setState({ loading: false });
                    this.scrollApplication();
                } else {
                    this.setState({ fullName: '', fullNameValidate: '', email: '', emailValidate: '', password: '', passwordValidate: '', passwordConfirm: '', passwordConfirmValidate: '', link: '', linkValidate: '*', phoneNumber: '', about: '', aboutValidate: '', agreement: false, agreementValidate: '' });
                    this.setState({ loading: false });
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
                                            <label>FIRST NAME </label>
                                            <input type="text" name="firstName" placeholder="Beaux" onChange={this.onChangeInput} value={this.state.firstName} />
                                            <div className="text-left" id="validationError">{this.state.firstNameValidate}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 padd-left">
                                        <div className="input-area sp">
                                            <label>LAST NAME </label>
                                            <input type="text" name="lastName" placeholder="Beaux" onChange={this.onChangeInput} value={this.state.lastName} />
                                            <div className="text-left" id="validationError">{this.state.lastNameValidate}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 padd-right">
                                        <div className="input-area sp">
                                            <label>EMAIL ADDRESS </label>
                                            <input type="email" name="email" placeholder="michelledenise99@gmail.com" onChange={this.onChangeInput} value={this.state.email} />
                                            <div className="text-left" id="validationError">{this.state.emailValidate}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 padd-left ">
                                        <div className="input-area sp">
                                            <label>YOUR MUSIC/VIDEO - LINK </label>
                                            <input type="text" name="link1" placeholder="Paste URL to show us your talent..." onChange={this.onChangeInput} value={this.state.link1} />
                                            <div className="text-left" id="validationError">{this.state.link1Validate}</div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 padd-right">
                                        <div className="input-area sp">
                                            <label>Password </label>
                                            <input type="password" name="password" placeholder="******" onChange={this.onChangeInput} value={this.state.password} />
                                            <div className="text-left" id="validationError">{this.state.passwordValidate}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 padd-left">
                                        <div className="input-area sp">
                                            <label>Retype-Password </label>
                                            <input type="password" name="passwordConfirm" placeholder="******" onChange={this.onChangeInput} value={this.state.passwordConfirm} />
                                            <div className="text-left" id="validationError">{this.state.passwordConfirmValidate}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="line3 sp-area"></div>


                                <div className="row">
                                    <div className="col-md-6 padd-right">
                                        <div className="input-area sp">
                                            <label>PHONE NUMBER (OPTIONAL) </label>
                                            <input type="text" name="phoneNumber" placeholder="(310) 954-3456" onChange={this.onChangeInput} value={this.state.phoneNumber} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 padd-left ">
                                        <div className="input-area sp">
                                            <label>YOUR MUSIC/VIDEO - LINK </label>
                                            <input type="text" name="link2" placeholder="Paste URL to show us your talent..." onChange={this.onChangeInput} value={this.state.link2} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 padd-right">
                                        <div className="input-area sp">
                                            <label>STREET ADDRESS (OPTIONAL) </label>
                                            <input type="text" name="address" onChange={this.onChangeInput} value={this.state.address} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 padd-left">
                                        <div className="input-area sp">
                                            <label>CITY (OPTIONAL) </label>
                                            <input type="text" name="city" onChange={this.onChangeInput} value={this.state.city} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 padd-right">
                                        <div className="input-area sp">
                                            <label>COUNTRY (OPTIONAL) </label>
                                            <select id="mySelect" name="country" onChange={this.onChangeInput} value={this.state.country} onCh data-show-content="true" className="form-control">
                                                <option selected>Select Country</option>
                                                <option value="Afganistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bonaire">Bonaire</option>
                                                <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Canary Islands">Canary Islands</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cayman Islands">Cayman Islands</option>
                                                <option value="Central African Republic">Central African Republic</option>
                                                <option value="Chad">Chad</option>
                                                <option value="Channel Islands">Channel Islands</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Cocos Island">Cocos Island</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Cote DIvoire">Cote DIvoire</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Curaco">Curacao</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="East Timor">East Timor</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Falkland Islands">Falkland Islands</option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="French Guiana">French Guiana</option>
                                                <option value="French Polynesia">French Polynesia</option>
                                                <option value="French Southern Ter">French Southern Ter</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Gibraltar">Gibraltar</option>
                                                <option value="Great Britain">Great Britain</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Greenland">Greenland</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guam">Guam</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Hawaii">Hawaii</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="India">India</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Isle of Man">Isle of Man</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea North">Korea North</option>
                                                <option value="Korea Sout">Korea South</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Macau">Macau</option>
                                                <option value="Macedonia">Macedonia</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Martinique">Martinique</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Midway Islands">Midway Islands</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Nambia">Nambia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherland Antilles">Netherland Antilles</option>
                                                <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                                <option value="Nevis">Nevis</option>
                                                <option value="New Caledonia">New Caledonia</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Island">Norfolk Island</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau Island">Palau Island</option>
                                                <option value="Palestine">Palestine</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Phillipines">Philippines</option>
                                                <option value="Pitcairn Island">Pitcairn Island</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Puerto Rico">Puerto Rico</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Republic of Montenegro">Republic of Montenegro</option>
                                                <option value="Republic of Serbia">Republic of Serbia</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="St Barthelemy">St Barthelemy</option>
                                                <option value="St Eustatius">St Eustatius</option>
                                                <option value="St Helena">St Helena</option>
                                                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                                <option value="St Lucia">St Lucia</option>
                                                <option value="St Maarten">St Maarten</option>
                                                <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                                <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                                <option value="Saipan">Saipan</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="Samoa American">Samoa American</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Swaziland">Swaziland</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Tahiti">Tahiti</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Erimates">United Arab Emirates</option>
                                                <option selected value="United States">United States</option>
                                                <option value="Uraguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatican City State">Vatican City State</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                                <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                                <option value="Wake Island">Wake Island</option>
                                                <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zaire">Zaire</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>


                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4 padd-both">
                                        <div className="input-area sp">
                                            <label>STATE (OPTIONAL) </label>
                                            <input type="text" name="state" onChange={this.onChangeInput} value={this.state.state} />
                                        </div>
                                    </div>
                                    <div className="col-md-4 padd-left">
                                        <div className="input-area sp">
                                            <label>ZIP CODE (OPTIONAL)</label>
                                            <input type="text" name="zipcode" onChange={this.onChangeInput} value={this.state.zipcode} />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-area sp">
                                    <label>TELL US A LITTLE ABOUT YOURSELF</label>
                                    <textarea name="about" value={this.state.about} onChange={this.onChangeInput} placeholder="Examples: Background, dreams, ambitions, strengths, weaknesses..." />
                                    <div className="text-left" id="validationError">{this.state.aboutValidate}</div>
                                </div>


                                <a id="thankYou" href="#" data-toggle="modal" data-target="#thankyou"></a>{this.state.loading == true ? (<div><input type="submit" value="APPLY NOW"
                                    className="spc" /><img style={loadingStyle} src="/client/assets/images/loading4.gif" /></div>) : (<input type="submit" onClick={this.register} value="APPLY NOW"
                                    className="spc" />)}
                                <div className="control-group two">
                                    <label className="control control-checkbox">
                                        I agree to the <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>
                                        <input name="agreement" type="checkbox" checked={this.state.agreement} onChange={this.onChangeInput} />
                                        <div className="control_indicator"></div>
                                    </label>
                                    <div id="agreementError">{this.state.agreementValidate}</div>
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