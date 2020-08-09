import React from 'react';
import auth from './../auth/auth-helper';
import { read, update } from './../api/api-user';



class AccountInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            fullNameValidation: '*',
            displayName: '',
            displayNameValidation: '*',
            phoneNumber: '',
            about: '',
            aboutValidation: '*',
            facebook: '',
            facebookStatus: '',
            Instagram: '',
            InstagramStatus: '',
            spotify: '',
            spotifyStatus: '',
            youtube: '',
            youtubeStatus: '',
            snapchat: '',
            snapchatStatus: '',
            tiktok: '',
            tiktokStatus: '',
            loading: true,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.userData !== prevProps.userData) {
            let user = this.props.userData;
            this.updateUser(user);
            console.log(user);
        }
    }

    updateUser = (data) => {
        this.setState({ 'fullName': data.fullName || '', 'displayName': data.displayName || '', 'phoneNumber': data.phoneNumber || '', 'about': data.about || '', 'loading': data.loading });
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        event.target.name === 'fullName' ? this.setState({ fullNameValidation: '*' }) : '';
        event.target.name === 'displayName' ? this.setState({ displayNameValidation: '*' }) : '';
        event.target.name === 'about' ? this.setState({ aboutValidation: '*' }) : '';
    }

    scrollApplication = () => {
        document.getElementById('accountScroll').scrollIntoView({ behavior: 'smooth' });
    }


    submitData = () => {
        this.setState({ loading: true });

        if (this.state.fullName === '' || this.state.displayName === '' || this.state.about === '') {
            this.setState({ loading: false });
            this.state.fullName === '' ? (this.setState({ fullNameValidation: '* name is required' }), this.scrollApplication()) : this.setState({ fullNameValidation: '*' });
            this.state.displayName === '' ? (this.setState({ displayNameValidation: '* name is required' }), this.scrollApplication()) : this.setState({ displayNameValidation: '*' });
            this.state.about === '' ? (this.setState({ aboutValidation: '* biography is required' }), this.scrollApplication()) : this.setState({ aboutValidation: '*' });
        } else {
            const user = {
                fullName: this.state.fullName,
                displayName: this.state.displayName,
                phoneNumber: this.state.phoneNumber,
                about: this.state.about,
            }

            this.props.updateUserParent(user);
        }
    }

    closeUpdate = () => {
        document.getElementById('closeUpdate').click();
    }

    render() {
        const loadingStyle = {
            width: '30%',
            height: '30%'
        }
        return (
            <div>
                <div className="row">
                    <div className="col-md-6" id="accountScroll">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="input-area sp">
                                    <label>FULL NAME <span id="validationError">{this.state.fullNameValidation}</span></label>
                                    <input name="fullName" type="text" onChange={this.onChange} value={this.state.fullName} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-area sp">
                                    <label>DISPLAY NAME <span id="validationError">{this.state.displayNameValidation}</span></label>
                                    <input name="displayName" type="text" onChange={this.onChange} value={this.state.displayName} />
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-md-12">
                                <div className="input-area sp">
                                    <label>PHONE NUMBER</label>
                                    <input name="phoneNumber" type="text" onChange={this.onChange} value={this.state.phoneNumber} />
                                </div>
                            </div>

                            <div className="clearfix"></div>


                            <div className="col-lg-12 padd-right">
                                <div className="input-area-two">
                                    <label>BIOGRAPHY <span id="validationError">{this.state.aboutValidation}</span></label>
                                    <textarea name="about" onChange={this.onChange} value={this.state.about}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-8 col-9 padd-both">
                                <div className="input-area sp im-a">
                                    <label>SOCIAL MEDIA LINKS</label>
                                    <input type="text" placeholder="Enter your Facebook URL..." />
                                    <img src="/client/assets/images/facebook.png" className="img-responsive img-ab" />
                                </div>
                                <div className="input-area sp im-a szw nw">

                                    <input type="text" placeholder="Enter your Instagram URL..." />
                                    <img src="/client/assets/images/insta.png" className="img-responsive img-ab-two" />
                                </div>

                                <div className="input-area sp im-a szw nz">

                                    <input type="text" placeholder="Enter your Spotify URL..." />
                                    <img src="/client/assets/images/spotify.png" className="img-responsive img-ab-two" />
                                </div>
                                <div className="input-area sp im-a szw">

                                    <input type="text" placeholder="Enter your Youtube URL..." />
                                    <img src="/client/assets/images/youtube.png" className="img-responsive img-ab-two" />
                                </div>
                                <div className="input-area sp im-a szw">

                                    <input type="text" placeholder="Enter your Snapchat URL..." />
                                    <img src="/client/assets/images/snapchat.png" className="img-responsive img-ab-two" />
                                </div>
                                <div className="input-area sp im-a szw">
                                    <input type="text" placeholder="Enter your Tiktok URL..." />
                                    <img src="/client/assets/images/tiktok.png" className="img-responsive img-ab-two" />
                                </div>
                            </div>
                            <div className="col-md-4 col-3 padd-left">
                                <div className="input-area sp">
                                    <label className="text-center">DISPLAY</label>
                                    <label className="switch ">
                                        <input type="checkbox" className="default" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="input-area sp m-top nw">
                                    <label className="switch ">
                                        <input type="checkbox" className="default" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="input-area sp m-top ex">
                                    <label className="switch nw">
                                        <input type="checkbox" className="default" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="input-area sp m-top">
                                    <label className="switch nw">
                                        <input type="checkbox" className="default" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="input-area sp m-top">

                                    <label className="switch nw">
                                        <input type="checkbox" className="default" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="input-area sp m-top">

                                    <label className="switch nw">
                                        <input type="checkbox" className="default" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="text-center mt-a">
                    <a href="#" className="white-btn" onClick={this.closeUpdate}>CANCEL</a>
                    {this.state.loading === true ? (<img style={loadingStyle} src="/client/assets/images/loading.gif" />) : (<a className="white-btn red" onClick={this.submitData}>SAVE CHANGES</a>)}
                </div>
            </div >
        );
    }
}


const Billing = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <ul className="package-list clearfix">
                        <li>CURRENT PLAN:</li> 	<li>GOLD MEMBERSHIP <div className="gold-plat"><img src="/client/assets/images/gold.png" /></div></li>


                        <li>RENEWS ON:</li>		<li>AUG 7, 2020</li>


                        <li>ACCOUNT STATUS: </li>	<li>ACTIVE</li>


                        <li>MONTHLY FEE:</li>		<li>$1,999</li>
                    </ul>


                </div>
                <div className="col-md-4 text-center">
                    <a href="#" data-toggle="modal" data-target="#change-plan" className="book-now-font">CHANGE PLAN</a>
                </div>
                <div className="clearfix"></div>
                <div className="col-md-6">
                    <h5>CARDS ON FILE</h5>
                    <ul className="card-detail clearfix">
                        <li><img src="/client/assets/images/card-one.png" className="card-im" /></li>
                        <li><p>VISA - **** 3432</p>


                            <p>EXP. DATE: 12/23</p>


                            <p>PRIMARY</p></li>
                        <li><a href="#"><img src="/client/assets/images/del.png" className="del-icon" /></a></li>

                    </ul>
                    <ul className="card-detail clearfix">
                        <li><img src="/client/assets/images/card-two.png" className="card-im" /></li>
                        <li><p>MASTERCARD - **** 4135</p>


                            <p>EXP. DATE: 12/23</p>


                            <p>MAKE PRIMARY</p></li>
                        <li><a href="#"><img src="/client/assets/images/del.png" className="del-icon" /></a></li>

                    </ul>
                    <a href="#" className="grey-link"><img src="/client/assets/images/gray-plus.png" className="grey-icon" /> ADD MORE</a>
                </div>
                <div className="col-md-6">
                    <h5>BILLING ADDRESS</h5>
                    <div className="row f-sz">
                        <div className="col-md-6 padd-right">
                            <div className="input-area sp">
                                <label>FIRST  NAME</label>
                                <input type="text" value="Beaux Denise" />
                            </div>
                        </div>
                        <div className="col-md-6 padd-left">
                            <div className="input-area sp">
                                <label>LAST NAME</label>
                                <input type="text" value="Williams" />
                            </div>
                        </div>
                        <div className="col-md-6 padd-right">
                            <div className="input-area sp">
                                <label>STREET ADDRESS </label>
                                <input type="text" value="123 Meadow Lane" />
                            </div>
                        </div>
                        <div className="col-md-6 padd-left">
                            <div className="input-area sp">
                                <label>CITY (OPTIONAL) </label>
                                <input type="text" value="Anaheim" />
                            </div>
                        </div>
                    </div>
                    <div className="row f-sz">
                        <div className="col-md-4 padd-right">
                            <div className="input-area sp">
                                <label>COUNTRY </label>
                                <select id="mySelect" data-show-content="true" className="form-control">
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
                                <label>COUNTRY  </label>
                                <select id="mySelect" data-show-content="true" className="form-control">
                                    <option value="California">California</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4 padd-left">
                            <div className="input-area sp">
                                <label>ZIP CODE</label>
                                <input type="text" value="91345" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-center">
                <a href="" className="white-btn">CANCEL</a>
                <a href="" className="white-btn red">SAVE CHANGES</a>
            </div>
        </div>

    );
}

const Credit = () => {
    return (
        <div>
            <h3 className="text-center white">CREDITS AVAILABLE:<br />42</h3>
            <div className="row"><div className="col-md-4">
                <div className="qty-new clearfix">
                    <h5 className="creditz">10 CREDITS</h5>
                    <span className="minus bg-dark">-</span>
                    <input type="number" className="count" name="qty" value="2" />
                    <span className="plus bg-dark">+</span>
                </div>
            </div>

                <div className="col-md-4">
                    <div className="qty-new clearfix">
                        <h5 className="creditz">10 CREDITS</h5>
                        <span className="minus bg-dark">-</span>
                        <input type="number" className="count" name="qty" value="3" />
                        <span className="plus bg-dark">+</span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="qty-new clearfix">
                        <h5 className="creditz">10 CREDITS</h5>
                        <span className="minus bg-dark">-</span>
                        <input type="number" className="count" name="qty" value="4" />
                        <span className="plus bg-dark">+</span>
                    </div>
                </div>
            </div>

            <div className="row"><div className="col-md-4">
                <div className="qty-new clearfix">
                    <h5 className="creditz">10 CREDITS</h5>
                    <span className="minus bg-dark">-</span>
                    <input type="number" className="count" name="qty" value="2" />
                    <span className="plus bg-dark">+</span>
                </div>
            </div>

                <div className="col-md-4">
                    <div className="qty-new clearfix">
                        <h5 className="creditz">10 CREDITS</h5>
                        <span className="minus bg-dark">-</span>
                        <input type="number" className="count" name="qty" value="3" />
                        <span className="plus bg-dark">+</span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="qty-new clearfix">
                        <h5 className="creditz">10 CREDITS</h5>
                        <span className="minus bg-dark">-</span>
                        <input type="number" className="count" name="qty" value="4" />
                        <span className="plus bg-dark">+</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">

                    <h5 className="m-b">CARD SELECTION</h5>
                    <label className="control-r control-radio">
                        <ul className="card-detail new clearfix">
                            <li><img src="/client/assets/images/card-one.png" className="card-im" /></li>
                            <li><p>VISA - **** 3432</p>


                                <p>EXP. DATE: 12/23</p>


                                <p>PRIMARY</p></li>
                            <li><a href="#"><img src="/client/assets/images/del.png" className="del-icon new" /></a></li>

                        </ul>
                        <input type="radio" name="radio" checked="checked" />
                        <div className="control_indicator-r"></div>
                    </label>


                    <label className="control-r control-radio">
                        <ul className="card-detail new clearfix">
                            <li><img src="/client/assets/images/card-two.png" className="card-im" /></li>
                            <li><p>MASTERCARD - **** 4135</p>


                                <p>EXP. DATE: 12/23</p>


                                <p>MAKE PRIMARY</p></li>
                            <li><a href="#"><img src="/client/assets/images/del.png" className="del-icon new" /></a></li>

                        </ul>
                        <input type="radio" name="radio" checked="checked" />
                        <div className="control_indicator-r"></div>
                    </label>

                    <a href="#" className="grey-link"><img src="/client/assets/images/gray-plus.png" className="grey-icon" /> ADD CARD</a>

                </div>
                <div className="col-md-4 text-center">
                    <h5 className="m-b">CREDITS IN CART</h5>
                    <div className="input-area ft-sz">
                        <input type="text" value="506" />
                        <span className="total-f">($507 TOTAL)</span>
                    </div>
                    <a href="#" className="book-now-green">BUY NOW</a>
                    <p className="f-small">BY CLICKING “BUY NOW” I AGREE TO THE TERMS OF SERVICE
& UNDERSTAND THAT MY CREDIT CARD WILL BE CHARGED THE AMOUNT ABOVE</p>
                </div>

                <div className="col-md-4 text-center">
                    <h5 className="m-b">BILLING HISTORY</h5>
                    <div className="top-spc">
                        <a href="#"><img src="/client/assets/images/pdf-icon.png" className="pd-icon" /> DOWNLOAD AS PDF</a>
                    </div>
                </div>

            </div>
        </div>


    );
}

const Booking = () => {
    return (
        <div>
            <div id="booking-list" className="owl-carousel owl-theme">

                <div className="item">
                    <div className="border-box text-center">
                        <img src="/client/assets/images/vc-1.png" className="user-dpz" />
                        <div className="m-ab"><a href="#"><img src="/client/assets/images/msg.png" /></a></div>
                        <h4>VOCAL LESSON <br />

W/JACKIE HISHMEH</h4>

                        <h5>DETAILS:</h5>
                        <div className="line3"></div>
                        <div className="time-icon"><img src="/client/assets/images/time-icon.png" /></div>
                        <h5>JULY 21, 2020 <br />
10 AM - 11 AM (PST)</h5>
                        <div className="video-ic"><img src="/client/assets/images/video-cam.png" /></div>
                        <h5>V-STUDIO 9<br />
(ZOOM SESSION)</h5>
                        <div className="join-cover">
                            <a href="#" className="g-btn">JOIN SESSION</a>
                            <a href="#" className="red-btn">CANCEL</a>
                        </div>
                        <span>(UP TO 72 HOURS PRIOR)</span>
                    </div>
                </div>
                <div className="item">
                    <div className="border-box text-center">
                        <img src="/client/assets/images/gui1.png" className="user-dpz" />
                        <div className="m-ab"><a href="#"><img src="/client/assets/images/msg.png" /></a></div>
                        <h4>VOCAL LESSON <br />

W/JACKIE HISHMEH</h4>

                        <h5>DETAILS:</h5>
                        <div className="line3"></div>
                        <div className="time-icon"><img src="/client/assets/images/time-icon.png" /></div>
                        <h5>JULY 21, 2020 <br />
10 AM - 11 AM (PST)</h5>
                        <div className="video-ic"><img src="/client/assets/images/video-cam.png" /></div>
                        <h5>V-STUDIO 9<br />
(ZOOM SESSION)</h5>
                        <div className="join-cover">
                            <a href="#" className="g-btn">JOIN SESSION</a>
                            <a href="#" className="red-btn">CANCEL</a>
                        </div>
                        <span>(UP TO 72 HOURS PRIOR)</span>
                    </div>
                </div>
                <div className="item">
                    <div className="border-box text-center">
                        <img src="/client/assets/images/cc1.png" className="user-dpz" />
                        <div className="m-ab"><a href="#"><img src="/client/assets/images/msg.png" /></a></div>
                        <h4>VOCAL LESSON <br />

W/JACKIE HISHMEH</h4>

                        <h5>DETAILS:</h5>
                        <div className="line3"></div>
                        <div className="time-icon"><img src="/client/assets/images/time-icon.png" /></div>
                        <h5>JULY 21, 2020 <br />
10 AM - 11 AM (PST)</h5>
                        <div className="video-ic"><img src="/client/assets/images/video-cam.png" /></div>
                        <h5>V-STUDIO 9<br />
(ZOOM SESSION)</h5>
                        <div className="join-cover">
                            <a href="#" className="g-btn">JOIN SESSION</a>
                            <a href="#" className="red-btn">CANCEL</a>
                        </div>
                        <span>(UP TO 72 HOURS PRIOR)</span>
                    </div>
                </div>

            </div>
        </div>

    );
}

const Password = () => {
    return (
        <div>
            <div className="input-box text-center">
                <div className="input-area">
                    <label>CURRENT PASSWORD</label>
                    <input type="password" />
                    <span>FORGOT PASSWORD? <a href="">CLICK HERE</a> TO RESET IT</span>
                </div>
                <div className="input-area">
                    <label>NEW PASSWORD</label>
                    <input type="password" />
                </div>

                <div className="input-area">
                    <label>CONFIRM NEW PASSWORD</label>
                    <input type="password" />
                </div>


                <input type="submit" value="SAVE CHANGES" />

            </div>
        </div>


    )
}

class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            fullName: '',
            dataEdit: {}
        }
    }


    readUser = () => {
        if (auth.isAuthenticated()) {
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
                    this.setState({ 'fullName': data.fullName, 'displayName': data.displayName, dataEdit: { ...data, loading: false } });

                    //console.log(this.state.dataEdit);
                }
            })
        }
    }

    componentDidMount() {
        this.readUser();
    }

    updateUserParent_ = (user) => {
        const jwt = auth.isAuthenticated();
        const userId = jwt.user._id;
        const token = jwt.token;

        update({
            userId: userId
        }, {
            t: token
        }, user).then((data) => {
            if (data.error) {
                alert(data.error);
            } else {
                this.setState({ 'fullName': data.fullName, 'displayName': data.displayName, dataEdit: { ...data, loading: false } });
            }
        });
    }

    render() {
        return (
            <div className="modal fade" id="account-setting" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered act-set" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" id="closeUpdate" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div id="verticalTab">

                                        <div className="account-info clearfix">
                                            <div className="account-cov">
                                                <div className="account-img float-lg-left">
                                                    <img className="img-set" src="/client/assets/images/profile-page.png" />
                                                </div>
                                                <div className="account-data float-lg-left">
                                                    <h4 style={{color: 'white'}}>{this.state.displayName !== '' ? this.state.displayName : this.state.fullName.substr(0, 6)}</h4>
                                                    <h5>GOLD MEMBER</h5>
                                                    <h6>42 CREDITS</h6>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                            <ul className="resp-tabs-list">
                                                <li>ACCOUNT INFO</li>
                                                <li>PLAN & BILLING</li>
                                                <li>BUY CREDITS</li>
                                                <li>MY BOOKINGS</li>
                                                <li>CHANGE PASSWORD</li>


                                            </ul>
                                            <a className="sign-out" data-toggle="modal" data-target="#cancel-box-two">SIGN OUT</a>
                                        </div>




                                        <div className="resp-tabs-container">
                                            <AccountInfo
                                                userData={this.state.dataEdit}
                                                updateUserParent={this.updateUserParent_}
                                            />

                                            <Billing />

                                            <Credit />

                                            <Booking />

                                            <Password />
                                        </div>





                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Account;