import React from 'react';
import Card from './Card';

class CardList extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h2>Hello, from the CardList</h2>
                <Card 
                    imgUrl={this.props.userInfo.avatar_url}
                    bio={this.props.userInfo.bio}
                    location={this.props.userInfo.location}
                    followers={this.props.userInfo.followers}
                    followersUrl={this.props.followersUrl}
                    following={this.props.userInfo.following}
                    username={this.props.userInfo.login}
                    name={this.props.userInfo.name}
                    profileUrl={this.props.userInfo.html_url}
                />
            </div>
        )
    }
}

export default CardList;