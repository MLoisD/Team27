import React from 'react'

export default function Basket() {
  return (
    <div>Basket

      <div class="container">
        <a href="Payment.html" class="btn" id="next"> next</a>
        <div class="progress-container">
          <div class="progress" id="progress"></div>
          <div class="circle active">Cart</div>
          <div class="circle">Payment</div>
          <div class="circle">Review</div>
        </div>
      </div>

    </div>
  )
}

