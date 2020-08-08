import React from 'react';





class Upgrade extends React.Component {

    render() {
        return (
            <div className="modal" id="upgrade-box">
                <div className="modal-dialog modal-dialog-centered small-box x-l">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body bg-black  small-m">
                            <div className="adsf">
                                <b className="d-block text-center bold">ARE YOU SURE YOU WANT TO UPGRADE?</b>

                                <div className="btn-b">
                                    <a href="#" className="outline-btn">NO - TAKE ME BACK	</a>
                                    <a href="#" className="cancel-small">YES - UPGRADE ME</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Upgrade