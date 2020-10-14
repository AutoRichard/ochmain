import React from 'react';
import auth from './../auth/auth-helper';
import { read, update, password } from './../api/api-user';
import { createLink, checkLink, updateLinkStatus } from './../api/api-link';
import swal from 'sweetalert'

import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './checkout'




class AccountInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            firstNameValidation: '',
            lastName: '',
            lastNameValidation: '',
            displayName: '',
            displayNameValidation: '',
            phoneNumber: '',
            about: '',
            aboutValidation: '',
            facebook: '',
            facebookStatus: false,
            instagram: '',
            instagramStatus: false,
            spotify: '',
            spotifyStatus: false,
            youtube: '',
            youtubeStatus: false,
            snapchat: '',
            snapchatStatus: false,
            tiktok: '',
            tiktokStatus: false,
            loading: true,
            newLink: true,
            linkId: ''
        }
    }

    componentDidMount() {
        this.linkData = new FormData()
        if (auth.isAuthenticated()) {
            this.updateLink()
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.userData !== prevProps.userData) {
            let user = this.props.userData;
            this.updateUser(user);
        }
    }

    updateUser = (data) => {
        this.setState({ firstName: data.firstName || '', lastName: data.lastName || '', displayName: data.displayName || '', phoneNumber: data.phoneNumber || '', about: data.about || '', loading: data.loading });
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        event.target.name === 'firstName' ? this.setState({ firstNameValidation: '' }) : '';
        event.target.name === 'lastName' ? this.setState({ lastNameValidation: '' }) : '';
        event.target.name === 'displayName' ? this.setState({ displayNameValidation: '' }) : '';
        event.target.name === 'about' ? this.setState({ aboutValidation: '' }) : '';
    }

    onChangeLink = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onChangeLinkStatus = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        });
    }

    scrollApplication = () => {
        document.getElementById('accountScroll').scrollIntoView({ behavior: 'smooth' });
    }


    submitData = () => {
        this.setState({ loading: true });

        if (this.state.firstName === '' || this.state.lastName === '' || this.state.displayName === '' || this.state.about === '') {
            this.setState({ loading: false });
            this.state.firstName === '' ? (this.setState({ firstNameValidation: 'FIRST NAME IS REQUIRED' }), this.scrollApplication()) : this.setState({ firstNameValidation: '' });
            this.state.lastName === '' ? (this.setState({ lastNameValidation: 'LAST NAME IS REQUIRED' }), this.scrollApplication()) : this.setState({ lastNameValidation: '' });
            this.state.displayName === '' ? (this.setState({ displayNameValidation: 'DISPLAY NAME IS REQUIRED' }), this.scrollApplication()) : this.setState({ displayNameValidation: '' });
            this.state.about === '' ? (this.setState({ aboutValidation: 'BIOGRAPHY IS REQUIRED' }), this.scrollApplication()) : this.setState({ aboutValidation: '' });
        } else {
            const user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                displayName: this.state.displayName,
                phoneNumber: this.state.phoneNumber,
                about: this.state.about,
            }

            this.submitLink(user);
        }
    }

    submitLink = (user) => {
        this.linkData.set('facebook', this.state.facebook)
        this.linkData.set('facebookStatus', this.state.facebookStatus)
        this.linkData.set('instagram', this.state.instagram)
        this.linkData.set('instagramStatus', this.state.instagramStatus)
        this.linkData.set('spotify', this.state.spotify)
        this.linkData.set('spotifyStatus', this.state.spotifyStatus)
        this.linkData.set('youtube', this.state.youtube)
        this.linkData.set('youtubeStatus', this.state.youtubeStatus)
        this.linkData.set('snapchat', this.state.snapchat)
        this.linkData.set('snapchatStatus', this.state.snapchatStatus)
        this.linkData.set('tiktok', this.state.tiktok)
        this.linkData.set('tiktokStatus', this.state.tiktokStatus)


        if (!auth.isAuthenticated) {
            window.location = '/'
            return
        }


        const jwt = auth.isAuthenticated();
        const userId = jwt.user._id;
        const token = jwt.token;

        this.linkData.set('userId', userId);

        checkLink({
            userId: userId
        }).then((data) => {
            if (data.error) {
                swal(data.error)
            } else {
                let countLink = data.link.length;
                let links = data.link;
                if (countLink > 0 && countLink == 1) {
                    updateLinkStatus({ linkId: this.state.linkId }, { t: token }, this.linkData).then((data) => {
                        if (data.error) {
                            console.log(data.error);
                        } else {
                            this.props.updateUserParent(user);
                            this.setState({ newLink: false, linkId: data._id });
                        }
                    });
                } else if (countLink == 0) {
                    createLink({
                        t: token
                    }, this.linkData).then((data) => {
                        if (data.error) {
                            console.log(data.error);
                        } else {
                            this.props.updateUserParent(user);
                            this.setState({ newLink: false, linkId: data._id });
                        }
                    });
                }
            }
        })
    }

    closeUpdate = () => {
        document.getElementById('closeUpdate').click();
    }

    updateLink = () => {
        if (!auth.isAuthenticated) {
            return
        }

        const jwt = auth.isAuthenticated();
        const userId = jwt.user._id;
        const token = jwt.token;

        checkLink({
            userId: userId
        }).then((data) => {
            if (data.error) {
                swal(data.error)
            } else {
                let countLink = data.link.length;
                let links = data.link;
                if (countLink > 0 && countLink == 1) {
                    links = links[0]
                    this.setState({
                        facebook: links.facebook, facebookStatus: links.facebookStatus, instagram: links.instagram, instagramStatus: links.instagramStatus,
                        spotify: links.spotify, spotifyStatus: links.spotifyStatus, youtube: links.youtube, youtubeStatus: links.youtubeStatus,
                        snapchat: links.snapchat, snapchatStatus: links.snapchatStatus, tiktok: links.tiktok, tiktokStatus: links.tiktokStatus,
                        newLink: false, linkId: links._id
                    })
                } else if (countLink == 0) {

                    this.linkData.set('facebook', this.state.facebook)
                    this.linkData.set('facebookStatus', this.state.facebookStatus)
                    this.linkData.set('instagram', this.state.instagram)
                    this.linkData.set('instagramStatus', this.state.instagramStatus)
                    this.linkData.set('spotify', this.state.spotify)
                    this.linkData.set('spotifyStatus', this.state.spotifyStatus)
                    this.linkData.set('youtube', this.state.youtube)
                    this.linkData.set('youtubeStatus', this.state.youtubeStatus)
                    this.linkData.set('snapchat', this.state.snapchat)
                    this.linkData.set('snapchatStatus', this.state.snapchatStatus)
                    this.linkData.set('tiktok', this.state.tiktok)
                    this.linkData.set('tiktokStatus', this.state.tiktokStatus)
                    this.linkData.set('userId', userId);

                    createLink({
                        t: token
                    }, this.linkData).then((data) => {
                        if (data.error) {
                            console.log(data.error);
                        } else {
                            this.setState({ newLink: false, linkId: data._id });
                        }
                    })


                }
            }
        })
    }

    render() {
        const loadingStyle = {
            width: '20%',
            height: '20%'
        }
        return (
            <div>
                <div className="row">
                    <div className="col-md-6" id="accountScroll">
                        <div className="row">
                            <div className="col-md-6 padd-right">
                                <div className="input-area sp">
                                    <label>FIRST NAME </label>
                                    <input name="firstName" type="text" onChange={this.onChange} value={this.state.firstName} />
                                    <span id="validationError">{this.state.firstNameValidation}</span>
                                </div>
                            </div>
                            <div className="col-md-6 padd-left">
                                <div className="input-area sp">
                                    <label>LAST NAME </label>
                                    <input name="lastName" type="text" onChange={this.onChange} value={this.state.lastName} />
                                    <span id="validationError">{this.state.lastNameValidation}</span>
                                </div>
                            </div>
                            <div className="col-md-6 padd-right">
                                <div className="input-area sp error">
                                    <label>DISPLAY NAME </label>
                                    <input name="displayName" type="text" onChange={this.onChange} value={this.state.displayName} />
                                    <span id="validationError">{this.state.displayNameValidation}</span>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-md-6 padd-left">
                                <div className="input-area sp">
                                    <label>PHONE NUMBER</label>
                                    <input name="phoneNumber" type="text" onChange={this.onChange} value={this.state.phoneNumber} />
                                </div>
                            </div>

                            <div className="clearfix"></div>


                            <div className="col-lg-12">
                                <div className="input-area-two">
                                    <label>BIOGRAPHY</label>
                                    <textarea name="about" onChange={this.onChange} value={this.state.about}></textarea>
                                    <span id="validationError">{this.state.aboutValidation}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" id="linkScroll">
                        <div className="row">
                            <div className="col-md-8 col-9 padd-both">
                                <div className="input-area sp im-a">
                                    <label>SOCIAL MEDIA LINKS</label>
                                    <input type="text" name="facebook" onChange={this.onChangeLink} value={this.state.facebook} placeholder="Enter your Facebook URL..." />
                                    <img src="/client/assets/images/facebook.png" className="img-responsive img-ab" />
                                </div>
                                <div className="input-area sp im-a szw nw">

                                    <input type="text" name="instagram" onChange={this.onChangeLink} value={this.state.instagram} placeholder="Enter your instagram URL..." />
                                    <img src="/client/assets/images/insta.png" className="img-responsive img-ab-two" />
                                </div>

                                <div className="input-area sp im-a szw nz">

                                    <input type="text" name="spotify" onChange={this.onChangeLink} value={this.state.spotify} placeholder="Enter your Spotify URL..." />
                                    <img src="/client/assets/images/spotify.png" className="img-responsive img-ab-two" />
                                </div>
                                <div className="input-area sp im-a szw">

                                    <input type="text" name="youtube" onChange={this.onChangeLink} value={this.state.youtube} placeholder="Enter your Youtube URL..." />
                                    <img src="/client/assets/images/youtube.png" className="img-responsive img-ab-two" />
                                </div>
                                <div className="input-area sp im-a szw">

                                    <input type="text" name="snapchat" onChange={this.onChangeLink} value={this.state.snapchat} placeholder="Enter your Snapchat URL..." />
                                    <img src="/client/assets/images/snapchat.png" className="img-responsive img-ab-two" />
                                </div>
                                <div className="input-area sp im-a szw">
                                    <input type="text" name="tiktok" onChange={this.onChangeLink} value={this.state.tiktok} placeholder="Enter your Tiktok URL..." />
                                    <img src="/client/assets/images/tiktok.png" className="img-responsive img-ab-two" />
                                </div>
                            </div>
                            <div className="col-md-4 col-3 padd-left">
                                <div className="input-area sp">
                                    <label className="text-center">DISPLAY</label>
                                    <label className="switch ">
                                        <input type="checkbox" name="facebookStatus" onChange={this.onChangeLinkStatus} checked={this.state.facebookStatus} value={this.state.facebookStatus} className="default" />
                                        <span className="slider round"></span>

                                    </label>
                                </div>
                                <div className="input-area sp m-top nw">
                                    <label className="switch ">
                                        <input type="checkbox" name="instagramStatus" onChange={this.onChangeLinkStatus} checked={this.state.instagramStatus} value={this.state.instagramStatus} className="default" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="input-area sp m-top ex">
                                    <label className="switch nw">
                                        <input type="checkbox" name="spotifyStatus" onChange={this.onChangeLinkStatus} checked={this.state.spotifyStatus} value={this.state.spotifyStatus} className="default" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="input-area sp m-top">
                                    <label className="switch nw">
                                        <input type="checkbox" name="youtubeStatus" onChange={this.onChangeLinkStatus} checked={this.state.youtubeStatus} value={this.state.youtubeStatus} className="default" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="input-area sp m-top">

                                    <label className="switch nw">
                                        <input type="checkbox" name="snapchatStatus" onChange={this.onChangeLinkStatus} checked={this.state.snapchatStatus} value={this.state.snapchatStatus} className="default" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="input-area sp m-top">

                                    <label className="switch nw">
                                        <input type="checkbox" name="tiktokStatus" onChange={this.onChangeLinkStatus} checked={this.state.tiktokStatus} value={this.state.tiktokStatus} className="default" />
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
                    <a className="white-btn red" href="javascript:void(0)" onClick={this.submitData}>SAVE CHANGES {this.state.loading === true ? (<img style={loadingStyle} src="/client/assets/images/loading4.gif" />) : ('')}</a>
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

class Credit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checkout: false,
            stripe: null,
            credit: 1
        }
    }


    plus = () => {
        this.setState({ credit: this.state.credit + 1 })
    }

    minus = () => {
        if (this.state.credit > 1) {
            this.setState({ credit: this.state.credit - 1 })
        }
    }


    componentDidMount = () => {
        if (window.Stripe) {
            this.setState({ stripe: window.Stripe('pk_test_dksRz4lNch4nYscnd8gzxf1E00llQZyDOL') });
        } else {
            document.querySelector('#stripe-js').addEventListener('load', () => {
                // Create Stripe instance once Stripe.js loads
                this.setState({ stripe: window.Stripe('pk_test_dksRz4lNch4nYscnd8gzxf1E00llQZyDOL') });
            });
        }
    }


    refreshParent = () => {
        this.setState({ credit: 1 })
        $('.count').val(1);

        this.props._refreshParent();
    }


    render() {
        return (
            <div>
                <h3 className="text-center white">CREDITS AVAILABLE: <br />42</h3>
                <div className="row">
                    <div className="col-md-4 center-block">
                    </div>
                    <div className="col-md-4">
                        <div className="qty-new clearfix">
                            <h5 className="creditz">{this.state.credit} CREDITS</h5>
                            <span onClick={this.minus} className="minus bg-dark">-</span>
                            <input type="number" onChange={this.onChange} className="count" name="qty" value={this.state.credit} />
                            <span onClick={this.plus} className="plus bg-dark">+</span>
                        </div>
                    </div>
                    <div className="col-md-4 center-block">
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-3 text-center">
                    </div>

                    <div className="col-md-6 text-center">
                        <h5 className="m-b">CREDITS IN CART</h5>
                        <div className="input-area ft-sz">
                            <input type="text" value={this.state.credit} />
                            <span className="total-f">({this.state.credit} TOTAL)</span>
                        </div>

                        <p className="f-small">BY CLICKING “BUY NOW” I AGREE TO THE TERMS OF SERVICE & UNDERSTAND THAT MY CREDIT CARD WILL BE CHARGED THE AMOUNT ABOVE</p>
                    </div>


                    {/*<div className="col-md-4 text-center">
                        <h5 className="m-b">BILLING HISTORY</h5>
                        <div className="top-spc">
                            <a href="#"><img src="/client/assets/images/pdf-icon.png" className="pd-icon" /> DOWNLOAD AS PDF</a>
                        </div>
                    </div>*/}

                    <div className="col-md-3 text-center">
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-12 text-center">
                        <StripeProvider stripe={this.state.stripe}>
                            <Elements>
                                <CheckoutForm
                                    credit={this.state.credit}
                                    _refresh={this.refreshParent}
                                />
                            </Elements>
                        </StripeProvider>
                    </div>




                </div>
            </div>


        );
    }

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

class Password extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            oldPassword: '',
            oldPasswordValidation: '',
            password: '',
            passwordValidation: '',
            confirmPassword: '',
            confirmPasswordValidation: '',
            loading: false,
            status: ''
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        event.target.name === 'oldPassword' ? this.setState({ oldPasswordValidation: '' }) : '';
        event.target.name === 'confirmPassword' ? this.setState({ confirmPasswordValidation: '' }) : '';
        event.target.name === 'password' ? this.setState({ passwordValidation: '' }) : '';
        //this.setState({status: '' })
    }

    scrollApplication = () => {
        document.getElementById('closePassword').scrollIntoView({ behavior: 'smooth' });
    }

    submitPassword = () => {
        this.setState({ loading: true });

        if (this.state.oldPassword === '' || this.state.confirmPassword === '' || this.state.password === '' || this.state.password !== this.state.confirmPassword) {
            this.setState({ loading: false });
            this.state.oldPassword === '' ? (this.setState({ oldPasswordValidation: 'CURRENT PASSWORD IS REQUIRED' }), this.scrollApplication()) : this.setState({ oldPasswordValidation: '' });
            this.state.confirmPassword === '' ? (this.setState({ confirmPasswordValidation: 'CONFIRM PASSWORD IS REQUIRED' }), this.scrollApplication()) : this.setState({ confirmPasswordValidation: '' });
            this.state.password === '' ? (this.setState({ passwordValidation: 'PASSWORD IS REQUIRED' }), this.scrollApplication()) : this.setState({ passwordValidation: '' });
            this.state.password !== this.state.confirmPassword ? (this.setState({ confirmPasswordValidation: 'PASSWORD DOES NOT MATCH' }), this.scrollApplication()) : this.setState({ confirmPasswordValidation: '' });
        } else {


            const user = {
                oldPassword: this.state.oldPassword,
                password: this.state.password
            }
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            const token = jwt.token;



            password({
                userId: userId
            }, {
                t: token
            }, user).then((data) => {
                if (data.error) {
                    this.setState({ oldPasswordValidation: data.error })

                    setTimeout(
                        () => this.setState({ status: '', loading: false }),
                        2000
                    );
                } else {
                    this.setState({ status: data.message });
                    setTimeout(
                        () => this.setState({ status: '', loading: false }),
                        2000
                    );

                }
            });
        }
    }

    render() {
        const loadingStyle = {
            width: '20%',
            height: '20%'
        }
        return (
            <div>
                <div className="input-box text-center">
                    <div className="input-area" id="closePassword">
                        <label>CURRENT PASSWORD</label>
                        <input type="password" name="oldPassword" onChange={this.onChange} value={this.state.oldPassword} />
                        <span className="text-left" id="validationError">{this.state.oldPasswordValidation}</span>
                        {/*<span>FORGOT PASSWORD? <a href="">CLICK HERE</a> TO RESET IT</span>*/}
                    </div>
                    <div className="input-area">
                        <label>NEW PASSWORD</label>
                        <input type="password" name="password" onChange={this.onChange} value={this.state.password} />
                        <span className="text-left" id="validationError">{this.state.passwordValidation}</span>
                    </div>

                    <div className="input-area">
                        <label>CONFIRM NEW PASSWORD</label>
                        <input type="password" name="confirmPassword" onChange={this.onChange} value={this.state.confirmPassword} />
                        <span className="text-left" id="validationError">{this.state.confirmPasswordValidation}</span>
                    </div>
                    {this.state.loading === true ? (<a className="white-btn red" href="javascript:void(0)">SAVE CHANGES<img style={loadingStyle} src="/client/assets/images/loading4.gif" /></a>) : (<a className="white-btn red" href="javascript:void(0)" onClick={this.submitPassword}>SAVE CHANGES</a>)}
                    <br /><span>{this.state.status}</span>
                </div>
            </div>


        );
    }
}

class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            firstName: '',
            dataEdit: {},
            userPhoto: '',
            creditBalance: 0
        }
    }


    readUser = () => {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            const token = jwt.token;
            let link1 = 'https://ochbackend.herokuapp.com/api/usersPhoto/';
            //let link1 = 'http://localhost:8080/api/usersPhoto/'
            let link = link1 + userId;

            this.setState({ userPhoto: link });
            read({
                userId: userId
            }, { t: token }).then((data) => {
                if (data.error) {
                    swal(data.error)
                } else {
                    this.setState({ firstName: data.firstName || '', displayName: data.displayName || '', dataEdit: { ...data, loading: false }, creditBalance: data.creditBalance });
                }
            })
        }
    }

    componentDidMount() {
        this.readUser();
    }

    __refreshParent = () => {
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
                swal(data.error);
            } else {
                this.setState({ firstName: data.firstName, displayName: data.displayName, dataEdit: { ...data, loading: false }, creditBalance: data.creditBalance });

                let authLink = "/my-page/" + auth.isAuthenticated().user._id;
                let actLink = window.location.pathname;
                if (authLink == actLink) {
                    location.reload();
                }
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
                                                    <div className="__circular1">
                                                        <img class="user-dp" src={this.state.userPhoto} />
                                                    </div>
                                                    <img class="profile-ring2" src="/client/assets/images/profile-ring.png" />
                                                </div>
                                                <div className="account-data float-lg-left">
                                                    <h3 style={{ color: 'white' }}>{this.state.displayName !== '' ? this.state.displayName : this.state.firstName}</h3>
                                                    <h5>GOLD MEMBER</h5>
                                                    <h6>{this.state.creditBalance} CREDITS</h6>
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

                                            <Credit
                                                _refreshParent={this.__refreshParent}
                                            />

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