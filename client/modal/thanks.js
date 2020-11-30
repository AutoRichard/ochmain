import React from 'react';





class Thanks extends React.Component {

    render() {
        return (
            <div className="modal" id="thankyou">
                <div className="modal-dialog modal-dialog-centered signin">
                    <div className="modal-content">

                        <div className="modal-header">

                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body bg-black text-center">
                            <h2>THANK YOU FOR SUBMITTING YOUR INFORMATION! </h2>
                            <p>We will review your applicaton within 48 hours<br />
						and contact you using the email address you provided.</p>




                            <p>If you have any questions or wish to provide us with any<br />


						additional material, songs or videos, click the link below.</p>

                            <a href="/contact" className="watch-btn marg lg m-sm">CONTACT US</a>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default Thanks