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
            this.setState({ amount: this.props.credit })
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


    render() {
        return (
            <form>
                <CardSection />
                <a onClick={this.handleSubmit} href="#" className="book-now-green">
                    Buy Now
                </a>
                <p className="f-small">BY CLICKING “BUY NOW” I AGREE TO THE TERMS OF SERVICE & UNDERSTAND THAT MY CREDIT CARD WILL BE CHARGED THE AMOUNT ABOVE</p>
                    
            </form>
        );
    }
}


export default injectStripe(CheckoutForm)