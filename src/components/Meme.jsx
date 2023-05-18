import React, { useState } from 'react'
import memesData from "../memesData"

function Meme() {

  // const [memeImage, setMemeImage] = useState(null)
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: null
  })

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevData => ({...prevData, [name]: value}))
  }
  // console.log(meme)
  
  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function getMemeImage() {
    const memeArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * (memeArray.length))
    const url = memeArray[randomNumber].url
    // console.log(url)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))

  }
  return (
    <main>
        <div className='form'>
            <input 
              className='form-input' 
              type='text' 
              placeholder='Top text'
              name='topText'
              onChange={handleChange}
              value={meme.topText}
            />
            <input 
              className='form-input' 
              type='text' 
              placeholder='Bottom text'
              name='bottomText'
              onChange={handleChange}
              value={meme.bottomText}
            />
            <button 
              className='form-btn'
              onClick={getMemeImage}
            >
              Get a new meme image 🖼
            </button>
        </div>
        {/* {meme.randomImage ? <img className='meme-image' src={meme.randomImage} alt='meme' /> : ""} */}
        <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme