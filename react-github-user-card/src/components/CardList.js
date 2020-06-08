import React from 'react';
import UserCard from './UserCard';
import FollowerCard from './FollowerCard';

class CardList extends React.Component {
    render() {
        return (
            <div>
                <UserCard 
                    imgUrl={this.props.userInfo.avatar_url}
                    bio={this.props.userInfo.bio}
                    location={this.props.userInfo.location}
                    followers={this.props.userInfo.followers}
                    following={this.props.userInfo.following}
                    username={this.props.userInfo.login}
                    name={this.props.userInfo.name}
                    profileUrl={this.props.userInfo.html_url}
                />
                <h3 style={{padding: '20px'}}>{this.props.userInfo.login}'s Followers</h3>
                <div className='row row-cols-3 d-flex justify-content-around align-items-center flex-wrap'>
                    {this.props.followers.map(follower => {
                        return (
                            <FollowerCard follower={follower} key={follower.id}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CardList;