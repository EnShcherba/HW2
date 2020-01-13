import React from 'react';

export class NavItem extends React.Component {

isActive() {
    if (this.props.activeNav === this.props.navName) {
        return 'active'
    }
}

setActive = () =>{
    this.props.setActive(this.props.navName)
}

render() {
    return (<a className={this.isActive()} href="#" onClick={this.setActive}><i className="fa fa-fw fa-home"/>{this.props.navName}</a>)
}
}