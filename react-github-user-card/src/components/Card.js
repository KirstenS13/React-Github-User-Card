import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello, from the Card</h3>
                <img src={this.props.imgUrl} alt={this.props.name}/>
                <h4>{this.props.name}</h4>
                <p>Username: {this.props.username}</p>
                <p>Location: {this.props.location}</p>
                <p>Profile: {this.props.profileUrl}</p>
                <p>Followers: {this.props.followers}</p>
                <p>Following: {this.props.following}</p>
                <p>Bio: {this.props.bio}</p>
            </div>
        )
    }
}

export default Card;