import React from 'react';
import { injectStripe } from 'react-stripe-elements'
import { CardElement } from 'react-stripe-elements';
import { payout } from './../api/api-user';
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


class CheckoutForm extends React.Component {

    state = {
        error: '',
        credit: 100,
        amount: 0
    }

    componentDidMount() {
        this.setState({ amount: this.props.credit })
    }


    componentDidUpdate(prevProps) {
        if (this.props.credit !== prevProps.credit) {
            this.setState({ amount: Number(this.props.credit) })
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
                    payout({ userId: jwt.user._id }, {
                        t: jwt.token
                    }, this.state, paymentMethod.id).then((data) => {
                        if (data.error) {
                            this.setState({ error: data.error })
                        } else {
                            console.log(data)
                            this.refresh()
                        }
                    })
                }
            });
    };

    refresh = () => {
        this.setState({ amount: 1 })

        this.props._refresh()
    }

    __minus = () => {
        this.props._minus()
    }

    __plus = () => {
        this.props._plus()
    }

    onChange = (event) => {

        if (event.target.value == 0) {
            event.target.value = 1
        }
        this.setState({
            [event.target.name]: event.target.value
        });

        this.props._onChange(event.target.value)
    }


    render() {
        return (

            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="qty-new clearfix">
                            <label>Quantity</label>
                            <h5 className="creditz">{this.state.amount} CREDITS</h5>
                            <span onClick={this.__minus} className="minus bg-dark">-</span>
                            <input type="number" onChange={this.onChange} className="count" name="amount" value={this.state.amount} />
                            <span onClick={this.__plus} className="plus bg-dark">+</span>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <label>CREDIT CARD</label>
                        <form>
                            <CardSection />
                        </form>
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-5">

                        <h5 className="m-b">CARD SELECTION</h5>
                        {/*<label className="control-r control-radio">
                            <ul className="card-detail new clearfix">
                                <li><img src="/client/assets/images/card-one.png" className="card-im" /></li>
                                <li><p>VISA - **** 3432</p>


                                    <p>EXP. DATE: 12/23</p>


                                    <p>PRIMARY</p></li>
                                <li><a href="#"><img src="/client/assets/images/del.png" className="del-icon new" /></a></li>

                            </ul>
                            <input type="radio" name="radio" checked="checked" />
                            <div className="control_indicator-r"></div>
                        </label>


                        <label className="control-r control-radio">
                            <ul className="card-detail new clearfix">
                                <li><img src="/client/assets/images/card-two.png" className="card-im" /></li>
                                <li><p>MASTERCARD - **** 4135</p>


                                    <p>EXP. DATE: 12/23</p>


                                    <p>MAKE PRIMARY</p></li>
                                <li><a href="#"><img src="/client/assets/images/del.png" className="del-icon new" /></a></li>

                            </ul>
                            <input type="radio" name="radio" checked="checked" />
                            <div className="control_indicator-r"></div>
                        </label>

        */}

                        <a href="#" className="grey-link"><img src="/client/assets/images/gray-plus.png" className="grey-icon" /> ADD CARD</a>

                    </div>

                    <div className="col-md-5 text-center">
                        <h5 className="m-b">CREDITS IN CART</h5>
                        <div className="input-area ft-sz">
                            <input type="text" value={this.state.amount} />
                            <span className="total-f">(${this.state.amount} TOTAL)</span>
                        </div>
                        <a onClick={this.handleSubmit} href="#" className="book-now-green">
                            Buy Now
                        </a>
                        <p className="f-small">BY CLICKING “BUY NOW” I AGREE TO THE TERMS OF SERVICE & UNDERSTAND THAT MY CREDIT CARD WILL BE CHARGED THE AMOUNT ABOVE</p>


                    </div>

                    <div className="col-md-2 text-center">
                    </div>

                </div>


            </div>

        );
    }
}


export default injectStripe(CheckoutForm)