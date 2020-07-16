import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { StyledContact } from '../styles/StyledContact';
import Footer from './Footer'
import Resume from '../assets/Resume.pdf'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

library.add( fas)

export class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'gmail',
                'portfolio_contact_form',
                '.contact-form-class',
                'user_eoj2tqrTdCDL6t5OG3So1'

            )
            .then()
            .catch();
            this.setState({
            name: '',
            email: '',
            message: '',
        });
    };

    render () {
        return (
            <StyledContact>
                <div className='container'>
                    <h2>Contact Me</h2>
                    <form
                        onSubmit={this.handleSubmit.bind(this)}
                        className='contact-form-class'>

                         <div className='icons'>
               
                            <a href="mailto:robertdstepanov@gmail.com" target="_blank" rel="noopener noreferrer"><icon className="fas fa-envelope"></icon></a>
                            <a href="https://www.linkedin.com/in/robert-stepanov-7b7739aa/" target="_blank" rel="noopener noreferrer"><icon alt="linked in logo" className="fab fa-linkedin-in"></icon></a>
                            <a href="https://github.com/robertstepanov" target="_blank" rel="noopener noreferrer"><icon alt="github logo" className="fab fa-github"></icon></a>
                            <a href={Resume} download='Resume.pdf ' className='resume'><span className='tooltip'>Resume</span><icon alt="resume logo" className="fas fa-file-pdf"></icon></a>
                            
                           
                            
            </div>

                        <div>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Enter Name'
                                value={this.state.name}
                                onChange={this.handleChange.bind(this)}></input>
                        </div>
                       
                        <div>
                            <input
                                type='text'
                                id='email'
                                name='email'
                                placeholder='Enter Email'
                                value={this.state.email}
                            onChange={this.handleChange.bind(this)}></input>
                    </div>
                    <div>
                            <textarea
                                type='text'
                                multiline={true}
                                rows={6}
                                id='message'
                                name='message'
                                message='message'
                                placeholder='Enter Message'
                                value={this.state.message}
                                onChange={this.handleChange.bind(this)}></textarea>
                    </div>
                  
                    <input type='submit' className='submit-btn'></input>
                    </form>
                   
                        
                    
                </div>
                <Footer footerClass={''} />
            </StyledContact>
        )
    }

}

export default Contact;