import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function RestCard({restaurant}) {
  console.log(restaurant);
  return (
    <div>
      <Link to={`/view/${restaurant?.id}`}>
        <Card>
        <Card.Img style={{height:'250px'}} className='rounded p-2' variant="top" src={restaurant?.photograph} />
        <Card.Body>
          <Card.Title style={{color:'white'}}>{restaurant?.name}</Card.Title>
          <Card.Text style={{color:'white'}}>
            <p>Cuisine : {restaurant?.cuisine_type}</p>
            <p>{restaurant?.neighborhood}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </div>
  )
}

export default RestCard
