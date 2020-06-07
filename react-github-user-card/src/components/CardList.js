import React from 'react';
import Card from './Card';

class CardList extends React.Component {

    render() {
        return (
            <div>
                <h2>Hello, from the CardList</h2>
                <Card />
            </div>
        )
    }
}

export default CardList;