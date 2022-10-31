import React from 'react'
import "./style.css"

const Extension = () => {
    const exts = [
        {
            label: "Add to Chrome",
            version: "Minimum version 62",
            action: "Add & Install Extension",
            logo: "/images/logo-chrome.svg"
        },
        {
            label: "Add to Firefox",
            version: "Minimum version 55",
            action: "Add & Install Extension",
            logo: "/images/logo-firefox.svg"
        },
        {
            label: "Add to Opera",
            version: "Minimum version 46",
            action: "Add & Install Extension",
            logo: "/images/logo-opera.svg"
        },
    ]
    return (
        <div className='container'>
            <div className='extension__head'>
                <h1> Download the extension</h1>
                <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve
                    got a favourite you’d like us to prioritize.</p>
            </div>

            <div className='extensions'>
                {exts.map((ext, i) => (
                    <div key={i} className="extension__card">
                        <div className="extension_details">
                            <img className='extension__logo' src={`${ext.logo}`} alt={`${ext.logo}`} />
                            <h4 className='extension__label'>{ext.label}</h4>
                            <span className='extension__version'>{ext.version}</span>
                        </div>
                        <img className='card_dot' src="/images/bg-dots.svg" alt="" />
                        <div className='extension__action'>
                            <button className='extension__download--btn'>{ext.action}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Extension