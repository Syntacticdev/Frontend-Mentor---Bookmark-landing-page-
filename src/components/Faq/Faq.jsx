import React, { useState, useRef } from 'react'
import "./style.css"
const Faq = () => {
    const [showAnswer, setShowAnswer] = useState(false)
    const faqs = [
        {
            question: "What is Bookmark?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        },
        {
            question: "How can I request a new browser?",
            answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
        },
        {
            question: "Is there a mobile app?",
            answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
        },
        {
            question: "What about other Chromium browsers?",
            answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
        },

    ]
    const crref = useRef(null)

    // console.log(crref.current)

    const toggleAnswer = (e) => {
        setShowAnswer(!showAnswer)
        e.target.classList.toggle("show")
    }

    return (
        <div className='faq'>
            <div className="faq__head">
                <h3>Frequently Asked Questions</h3>
                <p>Here are some of our FAQs. If you have any other questions you’d like
                    answered please feel free to email us.</p>
            </div>

            <div className="questions_wrapper">
                {faqs.map(({ question, answer }, i) => (
                    <div key={i} className="faq__card">
                        <div onClick={(e) => toggleAnswer(e)} className="faq__card_head">
                            <span className="question">{question}</span>
                            <button className='faq_action--btn' onClick={(e) => toggleAnswer(e)}><img src="/images/icon-arrow.svg" alt="" /></button>
                        </div>
                        <div className="answer">{answer}</div>
                    </div>
                ))}
                <div className="action">
                    <button className='more--btn'>More Info</button>
                </div>
            </div>
        </div>
    )
}

export default Faq