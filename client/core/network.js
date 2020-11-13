import React, { Component } from 'react';
import { Header } from './../menu/header';
import auth from './../auth/auth-helper';
import swal from 'sweetalert';
import { create, list } from './../api/api-post';
import openSocket from 'socket.io-client'
import ContactList from '../chat/contact';
import Chat from '../chat/chat';
import Messages from '../chat/messages';
import { read, update } from './../api/api-user';
import { listBooking } from './../api/api-booking';


class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            postedBy: this.props.name,
            text: this.props.text
        }
    }


    render() {
        return (
            <p className="p-b"><b>{this.state.postedBy}</b> {this.state.text}</p>
        );
    }
}

class Feeds extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: '',
            comments: this.props.comments,
            likes: this.props.likes,
            _id: '',
            postedBy_id: '',
            postedBy_firstName: '',
            postedBy_lastName: '',
            postedBy_displayName: '',
            createDate: '',
            comment_text: '',
            sending: false,
            socketId: '',
            link: 'https://ochbackend.herokuapp.com/',
            //link: 'http://localhost:8080',
            visible: 'none',
            userId: ''
        }

        //this.socket = openSocket(this.state.link)

        if (auth.isAuthenticated()) {

            this.props.socketConnection.on('connect', () => {
                this.setState({ socketId: this.props.socketConnection.id });
            });
            this.props.socketConnection.on('fetch_comment', this.updateComment)

            this.props.socketConnection.on('fetch_like', this.updateLike)
        }
    }

    componentDidMount() {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const user_id = jwt.user._id;
            this.setState({ userId: user_id });
        }

    }

    displayComment = () => {
        $('.' + this.props.fId).toggle(500);
    }

    onChangeComment = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    updateComment = data => {
        if (data[this.props._id] != undefined) {
            if (data[this.props._id].result.comments.length != this.state.comments.length) {
                this.setState({
                    comments: data[this.props._id].result.comments
                })
            }

        }
    }

    onSubmitComment = () => {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;

            let commentData = {
                postId: this.props._id,
                userId: userId,
                comment: this.state.comment_text
            }


            this.props.socketConnection.emit('send_comment', commentData)
            this.props.socketConnection.on('fetch_comment', this.updateComment)


            this.setState({ comment_text: '' })
        }
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (this.state.comment_text != '') {
                this.onSubmitComment()
                //this.setState({ sending: true })
            } else {
                swal('Comment field is required')
            }
        }
    }

    updateLike = data => {
        if (data[this.props._id] != undefined) {
            if (data[this.props._id].result.likes.length != this.state.likes.length) {
                this.setState({
                    likes: data[this.props._id].result.likes
                });
            }

        }
    }

    like = () => {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;

            let likeData = {
                postId: this.props._id,
                userId: userId,
            }



            this.props.socketConnection.emit('send_like', likeData)
            this.props.socketConnection.on('fetch_like', this.updateLike)
        }
    }

    viewComment = () => {
        if (this.state.visible == 'none') {
            this.setState({
                visible: ''
            })
        } else {
            this.setState({
                visible: 'none'
            })
        }
    }

    render() {
        let imageView = 'https://ochbackend.herokuapp.com/api/usersPhoto/' + this.state.userId
        //let imageView = 'http://localhost:8080/api/usersPhoto/' + this.state.userId;
        return (
            <div className="white-box clearfix">

                <div className="left-img">

                    <img src={'https://ochbackend.herokuapp.com/api/usersPhoto/' + this.props.postedBy_id} className="img-responsive circled no-b __circular4" />

                </div>
                <div className="right-content position-relative">
                    <b>{this.props.postedBy_firstName} {this.props.postedBy_lastName}</b>
                    <span>{this.props.createDate}</span>
                    <div className="dots-a">
                        {/*<div className="dropdown-share">
                            <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
                            <div className="dropdown-share-content">
                                <b><a href="#">Hide Post</a></b>
                                <p>Remove this post from your feed</p>

                                <b><a href="#">Unfollow Ellie Soufi</a></b>
                                <p>Stop seeing Ellie’s posts but stay connected</p>

                                <b><a href="#">Report Post</a></b>
                                <p>Something about this post concerns me</p>
                            </div>
        </div>*/}
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="desc-box">
                    <p>{this.props.text}</p>

                    {this.props.imageExist == true ? (<img src={"https://ochbackend.herokuapp.com/api/photo/" + this.props._id} width="100%" height="315" className="img-responsive" />) : ''}

                    {/*<iframe width="100%" height="315"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0">
                        </iframe>*/}

                    <ul className="comments-area-two clearfix">
                        <li>
                            <a href="javascript:void(0)" onClick={this.like} className="like-btn"></a>
                            <a href="javascript:void(0)" onClick={this.displayComment} id="msg-bar"><img src="/client/assets/images/msg-right.png" className="img-responsive m-r" />{this.state.likes.length} likes</a>
                        </li>
                        <li></li>
                        {/*<li><div className="dropdown-share">
                            <span><img src="/client/assets/images/f-share.png" className="img-responsive share" /></span>
                            <div className="dropdown-share-content">
                                <b><a href="#">Share Now</a></b>
                                <p>Instantly post to your content feed</p>

                                <b><a href="#">Write Post</a></b>
                                <p>Write new post based on this post</p>

                                <b><a href="#">Send As Direct Message</a></b>
                                <p>Send to one or more contacts directly </p>
                            </div>
                    </div></li>*/}
                    </ul>



                    <div className={'msg-area ' + this.props.fId}>
                        <div className="left-img">


                            <img src={imageView} className="img-responsive circled no-b __circular4" />


                        </div>
                        <div className="right-content">
                            <div className="search-area">
                                <input type="text" name="comment_text" disabled={this.state.sending} onKeyDown={this._handleKeyDown} value={this.state.comment_text} onChange={this.onChangeComment} placeholder="Be the first to write a comment..." />

                                {/*<div className="button-wrap btn">
                                    <label className="new-button" for="upload2"> <img src="/client/assets/images/pic-up.png" className="img-responsive upload" />
                                        <input id="upload2" type="file" />
                                    </label></div>
                                <a className="smly"><i className="fa fa-smile-o" aria-hidden="true"></i></a>*/}

                            </div>
                        </div>
                    </div>



                    <a onClick={this.viewComment} className="grey" href="javascript:void(0)">View all {this.state.comments.length} comments</a>
                    <div style={{ display: this.state.visible }}>
                        {this.state.comments.map((el, i) =>
                            <Comment
                                text={el.text}
                                name={el.postedBy.firstName || el.postedBy.lastName || el.postedBy.displayName}
                            />
                        )}

                    </div>
                </div>
            </div>

        );
    }

}

class Timeline extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post: '',
            photo: '',
            idPhoto: '',
            sending: false,
            timeline: [],
            newtimeline: [],
            socketId: '',
            link: 'https://ochbackend.herokuapp.com/',
            //link: 'http://localhost:8080',
            newData: 'none',
            userId: '',

        }

        this.socket = openSocket(this.state.link)

        if (auth.isAuthenticated()) {

            this.socket.on('connect', () => {
                this.setState({ socketId: this.socket.id });
            });

            this.socket.on('fetch_post', this._fetchPost)
            this.socket.on('fetch_posts', this._fetchNewPosts)
        }
    }

    componentDidMount() {
        this.postData = new FormData();

        this.fetchPost()

        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const user_id = jwt.user._id;
            this.setState({ userId: user_id });
        }
    }




    fetchPost = () => {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            const token = jwt.token

            this.postData.set('postedBy', userId)

            list().then((data) => {
                if (data.error) {
                    console.log(data.error)
                } else {

                    this.setState({
                        timeline: data.reverse()
                    })

                    //console.log(data)
                }
            })
        }

    }

    _fetchPost = data => {
        if (data == true) {
            if (auth.isAuthenticated()) {
                const newPost = true


                this.socket.emit('fetch_new_post', newPost)
                this.socket.on('fetch_posts', this._fetchNewPosts)


                this.setState({ sending: false, comment_text: '' })
            }

        }
    }

    _fetchNewPosts = data => {
        if (data.length != this.state.timeline.length) {

            this.setState({
                newtimeline: data.reverse(),
                newData: 'block'
            })

            //console.log(data)
        }
    }

    loadNewTimeline = () => {
        let empty = []
        this.setState({
            timeline: empty.reverse()
        })

        setTimeout(this.reloadnewTimeline, 1500)
    }

    reloadnewTimeline = () => {
        this.setState({
            timeline: this.state.newtimeline.reverse(),
            newData: 'none'
        })

        $('div.msg-area').hide();
    }


    onChangePost = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleChange = (event) => {
        const value = event.target.name === 'photo'
            ? event.target.files[0]
            : event.target.value

        this.postData.set(event.target.name, value)
        this.setState({ idPhoto: URL.createObjectURL(event.target.files[0]) });
    }


    onSubmitPost() {
        if (auth.isAuthenticated()) {
            this.postData.set('text', this.state.post)
            const jwt = auth.isAuthenticated();
            const userId = jwt.user._id;
            const token = jwt.token

            this.postData.set('postedBy', userId)

            create({
                t: token
            }, this.postData).then((data) => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    //console.log(data)

                    this.postData.set('photo', '')
                    this.setState({ sending: false, post: '' })
                }
            })
        }

    }

    _handleKeyDown = (e) => {

        if (e.key === 'Enter') {
            if (this.state.post != '') {
                this.onSubmitPost()

                this.setState({ sending: true })
            } else {
                swal('Post field is required')
            }
        }
    }

    upload = () => {
        if (this.state.post != '') {
            this.onSubmitPost()

            this.setState({ sending: true })
        } else {
            swal('Post field is required')
        }
    }


    render() {
        const contactArea = {
            height: '1250px',
            overflow: 'auto'
        }
        let imageView = 'https://ochbackend.herokuapp.com/api/usersPhoto/' + this.state.userId
        //let imageView = 'http://localhost:8080/api/usersPhoto/' + this.state.userId;
        return (
            <div className="col-md-12 col-lg-6 padd-both">


                <div className="white-box clearfix">

                    <div className="left-img">

                        <img src={imageView} className="img-responsive circled no-b __circular4" />

                    </div>
                    <div className="right-content">
                        <div className="search-area">
                            <input name="post" type="text" value={this.state.post} disabled={this.state.sending} onChange={this.onChangePost} placeholder="Share your thoughts and your music..." />

                            <div className="button-wrap btn">
                                <label className="new-button" for="upload1"> <img src="/client/assets/images/pic-up.png" className="img-responsive upload" />
                                    <input onChange={this.handleChange} name="photo" id="upload1" type="file" />
                                </label>
                                <a href="javascript:void(0)" style={{ width: '40px', height: '70px' }} onClick={this.upload} class="fa fa-share"></a>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="likes-section suggest" style={contactArea}>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                            </div>
                            <div className="col-6">
                                <a href="javascript:void(0)" onClick={this.loadNewTimeline} style={{ display: this.state.newData }} className="g-btn"> New Post </a>
                            </div>
                        </div>
                    </div>


                    {this.state.timeline.map((el, i) =>

                        <Feeds
                            fId={el._id}
                            text={el.text}
                            comments={el.comments}
                            likes={el.likes}
                            _id={el._id}
                            postedBy_id={el.postedBy._id}
                            postedBy_firstName={el.postedBy.firstNam}
                            postedBy_lastName={el.postedBy.lastName}
                            postedBy_displayName={el.postedBy.displayName}
                            createDate={el.createDate}
                            imageExist={el.imageExist}
                            socketConnection={this.socket}
                        />
                    )}
                </div>
            </div>

        );
    }

}

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            receiver: '',
            check: false,
            name: '',
            userStatus: ''
        }
    }

    componentDidMount() {
        this.setState({ receiver: this.props.receiver, name: this.props.name })
        if (auth.isAuthenticated()) {
            this.setState({ check: true })
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.receiver !== prevProps.receiver) {
            this.setState({ receiver: this.props.receiver, name: this.props.name, userStatus: this.props.userStatus })
        }

        if (this.props.userStatus !== prevProps.userStatus) {
            this.setState({ userStatus: this.props.userStatus })

        }
    }

    render() {
        return (
            <div className="bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-lg-3 position-relative" id="add-cont">

                            {/*<div id="popup-l" className="popup">
                                <div className="pop-header">
                                    <a href="javascript:void(0)" id="hide-l" className="close-pop"><i className="fa fa-times"
                                        aria-hidden="true"></i></a>
                                    <h1>CONTACTS</h1>
                                </div>
                                <div className="img-area clearfix">
                                    <img src="/client/assets/images/user-four.png" className="img-responsive circled" />
                                    <div className="cont w-100">
                                        <b>Thomas Barsoe</b>
    
                                        <p>Active now - In The Studio</p>
                                        <span className="green"></span>
                                    </div>
    
                                </div>
                                <div className="img-area clearfix">
                                    <img src="/client/assets/images/elif.png" className="img-responsive circled" />
                                    <div className="cont w-100">
                                        <b>Ellie Soufi</b>
    
                                        <p>Active now - Available</p>
                                        <span className="green"></span>
                                    </div>
    
                                </div>
                                <div className="img-area clearfix">
                                    <img src="/client/assets/images/user-six.png" className="img-responsive circled" />
                                    <div className="cont w-100">
                                        <b>Cory Young</b>
    
                                        <p>Active now - Recording</p>
                                        <span className="green"></span>
                                    </div>
    
                                </div>
                                <div className="img-area clearfix">
                                    <img src="/client/assets/images/user-seven.png" className="img-responsive circled" />
                                    <div className="cont w-100">
                                        <b>Lars Halvor Jensen</b>
    
                                        <p>Active now - Busy</p>
                                        <span className="green"></span>
                                    </div>
    
                                </div>
                                <div className="img-area clearfix">
                                    <img src="/client/assets/images/user-eight.png" className="img-responsive circled" />
                                    <div className="cont w-100">
                                        <b>Jackie Hishmeh</b>
    
                                        <p>Active 1 hr ago</p>
                                        <span></span>
                                    </div>
    
                                </div>
                                <div className="img-area clearfix">
                                    <img src="/client/assets/images/user-nine.png" className="img-responsive circled" />
                                    <div className="cont w-100">
                                        <b>Robbie Dean</b>
    
                                        <p>Active 2 hrs ago</p>
                                        <span></span>
                                    </div>
    
                                </div>
                            </div>
    
                            <div className="input-space">
                                <a href="javascript:void(0)" className="icon-arrow" id="pop-left"><i
                                    className="rotate fa fa-angle-right" aria-hidden="true"></i></a>
                                <input type="text" placeholder="Search Network..." />
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </div>*/}
                        </div>

                        <div className="col-md-4 col-lg-6">
                            {/*<div id="chatbar" className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="position-relative"><a href="#" data-toggle="modal" data-target="#user-box"><img
                                        src="/client/assets/images/user.png" className="img-responsive" /><span className="status"></span></a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="position-relative"><a href="#" data-toggle="modal" data-target="#user-box"><img
                                        src="/client/assets/images/user.png" className="img-responsive" /><span className="status"></span></a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="position-relative"><a href="#" data-toggle="modal" data-target="#user-box"><img
                                        src="/client/assets/images/user.png" className="img-responsive" /><span className="status"></span></a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="position-relative"><a href="#" data-toggle="modal" data-target="#user-box"><img
                                        src="/client/assets/images/user.png" className="img-responsive" /><span className="status"></span></a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="position-relative"><a href="#" data-toggle="modal" data-target="#user-box"><img
                                        src="/client/assets/images/user.png" className="img-responsive" /><span className="status"></span></a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="position-relative"><a href="#" data-toggle="modal" data-target="#user-box"><img
                                        src="/client/assets/images/user.png" className="img-responsive" /><span className="status"></span></a>
                                    </div>
                                </div>
                            </div>
                            */}
                        </div>

                        {this.state.check === true ? <Chat
                            receiver={this.state.receiver}
                            name={this.state.name}
                            userStatus={this.state.userStatus}
                        /> : ''}
                    </div>
                </div>
            </div>
        );
    }

}

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            check: false,
            receiver: '',
            userId: '',
            fullName: '',
            displayName: '',
            meetings: []
        }
    }

    componentDidMount() {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated();
            const user_id = jwt.user._id;
            this.setState({ check: true, userId: user_id });

            read({
                userId: user_id
            }).then((data) => {
                if (data.error) {
                    swal(data.error)
                } else {
                    this.setState({ fullName: data.fullName, displayName: data.displayName });
                }
            });

            this._listBooking()
        }
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
                }
            })
        }


    }

    parentOpenChat = (data) => {
        this.props._parentOpenChat(data)
    }

    parentViewMessageArea = (data) => {
        this.props.__parentOpenChat(data)
    }

    componentDidUpdate(prevProps) {
        if (this.props.receiver !== prevProps.receiver) {
            this.setState({ receiver: this.props.receiver })
        }
    }



    render() {
        let imageView = 'https://ochbackend.herokuapp.com/api/usersPhoto/' + this.state.userId
        //let imageView = 'http://localhost:8080/api/usersPhoto/' + this.state.userId;
        return (
            <section className="grey padd-b padd-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 padd-right">
                            <div className="white-box">
                                <div className="user-box">
                                    <img src="/client/assets/images/user-bg.png" className="img-responsive bod" />
                                    <img src={imageView} className="img-dp __circular5" />
                                </div>
                                <div className="h-area">
                                    <h2>{this.state.displayName}</h2>
                                    <h3>{this.state.fullName}</h3>
                                    {/*<p>JOINED JUNE 2018</p>*/}
                                </div>
                            </div>

                            {/*
                            <div className="white-box clearfix">
                                <h2 className="in-h">PAGES YOU MAY LIKE</h2>
                                <div className="line3 text-left"></div>
                                <div className="likes-section new">
                                    <div className="img-area clearfix">
                                        <img src="/client/assets/images/mic.png" className="img-responsive circled" />
                                        <div className="cont">
                                            <b>Vocal Recording</b>

                                            <p>Studio Techniques</p></div>

                                    </div>
                                    <div className="img-area clearfix">
                                        <img src="/client/assets/images/filez.png" className="img-responsive circled" />
                                        <div className="cont">
                                            <b>ASCAP vs BMI</b>

                                            <p>Music Business</p></div>

                                    </div>
                                    <div className="img-area clearfix">
                                        <img src="/client/assets/images/filez.png" className="img-responsive circled" />
                                        <div className="cont">
                                            <b>10 Careers In Music</b>

                                            <p>Music Business</p></div>

                                    </div>
                                    <div className="img-area clearfix">
                                        <img src="/client/assets/images/headphone.png" className="img-responsive circled" />
                                        <div className="cont">
                                            <b>Spotify Playlists</b>

                                            <p>Social Media</p></div>

                                    </div>


                                </div>
                                <a href="" className="btn-spc"><i className="fa fa-ellipsis-h" aria-hidden="true"></i> See More Pages</a>
                            </div>
                            */}
                            {this.state.check === true ?
                                (<ContactList
                                    receiver={this.state.receiver}
                                    _openChat={this.parentOpenChat}
                                />) : ''}
                        </div>

                        <Timeline />

                        <div className="col-lg-3 col-md-12 padd-left">
                            {/*
                            <div className="white-box">
                                <h2 className="in-h">RECENT NOTIFICATIONS</h2>
                                <div className="line3 text-left"></div>
                                <div className="likes-section new">



                                    <div className="img-area clearfix">
                                        <div className="img-c">
                                            <img src="/client/assets/images/user-four.png" className="img-responsive circled" />
                                            <span className="status"></span>
                                        </div>
                                        <div className="cont">
                                            <b>Thomas Barsoe sent you</b>

                                            <p>a message</p><span>35 min ago</span></div>

                                    </div>
                                    <div className="img-area clearfix">
                                        <div className="img-c">
                                            <img src="/client/assets/images/user-five.png" className="img-responsive circled" />
                                            <span className="status red"></span>
                                        </div>
                                        <div className="cont">
                                            <b>Marcus Miles sent you</b>

                                            <p>a message</p><span>56 mins ago</span></div>

                                    </div>

                                    <div className="img-area clearfix">
                                        <div className="img-c">
                                            <img src="/client/assets/images/elif.png" className="img-responsive circled" />
                                            <span className="status"></span>
                                        </div>
                                        <div className="cont">
                                            <b>Ellie Soufi invited you</b>

                                            <p>in a session</p><span>2 hrs ago</span></div>

                                    </div>
                                </div>
                                <a href="" className="btn-spc"><i className="fa fa-ellipsis-h" aria-hidden="true"></i> See More Notifications</a>
                            </div>

                            */}


                            <div className="white-box">
                                <h2 className="in-h">MY EVENTS</h2>
                                <div className="line3 text-left"></div>
                                <div className="likes-section new">
                                    {this.state.meetings.map((el, i) => <div className="img-area clearfix">
                                        <div className="img-c">
                                            <img src={'https://ochbackend.herokuapp.com/api/usersPhoto/' + el.user_id._id} className="img-responsive __circular3" />
                                            {/*<span className="status"></span>*/}
                                        </div>
                                        <div className="cont w-100">
                                            <b>Session w/{el.user_id.firstName}</b>

                                            <p>{el.meeting_id.start_time} - {el.meeting_id.topic}</p>
                                            <a href={"/zoom.html?meeting_id=" + el.meeting_id._id} data-toggle="modal" data-target="#join-session" className="g-btn">JOIN SESSION</a>
                                            {/*<a href="#" data-toggle="modal" data-target="#cancel-box" className="red-btn">CANCEL</a>*/}
                                        </div>


                                    </div>)}
                                    {/*<div className="img-area clearfix">
                                        <div className="img-c">
                                            <img src="/client/assets/images/user-six.png" className="img-responsive circled" />
                                            <span className="status"></span>
                                        </div>
                                        <div className="cont w-100">
                                            <b>Session w/Cory Young
    </b>

                                            <p>6/15/20 @ 5 PM - V-Studio 14</p>
                                            <a href="#" data-toggle="modal" data-target="#detail-box" className="d-btn">Details</a>
                                        </div>

                                    </div>

                                    <div className="img-area clearfix">
                                        <div className="img-c">
                                            <img src="/client/assets/images/oct-hit.png" className="img-responsive circled" />
                                            <span className="status"></span>
                                        </div>
                                        <div className="cont w-100">
                                            <b>Virtual Songwriting Camp
    </b>

                                            <p>8/23/20 @ 10 AM - V-Hall 2</p>
                                            <a href="#" className="d-btn">Details</a>
                                        </div>

                                    </div>
                                    */}
                                </div>
                                <a href="" className="btn-spc"><i className="fa fa-ellipsis-h" aria-hidden="true"></i> See More Notifications</a>
                            </div>

                            {this.state.check === true ?
                                (<Messages
                                    _viewMessageArea={this.parentViewMessageArea}
                                    receiver={this.state.receiver}
                                />) : ''}
                        </div>


                    </div>
                </div>
            </section>

        );
    }

}

class Network extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: [],
            receiver: '',
            sender: '',
            name: '',
            open: false,
            userStatus: ''
        }


    }

    _grandOpenChat = (data) => {

        let user;
        let _name
        if (data.recipients[0]._id == auth.isAuthenticated().user._id) {
            user = data.recipients[1]
        } else {
            user = data.recipients[0]
        }

        this.setState({ receiver: user._id, userStatus: user.userStatus })


        if (user.displayName == '') {
            _name = user.firstName + ' ' + user.lastName;
        } else {
            _name = user.displayName
        }

        this.setState({ name: _name })

        document.getElementById('pop-right-msg').click()
        this.setState({ open: true })

    }

    grandOpenChat = (data) => {
        this.setState({ receiver: data._id, userStatus: data.userStatus })
        let _name

        if (data.displayName == '') {
            _name = data.firstName + ' ' + data.lastName;
        } else {
            _name = data.displayName
        }


        this.setState({ name: _name })

        document.getElementById('pop-right-msg').click()
        this.setState({ open: true })
    }


    render() {
        return (
            <div>

                <Header
                    path={this.props.location.pathname}
                />


                <Dashboard
                    _parentOpenChat={this.grandOpenChat}
                    __parentOpenChat={this._grandOpenChat}
                    receiver={this.state.receiver}
                />

                <Contact
                    receiver={this.state.receiver}
                    name={this.state.name}
                    userStatus={this.state.userStatus}
                />



            </div>
        )
    }
}

export default Network;