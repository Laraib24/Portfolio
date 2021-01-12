import React from 'react';
 
class Medium extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        window.mediumWidget();
    }
    render(){
        return(<div id="medium-widget"></div>)
    }

}
export default (Medium)