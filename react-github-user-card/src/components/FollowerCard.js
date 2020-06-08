import React from 'react';

class FollowerCard extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.follower.avatar_url} alt={this.props.follower.login} />
                <h4>{this.props.follower.login}</h4>
                <a href={this.props.follower.html_url}>Visit Profile</a>
            </div>
        )
    }
}

export default FollowerCard;