import React, { Component } from 'react';
import './FullPost.css';

class FullPost extends Component {

    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        
        if(this.props.selectedPost !== undefined && this.props.selectedPost !== null){

            post = (
                <div className="FullPost">
                <h1>{this.props.selectedPost.title}</h1>
                <p>{this.props.selectedPost.body}</p>
                <div className="Edit">
                    <button onClick={this.props.removePost.bind(this, this.props.selectedPost.id)} className="Delete">Delete</button>
                </div>
            </div>
            );
        }
        return post;
    }
}

export default FullPost;