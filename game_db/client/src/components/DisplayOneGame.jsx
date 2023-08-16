import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const DisplayOneGame = () => {
  const {id} = useParams();
  const navigate = useNavigate()
  console.log(id)
  const [ game, setGame ] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/oneGame/${id}`)
      .then((res) => {
        console.log(res.data)
        setGame(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/deleteGame/${id}`)
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='w-25 mx-auto text-center border mt-5'>
      {/* <h1 className='text-center'>Viewing:</h1> */}
      <h4 className='m-2 mb-3' style={{color: 'orange'}}>{game.title}</h4>
      <p>Genre: {game.genre}</p>
      <p>Release Year: {game.releaseYear}</p>
      <p>Developer: {game.developer}</p>
      <p>Original Platform(s): {game.platform}</p>
      <div className='text-center m-2'>
        <Link to={'/'} className='btn btn-info mx-2'>Home</Link>
        <button onClick={() => deleteHandler(game._id)} className='btn btn-danger'>Delete {game.title}</button>
      </div>
    </div>
  )
}

export default DisplayOneGame