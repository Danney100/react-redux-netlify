import React from 'react'
import {Card, CardBody} from 'reactstrap'

const cardDetails = [
  {
    title: 'SCOUT SAFE SHIP',
    contant:
      'Add up to 2 more bottles without additional shipping charges! With Scout Safe Ship, the shipping rate depends on how many bottles of Clean-Crafted™ wine are in your order. You can order up to 4 bottles total for the same shipping rate! So go ahead, add to cart. As always, your order is backed by our Do The Right Thing Guarantee.',
  },
  {
    title: 'SAVE$$$ on Shipping Buy 4, 6 or 12 bottles for BEST RATES',
    contant:
      'Good Choice! You have 2 Bottles in your Cart, buy just 2 more making it 4 and get a better shipping Rate. Get the BEST shipping rates by ordering in quantities of 4, 6 or 12!',
  },
  {
    title: 'Boost Your Stash For Less Cash',
    contant:
      'Good Choice! You have 2 Bottles in your Cart, buy just 2 more making it 4 and get a better shipping Rate. Get the BEST shipping rates by ordering in quantities of 4, 6 or 12!',
  },
]

const BlogCard = () => {
  return cardDetails.map((detail, index) => (
    <Card className="my-3" key={index}>
      <CardBody>
        <span className="sub-title sc-oswald-regular">{detail.title}</span>
        <hr />
        <p className="text-justify sc-avenir-roman" style={{color: '#423b3c', lineHeight: 1.5}}>
          {detail.contant}
        </p>
      </CardBody>
    </Card>
  ))
}

export default BlogCard
