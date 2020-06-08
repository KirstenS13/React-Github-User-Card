import React from 'react';
import Card from './Card';
import FollowerCard from './FollowerCard';

class CardList extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello, from the CardList</h2>
                <Card 
                    imgUrl={this.props.userInfo.avatar_url}
                    bio={this.props.userInfo.bio}
                    location={this.props.userInfo.location}
                    followers={this.props.userInfo.followers}
                    following={this.props.userInfo.following}
                    username={this.props.userInfo.login}
                    name={this.props.userInfo.name}
                    profileUrl={this.props.userInfo.html_url}
                />
                <div>
                    {this.props.followers.map(follower => {
                        return (
                            <FollowerCard follower={follower} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CardList;