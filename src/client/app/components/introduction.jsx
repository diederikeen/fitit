import React from 'react';
import { connect } from 'react-redux';
import { setName } from '../actions/actions.js';

class Introduction extends React.Component{
    constructor(){
        super();
        this.setName = this.setName.bind(this);
    }

    setName(){
        var input = document.getElementById('name');
        this.props.dispatch(setName(input.value));
    }


    render(){
        return(
            <div>
                <input type="text" id="name" onChange={this.setName} />
            </div>
        )
    }
}

export default connect(state => ({
    name: state.introduction.name,
}))(Introduction);
