"use client"
import React from "react"

export const TopHeader: React.FC = () => {
  return (
    <div className="w-full overflow-hidden text-[#ffb703] bg-[#023047f8] ">
      <div className="revolving-text-wrapper">
        <div className="revolving-text">
          <span>Free Shipping Above 5000</span>
          <span>Pure Copper Utensils</span>
          <span>Additional Promotion Here</span>
          <span>New Arrivals: Check Out the Latest Collection</span>
          <span>Limited Time Offer: 10% Off on All Orders</span>
          <span>Subscribe Now and Get Exclusive Deals</span>
          {/* Duplicate the text content to ensure seamless scrolling */}
          <span>Free Shipping Above 5000</span>
          <span>Pure Copper Utensils</span>
          <span>Additional Promotion Here</span>
          <span>New Arrivals: Check Out the Latest Collection</span>
          <span>Limited Time Offer: 10% Off on All Orders</span>
          <span>Subscribe Now and Get Exclusive Deals</span>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
