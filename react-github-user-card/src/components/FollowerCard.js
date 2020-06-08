import React from 'react';

class FollowerCard extends React.Component {
    render() {
        return (
            <div>
                <h5>Hello, from the FollwerCard</h5>
                <img src={this.props.follower.avatar_url} alt={this.props.follower.login} />
                <h5>{this.props.follower.login}</h5>
                <p>Profile: {this.props.follower.html_url}</p>
            </div>
        )
    }
}

export default FollowerCard;