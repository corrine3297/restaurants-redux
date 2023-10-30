import React, { useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import RestCard from '../Components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurants } from '../Redux/restaurantSlice'

function Home() {
    const {loading,allRestaurants,error} = useSelector((state)=>state.restaurantSlice)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchRestaurants())
    },[])
  return (
    <>
    <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
        {
            loading && <div>
           <Spinner animation="border" variant="info"/>
                <span className="ms-2">Loading...</span>
          
            </div>
        }
    </div>

    <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
        {
            !loading && error? <div>   
                <span className="fw-bolder text-danger">{error}</span>
             </div>:null
        }
    </div>
        <Row className='mt-5'>
            {
                !loading && allRestaurants?.length>0?allRestaurants.map(restaurant=>(
                    <Col className='py-3 px-5' sm={12} md={6} lg={4} xl={3}>
                <RestCard restaurant={restaurant}/>
            </Col>
                ))
                :<p className='text-danger mx-5'>No Restaurants to display</p>
            
            }
        </Row>
    </>
  )
}

export default Home
