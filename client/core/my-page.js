import React, { Component } from 'react';
import { Header, socket } from './../menu/header';
import PicBox from './../modal/pic-box';
import Art from './../modal/art';
import Upgrade from './../modal/upgrade';
import Plan from './../modal/plan';
import { read, update } from './../api/api-user';
import { checkLink, updateLinkAudio, deleteLinkAudio, updateLinkVideo, deleteLinkVideo } from './../api/api-link';
import swal from 'sweetalert';
import auth from './../auth/auth-helper';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            displayName: '',
            phoneNumber: '',
            about: '',
            loading: true,
            newLink: true,
            linkId: '',
            _id: '',
            auth: false,
            image: '',
            userStatus: 1,
            userLink: window.location.href,
            _userStatus: 'Available',
            ifUser: 'false'
        }
    }

    updateUserStatus = (e) => {
        e.preventDefault();

        const user = {
            userStatus: e.target.name,
        }

        if (auth.isAuthenticated()) {
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
                    this.updateStatus(data)
                }
            });
        }
    }

    updateStatus = (data) => {

        this.setState({userStatus: data.userStatus})
        if (data.userStatus == 1) {
            document.getElementById('checkb').style.backgroundColor = '#68bd53'
            document.getElementById("_checkb").className = "fa fa-check";
            this.setState({_userStatus: 'Available'})
        } else if (data.userStatus == 2) {
            document.getElementById('checkb').style.backgroundColor = '#ffc107'
            document.getElementById("_checkb").className = "fa fa-clock-o";            
            this.setState({_userStatus: 'Away'})
        } else if (data.userStatus == 3) {
            document.getElementById('checkb').style.backgroundColor = '#dc3545'
            document.getElementById("_checkb").className = "";
            this.setState({_userStatus: 'Busy'})
        } else if (data.userStatus == 4) {
            document.getElementById('checkb').style.backgroundColor = '#dc3545'
            document.getElementById("_checkb").className = "fa fa-minus";
            this.setState({_userStatus: 'Do not disturb'})
        } else if (data.userStatus == 5) {
            document.getElementById('checkb').style.backgroundColor = '#A9A9A9'
            document.getElementById("_checkb").className = "fa fa-times";
            this.setState({_userStatus: 'Appear offline'})
        }
    }



    componentDidUpdate(prevProps) {
        if (this.props.userData !== prevProps.userData) {
            let user = this.props.userData;
            this.updateUser(user);
            //this.updateLink(user._id);
            //console.log(user);
        }
    }

    updateUser = (data) => {
        let imageView = 'https://ochbackend.herokuapp.com/api/usersPhoto/' + data._id
        //let imageView = 'http://localhost:8080/api/usersPhoto/' + data._id;
        this.setState({
            fullName: data.fullName || '', displayName: data.displayName || '', phoneNumber: data.phoneNumber || '', about: data.about || '', loading: data.loading, _id: data._id, auth: data.auth, image: imageView, userStatus: data.userStatus
        });
        this.updateStatus(data)
    }

    copyProfile = (e) => {
        e.preventDefault();

        var copyText = document.getElementById("windowLocation");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
    }


    render() {
        let ifUser = this.state._id == auth.isAuthenticated().user._id ? '' : 'none';
        return (
            <section className="padd-small padd-top text-center">

                <div className="small-12 medium-2 large-2 columns">
                    <div className="circle">
                        <img className="profile-pic" style={{ maxWidth: 'unset' }} src={this.state.image} />

                        <i className="fa fa-user fa-5x"></i>
                    </div>
                    <div className="p-image">
                        <a href="" data-toggle="modal" data-target="#pic-box"> <img src="/client/assets/images/camera-icon.png" /></a>

                    </div>
                </div>
                <div className="heading-areaz">
                    <h2>{this.state.displayName}</h2>
                    <h4>{this.state.fullName}</h4>
                </div>

                <ul className="profile-setting clearfix">
                    <li>
                        <div className="dropdown-share"><a href="javascript:void0">BIO</a><div className="edit"><i className="fa fa-eye" aria-hidden="true"></i></div>
                            <div className="dropdown-share-content bio">
                                <h5>View Bio</h5>
                                <div className="line3"></div>
                                {this.state.about}
                            </div>
                        </div>
                    </li>
                    <li> <div className="dropdown-share"><a href="javascript:void0">{this.state._userStatus} <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                        <div className="dropdown-share-content ava" style={{display: ifUser}}>
                            <ul className="status-list">
                                <li> <a href="javascript:void0" name="1" onClick={this.updateUserStatus}><img src="/client/assets/images/profile-available.png" />Available {this.state.userStatus == 1 ? (<i className="fa fa-check" style={{color: '#68bd53'}} aria-hidden="true"></i>) : ('')}</a></li>
                                <li>  <a href="javascript:void0" name="2" onClick={this.updateUserStatus}><img src="/client/assets/images/p-away.png" />Away{this.state.userStatus == 2 ? (<i className="fa fa-check" style={{color: '#ffc107'}} aria-hidden="true"></i>) : ('')}</a></li>
                                <li> <a href="javascript:void0" name="3" onClick={this.updateUserStatus}><img src="/client/assets/images/p-busy.png" />Busy{this.state.userStatus == 3 ? (<i className="fa fa-check" style={{color: '#dc3545'}} aria-hidden="true"></i>) : ('')}</a></li>
                                <li> <a href="javascript:void0" name="4" onClick={this.updateUserStatus}><img src="/client/assets/images/p-dist.png" />Do not Disturb{this.state.userStatus == 4 ? (<i className="fa fa-check" style={{color: '#dc3545'}} aria-hidden="true"></i>) : ('')}</a></li>
                                <li><a href="javascript:void0" name="5" onClick={this.updateUserStatus}><img src="/client/assets/images/p-close.png" />Appear Offline{this.state.userStatus == 5 ? (<i className="fa fa-check" style={{color: '#A9A9A9'}} aria-hidden="true"></i>) : ('')}</a></li>
                            </ul>
                        </div>
                    </div>
                        <div id="checkb" className="checkb">
                            <span><i className="fa fa-check" id="_checkb" aria-hidden="true"></i></span>
                        </div>

                    </li>
                    <li>
                        <div className="dropdown-share"><a href="javascript:void0"><img src="/client/assets/images/user-share.png" className="img-responsive" /></a>
                            <div className="dropdown-share-content shr">

                                <b><a href="javascript:void0" onClick={this.copyProfile}>Copy Profile Link</a></b>
                                <p>Copy your profile link to the Copy/Paste buffer </p>
                                <div className="input-area sp">
                                    <input type="text" id="windowLocation" value={this.state.userLink} />
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>


            </section>
        );
    }

}

/*Audio*/
class AudioList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            linkUrl: ''
        }

    }

    componentDidMount() {
        this.validateSoundCloud();
    }

    validateSoundCloud = () => {
        var url = this.props.link
        if (url != undefined || url != '') {
            var regexp = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
            var match = url.match(regexp);

            if (match && url.match(regexp)[2]) {
                // Do anything for being valid
                // if need to change the url to embed url then use below line            
                //$('#videoObject').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&enablejsapi=1');

                let _linkUrl = "https://w.soundcloud.com/player/?url=" + this.props.link

                this.setState({ linkUrl: _linkUrl })

            } else {
                this.validateSpotify();
                //this.setState({ linkUrlValidation: 'LINK IS INVALID' });
                // Do anything for not being valid
            }
        }
    }

    validateSpotify = () => {
        var url = this.props.link;
        var match = /^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/.test(url);

        this.setState({ linkUrl: url })
        if (match) {
        } else {
            console.log()
        }
    }



    deleteLink = () => {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            const token = jwt.token

            let _linkData = {
                linkId: this.props.linkId,
                audioId: this.props._audioId,
            }

            if (userId == this.props.userId) {
                deleteLinkAudio({ t: token }, _linkData).then((data) => {
                    if (data.error) {
                        console.log(data.error);
                    } else {
                        this.props.grandParentUpdateLink(userId)
                    }
                });
            }
        }
    }




    render() {
        const _jwt = auth.isAuthenticated();
        const _userId = _jwt.user._id;
        return (
            <li>
                <a href="javascript:void0" className="play-btn"> {this.props.title}</a>
                <div className="btn-area clearfix">
                    {/*<div className="dropdown-share">
                        <span><img src="/client/assets/images/share-white.png" className="img-responsive share" /></span>
                        <div className="dropdown-share-content song-share">
                            <b><a href="javascript:void0">Share Song in New Post</a></b>
                            <p>Create new post containing link to the song</p>

                            <b><a href="javascript:void0">Share Song via Email</a></b>
                            <p>Create new email containing link to the song</p>

                            <b><a href="javascript:void0">Share Song via Text or iMessage</a></b>
                            <p>Create new text/iMessage containing song link </p>

                            <b><a href="javascript:void0">Share Song via Direct Message</a></b>
                            <p>Send direct message containing song link </p>
                            <b><a href="javascript:void0">Copy Song Link</a></b>
                            <p>Copy song link to the Copy/Paste buffer</p>
                        </div>
                    </div>*/}
                    {this.props.userId === _userId ? (<div className="dropdown-share del-share"><a href="#"><img src="/client/assets/images/del.png" className="img-responsive" /></a>
                        
                        <div className="dropdown-share-content sharee">
                            <div className="cancel-bx">
                                <b className="d-block text-center bold">Do you want to delete the song?</b>
                                <div className="line3"></div>
                                <div className="btn-del">
                                    <a href="javascript:void0" className="outline-btn">NO - KEEP IT</a>
                                    <a onClick={this.deleteLink} className="cancel-small">YES - DELETE IT</a>
                                </div>
                            </div>
                        </div>
                    </div>) : ('')}
                </div>                
                <br/><br/>
                <iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src={this.state.linkUrl}></iframe>
            </li>


        );
    }
}

class Audio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _userId: '',
            linkId: '',
            newLink: true,
            linkUrl: '',
            linkUrlValidation: '',
            auth: false,
            audioLink: [],
            title: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            let audio = this.props;
            this.setState({ _userId: audio.userId, linkId: audio.linkId, newLink: audio.newLink, audioLink: audio._audio });

            if (auth.isAuthenticated()) {
                const jwt = auth.isAuthenticated();
                const userId = jwt.user._id;

                if (userId === audio.userId) {
                    this.setState({ auth: true });
                }
            }
        }
    }

    onChangeLink = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        event.target.name === 'linkUrl' ? this.setState({ linkUrlValidation: '' }) : '';
    }

    onSubmitAudio = () => {
        if (this.state.linkUrl === '' || this.state.title === '') {
            this.state.linkUrl === '' ? (this.setState({ linkUrlValidation: 'LINK IS REQUIRED' })) : this.setState({ linkUrlValidation: '' });
        } else {
            this.validateSoundCloud();
        }
    }


    validateSoundCloud = () => {
        var url = this.state.linkUrl
        if (url != undefined || url != '') {
            var regexp = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
            var match = url.match(regexp);

            if (match && url.match(regexp)[2]) {
                // Do anything for being valid
                // if need to change the url to embed url then use below line            
                //$('#videoObject').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&enablejsapi=1');

                this._onSubmitAudio();

            } else {
                this.validateSpotify();
                //this.setState({ linkUrlValidation: 'LINK IS INVALID' });
                // Do anything for not being valid
            }
        }
    }

    validateSpotify = () => {
        var url = this.state.linkUrl;
        var match = /^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/.test(url);

        if (match) {
            this._onSubmitAudio();
        } else {
            this.setState({ linkUrlValidation: 'LINK IS INVALID' });
        }
    }

    _onSubmitAudio = () => {
        let _linkData = {
            linkUrlAudio: this.state.linkUrl,
            userId: this.state._userId,
            title: this.state.title
        }

        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            const token = jwt.token

            if (userId == this.state._userId) {
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
                            _linkData = { ..._linkData, linkId: links._id }
                            updateLinkAudio({ t: token }, _linkData).then((data) => {
                                if (data.error) {
                                    console.log(data.error);
                                } else {
                                    this.setState({ linkUrl: '', title: '' })
                                    this.props.parentUpdateLink(userId)
                                }
                            });
                        } else if (countLink == 0) {
                            swal('Unknown error occured');
                        }
                    }
                })
            }
        }
    }


    render() {
        return (
            <div className="white-box transparent-area">
                <h2 className="in-h">SONGS</h2>
                <div className="line3 text-left"></div>

                <ul className="song-list">

                    {this.state.audioLink.map((el, i) =>
                        <AudioList
                            title={el.title}
                            link={el.text}
                            _audioId={el._id}
                            userId={this.state._userId}
                            linkId={this.state.linkId}
                            grandParentUpdateLink={this.props.parentUpdateLink}
                        />
                    )}

                    <li>

                        {this.state.auth == true ? (<div className="dropdown-share">
                            <a href="#" className="play-btn"><img src="/client/assets/images/plus-btn.png" /> Add Song</a>
                            <div className="dropdown-share-content add-song">
                                {/*<b><a href="javascript:void0">Add Song from File</a></b>*/}
                                <p>Create new post containing link to the song</p>

                                <b><a href="#">Add Song via Link</a></b>
                                <input type="text" name="title" onChange={this.onChangeLink} value={this.state.title} placeholder="Enter/Paste Songs Title" />
                                <input type="text" name="linkUrl" onChange={this.onChangeLink} value={this.state.linkUrl} placeholder="Enter/Paste Soundcloud or Spotify Link..." />
                                <span id="validationError">{this.state.linkUrlValidation}</span>
                                <a onClick={this.onSubmitAudio} className="save-btn btm">ADD LINK</a>

                            </div>
                        </div>) : ''}


                    </li>
                </ul>
            </div>
        );
    }
}
/*Audio*/


/*Video*/
class VideoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            link: ''
        }
    }

    deleteLink = () => {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            const token = jwt.token

            let _linkData = {
                linkId: this.props.linkId,
                videoId: this.props._videoId,
            }

            if (userId == this.props.userId) {
                deleteLinkVideo({ t: token }, _linkData).then((data) => {
                    if (data.error) {
                        console.log(data.error);
                    } else {
                        this.props.grandParentUpdateLink(userId)
                    }
                });
            }
        }
    }

    displayVideo = () => {
        document.getElementById(this.props.thumbnail).style.display = 'inline'
        document.getElementById('#' + this.props.thumbnail).style.display = 'none'        
        document.getElementById('12' + this.props.thumbnail).style.display = 'inline'
    }

    render() {
        const _jwt = auth.isAuthenticated();
        const _userId = _jwt.user._id;

        let imageView = 'https://ochbackend.herokuapp.com/api/linkthumbnail/' + this.props.thumbnail
        //let imageView = 'http://localhost:8080/api/linkthumbnail/' + this.props.thumbnail;

        let videoView = 'https://www.youtube.com/embed/' + this.props.link

        const thumbnailStyle = {
            width: '100%',
            height: '200px'
        }

        return (
            <li><a href="javascript:void0" className="play-btn">{this.props.title}</a>
                <div className="btn-area tp clearfix">
                    {/*<div className="dropdown-share">
                        <span><img src="/client/assets/images/share-white.png" className="img-responsive share" /></span>
                        <div className="dropdown-share-content song-share">
                            <b><a href="javascript:void0">Share Video in New Post</a></b>
                            <p>Create new post containing link to the video</p>

                            <b><a href="javascript:void0">Share Video via Email</a></b>
                            <p>Create new email containing link to the video</p>

                            <b><a href="javascript:void0">Share Video via Text or iMessage</a></b>
                            <p>Create new text/iMessage containing video link </p>

                            <b><a href="javascript:void0">Share Video via Direct Message</a></b>
                            <p>Send direct message containing video link </p>
                            <b><a href="javascript:void0">Copy Video Link</a></b>
                            <p>Copy video link to the Copy/Paste buffer</p>
                        </div>
                    </div>*/}

                    {this.props.userId === _userId ? (<div className="dropdown-share del-share"><a href="javascript:void0"><img src="/client/assets/images/del.png" className="img-responsive" /></a>
                        <div className="dropdown-share-content sharee">
                            <div className="cancel-bx">
                                <b className="d-block text-center bold">Do you want to delete the video?</b>
                                <div className="line3"></div>
                                <div className="btn-del">
                                    <a href="javascript:void0" className="outline-btn">NO - KEEP IT</a>
                                    <a onClick={this.deleteLink} className="cancel-small">YES - DELETE IT</a>
                                </div>
                            </div>
                        </div>
                    </div>) : ('')}
                </div>
                <div className="clearfix"></div>
                <div className="video-c" id={'#' + this.props.thumbnail}>
                    <img src={imageView} className="img-responsive" style={thumbnailStyle} />
                    <a href="javascript:void0" onClick={this.displayVideo}>	<img src="/client/assets/images/play-btn.png" className="img-responsive ply" /></a>
                </div>

                <br id={'12'+this.props.thumbnail} style={{display: 'none'}} />
                <iframe id={this.props.thumbnail} style={{ display: 'none' }} width="100%" height="100%"
                    src={videoView}>
                </iframe>

                <div className="clearfix"></div>
            </li>

        )
    }
}

class Video extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _userId: '',
            linkId: '',
            newLink: true,
            linkUrl: '',
            linkUrlValidation: '',
            auth: false,
            videoLink: [],
            id: '',
            title: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            let video = this.props;
            this.setState({ _userId: video.userId, linkId: video.linkId, newLink: video.newLink, videoLink: video._video });

            if (auth.isAuthenticated()) {
                const jwt = auth.isAuthenticated();
                const userId = jwt.user._id;

                if (userId === video.userId) {
                    this.setState({ auth: true });
                }
            }
        }
    }

    componentDidMount() {
        this.linkData = new FormData()
    }


    onChangeLink = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        event.target.name === 'linkUrl' ? this.setState({ linkUrlValidation: '' }) : '';
    }

    handleChange = (event) => {
        const value = event.target.name === 'photo'
            ? event.target.files[0]
            : event.target.value

        this.linkData.set(event.target.name, value)
        this.setState({ id: URL.createObjectURL(event.target.files[0]) });
    }


    onSubmitVideo = () => {
        if (this.state.linkUrl === '' || this.state.title === '' || this.linkData.get('photo') === '') {
            this.state.linkUrl === '' ? (this.setState({ linkUrlValidation: 'LINK IS REQUIRED' })) : this.setState({ linkUrlValidation: '' });
        } else {
            this.validateYouTubeUrl();
        }
    }


    validateYouTubeUrl = () => {
        var url = this.state.linkUrl
        if (url != undefined || url != '') {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                // Do anything for being valid
                // if need to change the url to embed url then use below line            
                //$('#videoObject').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&enablejsapi=1');

                this._onSubmitVideo();

            } else {
                this.setState({ linkUrlValidation: 'LINK IS INVALID' });
                // Do anything for not being valid
            }
        }
    }


    _onSubmitVideo = () => {
        var _link = this.state.linkUrl;
        var _linkArr = _link.split("/");
        var videoId = _linkArr[_linkArr.length - 1];

        if (videoId.startsWith('watch?v=')) {
            let _videoId = videoId.replace('watch?v=', '')
            videoId = _videoId;
        }

        this.linkData.set('linkUrlVideo', videoId)
        this.linkData.set('userId', this.state._userId)
        this.linkData.set('title', this.state.title)



        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            const token = jwt.token

            if (userId == this.state._userId) {
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
                            // _linkData = { ..._linkData, linkId: links._id }

                            this.linkData.set('linkId', links._id)
                            updateLinkVideo({ t: token }, this.linkData).then((data) => {
                                if (data.error) {
                                    console.log(data.error);
                                } else {
                                    this.setState({ linkUrl: '', title: '', id: '' })
                                    this.props.parentUpdateLink(userId)
                                }
                            });
                        } else if (countLink == 0) {
                            swal('Unknown error occured');
                        }
                    }
                })
            }
        }
    }

    render() {
        const imageStyle = {
            width: '20%',
            height: '20%'
        }
        return (
            <div className="white-box transparent-area">
                <h2 className="in-h">VIDEOS</h2>
                <div className="line3 text-left"></div>

                <ul className="song-list">
                    {this.state.videoLink.map((el, i) =>
                        <VideoList
                            title={el.title}
                            thumbnail={el._id}
                            link={el.text}
                            _videoId={el._id}
                            userId={this.state._userId}
                            linkId={this.state.linkId}
                            grandParentUpdateLink={this.props.parentUpdateLink}
                        />
                    )}

                    <li>
                        {this.state.auth == true ? (
                            <div className="dropdown-share">
                                <a className="play-btn"><img src="/client/assets/images/plus-btn.png" /> Add Video...</a>
                                <div className="dropdown-share-content add-song">
                                    <p>Create new post containing link to the video</p>
                                    {/*<p>format: https://www.youtube.com/embed/watch?v=kiyi-C7NQrQ</p>*/}
                                    <div className="pic-cvr">
                                        {this.state.id == '' ? '' : (<img style={imageStyle} src={this.state.id} />)}
                                        <input name="photo" onChange={this.handleChange} id="profile" type="file" style={{ position: "unset" }} />
                                    </div>
                                    <div className="btn-b e-wd">
                                        <label for="profile"><a className="outline-btn">Thumbnail</a></label>
                                    </div>

                                    <input type="text" name="title" onChange={this.onChangeLink} value={this.state.title} placeholder="Enter Title" />

                                    <input type="text" name="linkUrl" onChange={this.onChangeLink} value={this.state.linkUrl} placeholder="Enter/Paste YouTube Link..." />

                                    <span id="validationError">{this.state.linkUrlValidation}</span>
                                    <a href="javascript:void(0)" onClick={this.onSubmitVideo} className="save-btn btm">ADD VIDEO</a>
                                </div>
                            </div>
                        ) : ('')}
                    </li>
                </ul>
            </div>

        );
    }
}
/*Video*/


class Timeline extends Component {
    constructor(props) {
        super(props)

        this.state = {
            facebook: '123',
            facebookStatus: '',
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
            linkId: '',
            _id: '',
            auth: false,
            audio: [],
            video: [],
            imageLink: '',
            title: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.userData !== prevProps.userData) {
            let user = this.props.userData;
            this.updateLink(user._id);
            this.updateUser(user);
        }
    }

    updateUser = (data) => {
        let imageView = 'https://ochbackend.herokuapp.com/api/usersPhoto/' + data._id
        //let imageView = 'http://localhost:8080/api/usersPhoto/' + data._id;
        this.setState({
            loading: data.loading, _id: data._id, auth: data.auth, imageLink: imageView
        });
    }

    updateLink = (id) => {
        const userId = id;
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
                        newLink: false, linkId: links._id, audio: links.linkUrlAudio, video: links.linkUrlVideo
                    })
                }
            }
        })
    }

    render() {
        return (
            <section className="song-section">
                <div className="container-fluid">
                    <div className="row">

                        {/*Audio Componenet*/}
                        <div className="col-md-12 col-lg-3 padd-right">

                            <Audio
                                userId={this.state._id}
                                linkId={this.state.linkId}
                                newLink={this.state.newLink}
                                _audio={this.state.audio}
                                parentUpdateLink={this.updateLink}
                            />

                            <ul className="social-circle">
                                <li><a style={{ display: 'none' }} href="javascript:void0" className="crs-btn"><img src="/client/assets/images/close-icon.png" />
                                </a>
                                    {this.state.facebookStatus == true ? (<a href={this.state.facebookStatus == true ? 'https://' + this.state.facebook : '#'} target={this.state.facebookStatus == true ? '_blank' : ''}  >
                                        <img src="/client/assets/images/facebook.png" />
                                        <div className="dropdown-share"><div className=" edit-two"><i className="fa fa-eye" aria-hidden="true"></i></div>
                                            <div className="dropdown-share-content edit-drp d-nn">
                                                {this.state.facebook}
                                                <input style={{ display: 'none' }} type="text" placeholder="Enter/Paste Facebook Artist Link..." />
                                                {/*<a href="javascript:void0" className="save-btn btm">ADD LINK</a>*/}
                                            </div>
                                        </div></a>) : ''}</li>
                                <li><a style={{ display: 'none' }} href="javascript:void0" className="crs-btn"><img src="/client/assets/images/close-icon.png" /></a>

                                    {this.state.instagramStatus == true ? (<a href={this.state.instagramStatus == true ? 'https://' + this.state.instagram : '#'} target={this.state.instagramStatus == true ? '_blank' : ''}  >
                                        <img src="/client/assets/images/insta.png" /><div className="dropdown-share"><div className=" edit-two"><i className="fa fa-eye" aria-hidden="true"></i></div>
                                            <div className="dropdown-share-content edit-drp d-nn">
                                                {this.state.instagram}
                                                <input style={{ display: 'none' }} type="text" placeholder="Enter/Paste Instagram Artist Link..." />
                                                {/*<a href="javascript:void0" className="save-btn btm">ADD LINK</a>*/}
                                            </div>
                                        </div></a>) : ''}</li>
                                <li><a style={{ display: 'none' }} href="javascript:void0" className="crs-btn"><img src="/client/assets/images/close-icon.png" /></a>

                                    {this.state.spotifyStatus == true ? (
                                        <a href={this.state.spotifyStatus == true ? 'https://' + this.state.spotify : '#'} target={this.state.spotifyStatus == true ? '_blank' : ''} >
                                            <img src="/client/assets/images/spotify.png" /><div className="dropdown-share"><div className="edit-two"><i className="fa fa-eye" aria-hidden="true"></i></div>
                                                <div className="dropdown-share-content edit-drp d-nn">
                                                    {this.state.spotify}
                                                    <input style={{ display: 'none' }} type="text" placeholder="Enter/Paste Spotify Artist Link..." />
                                                    {/*<a href="javascript:void0" className="save-btn btm">ADD LINK</a>*/}
                                                </div>
                                            </div></a>) : ''}</li>
                            </ul>
                        </div>
                        {/*Audio Component*/}


                        {/*Timeline*/}
                        <div className="col-md-12 col-lg-6 padd-both" >
                            <div className="white-box clearfix">

                                <div className="left-img">

                                    <img src={this.state.imageLink} width="5%" height="5%" className="img-responsive circled no-b" />

                                </div>
                                <div className="right-content">
                                    <div className="search-area">
                                        <input type="text" placeholder="Share your thoughts and your music..." />

                                        <div className="button-wrap btn" style={{ display: "none" }}>
                                            <label className="new-button" for="upload1"> <img src="/client/assets/images/pic-up.png" className="img-responsive upload" />
                                                <input id="upload1" type="file" />
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div style={{ display: "none" }} className="white-box clearfix">

                                <div className="left-img">

                                    <img src="/client/assets/images/elif.png" className="img-responsive circled no-b" />

                                </div>
                                <div className="right-content position-relative">
                                    <b>Ellie Soufl</b>
                                    <span>5 min ago</span>
                                    <div className="dots-a">
                                        <div className="dropdown-share">
                                            <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
                                            <div className="dropdown-share-content">
                                                <b><a href="javascript:void0">Hide Post</a></b>
                                                <p>Remove this post from your feed</p>

                                                <b><a href="javascript:void0">Unfollow Ellie Soufi</a></b>
                                                <p>Stop seeing Ellie’s posts but stay connected</p>

                                                <b><a href="javascript:void0">Report Post</a></b>
                                                <p>Something about this post concerns me</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="desc-box">
                                    <p>Lorem Ipsum</p>

                                    <iframe width="100%" height="315"
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0">
                                    </iframe>

                                    <ul className="comments-area-two clearfix">
                                        <li><a href="javascript:void0" className="like-btn"></a> <a href="javascript:void(0)" id="msg-bar-two"><img src="/client/assets/images/msg-right.png" className="img-responsive m-r" /> You and 267 others liked this</a></li>

                                        <li><div className="dropdown-share">
                                            <span><img src="/client/assets/images/f-share.png" className="img-responsive share" /></span>
                                            <div className="dropdown-share-content">
                                                <b><a href="javascript:void0">Share Now</a></b>
                                                <p>Instantly post to your content feed</p>

                                                <b><a href="javascript:void0">Write Post</a></b>
                                                <p>Write new post based on this post</p>

                                                <b><a href="javascript:void0">Send As Direct Message</a></b>
                                                <p>Send to one or more contacts directly </p>
                                            </div>
                                        </div></li>
                                    </ul>
                                    <div className="msg-area-two clearfix">
                                        <div className="left-img">

                                            <img src="/client/assets/images/user-two.png" className="img-responsive circled no-b" />

                                        </div>
                                        <div className="right-content">
                                            <div className="search-area">
                                                <input type="text" placeholder="Be the first to write a comment..." />

                                                <div className="button-wrap btn">
                                                    <label className="new-button" for="upload2"> <img src="/client/assets/images/pic-up.png" className="img-responsive upload" />
                                                        <input id="upload2" type="file" />
                                                    </label></div>
                                                <a className="smly"><i className="fa fa-smile-o" aria-hidden="true"></i></a>

                                            </div>
                                        </div>
                                    </div>
                                    <p className="p-b"><b>robbiedean</b> So proud of this record! Let’s write another one!</p>
                                    <a className="grey" href="javascript:void0">View all 6 comments</a>
                                </div>
                            </div>
                        </div>
                        {/*Timeline*/}


                        {/*Video*/}
                        <div className="col-md-12 col-lg-3 padd-left">
                            <Video
                                userId={this.state._id}
                                linkId={this.state.linkId}
                                newLink={this.state.newLink}
                                _video={this.state.video}
                                parentUpdateLink={this.updateLink}
                            />
                            <ul className="social-circle">
                                <li><a style={{ display: 'none' }} href="javascript:void0" className="crs-btn"><img src="/client/assets/images/close-icon.png" /></a>
                                    {this.state.youtubeStatus == true ? (<a href={this.state.youtubeStatus == true ? ('https://' + this.state.youtube) : '#'} target={this.state.youtubeStatus == true ? '_blank' : ''} >
                                        <img src="/client/assets/images/youtube.png" />
                                        <div className="dropdown-share"><div className="edit-two"><i className="fa fa-eye" aria-hidden="true"></i></div>
                                            <div className="dropdown-share-content edit-drp right d-nn">
                                                {this.state.youtube}
                                                <input style={{ display: 'none' }} type="text" placeholder="Enter/Paste Youtube Artist Link..." />
                                                {/*<a href="javascript:void0" className="save-btn btm">ADD LINK</a>*/}
                                            </div>
                                        </div></a>) : ''}</li>
                                <li><a style={{ display: 'none' }} href="javascript:void0" className="crs-btn"><img src="/client/assets/images/close-icon.png" /></a>
                                    {this.state.snapchatStatus == true ? (
                                        <a href={this.state.snapchatStatus == true ? 'https://' + this.state.snapchat : '#'} target={this.state.snapchatStatus == true ? '_blank' : ''} >
                                            <img src="/client/assets/images/snapchat.png" />
                                            <div className="dropdown-share"><div className=" edit-two"><i className="fa fa-eye" aria-hidden="true"></i></div>
                                                <div className="dropdown-share-content edit-drp right d-nn">
                                                    {this.state.snapchat}
                                                    <input style={{ display: 'none' }} type="text" placeholder="Enter/Paste Snapchat Artist Link..." />
                                                    {/*<a href="javascript:void0" className="save-btn btm">ADD LINK</a>*/}
                                                </div>
                                            </div></a>) : ''}</li>
                                <li><a style={{ display: 'none' }} href="javascript:void0" className="crs-btn"><img src="/client/assets/images/close-icon.png" /></a>
                                    {this.state.tiktokStatus == true ? (
                                        <a href={this.state.tiktokStatus == true ? 'https://' + this.state.tiktok : '#'} target={this.state.tiktokStatus == true ? '_blank' : ''} >
                                            <img src="/client/assets/images/tiktok.png" />
                                            <div className="dropdown-share"><div className=" edit-two"><i className="fa fa-eye" aria-hidden="true"></i></div>
                                                <div className="dropdown-share-content edit-drp right d-nn">
                                                    {this.state.tiktok}
                                                    <input style={{ display: 'none' }} type="text" placeholder="Enter/Paste Tiktok Artist Link..." />
                                                    {/*<a href="javascript:void0" className="save-btn btm">ADD LINK</a>*/}
                                                </div>
                                            </div></a>) : ''}</li>


                            </ul>
                        </div>
                        {/*Video*/}

                    </div>
                </div>
            </section>
        );
    }

}


class Mypage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            fullName: '',
            dataEdit: {},
            _id: '',
            image: '',
        }
    }

    readUser = () => {

        let jwt, authId;

        if (auth.isAuthenticated()) {
            jwt = auth.isAuthenticated();
            authId = jwt.user._id;
        } else {
            authId = '';
        }

        const userId = this.props.match.params.userId;

        this.setState({ _id: userId });
        let check = false;

        if (authId == userId) {
            check = true
        }

        read({
            userId: userId
        }).then((data) => {
            if (data.error) {
                swal(data.error)
            } else {
                this.setState({ 'fullName': data.fullName, 'displayName': data.displayName, dataEdit: { ...data, loading: false, auth: check } });
            }
        });
    }

    componentDidMount() {
        this.readUser();
    }

    renderImage_ = (imageV) => {
        this.setState({ image: imageV })
    }


    render() {
        return (
            <div>
                <div className="page-bg">

                    <Header
                        path={this.props.location.pathname}
                    />

                    <Profile
                        userData={this.state.dataEdit}
                        image={this.state.image}
                    />

                    <Timeline
                        userData={this.state.dataEdit}
                    />
                </div>
                <PicBox
                    _id={this.state._id}
                    renderImage={this.renderImage_}
                />
                <Art />
                <Upgrade />
                <Plan />



            </div>
        )
    }
}

export default Mypage;