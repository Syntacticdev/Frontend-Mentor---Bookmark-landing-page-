import React, { useRef, useState, useEffect } from 'react'
import "./style.css"

const Subscribe = (e) => {
    const [error, setError] = useState(false)
    const [successful, setSuccessful] = useState(false)
    const emailRef = useRef(null)
    const handleFormSubmit = async (e) => {
        // e.preventDefault()
        const re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/
        const matchAnEmail = re.test(emailRef.current.value)
        if (!matchAnEmail) {
            setError(true)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setError(false)
            setSuccessful(false)
        }, 3000)
    }, [error, successful])
    return (
        <div className='subscribe'>
            <h4>35,000+ already joined</h4>
            <span>Stay up-to-date with what we’re doing</span>
            <form action={`https://formsubmit.co/${process.env.FORM_SUBMIT_EMAIL}`} method="POST" onSubmit={handleFormSubmit} className="subscribe__form">
                <div className={`${error && 'error'} form-group`}>
                    <div className="input__wrapper">
                        <input name="email" ref={emailRef} type="email" placeholder='Enter your email address' required />
                        {error && <img className='error-icon' src="/images/icon-error.svg" alt="" />}
                    </div>
                    {error && <div className="error_message">Whoops, make sure it's an email</div>}
                    {successful && <div className="success_message">Whoops, make sure it's an email</div>}
                </div>
                <input type="text" name="_honey" style={{ display: "none" }}></input>
                <input type="hidden" name="_subject" value="New Mail Subscription" />
                <input type="hidden" name="_captcha" value="false" />
                <button type='submit'>Contact Us</button>
            </form>
        </div>
    )
}

export default Subscribe