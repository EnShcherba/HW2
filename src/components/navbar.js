import React from 'react';
import { NavItem } from './navItem';


export class NavBar extends React.Component {
    state = {
        activeNav: ''
    }
    constructor(props) {
        super(props);
        this.state.activeNav = props.initialActiveItemId;
    }

    setActive = (activeNav) =>  {
        this.setState({...this.state, activeNav})
    }

    render() {
        return (<div className="navbar">{this.props.items.map(item => {
            return <NavItem key={item} navName={item} activeNav={this.state.activeNav} setActive={this.setActive}/>
        })}</div>)
    }

}