import React from 'react'
import Navbar from '../components/UniversalItems/Navbar';
import Header from '../Sections/Header';
import ContactsImage from '../components/ContactsPage/ContactsImage';
import ContactForm from '../components/ContactsPage/ContactForm';
import Footer from '../components/UniversalItems/Footer';

const ContactsView = () => {
  return (
    <>
    <Navbar />
    <Header title="Contacts"/>
    <ContactsImage />
    <ContactForm />
    <Footer />
    </>
  )
}

export default ContactsView