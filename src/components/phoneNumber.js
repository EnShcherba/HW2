import React from 'react';

export class PhoneNumber extends React.Component {
    state = {
        phoneNumber: "",
        valid: true,
    };

    onChange = evt => {
        const valid = /^\+375((29)|(44)|(33)|(25))\d{7}$/.test(evt.target.value)
        this.setState({
            ...this.state, phoneNumber: evt.target.value, valid
        })
    }
    showRedBorder() {
        if (!this.state.valid) {
            return { borderColor: 'red' }
        }
    }
    render() {
        return (
            <input
                type="phone"
                className="form-control"
                placeholder="Phone number"
                maxLength="13"
                style={{ ...this.showRedBorder()}}
                value={this.state.phoneNumber}
                onChange={this.onChange}
            />
        )
    }
}

