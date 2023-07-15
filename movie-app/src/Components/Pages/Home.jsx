import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import './Home.css'
import Layout from '../Layout/Layout'

function Home() {
  const [movie, setmovie] = useState([])
  useEffect(() => {
    axios.get('http://www.omdbapi.com/?apikey=9bd2e45e&s=batman&type=movie').then((dt)=>{
      setmovie(dt.data.Search)
    })
  }, [])
  console.log(movie)
  return (
    <Layout>
    <div className='home'>
    <div className='card-div'>
    
    {movie.map((data)=>(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.Poster} />
      <Card.Body>
        <Card.Title>{data.Title}</Card.Title>
        <Card.Text>
         {data.Year} 
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
  </div>
 
    </div>
    </Layout>
  )
}

export default Home