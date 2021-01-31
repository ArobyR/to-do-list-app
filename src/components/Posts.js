import React, { Component } from 'react';

class Posts extends Component {
    state = {
        posts: []
      }
      async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data);
        this.setState({
            posts: data
        })
      }
    render() { 
        return ( 
            <div>
                <h1>The posts of JSON-Placeholder</h1>
                {
                    this.state.posts.map(task => {
                        return <div style={{padding:'20px'}} key={task.id}> 
                            <h2>{task.title}</h2>
                            <p>{task.body}</p>
                        </div>
                    })
                }
            </div>
         );
    }
}
 
export default Posts;