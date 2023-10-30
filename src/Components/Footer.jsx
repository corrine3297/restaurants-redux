import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column mt-2 shadow w-100 bg-secondary'>
            <div className='footer-content justify-content-evenly w-100 mt-5' style={{ display: 'flex' }}>
                <div className='website d-flex flex-column' style={{paddingLeft:'50px'}}>
                    <h4 style={{ fontWeight: 'bold', color:'black' }}>{' '}Resto Cafe</h4>
                    <div className='content' style={{color:'white'}}>
                        Designed and built with all the love in the world by the Resto Cafe team with the help of our contributors.</div>
                    <div style={{color:'white'}}>Code licensed Media, docs CC BY 3.0.</div>
                    <div style={{color:'white'}}>Currently v1.0.0.</div>
                </div>
                <div className='links d-flex flex-column '  style={{paddingLeft:'50px'}}>
                    <h4 style={{ fontWeight: 'bold', color:'black' }}>Links</h4>
                    <div className='d-flex flex-column'>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                       
                    </div>
                </div>
                <div className='guides d-flex flex-column'  style={{paddingLeft:'50px'}}>
                    <h4 style={{ fontWeight: 'bold', color:'black' }}>Guides</h4>
                    <div className='d-flex flex-column'>
                        <Link to={'https://react.dev/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
                        <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
                        <Link to={'https://reactrouter.com/en/main'} style={{ textDecoration: 'none', color: 'white' }}>Routing</Link>

                    </div>

                </div>
                <div className='contact d-flex flex-column ' style={{paddingLeft:'50px' ,paddingRight:'50px'}}>
                    <h4 style={{ fontWeight: 'bold', color:'black' }}>Contact Us</h4>
                    <div className='d-flex'>
                        <input type="text" className='rounded'/>
                        <button type="button" class="btn btn-primary rounded ms-2">Search</button>
                    </div>
                    <div className='mt-3'>
                        <Link to={'/'} className='mx-2' style={{ textDecoration: 'none', color:'white' }}><i class="fa-brands fa-linkedin" style={{ color: 'white' }}></i></Link>
                        <Link to={'/'} className='mx-3' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter" style={{ textDecoration: 'none', color: 'white' }}></i></Link>
                        <Link to={'/'} className='mx-3' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook-f" style={{ textDecoration: 'none', color: 'white' }}></i></Link>
                        <Link to={'/'} className='mx-2' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-regular fa-envelope" style={{ textDecoration: 'none', color: 'white' }}></i></Link>

                    </div>
                </div>

            </div>
            <p className='mt-5'>Copyright © 2023 Resto Cafe. Built with React.</p>
        </div>
  )
}

export default Footer
