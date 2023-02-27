import React from 'react'

const Aboutus = () => {
    return (
        <div>
            <div class="section">
                <div class="container">
                    <div class="content-section">
                        <div class="title">
                            <h1>About Us</h1>
                        </div>
                        <div class="content">
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus vitae non sint,
                                magni harum nobis atque exercitationem quisquam animi explicabo, accusantium facere maiores odit
                                pariatur provident voluptatem alias voluptate?</p>
                            <div class="button">
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div class="social">
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                            <a href=""><i class="fab fa-instagram"></i></a>
                            <a href=""><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    <div class="image-section">
                        <img src="img/img.3.jpg"></img>
                    </div>
                </div>
            </div>
            <footer style="background-color: #333; color: #fff; padding: 1em;">
                <p>Copyright &copy; 2023</p>
            </footer>
        </div >
    );
};

export default Aboutus;