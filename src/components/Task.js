import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Task.css';

class Task extends Component {
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.done ? 'gray' : 'black',
            textDecoration: this.props.done ? 'line-through' : 'none'
        }
    }
    render() {
        return (
            <div>
            <div className="task" 
            style={this.StyleCompleted()}  
            key={this.props.id}>
            {this.props.id} - {this.props.title} - {this.props.description} - {this.props.done}
            <input className="check" onChange={this.props.checkDone.bind(this, this.props.id)} type='checkbox'/>
            <button 
            onClick={this.props.deleteTask.bind(this, this.props.id)}
            className="btn-delete"
            >
                x
            </button>
          </div>
          </div>
        );
    }
}

Task.propTypes = {
    id: PropTypes.number.isRequired
}

export default Task;