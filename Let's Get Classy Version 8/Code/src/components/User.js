import React,{useState} from 'react';

const User = (props) => {
    const [count,setcount] = useState(0); 
    const handleClick = () => {
        setcount(1); // Set count to 1 when clicked
    };
    return(
        <div className="user">
           <h1>Frontend Developer</h1>
            <h3>Contact Information</h3>
            <h3>count={count}</h3>
            <button onlclick={handleClick}>count={count}</button>
            <h5><strong>Name:</strong>{props.name}</h5>
            <h5><strong>Email:</strong> avinash@examh5le.com</h5>
            <h5><strong>phone:</strong> (123) 456-7890</h5>
            <h5><strong>Location:</strong> City, Country</h5>
            <h5><strong>Role:</strong> Frontend Develoh5er</h5>
        </div>
    )
}

export default User;