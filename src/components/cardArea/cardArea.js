import React, {Component} from 'react';
import {Card, Button, CardHeader, CardBody, CardText} from 'reactstrap';
import './cardArea.css';

class CardArea extends Component {
    constructor(props) {
        super(props);
        this.state = {showFront: true}
        this.flipCard = this.flipCard.bind(this);
    }

    flipCard() {
        this.setState({
            showFront: !this.state.showFront
        });
    }
    
    render(){
        return (
            <div className="cardArea-container">
                <h2>Cards</h2>
                <Card onClick={this.flipCard}>
                    <CardBody>
                        <CardText>{this.state.showFront ? "Front" : "Back"}</CardText>
                    </CardBody>
                    
                </Card>
                <p>Click on the card to flip sides</p>
                <Button>Next</Button>
            </div>
        );
    }
}

export default CardArea;