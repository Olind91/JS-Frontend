import React from 'react'
import Navbar from '../components/UniversalItems/Navbar';
import Header from '../components/ContactsPage/Header';
import ContactsImage from '../components/ContactsPage/ContactsImage';
import ContactForm from '../components/ContactsPage/ContactForm';

const ContactsView = () => {
  return (
    <>
    <Navbar />
    <Header />
    <ContactsImage />
    <ContactForm />
    </>
  )
}

export default ContactsView