import React, { Component } from 'react';
import '../styles/TaskForm.css'

export default class TaskForm extends Component {
    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
             <form method="POST" onSubmit={this.onSubmit}>
                 <input className="input" 
                 required
                 type="text" 
                 name="title"
                 placeholder="Write a task" 
                 value={this.state.title} 
                 onChange={this.onChange}
                 />
                 <br/>
                 <br/>
                 <textarea className="input"
                 rows="6"
                 name="description"
                 placeholder="Write a description" 
                 value={this.state.description}
                 onChange={this.onChange}
                 ></textarea>
                 <br />
                 <input id="btn" type="submit" value="Enviar" />
             </form>
        );
    }
}