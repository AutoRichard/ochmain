import React from 'react';





class ThanksNewsletter extends React.Component {

    render() {
        return (
            <div className="modal" id="newsletter">
                <div className="modal-dialog modal-dialog-centered signin">
                    <div className="modal-content">

                        <div className="modal-header">

                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body bg-black text-center">
                            <h2>EMAIL SUBMITTED FOR NEWSLETTER, THANK YOU</h2>

                            <a href="/contact" className="watch-btn marg lg m-sm">CONTACT US</a>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default ThanksNewsletter