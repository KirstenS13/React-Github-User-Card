import React from 'react';
import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

class UserCard extends React.Component {
    render() {
        return (
            <Card>
                <CardImg src={this.props.imgUrl} alt={this.props.name}/>
                <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardSubtitle>Username: {this.props.username}</CardSubtitle>
                    <CardText>Location: {this.props.location}</CardText>
                    <CardText>Followers: {this.props.followers}</CardText>
                    <CardText>Following: {this.props.following}</CardText>
                    <CardText>Bio: {this.props.bio}</CardText>
                    <Button><a href={this.props.profileUrl}>Visit Profile</a></Button>
                </CardBody>
            </Card>
        )
    }
}

export default UserCard;