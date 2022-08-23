import React, { Component } from 'react'
import './signIn.styles.scss'
import FormInput from '../formInput/form-input.componet'
import CustomButton from '../custom-button/custom-button.component'
import { signinWithGoogle} from '../../firebase/firebase-utils'

export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    HandleSubmit = (e) => {
        e.preventDefault()
        this.setState({ email: '', password: '' })
    }

    HandleChange = (e) => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }



    render() {
        return (
            <div className='sign-in'>
                <h2>I already Have an account</h2>
                <span>Sign in with tour email and password</span>

                <form onSubmit={this.HandleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        handleChange={this.HandleChange}
                        label='email'
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        handleChange={this.HandleChange}
                        label='password'
                    />
                    
                    <div className='buttons'>
                    <CustomButton type='submit'>
                        SignIn
                    </CustomButton>
                    <CustomButton onClick={signinWithGoogle} isGoogleSignIn>
                        Sign In with Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
