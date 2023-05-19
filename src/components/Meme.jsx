import React, { useEffect, useState } from 'react'

function Meme() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: null
  })
  const [allMemes, setAllMemes] = useState({})

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data))
  }, [])

  function getMemeImage() {
    const memeArray = allMemes.data.memes
    const randomNumber = Math.floor(Math.random() * (memeArray.length))
    const url = memeArray[randomNumber].url

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))

  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevData => ({ ...prevData, [name]: value }))
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
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme