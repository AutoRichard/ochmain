import React from 'react';





class JoinSession extends React.Component {

    render() {
        return (
            <div className="modal" id="join-session">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">

                        <div className="modal-header">

                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body bg-white no-im">
                            <div className="row">
                                <div className="col-md-12 col-lg-4">
                                    <div className="v-box m-img p-top">
                                        <h3>V-STUDIO 1</h3>
                                        <div className="request-box">
                                            <img src="/client/assets/images/v1.jpg" className="img-responsive" />
                                            <div className="request-text d-block">
                                                <h5>SESSION IN PROGRESS</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <b className="d-block text-center">WHO IS IN THE ROOM:</b>
                                    <div className="line3"></div>
                                    <ul className="user-list">
                                        <li><a href="#"> <img src="/client/assets/images/msg.png" className="img-responsive wd" /></a>
                                            <a href="#"> <img src="/client/assets/images/user-four.png" className="img-responsive wd" /></a> THOMAS
									BARSOE (ADMIN)</li>
                                        <li><a href="#"> <img src="/client/assets/images/msg.png" className="img-responsive wd" /></a>
                                            <a href="#"> <img src="/client/assets/images/elif.png" className="img-responsive wd" /></a> ELLIE SOUFI
								</li>
                                    </ul>
                                    <p className="text-center m-b">JOINING SESSION...</p>
                                </div>
                                <div className="col-md-12 col-lg-8">
                                    <div className="meeting-session">
                                        <b>Meeting ID:888-888-888</b>

                                        <h4>Please wait, the meeting host will let you in soon.</h4>
                                        <img src="/client/assets/images/logo.png" className="img-center" />
                                        <p>BEAUX EP - WRITING SESSION</p>
                                        <a href="#" className="cancel-btn">Cancel</a>
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
export default JoinSession