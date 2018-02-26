import React, { Component } from 'react';
import client from '../../client'; // this is importing axios instance from client.js
import Button from '../button/button';

class Logout extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
            errors: [],
        };
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    async onSubmit(e) {
        let self = this;
        e.preventDefault();
        const { email, password } = this.state;
        try {
            let response = await client.post('/logout');
            if (response) {
                this.props.loggedOut();
            }
        }
        catch (error) {
            const errorRes = JSON.stringify(error.response.data);
            self.setState({ errors: errorRes });
        }
    }

    render() {
        return (
            <div className="logout">
                <form action="/" className="logout__form" onSubmit={this.onSubmit} >
                    <Button text="Logout" type="submit" />
                </form>
            </div>
        );
    }
}

export default Logout;
