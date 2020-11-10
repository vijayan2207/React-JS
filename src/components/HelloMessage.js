import React from 'react';

/* Implementation using Class */
class HelloMessage extends React.Component{
    render() {
        return (
            <div>
            <h1> {this.props.title} </h1>
            <h2> {this.props.header} </h2>
            <h1><font color="red">{this.props.h}</font></h1>
            </div>
        );
      }
}
export default HelloMessage;

