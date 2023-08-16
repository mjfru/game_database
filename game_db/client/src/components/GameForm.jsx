import { useState } from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'

const GameForm = () => {
  const navigate = useNavigate()

  const [game, setGame] = useState({
    title: '',
    genre: '',
    releaseYear: 1958,
    developer: '',
    platform: ''
  })

  const [errors, setErrors] = useState({})

  const handleGame = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value })
  }
  
  const submitHandler = (e) => {
  e.preventDefault();
  axios.post('http://localhost:8000/api/newGame', game)
  .then((res) => {
    console.log(res)
    navigate('/')
  })
  .catch((err) => {
    console.log(err)
    setErrors(err.response.data.errors)
  })
  }

  return (
    <div className='text-center'>
      <h2 className='m-2'>Add Your Favorite Game to our Database!</h2>
      <form onSubmit={submitHandler} className='m-2'>
        <div>
          <label htmlFor='title'>Game Title: </label><br/>
          <input type="text" value={game.title} onChange={handleGame} name='title' className='m-2'/>
        </div>
        {
          errors.title ?
          <p style={{color: 'red'}}>{errors.title.message}</p>:
          null
        }

        <div>
          <label htmlFor="genre">Genre: </label><br/>
          <input type="text" value={game.genre} onChange={handleGame} name='genre' className='m-2'/>
        </div>
        {
          errors.genre ?
          <p style={{color: 'red'}}>{errors.genre.message}</p>:
          null
        }

        <div>
          <label htmlFor="releaseYear">Release Year: </label><br/>
          <input type="number" value={game.releaseYear} onChange={handleGame} name='releaseYear' className='m-2'/>
        </div>
        {
          errors.releaseYear ?
          <p style={{color: 'red'}}>{errors.releaseYear.message}</p>:
          null
        }

        <div>
          <label htmlFor="developer">Developed By: </label><br/>
          <input type="text" value={game.developer} onChange={handleGame} name='developer' className='m-2'/>
        </div>
        {
          errors.developer ?
          <p style={{color: 'red'}}>{errors.developer.message}</p>:
          null
        }

        <div>
          <label htmlFor="platform">Original Platform(s): </label><br/>
          <input type="text" value={game.platform} onChange={handleGame} name='platform' className='m-2'/>
        </div>
        {
          errors.platform ?
          <p style={{color: 'red'}}>{errors.platform.message}</p>:
          null
        }

        <button className='btn btn-primary m-2'>Add Game</button>
      </form>
    </div>
  )
}

export default GameForm