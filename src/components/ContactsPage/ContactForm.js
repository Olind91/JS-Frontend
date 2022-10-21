import React from 'react'

const ContactForm = () => {
  return (
    <section className="contact-form">
        <div className="container">
            <div><p className="contact">Come in Contact with Us</p></div>

                <form onsubmit= "onSubmit(event)" novalidate>
                    <div className="inputs">
                        <div className="names nameMail">
                            <label id="name-label" for="name"></label>
                            <input id="name" name="text" onkeyup="validate(event)" placeholder="Your name" required data-required-min="2"></input>
                            <div id="name-error" className="text-danger"></div>
                        </div>

                        <div className="mail nameMail">
                            <label id="email-label" for="email"></label>
                            <input id="email" type="email" onkeyup="validate(event)" placeholder="Your mail" required></input>
                            <div id="email-error" className="text-danger"></div>
                        </div>
                    </div>
                </form>
                
            
            <textarea id="write" name="write" placeholder="Comments" ></textarea>

            <a className="theme-button" href="#">Post Comments</a>

            
        </div>
    </section>
  )
}

export default ContactForm