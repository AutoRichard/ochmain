import React from 'react';





class PicBox extends React.Component {

    render() {
        return (
            <div className="modal" id="pic-box">
                <div className="modal-dialog modal-dialog-centered small">
                    <div className="modal-content">

                        <div className="modal-header">

                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body bg-w pic-area">
                            <div className="pic-cvr">
                                <img src="/client/assets/images/crop-pic.jpg" />
                            </div>
                            <div className="btn-b e-wd">
                                <a href="javascript:void0" className="outline-btn">CHOOSE PICTURE</a>
                                <a href="javascript:void0" className="cancel-small">CROP & SAVE</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PicBox