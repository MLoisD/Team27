import React from 'react'
import "./productsallstyle.scss"

function ProductsAll() {
    return (
        <div class="maindiv">
            <h1>Store Front</h1>
            <section class="search_bar">
                <form>
                    <i class="fa fa-search"></i>
                    <input type="text" name="" id="search_item" placeholder="search books" onkeyup="search()"></input>
                </form>

            </section>
            <section class="product_list">

                <div class="product_container" id="product_container">

                    <div class="card">
                        <div class="image"><img src="images\book2.jpg"></img></div>
                        <div class="title">It Ends With Us</div>
                        <div class="price"><h4>£5.99</h4></div>
                        <div class="author_name"><p>C.Hoover</p></div>
                        <div><a href="product.html"><button class="addTocart"><i class="fa fa-shopping-cart"></i>  Add to cart</button></a></div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default ProductsAll