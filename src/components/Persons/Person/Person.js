import React, { Component } from 'react';

import PersonStyle from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }
  
  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }
  
  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }
  
  render() {
    console.log('[Person.js] Inside render()');
    return (
      <div className={PersonStyle.Person}>
        {/*example of global class ':global .green {color: green;}'*/}
        <p className="green"
           onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  };
}

export default Person;