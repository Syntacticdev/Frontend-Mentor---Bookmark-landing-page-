import React, { useState, useEffect } from 'react'
import './style.css'
const Tab = () => {
    const features = [
        {
            title: "Bookmark in one click",
            content: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
            action_text: "More Info",
            image: "/images/illustration-features-tab-1.svg",
            label: "Simple Bookmarking"
        },
        {
            title: "Intelligent search",
            content: " Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
            action_text: "More Info",
            image: "/images/illustration-features-tab-2.svg",
            label: "Speedy Searching"
        },
        {
            title: "Share your bookmarks",
            content: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
            action_text: "More Info",
            image: "/images/illustration-features-tab-3.svg",
            label: "Easy Sharing"
        },
    ]
    const [currentTab, setCurrentTab] = useState(0)
    const [currentTitle, setCurrentTitle] = useState(features[currentTab].title)
    const [currentContent, setCurrentContent] = useState(features[currentTab].content)
    const [currentActionText, setCurrentActionText] = useState(features[currentTab].action_text)
    const [currentImageLink, setCurrentImageLink] = useState(features[currentTab].image)

    useEffect(() => {
        setCurrentTitle(features[currentTab].title)
        setCurrentContent(features[currentTab].content)
        setCurrentActionText(features[currentTab].action_text)
        setCurrentImageLink(features[currentTab].image)
    }, [currentTab])

    const handleChangeTab = (tab) => {
        setCurrentTab(tab)
    }

    return (
        <div>
            <div className='features'>
                <h1> Features</h1>
                <p>
                    Our aim is to make it quick and easy for you to access your favourite websites.
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
            <div className="tab__head">
                {features.map(({ label }, i) => (
                    <button key={i} className={`${currentTab == i && "activetab"}`} onClick={() => handleChangeTab(i)}>{label}</button>
                ))}
            </div>
            <div className="tab__content">
                <div className='img__wrapper'>
                    <img src={`${currentImageLink}`} alt="" />
                </div>
                <div className="tab__details">
                    <h1>{currentTitle}</h1>
                    <p>{currentContent}</p>
                    <button className='more--info'>{currentActionText}</button>
                </div>
            </div>
        </div >
    )
}

export default Tab