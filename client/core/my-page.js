import React, { Component } from 'react';
import Header from './../menu/header';
import PicBox from './../modal/pic-box';
import Art from './../modal/art';
import Upgrade from './../modal/upgrade';
import Plan from './../modal/plan';

const Profile = () => {
    return (
        <section className="padd-small padd-top text-center">

            <div className="small-12 medium-2 large-2 columns">
                <div className="circle">
                    <img className="profile-pic" src="/client/assets/images/profile-page.png" />

                    <i className="fa fa-user fa-5x"></i>
                </div>
                <div className="p-image">
                    <a href="" data-toggle="modal" data-target="#pic-box"> <img src="/client/assets/images/camera-icon.png" /></a>

                </div>
            </div>
            <div className="heading-areaz">
                <h1>BEAUX</h1>
                <h2>SINGER - SONGWRITER</h2>
            </div>

            <ul className="profile-setting clearfix">
                <li>
                    <div className="dropdown-share"><a href="javascript:void0">BIO</a><div className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></div>
                        <div className="dropdown-share-content bio">
                            <h5>Edit Bio</h5>
                            <div className="line3"></div>
                            <textarea></textarea>
                            <a href="javascript:void0" className="save-btn">SAVE & CLOSE</a>
                        </div>
                    </div>
                </li>
                <li> <div className="dropdown-share"><a href="javascript:void0">AVAILABLE <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                    <div className="dropdown-share-content ava">
                        <ul className="status-list">
                            <li> <a href="javascript:void0"><img src="/client/assets/images/profile-available.png" />Available <i className="fa fa-check grn" aria-hidden="true"></i></a></li>
                            <li>  <a href="javascript:void0"><img src="/client/assets/images/p-away.png" />Away</a></li>
                            <li> <a href="javascript:void0"><img src="/client/assets/images/p-busy.png" />Busy</a></li>
                            <li> <a href="javascript:void0"><img src="/client/assets/images/p-dist.png" />Do not Disturb</a></li>
                            <li><a href="javascript:void0"><img src="/client/assets/images/p-close.png" />Appear Offline</a></li>
                        </ul>
                    </div>
                </div>
                    <div className="checkb">

                        <span><i className="fa fa-check" aria-hidden="true"></i></span>
                    </div>

                </li>
                <li>
                    <div className="dropdown-share"><a href="javascript:void0"><img src="/client/assets/images/user-share.png" className="img-responsive" /></a>
                        <div className="dropdown-share-content shr">
                            <b><a href="javascript:void0">Share Profile Via Email</a></b>
                            <p>Create new email containing link to your profile</p>

                            <b><a href="javascript:void0">Share Profile via Text or iMessage</a></b>
                            <p>Create new text/iMessage containing profile link </p>

                            <b><a href="javascript:void0">Copy Profile Link</a></b>
                            <p>Copy your profile link to the Copy/Paste buffer </p>
                        </div>
                    </div>
                </li>

            </ul>


        </section>
    );
}

const Timeline = () => {
    return (
        <section className="song-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-3 padd-right">
                        <div className="white-box transparent-area">
                            <h2 className="in-h">SONGS</h2>
                            <div className="line3 text-left"></div>

                            <ul className="song-list">
                                <li><a href="javascript:void0" className="play-btn"><img src="/client/assets/images/play-btn.png" /> Daydreaming (2:41)</a>
                                    <div className="btn-area clearfix">
                                        <div className="dropdown-share">
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
                                        </div>
                                        <div className="dropdown-share del-share"><a href="javascript:void0"><img src="/client/assets/images/del.png" className="img-responsive" /></a>
                                            <div className="dropdown-share-content sharee">
                                                <div className="cancel-bx">
                                                    <b className="d-block text-center bold">Do you want to delete the song?</b>
                                                    <div className="line3"></div>
                                                    <div className="btn-del">
                                                        <a href="javascript:void0" className="outline-btn">NO - KEEP IT</a>
                                                        <a href="javascript:void0" className="cancel-small">YES - DELETE IT</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li><a href="javascript:void0" className="play-btn"><img src="/client/assets/images/play-btn.png" /> Just Friends (2:59)</a>
                                    <div className="btn-area clearfix">
                                        <div className="dropdown-share">
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
                                        </div>
                                        <div className="dropdown-share del-share"><a href="javascript:void0"><img src="/client/assets/images/del.png" className="img-responsive" /></a>
                                            <div className="dropdown-share-content sharee">
                                                <div className="cancel-bx">
                                                    <b className="d-block text-center bold">Do you want to delete the song?</b>
                                                    <div className="line3"></div>
                                                    <div className="btn-del">
                                                        <a href="javascript:void0" className="outline-btn">NO - KEEP IT</a>
                                                        <a href="javascript:void0" className="cancel-small">YES - DELETE IT</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li><a href="javascript:void0" className="play-btn"><img src="/client/assets/images/play-btn.png" /> Over You (3:10)</a>
                                    <div className="btn-area clearfix">
                                        <div className="dropdown-share">
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
                                        </div>
                                        <div className="dropdown-share del-share"><a href="javascript:void0"><img src="/client/assets/images/del.png" className="img-responsive" /></a>
                                            <div className="dropdown-share-content sharee">
                                                <div className="cancel-bx">
                                                    <b className="d-block text-center bold">Do you want to delete the song?</b>
                                                    <div className="line3"></div>
                                                    <div className="btn-del">
                                                        <a href="javascript:void0" className="outline-btn">NO - KEEP IT</a>
                                                        <a href="javascript:void0" className="cancel-small">YES - DELETE IT</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>


                                <li>

                                    <div className="dropdown-share">
                                        <a href="javascript:void0" className="play-btn"><img src="/client/assets/images/plus-btn.png" /> Add Song...</a>
                                        <div className="dropdown-share-content add-song">
                                            <b><a href="javascript:void0">Add Song from File</a></b>
                                            <p>Create new post containing link to the song</p>

                                            <b><a href="javascript:void0">Add Song via Link</a></b>
                                            <input type="text" placeholder="Enter/Paste Spotify or Soundcloud Link..." />
                                            <a href="javascript:void0" className="save-btn btm">ADD LINK</a>

                                        </div>
                                    </div>


                                </li>
                            </ul>


                        </div>
                        <ul className="social-circle">
                            <li><a href="javascript:void0" className="crs-btn"><img src="/client/assets/images/close-icon.png" /></a><img src="/client/assets/images/facebook.png" /><div className="dropdown-share"><div data-toggle="modal" data-target="#artist-box" className=" edit-two"><i className="fa fa-pencil" aria-hidden="true"></i></div>
                                <div className="dropdown-share-content edit-drp d-nn">

                                    <input type="text" placeholder="Enter/Paste Facebook Artist Link..." />
                                    <a href="javascript:void0" className="save-btn btm">ADD LINK</a>
                                </div>
                            </div></li>
                            <li><a href="javascript:void0" className="crs-btn"><img src="/client/assets/images/close-icon.png" /></a><img src="/client/assets/images/insta.png" /><div className="dropdown-share"><div data-toggle="modal" data-target="#artist-box" className=" edit-two"><i className="fa fa-pencil" aria-hidden="true"></i></div>
                                <div className="dropdown-share-content edit-drp d-nn">

                                    <input type="text" placeholder="Enter/Paste Instagram Artist Link..." />
                                    <a href="javascript:void0" className="save-btn btm">ADD LINK</a>
                                </div>
                            </div></li>
                            <li><a href="javascript:void0" className="crs-btn"><img src="/client/assets/images/close-icon.png" /></a><img src="/client/assets/images/spotify.png" /><div className="dropdown-share"><div data-toggle="modal" data-target="#artist-box" className="edit-two"><i className="fa fa-pencil" aria-hidden="true"></i></div>
                                <div className="dropdown-share-content edit-drp d-nn">

                                    <input type="text" placeholder="Enter/Paste Spotify Artist Link..." />
                                    <a href="javascript:void0" className="save-btn btm">ADD LINK</a>
                                </div>
                            </div></li>


                        </ul>
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
                                <p>Really proud of this collabo with @robbiedean_ - we wrote it on a Sunday afternoon

                                when we were just sitting in the sun contemplating the mysteries of the universe and

our role in it - let me know what you guys think! <br />


#feelsosmall #gottabesomeoneoutthere</p>

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
                                <p>Looking for a really talented guitarist to play on my next single!! DM me for details! <br />

#needguitarist #nextsingle</p>


                                <ul className="comments-area-two clearfix">
                                    <li><a href="javascript:void0" className="like-btn"></a> <a href="javascript:void0"><img src="/client/assets/images/msg-right.png" className="img-responsive m-r" /> You and 267 others liked this</a></li>

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


                    </div>


                    <div className="col-md-12 col-lg-3 padd-left">

                        <div className="white-box transparent-area">
                            <h2 className="in-h">VIDEOS</h2>
                            <div className="line3 text-left"></div>

                            <ul className="song-list">
                                <li><a href="javascript:void0" className="play-btn"> Daydreaming (2:41)</a>
                                    <div className="btn-area tp clearfix">
                                        <div className="dropdown-share">
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
                                        </div>
                                        <div className="dropdown-share del-share"><a href="javascript:void0"><img src="/client/assets/images/del.png" className="img-responsive" /></a>
                                            <div className="dropdown-share-content sharee">
                                                <div className="cancel-bx">
                                                    <b className="d-block text-center bold">Do you want to delete the video?</b>
                                                    <div className="line3"></div>
                                                    <div className="btn-del">
                                                        <a href="javascript:void0" className="outline-btn">NO - KEEP IT</a>
                                                        <a href="javascript:void0" className="cancel-small">YES - DELETE IT</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="video-c">
                                        <img src="/client/assets/images/video-thumbz.png" className="img-responsive" />
                                        <a href="javascript:void0">	<img src="/client/assets/images/play-btn.png" className="img-responsive ply" /></a>
                                    </div>

                                </li>





                                <li>

                                    <div className="dropdown-share">
                                        <a href="javascript:void0" className="play-btn"><img src="/client/assets/images/plus-btn.png" /> Add Video...</a>
                                        <div className="dropdown-share-content add-song">



                                            <input type="text" placeholder="Enter/Paste YouTube Link..." />
                                            <a href="javascript:void0" className="save-btn btm">ADD VIDEO</a>

                                        </div>
                                    </div>


                                </li>
                            </ul>


                        </div>
                        <ul className="social-circle">
                            <li><a href="javascript:void0" className="crs-btn"><img src="/client/assets/images/close-icon.png" /></a><img src="/client/assets/images/youtube.png" /><div className="dropdown-share"><div data-toggle="modal" data-target="#artist-box" className="edit-two"><i className="fa fa-pencil" aria-hidden="true"></i></div>
                                <div className="dropdown-share-content edit-drp right d-nn">

                                    <input type="text" placeholder="Enter/Paste Youtube Artist Link..." />
                                    <a href="javascript:void0" className="save-btn btm">ADD LINK</a>
                                </div>
                            </div></li>
                            <li><a href="javascript:void0" className="crs-btn"><img src="/client/assets/images/close-icon.png" /></a><img src="/client/assets/images/snapchat.png" /><div className="dropdown-share"><div data-toggle="modal" data-target="#artist-box" className=" edit-two"><i className="fa fa-pencil" aria-hidden="true"></i></div>
                                <div className="dropdown-share-content edit-drp right d-nn">

                                    <input type="text" placeholder="Enter/Paste Snapchat Artist Link..." />
                                    <a href="javascript:void0" className="save-btn btm">ADD LINK</a>
                                </div>
                            </div></li>
                            <li><a href="javascript:void0" className="crs-btn"><img src="/client/assets/images/close-icon.png" /></a><img src="/client/assets/images/tiktok.png" /><div className="dropdown-share"><div data-toggle="modal" data-target="#artist-box" className=" edit-two"><i className="fa fa-pencil" aria-hidden="true"></i></div>
                                <div className="dropdown-share-content edit-drp right d-nn">

                                    <input type="text" placeholder="Enter/Paste Tiktok Artist Link..." />
                                    <a href="javascript:void0" className="save-btn btm">ADD LINK</a>
                                </div>
                            </div></li>


                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}


class Mypage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }


    }


    render() {
        return (
            <div>
                <div className="page-bg">

                    <Header
                        path={this.props.location.pathname}
                    />

                    <Profile />

                    <Timeline />
                </div>
                <PicBox />
                <Art />
                <Upgrade />
                <Plan />



            </div>
        )
    }
}

export default Mypage;