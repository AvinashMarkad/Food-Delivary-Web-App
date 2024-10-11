import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div class="About-card">
    <h1>Avinash Markad</h1>
    <User name="Avinash Markad"/>
    <UserClass name="Avinash Markad"/>
    <h5>Welcome to our Food Delivery App! I’m Avinash, a passionate React developer dedicated to creating seamless user experiences.</h5>
    <h5>With a focus on efficiency and user satisfaction, I built this app to connect you with your favorite restaurants and deliver your meals right to your doorstep.</h5>
    <h5>Thank you for choosing our service!</h5>
    
</div>
  );
};

export default About;
