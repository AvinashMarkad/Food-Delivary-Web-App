import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state={
            count:0,
        }
        console.log(props)
    }
    render() {

        const {name}=this.props;
        const {count}=this.state;

        return(
            <div className="user">
               <h1>Frontend Developer</h1>
                <h3>Contact Information</h3>
                <button
                onClick={() => {
                    this.setState({
                        count:count +1,
                    });
                }}
                >INC COUNT</button>
                <h3>count={this.state.count}</h3>
                <h5><strong>Name:</strong> {name}</h5>
                <h5><strong>Email:</strong> avinash@examh5le.com</h5>
                <h5><strong>phone:</strong> (123) 456-7890</h5>
                <h5><strong>Location:</strong> City, Country</h5>
                <h5><strong>Role:</strong> Frontend Develoh5er</h5>
            </div>
        )
    }
}

export default UserClass;