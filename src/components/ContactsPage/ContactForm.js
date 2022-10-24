import React, {useState} from 'react'


const ContactForm = () => {

    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})

    const [formErrors, setFormErrors] = useState({})

    const [canSubmit, setCanSubmit] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!values.name)
            errors.name = "You must enter a name"
            if(values.name == "Hans") //Hehehehehe
                errors.name ="You must enter a valid name"

        if(!values.email)
            errors.email = "You must enter an e-mail address"
        else if (!regex_email.test(values.email))
            errors.email = "You must enter a valid e-mail address (eg. ooga@hotmail.com"

        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(values.comment.length < 5)
            errors.comment = "Your comment must be at least 5 characters"

        
        if(Object.keys(errors).length === 0)
            setCanSubmit(true)
        else
            setCanSubmit(false)

        
        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }
  
  

    return (
    
    <section className="contact-form">
        <div className="container">
            {
            canSubmit ?
            
            (<div className="d-flex">
                <div>Thank you for your feedback! We probably wont be in touch since we have a lot of stuff to do.</div>
            </div>)
            :
            (
            <>
                
                <div><p className="contact">Come in Contact with Us</p></div>

                    <form onSubmit = {handleSubmit} noValidate>
                        <div className="inputs">
                            
                            <div className="names nameMail">
                                <input id="name" type="text" placeholder="Your name" value={contactForm.name} onChange={handleChange}></input>
                                <div className="errorMessage">{formErrors.name}</div>
                            </div>

                            <div className="mail nameMail">
                                <input id="email" type="email" placeholder="Your mail" value={contactForm.email} onChange={handleChange}></input>
                                <div className="errorMessage">{formErrors.email}</div>
                            </div>
                        </div>

                        <div className="write">
                            <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
                            <div className="errorMessage">{formErrors.comment}</div>
                        </div>

                        <button type="submit" className="theme-button">Post Comments</button>
                    </form>
            </>
                )
            }
        </div>
    </section>
  )
}


export default ContactForm