import React from 'react';





class Detail extends React.Component {

    render() {
        return (
            <div className="modal" id="detail-box">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">

                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body bg-white no-im">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="v-box m-img p-top">
                                        <h3>V-STUDIO 4</h3>
                                        <div className="request-box">
                                            <img src="/client/assets/images/v1.jpg" className="img-responsive" />
                                            <div className="request-text d-block">

                                            </div>
                                        </div>
                                    </div>
                                    <b className="d-block text-center">WHO WILL BE IN THE ROOM:</b>
                                    <div className="line3"></div>
                                    <ul className="user-list">
                                        <li><a href="#"> <img src="/client/assets/images/msg.png" className="img-responsive wd" /></a>
                                            <a href="#"> <img src="/client/assets/images/user-four.png" className="img-responsive wd" /></a> THOMAS
									BARSOE (ADMIN)</li>
                                        <li><a href="#"> <img src="/client/assets/images/msg.png" className="img-responsive wd" /></a>
                                            <a href="#"> <img src="/client/assets/images/elif.png" className="img-responsive wd" /></a> ELLIE SOUFI
								</li>
                                    </ul>

                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="meeting-session m-b">
                                        <b className="d-block text-center">BEAUX EP - WRITING SESSION</b>
                                        <div className="line3"></div>
                                        <span>DATE/TIME:<br />
                                            6/15/2020 @ 5 PM</span>
                                        <span>
                                            LOCATION:<br />
                                                    V-STUDIO 14 <br />
                                                        (ZOOM SESSION)
								</span>
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
export default Detail