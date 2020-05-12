import React, {Component} from 'react';
import './sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className="sidebar-container">
                <h2>Decks</h2>
                <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;