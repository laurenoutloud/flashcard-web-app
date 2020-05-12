import React, {Component} from 'react';
import './dashboard.css';
import Sidebar from '../sidebar/sidebar';
import CardArea from '../cardArea/cardArea'

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className="dashboard-container">
                <Sidebar/>
                <CardArea/>
            </div>
        );
    }
}

export default Dashboard;