import React from 'react'
import "./homepagestyle.scss"

function HomeMain() {
    return (
        <div className='maindiv'>
            <div className='secdivider'>
                <div class="image">
                    <img src="/src/main/resources/static/images/pics/English_Harry_Potter_3_Epub_9781781100233.jpg"></img>
                </div>

                <div class="para">
                    <h2>Who are BookWorms?</h2>
                    <span></span>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className='secdivider'>
                <div class="container">
                    <h2>Events at BookWorms</h2>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">

                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>


                        <div class="carousel-inner">
                            <div class="item active">
                                <img src="./HomepageC1.jpg" alt="Event 3" ></img>
                            </div>

                            <div class="item">
                                <img src="./HomepageC2.jpg" alt="Event 1" ></img>
                            </div>

                            <div class="item">
                                <img src="./HomepageC3.jpg" alt="Event 2" ></img>
                            </div>
                        </div>


                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>


            <div class="buttons">
                <div class="row">
                    <h1>Our business aims</h1>
                </div>
                <div class="row">

                    <div class="column">
                        <div class="card">
                            <div class="icon">
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <h3>Community</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                                asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
                                commodi.
                            </p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <div class="icon">
                                <i class="fa-solid fa-users"></i>
                            </div>
                            <h3>Family friendly</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                                asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
                                commodi.
                            </p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <div class="icon">
                                <i class="fa-solid fa-pen-fancy"></i>
                            </div>
                            <h3>High quality products</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                                asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
                                commodi.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="buttons">

                    <div class="buttons">
                        <h1>Reviews from the local Community</h1>
                        <div class="Testimonials">
                            <img src="./HomepageTheWill.jpg" alt="Avatar"></img>
                            <p><span>Chris Rock</span> CEO </p>
                            <p>BookWorms is my favourite place to buy books</p>
                        </div>

                        <div class="Testimonials">
                            <img src="./HomepageTheRock.jpg" alt="Avatar"></img>
                            <p><span >The Rock</span> CEO</p>
                            <p>This a good place to get books</p>
                        </div>
                    </div>
                    <div class="buttons"></div>

                </div>
            </div>
        </div>
    )
}

export default HomeMain