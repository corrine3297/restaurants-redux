import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function ViewRestaurant() {
  const { id } = useParams()
  const { allRestaurants, loading, error } = useSelector((state) => state.restaurantSlice)
  const [restaurant, setRestaurant] = useState({})
  const [showHours, setShowHours] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const handleCloseHoursModal = () => setShowHours(false);
  const handleShowHoursModal = () => setShowHours(true);
  const handleCloseReviewsModal = () => setShowReviews(false);
  const handleShowReviewsModal = () => setShowReviews(true);


  useEffect(() => {
    setRestaurant(allRestaurants.find(item => item.id == id))
  }, [])

  const { reviews } = restaurant
  const { operating_hours } = restaurant

  console.log(restaurant);
  return (
    <div>
      <Row>
        <Col className='my-5 ms-5' sm={12} md={4} lg={4} xl={4}>
          <img className='rounded p-2' height={'600px'} width={'450px'} src={restaurant?.photograph} alt="" />
        </Col>
        <Col className='my-5' sm={12} md={6} lg={6} xl={6}>
          <div>
            <h3>{restaurant?.name}</h3>
            <p className='fw-bold fs-6' style={{ color: 'white' }}>{restaurant?.neighborhood}</p>
            <p className='fw-bold fs-6 mt-4' style={{ color: 'white' }}>Cuisine: {restaurant?.cuisine_type}</p>
            <p className='fw-bold fs-6 mt-4' style={{ color: 'white' }}>Address: {restaurant?.address}</p>
          </div>
          <div className='d-flex flex-column mt-2'>
            <button onClick={handleShowHoursModal} className='btn btn-secondary p-2 w-50 my-2'>Operating hours</button>
            <button onClick={handleShowReviewsModal} className='btn btn-secondary p-2 w-50 my-2'>Click here to view reviews</button>

          </div>
          <Modal size='lg' show={showHours} onHide={handleCloseHoursModal}>
            <Modal.Header closeButton>
              <Modal.Title>Operating hours</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                {
                  operating_hours ? Object.entries(operating_hours).map(([key, value]) => (
                    <li className='m-3'>{key}: {value}</li>
                  )) : <p>
                    nothing to display
                  </p>
                }
              </ul>
            </Modal.Body>
          </Modal>

          <Modal size='lg' show={showReviews} onHide={handleCloseReviewsModal}>
            <Modal.Header closeButton>
              <Modal.Title>Reviews</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                {
                  reviews?.length > 0 ? reviews?.map((review) => (<li className='m-3'>
                    {review?.comments}
                  </li>))
                    : <p>
                      no reviews to display
                    </p>
                }
              </ul>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRestaurant
