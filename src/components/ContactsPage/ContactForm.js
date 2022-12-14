import React, {useState} from 'react'
const ContactForm = () => {
    
    
    const [contactForm, setContactForm] = useState({name: '', email: '', comments: ''})

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
    
        const validatecomments = (value) => {
             
            if(!value.comments)
            return "You must enter a comments"
           
    
            else if(value.comments.length < 5)
            return "Your comments must be atleast five characters long"
    
                    
            else
            return null;
        }
        
        const handleValidationData =(data) => {
            const  errors={}
    
            errors.name = validateName(data)
            errors.email = validateEmail(data)
            errors.comments = validatecomments(data)
       
            if(errors.name === null && errors.email === null && errors.comments === null) {
                let json = JSON.stringify(data)
                console.log(json)
        
                fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
                method: 'POST' ,
                headers: {
                    'Content-Type': 'application/json'
                },
                body:json,
            })
            .then(res => {
                console.log(res.status)
                console.log('submitted')
                if(res.status === 200) {
                    setCanSubmit(true)
                }
        
                else
                    setCanSubmit(false)
                    
                    
             })
        }}
               
               
               
          let inputName = 'validSuccessName'
            if(formErrors.name)
            inputName = 'validFailName'
    
        let inputEmail = 'validSuccessEmail'
            if(formErrors.email)
                inputEmail ='validFailEmail'
    
        let inputcomments = 'validSuccesscomments'
                if(formErrors.comments)
                    inputcomments ='validFailcomments'
    
    
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
    
        
        const handleKeyUpcomments = (e) => {
            setFormErrors({...formErrors, comments: validatecomments(contactForm)})
            
    
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

                (<div className="alert alert-success"  role="alert" >Thank you for your comments!</div>)

                :
                (      
                     
               <>
               
                <div><p className="contact">Come in Contact with Us</p></div>
        
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="inputs">
                            
                            <div className="inputBoxes">
                                <div className={inputName}>
                                    <input id="name" type="text" placeholder="Your name" value={contactForm.name} onChange={handleChange} onKeyUp={handleKeyUpName}></input>
                                    <div className="errorMessage">{formErrors.name}</div>
                                </div>
                            </div>

                            <div className="inputBoxes">
                                <div className={inputEmail}>
                                    <input id="email" type="email" placeholder="Your mail" value={contactForm.email} onChange={handleChange} onKeyUp={handleKeyUpEmail}></input>
                                    <div className="errorMessage">{formErrors.email}</div>
                                </div>
                            </div>
                        </div>
            
                            <div className={inputcomments}>
                                <textarea id="comments" placeholder="Comments" value={contactForm.comments} onChange={handleChange} onKeyUp={handleKeyUpcomments}></textarea>
                                <div className="errorMessage">{formErrors.comments}</div>
                            </div>
        
                        <button type="submit" className="theme-button"  >Post comments</button>
                    </form>
                    </>
               
               
               )

            }
                </div>
            </section>
            )
        }















export default ContactForm