import React from 'react'
import "./birthdayCard.scss";
export const BirthdayCard = () => {
  return (
    <article className='birthday-card'>
        <img src="../Assets/bday.jpg" alt="b'day image" className='responsive-img '>
        </img>
        <h4>Wish me on <span>Birthday date</span></h4>
        </article>
  )
}
