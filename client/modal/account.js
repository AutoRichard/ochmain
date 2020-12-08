import React from 'react';
import auth from './../auth/auth-helper';
import { read, update, password } from './../api/api-user';
import { createLink, checkLink, updateLinkStatus } from './../api/api-link';
import swal from 'sweetalert'

import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './checkout'
import { listBooking } from './../api/api-booking';
import BillingAddress from './billingAddress';
//import moment from 'moment';

import { UserAndSubscription } from './../api/api-subscription'
import moment from "moment";




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


        if (auth.isAuthenticated()) {
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

class Billing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stripe: null,
            status: false,
            amount: 0,
            renew: '',
            plan: '',
            plan_active: false
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

        this.userSubscription()
    }


    userSubscription = () => {

        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated()
            UserAndSubscription({ userId: jwt.user._id }, {
                t: jwt.token
            }).then((data) => {
                if (data.error) {
                    console.log(data.error)
                    //this.setState({ error: data.error })
                } else {

                    if (data.subscriptions == undefined || data.subscriptions == null) {
                        this.setState({ status: false, amount: 0, renew: '---', plan: 'NO', plan_active: false })
                    } else {
                        let __data = data.subscriptions.data[0]

                        if (data.subscriptions.data.length > 0) {
                            this.setState({ status: __data.plan.active, amount: __data.plan.amount, renew: new Date(__data.current_period_end * 1000).toUTCString(), plan: __data.plan.nickname, plan_active: true })
                        } else {
                            this.setState({ status: false, amount: 0, renew: '---', plan: 'NO', plan_active: true })
                        }

                        //console.log(data)
                        //console.log(new Date(__data.created * 1000).toUTCString())

                    }
                }
            })
        }

    }

    closeAccount = () => {
        //document.getElementById('closeUpdate').click()
    }




    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <ul className="package-list clearfix">
                            <li>CURRENT PLAN:</li> 	<li>{this.state.plan.toUpperCase()} MEMBERSHIP <div className="gold-plat"><img src="/client/assets/images/gold.png" /></div></li>


                            <li>RENEWS ON:</li>		<li>{this.state.renew}</li>


                            <li>ACCOUNT STATUS: </li>	<li>{this.state.status == true ? 'ACTIVE' : 'INACTIVE'}</li>


                            <li>MONTHLY FEE:</li>		<li>${this.state.amount / 100}</li>
                        </ul>


                    </div>
                    <div className="col-md-4 text-center">
                        {this.state.plan_active == true ? (<a href="#" data-toggle="modal" onClick={this.closeAccount} data-target="#change-plan" className="book-now-font">CHANGE PLAN</a>) : ("")}
                    </div>
                    <div className="clearfix"></div>

                </div>

                <StripeProvider stripe={this.state.stripe}>
                    <Elements>
                        <BillingAddress
                            subscriptions={this.userSubscription}
                        />
                    </Elements>
                </StripeProvider>


            </div >

        );

    }

}

class Credit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checkout: false,
            stripe: null,
            credit: 1,
            creditBalance: 0
        }
    }


    plus = () => {
        this.setState({ credit: +this.state.credit + 1 })
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

    componentDidUpdate(prevProps) {
        if (this.props._creditBalance !== prevProps._creditBalance) {
            this.setState({ creditBalance: this.props._creditBalance })
        }
    }

    __onChange = (data) => {
        this.setState({ credit: data })
    }




    refreshParent = () => {
        this.setState({ credit: 1 })
        $('.count').val(1);

        this.props._refreshParent();
    }


    render() {
        return (
            <div>
                <h3 className="text-center white">CREDITS AVAILABLE: {this.state.creditBalance}</h3>
                <StripeProvider stripe={this.state.stripe}>
                    <Elements>
                        <CheckoutForm
                            credit={this.state.credit}
                            _refresh={this.refreshParent}
                            _plus={this.plus}
                            _minus={this.minus}
                            _onChange={this.__onChange}
                        />
                    </Elements>
                </StripeProvider>
            </div>


        );
    }

}

class Booking extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            meetings: []
        }
    }

    componentDidMount() {
        this._listBooking()
    }

    _listBooking = () => {

        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;

            listBooking({
                user_id: userId
            }).then((data) => {
                if (data.error) {
                    swal(data.error)
                } else {
                    this.setState({ meetings: data.booking })

                    if ($('#booking-lists').hasClass('owl-theme')) {
                        //resize event was triggering an error, this if statement is to go around it


                        $('#booking-lists').trigger('destroy.owl.carousel'); //these 3 lines kill the owl, and returns the markup to the initial state
                        $('#booking-lists').find('.owl-stage-outer').children().unwrap();
                        $('#booking-list').removeClass("owl-center owl-loaded owl-text-select-on");

                        $("#booking-lists").owlCarousel({
                            margin: 20,
                            nav: true,
                            loop: false,
                            singleItem: true,
                            navText: ["<div class='nav-btn prev-btn'>Pre</div>", "<div class='nav-btn next-btn'>Next</div>"],
                            dots: true,
                            responsive: {
                                0: {
                                    items: 1,
                                    margin: 5
                                },
                                1000: {
                                    items: 2
                                },
                                1100: {
                                    items: 3
                                }
                            }
                        }); //re-initialise the owl
                    }

                }
            })
        }


    }

    __moment = (time) => {
        return time;
    }

    render() {
        return (
            <div>
                <div id="booking-lists" className="owl-carousel owl-theme">

                    {this.state.meetings.map((el, i) =>

                        <div className="item">
                            <div className="border-box text-center">
                                <img src={'https://ochback.herokuapp.com/api/usersPhoto/' + el.user_id._id} className="user-dpz" />
                                <h4>{el.user_id.firstName}</h4>

                                <h5>DETAILS:</h5>
                                <div className="line3"></div>
                                <div className="time-icon"><img src="/client/assets/images/time-icon.png" /></div>
                                <h5>{moment(el.meeting_id.start_time).format("YYYY-MM-DD HH:mm")}</h5>
                                <span class="s-text">Eastern Time (US and Canada)</span>
                                <div className="video-ic"><img src="/client/assets/images/video-cam.png" /></div>
                                <h5>{el.meeting_id.topic}<br />(ZOOM SESSION)</h5>
                                {/*<div className="join-cover">
                                    <a href={"/zoom.html?meeting_id=" + el.meeting_id._id} className="g-btn">JOIN SESSION</a>
                                </div>*/}
                                {moment(new Date()).isAfter(new Date(el.meeting_id.start_time)) === true ? (<div className="join-cover">
                                    {moment(new Date(el.meeting_id.start_time)).add(el.meeting_id.duration, 'minutes').isAfter(new Date) == true ? (<a href={"/zoom.html?meeting_id=" + el.meeting_id._id} className="g-btn">JOIN SESSION</a>) : <a href="javascript:void(0)" className="g-btn">EXPIRED</a>}
                                </div>) : ('')}
                                {moment(new Date()).isAfter(new Date(el.meeting_id.start_time)) === false ? (<span>(START {moment(el.meeting_id.start_time).fromNow()} PRIOR)</span>) : ('Not Available')}
                            </div>
                        </div>

                    )}




                </div>
            </div>

        );
    }

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
            let link1 = 'https://ochback.herokuapp.com/api/usersPhoto/';
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
                                                        <img style={{ height: '100%' }} className="user-dp" src={this.state.userPhoto} />
                                                    </div>
                                                    <img className="profile-ring2" src="/client/assets/images/profile-ring.png" />
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
                                                _creditBalance={this.state.creditBalance}
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