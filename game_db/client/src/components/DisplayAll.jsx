import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DisplayAllGames = () => {
  const [ allGames, setAllGames ] = useState([])
  // const navigate = useNavigate()
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/allGames')
      .then((res) => {
        const gamesSortedByGenre = res.data.sort((genreA, genreB) => genreA.genre.localeCompare(genreB.genre)) //! Black Belt Feature
        setAllGames(gamesSortedByGenre)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // const deleteHandler = (id) => {
  //   axios.delete(`http://localhost:8000/api/deleteGame/${id}`)
  //     .then((res) => {
  //       console.log(res)
  //       navigate('/')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }
  const removeFromDom = (id) => {
    const updatedGameList = allGames.filter((game) => game._id !== id);
    setAllGames(updatedGameList);
  }

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/deleteGame/${id}`)
      .then((res) => {
        console.log(res);
        // setAllGames(allGames.filter((game) => game._id !== id)) Done as a seperate method above
        removeFromDom(id)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <h2 className='text-center p-3'>Games in Our Database:</h2>
      <div className='d-flex flex-wrap justify-content-between w-75 mx-auto'>
        {
          allGames.map((game) => (
            <div className='border border-2px-solid-white p-3 m-2 w-25 text-center' key={game._id}>
              <h3>{game.title}</h3>
              <h4>Original Platform: {game.platform}</h4>
              <h4>Release Year: {game.releaseYear}</h4>
              <div className='text-center'>
                <Link to={`/oneGame/${game._id}`} className='btn btn-light m-2' >Details</Link>
                <Link to={`/updateGame/${game._id}`} className='btn btn-info'>Edit</Link>
                <button onClick={() => deleteHandler(game._id)} className='btn btn-danger m-2'>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default DisplayAllGames