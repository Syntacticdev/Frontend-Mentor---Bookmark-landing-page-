import { useState } from 'react'
import './App.css'
import Extension from './components/Extentions/Extension'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Header from './components/Header.js/Header'
import Subscribe from './components/Subscribe/Subscribe'
import Tab from './components/Tab/Tab'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <section className='one'>
          <div className='one_content_wrapper'>
            <h1>A Simple Bookmark Manager</h1>

            <p>A clean and simple interface to organize your favourite websites. Open a new
              browser tab and see your sites load instantly. Try it for free.</p>

            <div className="social">
              <a href="" className="chrome">Get it on Chrome</a>
              <a href="" className="firefox">Get it on Firefox</a>
            </div>

          </div>
          <div className='one__image__wrapper'>
            <img className='one__img' src="/images/illustration-hero.svg" alt="" />
          </div>
        </section>
        <Tab />
        <Extension />
        <Faq />
        <Subscribe />
        <Footer />
      </main>
    </div>
  )
}

export default App
