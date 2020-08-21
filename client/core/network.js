import React, { Component } from 'react';
import { Header } from './../menu/header';


const Dashboard = () => {
    return (
        <section className="grey padd-b padd-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-12 padd-right">
                        <div className="white-box">
                            <div className="user-box">
                                <img src="/client/assets/images/user-bg.png" className="img-responsive bod" />
                                <img src="/client/assets/images/network-user.png" className="img-dp" />
                            </div>
                            <div className="h-area">
                                <h2>BEAUX</h2>
                                <h3>	SINGER - SONGWRITER</h3>
                                <p>JOINED JUNE 2018</p>
                            </div>
                        </div>

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

                        <div className="white-box">
                            <h2 className="in-h">SUGGESTED CONNECTS</h2>
                            <div className="line3 text-left"></div>
                            <div className="likes-section suggest">
                                <div className="img-area clearfix">
                                    <div className="img-c">
                                        <img src="/client/assets/images/user.png" className="img-responsive circled" />
                                        <span className="status"></span>
                                    </div>
                                    <div className="cont">
                                        <b>Tyler Williams</b>

                                        <p>Music Producer</p></div>
                                    <a href="#chat-bx" id="pop-right">	<img src="/client/assets/images/msg.png" className="img-responsive wd" /></a>
                                    <a href="">	<img src="/client/assets/images/add-user.png" className="img-responsive wd" /></a>
                                </div>
                                <div className="img-area clearfix">
                                    <div className="img-c">
                                        <img src="/client/assets/images/user.png" className="img-responsive circled" />
                                        <span className="status"></span>
                                    </div>
                                    <div className="cont">
                                        <b>Charlie Walk</b>

                                        <p>A&R, Talent</p></div>
                                    <a href="#">	<img src="/client/assets/images/msg.png" className="img-responsive wd" /></a>
                                    <a href="#">	<img src="/client/assets/images/add-user.png" className="img-responsive wd" /></a>
                                </div>
                                <div className="img-area clearfix">
                                    <div className="img-c">
                                        <img src="/client/assets/images/user.png" className="img-responsive circled" />
                                        <span className="status"></span>
                                    </div>
                                    <div className="cont">
                                        <b>Alison McFee</b>

                                        <p>Music Manager</p></div>
                                    <a href="#">	<img src="/client/assets/images/msg.png" className="img-responsive wd" /></a>
                                    <a href="#">	<img src="/client/assets/images/add-user.png" className="img-responsive wd" /></a>
                                </div>
                                <div className="img-area clearfix">
                                    <div className="img-c">
                                        <img src="/client/assets/images/user.png" className="img-responsive circled" />
                                        <span className="status"></span>
                                    </div>
                                    <div className="cont">
                                        <b>Michelle Jackson</b>

                                        <p>Singer/Songwriter</p></div>
                                    <a href="#">	<img src="/client/assets/images/msg.png" className="img-responsive wd" /></a>
                                    <a href="#">	<img src="/client/assets/images/add-user.png" className="img-responsive wd" /></a>
                                </div>

                                <div className="img-area clearfix">
                                    <div className="img-c">
                                        <img src="/client/assets/images/user.png" className="img-responsive circled" />
                                        <span className="status"></span>
                                    </div>
                                    <div className="cont">
                                        <b>James Harlow</b>

                                        <p>Singer/Songwriter</p></div>
                                    <a href="#">	<img src="/client/assets/images/msg.png" className="img-responsive wd" /></a>
                                    <a href="#">	<img src="/client/assets/images/add-user.png" className="img-responsive wd" /></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-12 col-lg-6 padd-both">


                        <div className="white-box clearfix">

                            <div className="left-img">

                                <img src="/client/assets/images/user-two.png" className="img-responsive circled no-b" />

                            </div>
                            <div className="right-content">
                                <div className="search-area">
                                    <input type="text" placeholder="Share your thoughts and your music..." />

                                    <div className="button-wrap btn">
                                        <label className="new-button" for="upload1"> <img src="/client/assets/images/pic-up.png" className="img-responsive upload" />
                                            <input id="upload1" type="file" />
                                        </label>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="white-box clearfix">

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
                                            <b><a href="#">Hide Post</a></b>
                                            <p>Remove this post from your feed</p>

                                            <b><a href="#">Unfollow Ellie Soufi</a></b>
                                            <p>Stop seeing Ellie’s posts but stay connected</p>

                                            <b><a href="#">Report Post</a></b>
                                            <p>Something about this post concerns me</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="desc-box">
                                <p>Really proud of this collabo with @robbiedean_ - we wrote it on a Sunday afternoon

                                when we were just sitting in the sun contemplating the mysteries of the universe and

our role in it - let me know what you guys think! <br />


#feelsosmall #gottabesomeoneoutthere</p>

                                <iframe width="100%" height="315"
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0">
                                </iframe>

                                <ul className="comments-area-two clearfix">
                                    <li><a href="#" className="like-btn"></a> <a href="javascript:void(0)" id="msg-bar"><img src="/client/assets/images/msg-right.png" className="img-responsive m-r" /> You and 267 others liked this</a></li>

                                    <li><div className="dropdown-share">
                                        <span><img src="/client/assets/images/f-share.png" className="img-responsive share" /></span>
                                        <div className="dropdown-share-content">
                                            <b><a href="#">Share Now</a></b>
                                            <p>Instantly post to your content feed</p>

                                            <b><a href="#">Write Post</a></b>
                                            <p>Write new post based on this post</p>

                                            <b><a href="#">Send As Direct Message</a></b>
                                            <p>Send to one or more contacts directly </p>
                                        </div>
                                    </div></li>
                                </ul>
                                <div className="msg-area clearfix">
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
                                <a className="grey" href="#">View all 6 comments</a>
                            </div>
                        </div>

                        <div className="white-box clearfix">

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
                                            <b><a href="#">Hide Post</a></b>
                                            <p>Remove this post from your feed</p>

                                            <b><a href="#">Unfollow Ellie Soufi</a></b>
                                            <p>Stop seeing Ellie’s posts but stay connected</p>

                                            <b><a href="#">Report Post</a></b>
                                            <p>Something about this post concerns me</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="desc-box">
                                <p>Looking for a really talented guitarist to play on my next single!! DM me for details! <br />

#needguitarist #nextsingle</p>


                                <ul className="comments-area-two clearfix">
                                    <li><a href="#" className="like-btn"></a> <a href="#"><img src="/client/assets/images/msg-right.png" className="img-responsive m-r" /> You and 267 others liked this</a></li>

                                    <li><div className="dropdown-share">
                                        <span><img src="/client/assets/images/f-share.png" className="img-responsive share" /></span>
                                        <div className="dropdown-share-content">
                                            <b><a href="#">Share Now</a></b>
                                            <p>Instantly post to your content feed</p>

                                            <b><a href="#">Write Post</a></b>
                                            <p>Write new post based on this post</p>

                                            <b><a href="#">Send As Direct Message</a></b>
                                            <p>Send to one or more contacts directly </p>
                                        </div>
                                    </div></li>
                                </ul>


                            </div><div className="clearfix"></div>
                            <div className="left-img">

                                <img src="/client/assets/images/user-two.png" className="img-responsive circled no-b" />

                            </div>
                            <div className="right-content">
                                <div className="search-area">
                                    <input type="text" placeholder="Be the first to write a comment..." />

                                    <div className="button-wrap btn">
                                        <label className="new-button" for="upload3"> <img src="/client/assets/images/pic-up.png" className="img-responsive upload" />
                                            <input id="upload3" type="file" />
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="white-box clearfix">

                            <div className="left-img">

                                <img src="/client/assets/images/oct-hit.png" className="img-responsive circled no-b" />

                            </div>
                            <div className="right-content position-relative">
                                <b>OC Hit Academy</b>
                                <span>5 min ago</span>
                                <div className="dots-a">
                                    <div className="dropdown-share">
                                        <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
                                        <div className="dropdown-share-content">
                                            <b><a href="#">Hide Post</a></b>
                                            <p>Remove this post from your feed</p>

                                            <b><a href="#">Unfollow Ellie Soufi</a></b>
                                            <p>Stop seeing Ellie’s posts but stay connected</p>

                                            <b><a href="#">Report Post</a></b>
                                            <p>Something about this post concerns me</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="desc-box">
                                <p>Signups for our August songwriting camp with superstar guest Ne-Yo is now open!<br />

CLICK HERE to reserve your spot! Very limited availability!<br />


#needguitarist #nextsingle</p>


                                <ul className="comments-area-two clearfix">
                                    <li><a href="#" className="like-btn"></a> <a href="#"><img src="/client/assets/images/msg-right.png" className="img-responsive m-r" /> You and 267 others liked this</a></li>

                                    <li><div className="dropdown-share">
                                        <span><img src="/client/assets/images/f-share.png" className="img-responsive share" /></span>
                                        <div className="dropdown-share-content">
                                            <b><a href="#">Share Now</a></b>
                                            <p>Instantly post to your content feed</p>

                                            <b><a href="#">Write Post</a></b>
                                            <p>Write new post based on this post</p>

                                            <b><a href="#">Send As Direct Message</a></b>
                                            <p>Send to one or more contacts directly </p>
                                        </div>
                                    </div></li>
                                </ul>


                            </div><div className="clearfix"></div>
                            <div className="left-img">

                                <img src="/client/assets/images/user-two.png" className="img-responsive circled no-b" />

                            </div>
                            <div className="right-content">
                                <div className="search-area">
                                    <input type="text" placeholder="Be the first to write a comment..." />

                                    <div className="button-wrap btn">
                                        <label className="new-button" for="upload4"> <img src="/client/assets/images/pic-up.png" className="img-responsive upload" />
                                            <input id="upload4" type="file" />
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-12 padd-left">		<div className="white-box">
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

                        <div className="white-box">
                            <h2 className="in-h">MY EVENTS</h2>
                            <div className="line3 text-left"></div>
                            <div className="likes-section new">
                                <div className="img-area clearfix">
                                    <div className="img-c">
                                        <img src="/client/assets/images/user-four.png" className="img-responsive circled" />
                                        <span className="status"></span>
                                    </div>
                                    <div className="cont w-100">
                                        <b>Session w/Thomas Barsoe</b>

                                        <p>Now - V-Studio 1</p>
                                        <a href="#" data-toggle="modal" data-target="#join-session" className="g-btn">JOIN SESSION</a>
                                        <a href="#" data-toggle="modal" data-target="#cancel-box" className="red-btn">CANCEL</a>
                                    </div>

                                </div>
                                <div className="img-area clearfix">
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

                            </div>
                            <a href="" className="btn-spc"><i className="fa fa-ellipsis-h" aria-hidden="true"></i> See More Notifications</a>
                        </div>

                        <div className="white-box">
                            <h2 className="in-h">MESSAGES</h2>
                            <div className="line3 text-left"></div>
                            <div className="likes-section new">
                                <div className="img-area clearfix">
                                    <div className="img-c">
                                        <img src="/client/assets/images/user-six.png" className="img-responsive circled" />
                                        <span className="msg"></span>
                                    </div>

                                    <div className="cont w-70">
                                        <b>Cory Young</b>

                                        <p>Unread Message</p><p className="mins">2 mins ago</p></div>
                                    <div className="msg-icon"><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a></div>
                                </div>
                                <div className="img-area clearfix">
                                    <div className="img-c">
                                        <img src="/client/assets/images/user-six.png" className="img-responsive circled" />
                                        <span className="msg"></span>
                                    </div>

                                    <div className="cont w-70">
                                        <b>Cory Young</b>

                                        <p>Unread Message</p><p className="mins">2 mins ago</p></div>
                                    <div className="msg-icon grey"><a href="#"><i className="fa fa-envelope-open" aria-hidden="true"></i></a></div>
                                </div>





                            </div>
                            <a href="" className="btn-spc"><i className="fa fa-ellipsis-h" aria-hidden="true"></i> See More Messages</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}


class Network extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }


    }


    render() {
        return (
            <div>

                <Header
                    path={this.props.location.pathname}
                />

                <Dashboard />



            </div>
        )
    }
}

export default Network;