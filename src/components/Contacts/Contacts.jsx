import React, { useContext, useState } from 'react';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import '../Contacts/Contacts.css'
import { ThemeContext } from '../../context/ThemeContext';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    console.log('success');
                    setSuccess(true);
                    setErrMsg('');

                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div
            className='contacts'
        >
        Contact page
        </div>
    );
}

export default Contacts;