import React from 'react'
import './contactusstyle.scss'

function ContactUs() {
    return (
        <div class="maindiv">
            <div class="section">
                <div class="container">
                    <div class="content-section">
                        <div class="title">
                            <h1>Contact Us Form</h1>
                        </div>

                        <form action="/action_page.php"></form>
                        <label for="fname">First name:</label><br></br>
                        <input type="text" id="fname" name="fname"></input><br></br>
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname"></input><br></br>
                        <label for="email">Email Address:</label><br></br>
                        <input type="text" id="email" name="email"></input><br></br>
                        <label for="phone">Phone Number:</label><br></br>
                        <input type="text" id="phone" name="phone"></input><br></br>

                        <p>Please choose your preferred method of contact:</p>
                        <form>
                            <input type="radio" id="email" name="fav-method" value="Email"></input>
                            <label for="email">Email</label><br></br>
                            <input type="radio" id="phone" name="fav_method" value="phone"></input>
                            <label for="phone">Phone</label><br></br>

                        </form>


                        <input type="submit" value="Submit"></input>

                    </div>
                    <div class="image-section">
                        <img src={require('./imagebooks.jpg')} ></img>
                        <p>Taken from UnSplash</p>
                        <br></br>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default ContactUs