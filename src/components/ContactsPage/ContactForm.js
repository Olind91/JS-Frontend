import React, {useState} from 'react'
const ContactForm = () => {
    
    
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})

    const [formErrors, setFormErrors] = useState({})

    const [canSubmit, setCanSubmit] = useState(false)

    

   


         const validateName = (value) => {
        
            const regex_name = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    
                if(!value.name)
                return"You must enter a name"
        
    
                else if(value.name.length < 2)
                return"Your Name must be atleast 2 characters long"
            
    
                else if(!regex_name.test(value.name))
                return "Please use letters and ',.'-' these characters only "
    
            
                else
                return null;  
        }
    
        const validateEmail = (value) => {
                   
            const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            
            if(!value.email)
             return "You must enter an email"
         
            else if (!regex_email.test(value.email))
             return "You must enter a valid e-mail address (eg. detvarsvårtmedvalidering@snällahjälpmig.com)"
    
            else
                return null
            
            
        }
    
        const validateComment = (value) => {
             
            if(!value.comment)
            return "You must enter a comment"
           
    
            else if(value.comment.length < 5)
            return "Your comment must be atleast five characters long"
    
                    
            else
            return null;
        }
        
        const handleValidationData =(data) => {
            const  errors={}
    
            errors.name = validateName(data)
            errors.email = validateEmail(data)
            errors.comment = validateComment(data)
       
            if(errors.name === null && errors.email === null && errors.comment === null) {
                console.log('can submit')
                setCanSubmit(true)
            
            } else {
                console.log('can not submit')
                setCanSubmit(false)      
            }
       
               

           
    
                   }
    
        let inputName = 'validSuccessName'
            if(formErrors.name)
            inputName = 'validFailName'
    
        let inputEmail = 'validSuccessEmail'
            if(formErrors.email)
                inputEmail ='validFailEmail'
    
        let inputComment = 'validSuccessComment'
                if(formErrors.comment)
                    inputComment ='validFailComment'
    
    
        const handleChange = (e) => {
            e.preventDefault()
            const {id, value} = e.target
                setContactForm({...contactForm, [id]: value})
        }
    
       
        const handleKeyUpName = (e) => {
            setFormErrors({...formErrors, name: validateName(contactForm)})
           
        }
    
        
        const handleKeyUpEmail = (e) => {
            setFormErrors({...formErrors, email: validateEmail(contactForm)})
            
        }
    
        
        const handleKeyUpComment = (e) => {
            setFormErrors({...formErrors, comment: validateComment(contactForm)})
            
    
        }
        const handleSubmit= (e) => {
            e.preventDefault()
            handleValidationData(contactForm)
            
         }




         return (
    
            <section className="contact-form">
                <div className="container">
                
                {
                    canSubmit ?

                (<div>Thank you!</div>)

                :
                (      
                     
               <>
               
                <div><p className="contact">Come in Contact with Us</p></div>
        
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="inputs border">
                            
                            <div className={inputName}>
                                <input id="name" type="text" placeholder="Your name" value={contactForm.name} onChange={handleChange} onKeyUp={handleKeyUpName}></input>
                                <div className="errorMessage">{formErrors.name}</div>
                            </div>
        
                            <div className={inputEmail}>
                                <input id="email" type="email" placeholder="Your mail" value={contactForm.email} onChange={handleChange} onKeyUp={handleKeyUpEmail}></input>
                                <div className="errorMessage">{formErrors.email}</div>
                            </div>
                        </div>
        
                        <div className={inputComment}>
                            <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange} onKeyUp={handleKeyUpComment}></textarea>
                            <div className="errorMessage">{formErrors.comment}</div>
                        </div>
        
                        <button type="submit" className="theme-button"  >Post Comments</button>
                    </form>
                    </>
               
               
               )

            }
                </div>
            </section>
            )
        }















export default ContactForm