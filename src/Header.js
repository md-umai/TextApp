import React from 'react';
import './index.css';

const Header = () => {
  return (
    <>
    <header>
        <section className='container main-hero-container '>
            <div className='row'>
                <div className='col-12 col-lg-6 Header-left-side d-flex justify-content-center flex-column align-item-start'>
                    <h1 className='display-2'>Online Payment Made Easy for you</h1>
                    <p className='main-hero-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    <h3>Get Early Access For you</h3>
                    <div className='input-group mt-3'>
                        <input type='text' className='rounded-pill w-75 me-3 p-2 form-control-text'></input>
                        <div className='input-group-text'>Get It Now</div>
                    </div>


                </div>
                <div className='col-12 col-lg-6 Header-right-side d-flex justify-content-center flex-column align-item-center main-herosection-images'>
                    <img src='./images/pexels-photo-840996.webp' alt='' className='img-fluid'/> 
                    {/* <img src='./images/pexels-photo-4145355.webp' alt='' className='img-fluid main-hero-2'/> */}
                    
                </div>



            </div>

        </section>
    </header>
    </>
  );
}

export default Header;