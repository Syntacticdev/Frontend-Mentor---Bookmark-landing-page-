import React, { useRef, useState, useEffect } from 'react'
import "./style.css"

const Subscribe = (e) => {
    const [error, setError] = useState(false)
    const emailRef = useRef(null)
    const handleFormSubmit = (e) => {
        // e.preventDefault()
        const re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/
        const matchAnEmail = re.test(emailRef.current.value)
        if (matchAnEmail) {
            alert("Subscription successfull")
        } else {
            setError(true)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 3000)
    })
    return (
        <div className='subscribe'>
            <h4>35,000+ already joined</h4>
            <span>Stay up-to-date with what we’re doing</span>
            <form action="https://formsubmit.co/ifeoluwacool@gmail.com" method="POST" onSubmit={handleFormSubmit} className="subscribe__form">
                <div className={`${error && 'error'} form-group`}>
                    <div className="input__wrapper">
                        <input name="email" ref={emailRef} type="email" placeholder='Enter your email address' required />
                        {error && <img className='error-icon' src="/images/icon-error.svg" alt="" />}
                    </div>
                    {error && <div className="error_message">Whoops, make sure it's an email</div>}
                </div>
                <button type='submit'>Contact Us</button>
            </form>
        </div>
    )
}

export default Subscribe