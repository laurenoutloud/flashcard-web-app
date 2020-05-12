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
            </div>
        );
    }
}

export default Sidebar;