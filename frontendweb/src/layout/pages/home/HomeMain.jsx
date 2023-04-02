import React, { useState } from 'react';
import "./homepagestyle.scss"

function HomeMain() {
    return (
        <div className='maindiv'>
            <div className='secdivider'>
                <div class="image">
                    <img src="/images/img.4.jpg"></img>
                </div>

                <div class="para">
                    <h2>Who are BookWorms?</h2>
                    <span></span>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>


            <div class="buttons">
                        <h1>What are our aims?</h1>
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
                <br></br>
                    <div class="buttons">
                        <h1>Reviews from the local Community</h1>
                        <div class="Testimonials">
                            <img src="/images/rock.jpg" alt="Avatar"></img>
                            <p><span>Dwayne Johnson</span> CEO </p>
                            <p>BookWorms is my favourite place to buy books</p>
                        </div>
                        
                        <div class="Testimonials">
                            <img src="/images/rock.jpg" alt="Avatar"></img>
                            <p><span >The Rock</span> CEO</p>
                            <p>This a good place to get books</p>
                        </div>
                    </div>
                    <div class="buttons"></div>


                
                <div class="buttons">
                
                    </div>
                    <div class="buttons"></div>
                </div>
                
    )
}

export default HomeMain