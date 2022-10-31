import React, { useState, useEffect } from 'react'
import "./style.css"
import { FORM_SUBMIT_EMAIL } from "../../utils/env"
const Subscribe = () => {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [successful, setSuccessful] = useState(false)
    const re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/
    const matchAnEmail = re.test(email)

    useEffect(() => {
        if (email && !matchAnEmail) {
            setError(true)
        }
        setTimeout(() => {
            setError(false)
            setSuccessful(false)
        }, 3000)
    }, [error, successful, email])
    return (
        <div className='subscribe'>
            <h4>35,000+ already joined</h4>
            <span>Stay up-to-date with what we’re doing</span>
            <form action={`https://formsubmit.co/${FORM_SUBMIT_EMAIL}`} method="POST" className="subscribe__form">
                <div className={`${error && 'error'} form-group`}>
                    <div className="input__wrapper">
                        <input name="email" onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email address' required />
                        {error && <img className='error-icon' src="/images/icon-error.svg" alt="" />}
                    </div>
                    {error && <div className="error_message">Whoops, make sure it's an email</div>}
                    {successful && <div className="success_message">Whoops, make sure it's an email</div>}
                </div>
                <input type="text" name="_honey" style={{ display: "none" }}></input>
                <input type="hidden" name="_subject" value="New Mail Subscription" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <button className={`${email && !matchAnEmail && 'disabled'}`} disabled={email && !matchAnEmail} type='submit'>Contact Us</button>
            </form>
        </div>
    )
}

export default Subscribe