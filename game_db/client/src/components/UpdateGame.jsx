import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditGame = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [ game, setGame ] = useState({
    title: '',
    genre: '',
    releaseYear: 1958,
    developer: '',
    platform: ''
  })
  const [errors, setErrors] = useState({})
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/oneGame/${id}`)
      .then((res) => {
        setGame(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  const handleGame = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value })
  }


  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/updateGame/${id}`, game)
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
      <h2 className='m-2'>Update {game.title}</h2>
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

        <button className='btn btn-primary m-2'>Update Game</button>
      </form>
    </div>
  )
}
export default EditGame