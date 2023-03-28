import React from 'react'
import './aboutusstyle.scss'

function AboutUs() {
  return (
    <div class="maindiv">
      <div class="section">
        <div class="container">
          <div class="content-section">
            <div class="title">
              <h1>About Bookworms</h1>
            </div>
            <div class="content">
              <h3>Welcome to Bookworm, the ultimate destination for book lovers! Our website is dedicated to providing a platform where customers can find the books they're looking for with ease.</h3>
              <p>

                At Bookworm, we believe that reading is not just a hobby, but a way of life. We understand the power of literature to inspire, educate, and entertain, and we're passionate about sharing that experience with others.</p>
              <div class="button">
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div class="image-section">
            <img src={require('./girlreading.jpg')} ></img>
            <p>Taken from UnSplash</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs