import React from 'react';





class Art extends React.Component {

    render() {
        return (
            <div className="modal art" id="artist-box">
                <div className="modal-dialog modal-dialog-centered small-box">
                    <div className="modal-content">

                        <div className="modal-header">

                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body bg-white  small-m">
                            <div className="artist-box">

                                <input type="text" placeholder="Enter/Paste Artist Link..." />
                                <a href="javascript:void0" className="save-btn btm">ADD LINK</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Art