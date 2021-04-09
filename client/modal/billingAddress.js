import React from 'react';
import { injectStripe } from 'react-stripe-elements'
import { CardElement } from 'react-stripe-elements';
import { subscription, Payment } from './../api/api-subscription';
import auth from './../auth/auth-helper';




class CardSection extends React.Component {
    render() {

        const CARD_ELEMENT_OPTIONS = {
            iconStyle: 'solid',
            style: {
                base: {
                    iconColor: '#c4f0ff',
                    color: '#fff',
                    fontWeight: 500,
                    fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                    fontSize: '16px',
                    fontSmoothing: 'antialiased',
                    ':-webkit-autofill': { color: '#fce883' },
                    '::placeholder': { color: '#87bbfd' },
                },
                invalid: {
                    iconColor: '#ffc7ee',
                    color: '#ffc7ee',
                },
            },
        };
        return (
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_ELEMENT_OPTIONS} />
                </div>
            </fieldset>
        );
    }
}


class BillingAddress extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            credit_card: '-',
            card_type: '--',
            last_4: '--',
            exp_date: '--',
        }
    }


    componentDidMount() {
        if (auth.isAuthenticated()) {
            const jwt = auth.isAuthenticated()
            Payment({ userId: jwt.user._id }, {
                t: jwt.token
            }).then((data) => {
                if (data.error) {
                    console.log(data.error)
                    //this.setState({ error: data.error })
                } else {

                    if (data.data.length > 0) {
                        let card = data.data[0]
                        let year = card.card.exp_year
                        let _year = year.toString().substr(2, 3)
                        let exp = card.card.exp_month + '/' + _year;



                        this.setState({
                            card_type: card.card.brand,
                            last_4: card.card.last4,
                            exp_date: exp
                        })
                    }

                }
            })
        }
    }


    handleSubmit = (ev) => {

        ev.preventDefault();
        const cardElement = this.props.elements.getElement('card');

        // From here we can call createPaymentMethod to create a PaymentMethod
        // See our createPaymentMethod documentation for more:
        // https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method
        this.props.stripe
            .createPaymentMethod({
                type: 'card',
                card: cardElement,
            })
            .then(({ paymentMethod }) => {
                if (auth.isAuthenticated()) {
                    const jwt = auth.isAuthenticated()
                    subscription({ userId: jwt.user._id }, {
                        t: jwt.token
                    }, paymentMethod.id).then((data) => {
                        if (data.error) {
                            console.log(data.error)
                            //this.setState({ error: data.error })
                        } else {
                            console.log(data)
                            swal("Billing Credential Save...")
                            //location.reload()

                            this.props.subscriptions()
                        }
                    })
                }
            });
    };


    render() {
        return (

            <div>
                <div className="row">
                    
                    <div className="col-md-6">
                        <label>CREDIT CARD</label>
                        <form>
                            <CardSection />
                        </form>
                        <p>{/*NB: Add credit card details to activate subscription*/}</p>
                    </div>

                    <div className="col-md-6">
                        {/*<h5>CARDS ON FILE</h5>
                        <ul className="card-detail clearfix">
                            {this.state.card_type == '' ? '' : (<li><img src="/client/assets/images/card-one.png" className="card-im" /></li>)}
                            <li style={{ width: '40% !important' }}><p>{this.state.card_type.toLocaleUpperCase()} - **** {this.state.last_4}</p>


                                <p>EXP. DATE : {this.state.exp_date}</p>
                                <p>PRIMARY</p></li>
                            <li><a href="#"><img src="/client/assets/images/del.png" className="del-icon" /></a></li>

                        </ul>
                        {/*<ul className="card-detail clearfix">
                            <li><img src="/client/assets/images/card-two.png" className="card-im" /></li>
                            <li><p>MASTERCARD - **** 4135</p>


                                <p>EXP. DATE: 12/23</p>


                                <p>MAKE PRIMARY</p></li>
                            <li><a href="#"><img src="/client/assets/images/del.png" className="del-icon" /></a></li>

                        </ul>
                        <a href="#" className="grey-link"><img src="/client/assets/images/gray-plus.png" className="grey-icon" /> ADD MORE</a>*/}
                    </div>
                </div>
                <div className="text-center">
                    <a href="#" className="white-btn">CANCEL</a>
                    <a href="#" onClick={this.handleSubmit} className="white-btn red">SAVE CHANGES</a>
                </div>
            </div>

        );
    }
}


export default injectStripe(BillingAddress)