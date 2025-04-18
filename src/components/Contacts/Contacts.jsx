import React, { useContext, useState } from 'react';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import '../Contacts/Contacts.css';
import { ThemeContext } from '../../context/ThemeContext';
import { contactsData } from '../../data/contactsData';
import { FaEnvelope, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { FaRegHeart } from "react-icons/fa";
import { BsArrow90DegUp } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa6";
import contactBlack from "../../assets/pics/contactsBlack.svg";
import { BsSend } from "react-icons/bs";




function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name || !email || !message) {
      setErrMsg('Please fill all the fields');
      return;
    }

    if (!isEmail(email)) {
      setErrMsg('Enter a valid email address');
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL_SHEET_API_URL}`, form);
      setSuccess(true);
      setErrMsg('');
      setForm({ name: '', email: '', message: '' });
    } catch(error){
      console.error(error);
      setErrMsg('Something went wrong. Try again later.');
      console.log(process.env.REACT_APP_SHEET_API_URL);
    }
  };

  return (
    <div className="ccontainer" id='contacts'>
      <h2 className="contact-heading">CONTACTS</h2>
      <div className="incontainer">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Let’s collaborate, or ask me anything!"
              rows={5}
            />

            <button className='bts' type="submit">Send Message <BsSend /></button>
            {errMsg && <p className="error-msg">{errMsg}</p>}
            {success && <p className="success-msg">Message sent successfully!</p>}
          </form>
        </div>

        <div className="detail-container">
          <div className="contact-link">
            <FaEnvelope className="icon" />
            <div>
              <a href="mailto:Khizarshah3986@gmail.com">Khizarshah3986@gmail.com</a>
              <p className="contact-desc">Interested in my work? Let’s connect over mail!</p>
            </div>
          </div>

          <div className="contact-link">
            <FaGithub className="icon" />
            <div>
              <a href="https://github.com/khizarshah01" target="_blank" rel="noopener noreferrer">
                @khizarshah01
              </a>
              <p className="contact-desc">Want to collaborate on a project? Check out my code on GitHub!</p>
            </div>
          </div>

          <div className="contact-link">
            <FaXTwitter className="icon" />
            <div>
              <a href="https://twitter.com/khizarshah_01" target="_blank" rel="noopener noreferrer">
                @khizarshah_01
              </a>
              <p className="contact-desc">I post daily tech tips & insights—follow me for cool stuff!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={contactBlack} alt="Contact illustration" className="contact-img" />
      </div>


      <div className="footer">
  <div >
    <a href="https://github.com/Khizarshah01/portfolios" target="_blank" rel="noopener noreferrer">
    <div className="source">
      <FaGithubAlt /> Source
    </div>
    </a>
  </div>
  
  <div className="author">
  Made with <span className="heart-icon"><FaRegHeart /></span> by Khizar Shah
</div>

  
  <div className="backtop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <BsArrow90DegUp /> Back to top
  </div>
</div>

    </div>
  );
}

export default Contacts;
