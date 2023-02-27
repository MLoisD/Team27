import React from 'react'

const Contactus = () => {
    return (
        <div>
            <div class="section">
                <div class="container">
                    <div class="content-section">
                        <div class="title">
                            <h1>Contact Us Form</h1>
                        </div>
                        <div class="content">
                            <form action="/action_page.php"></form>
                            <label for="fname">First name:</label><br></br>
                            <input type="text" id="fname" name="fname"></input> <br></br>
                            <label for="lname">Last name:</label><br></br>
                            <input type="text" id="lname" name="lname"> </input> <br></br>
                            <label for="email">Email Address:</label><br></br>
                            <input type="text" id="email" name="email"></input> <br></br>
                            <label for="phone">Phone Number:</label><br></br>
                            <input type="text" id="phone" name="phone"></input> <br></br>

                            <p>Please choose your preferred method of contact:</p>
                            <form>
                                <input type="radio" id="email" name="fav-method" value="Email"></input>
                                <label for="email">Email</label><br></br>
                                <input type="radio" id="phone" name="fav_method" value="phone"></input>
                                <label for="phone">Phone</label><br></br>

                            </form>
                            <form>
                                <input type="submit" value="Submit"></input>
                            </form>

                        </div>
                        <div class="image-section">
                            <img src="img/img.3.jpg"></img>
                        </div>
                    </div>
                </div><footer style="background-color: #333; color: #fff; padding: 1em;">
                    <p>Copyright &copy; 2023</p>
                </footer>
            </div>
        </div>
    );
};

export default Contactus;