import React, {Component} from 'react';
import axios from 'axios';

export default class Input extends Component{
  constructor(props)
  {
    super(props);
    this.state={};
  }
render(){
	return(
		<input type={this.props.type} name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange}/>
		);
}

 }