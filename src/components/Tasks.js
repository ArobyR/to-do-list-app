import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {
    render() {
        return (
            this.props.tasks.map(({id, title, description, done}) => 
            <Task key={id}  
            id={id} 
            title={title}
            description={description} 
            done={done}
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
            />)
                  
        );
    }
}

export default Tasks;