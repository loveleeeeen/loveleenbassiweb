import React from 'react';

import './ContactPage.css';
// import ContactForm from './ContactComponents/ContactForm';
import UnderConstruction from './ContactComponents/UnderConstruction'

function ContactPage() {
    return(
        <div className='Contact-App'>
            <div className='Contact-Container'>
                <div className='Contact-Align'>
                    <UnderConstruction />
                    {/* <table className='Project-Table'>
                        <p className="Project-Title">Contact</p>
                        <tbody>
                            <tr>
                                <td className='contact-left'>
                                    Looking forward to hearing from you <br/>
                                    Phone<br />
                                    510-701-7248<br/>
                                    Email<br />
                                    loveleen6assi@gmail.com
                                </td>
                                <td className='contact-right'>
                                    <ContactForm />
                                </td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
    );
}

export default ContactPage;