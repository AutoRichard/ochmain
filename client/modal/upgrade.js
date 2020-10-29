import React from 'react';
import { ChangeSubscription } from './../api/api-subscription'
import auth from './../auth/auth-helper';
import swal from 'sweetalert'





class Upgrade extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            plan_id: '',
            error: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.plan_id !== prevProps.plan_id) {
            this.setState({ plan_id: this.props.plan_id })
        }
    }

    setPlan = () => {
        if (this.state.plan_id != '') {
            if (auth.isAuthenticated()) {
                const jwt = auth.isAuthenticated()
                ChangeSubscription({ userId: jwt.user._id }, {
                    t: jwt.token
                }, this.state.plan_id).then((data) => {
                    if (data.error) {
                        console.log(data.error)
                        this.setState({ error: data.error })
                    } else {
                        swal('Subscription Change')
                        location.reload();
                    }
                })
            }
        }
    }



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
                                    <a href="#" className="outline-btn close" data-dismiss="modal">NO - TAKE ME BACK	</a>
                                    <a href="#" onClick={this.setPlan} className="cancel-small">YES - UPGRADE ME</a>
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