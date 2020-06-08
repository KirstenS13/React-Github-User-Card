import React from 'react';
import { Button, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

class FollowerCard extends React.Component {
    render() {
        return (
            <div className='col'>
                <Card className="bg-light mb-3" style={{width: '25rem'}}>
                    <CardImg className='img-fluid' src={this.props.follower.avatar_url} alt={this.props.follower.login} />
                    <CardBody className='text-left'>
                        <CardTitle>{this.props.follower.login}</CardTitle>
                        <Button className='btn-warning'><a href={this.props.follower.html_url} style={{color: 'black'}}>Visit Profile</a></Button >
                    </CardBody>
                </Card>
            </div>   
        )
    }
}

export default FollowerCard;