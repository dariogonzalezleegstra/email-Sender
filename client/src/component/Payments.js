import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';

import * as actions from '../actions';

class Payments extends Component {
    render() {
        //debugger;
        return (
            //By default StripeCheckout is in dollars, but we can change it we want
            //amount={500} is equal to give me U$D500 CENTS, (5 Dollars)

            //I HAVE TO put the stripeKey in .env.developtment
            //and use it from there but it does not work right now
            //in that way because i didn't config the heroku app, prod, dev, etc yet(por el proxy)
            <StripeCheckout
                name="Email Sender"
                description="$5 for 5 email credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={'pk_test_FFP8Ij5X903HJ0lNHsPMCz7H'}
            >
                <button className="btn deep-purple darken-1">
                    Buy credits
                </button>
            </StripeCheckout>
        )
    };
}

export default connect(null, actions)(Payments);