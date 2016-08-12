import React from 'react';

class AddFields extends React.Component{

  constructor(){
    super();

    this.addField = this.addField.bind(this);
  }

  addField(){
    console.log('increment here');
  }

  render(){
    return(
      <div>
        <input type="text" name="exercise"/> <input type="text" placeholder="weight" name="weight" />
        <div>
          <button type="button" onClick={this.addField}>Add field</button>
        </div>
      </div>
    )
  }
}

export default AddFields;
