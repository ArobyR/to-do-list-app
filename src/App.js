import React, { Component } from 'react';
import './App.css';
import tasks from './example/tasks.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';
import { Route } from 'wouter';

class App extends Component {
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id) 
    console.log(id);
    this.setState({
      tasks: [...newTasks]
    })
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.filter((task) => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }

  render() {
    return (
       <div>
         <Route path="/">
          <div className="form">
            <h1>Task App</h1>
            <TaskForm addTask={this.addTask}/>
            <Tasks 
            tasks={this.state.tasks} 
            deleteTask={this.deleteTask} 
            checkDone={this.checkDone}/>
          </div>
         </Route>
         <Route path="/posts">
         <Posts />
         </Route>
       </div>
    );
  }
}

export default App;
