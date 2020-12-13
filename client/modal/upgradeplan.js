import React from 'react';
import { ChangeSubscription, UserAndSubscription } from './../api/api-subscription'
import auth from './../auth/auth-helper';
import swal from 'sweetalert'





class UpgradePlan extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            plan_id: '',
            error: '',
            status: '',
            amount: '',
            renew: '',
            plan: '',
            plan_active: '',
            silver: this.props.silver,
            gold: this.props.gold,
            platinum: this.props.platinum,
            activePlan: '',
            yes: 'CHANGE PLAN',
            activeT: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.plan_id !== prevProps.plan_id) {
            this.setState({ plan_id: this.props.plan_id })

            if (this.state.activePlan != '') {
                if (this.props.silver == this.state.activePlan) {
                    if (this.props.plan_id == this.props.gold || this.props.plan_id == this.props.platinum) {
                        this.setState({
                            yes: "UPGRADE ME",
                            activeT: false
                        })
                    } else {
                        this.setState({
                            yes: "ALREADY ACTIVE",
                            activeT: true
                        })
                    }
                } else if (this.props.gold == this.state.activePlan) {
                    if (this.props.plan_id == this.props.platinum) {
                        this.setState({
                            yes: "UPGRADE",
                            activeT: false
                        })
                    } else if (this.props.plan_id == this.props.gold) {
                        this.setState({
                            yes: "ALREADY ACTIVE",
                            activeT: true
                        })
                    } else if (this.props.plan_id == this.props.silver) {
                        this.setState({
                            yes: "DOWNGRADE",
                            activeT: false
                        })
                    }
                } else if (this.props.platinum == this.state.activePlan) {
                    if (this.props.plan_id == this.props.platinum) {
                        this.setState({
                            yes: "ALREADY ACTIVE",
                            activeT: true
                        })
                    } else if (this.props.plan_id == this.props.gold || this.props.plan_id == this.props.silver) {
                        this.setState({
                            yes: "DOWNGRADE",
                            activeT: false
                        })
                    }
                }
            }

        }
    }

    componentDidMount = () => {
        this.userSubscription()


    }

    userSubscription = () => {

        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated()
            UserAndSubscription({ userId: jwt.user._id }, {
                t: jwt.token
            }).then((data) => {
                if (data.error) {
                    console.log(data.error)
                    //this.setState({ error: data.error })
                } else {

                    if (data.subscriptions == undefined || data.subscriptions == null) {
                        this.setState({ status: false, amount: 0, renew: '---', plan: 'NO', plan_active: false })
                    } else {
                        let __data = data.subscriptions.data[0]

                        if (data.subscriptions.data.length > 0) {
                            this.setState({ status: __data.plan.active, amount: __data.plan.amount, renew: new Date(__data.current_period_end * 1000).toUTCString(), plan: __data.plan.nickname, plan_active: true, activePlan: data.subscriptions.data[0].plan.id })
                        } else {
                            this.setState({ status: false, amount: 0, renew: '---', plan: 'NO', plan_active: true })
                        }

                    }
                }
            })
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
            <div className="modal" id="upgrade-boxes">
                <div className="modal-dialog modal-dialog-centered small-box x-l">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body bg-black  small-m">
                            <div className="adsf">
                                <b className="d-block text-center bold">ARE YOU SURE YOU WANT TO UPGRADE?</b>

                                <div className="btn-b">
                                    <a href="#" className="outline-btn close" data-dismiss="modal">NO - CANCEL</a>
                                    {this.state.activeT == true ? (<a href="javascript:void(0)" data-dismiss="modal" className="cancel-small close">{this.state.yes}</a>) : (<a href="javascript:void(0)" data-dismiss="modal" onClick={this.setPlan} className="cancel-small">{this.state.yes}</a>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UpgradePlan