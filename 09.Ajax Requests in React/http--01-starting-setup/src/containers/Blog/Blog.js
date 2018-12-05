import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from 'axios'; //we import the library for making http requests

class Blog extends Component {


    state = {
        posts : [],
        selectedPost : null,
        error : ''
    }

    componentDidMount(){
        //here is the perfect place to make an ajax request, it returns a promice
        
        axios.get('posts/')
            .then(res => {
                let posts = res.data.slice(0, 4).map(p => {
                    p.author = "Atanas";
                    return p;
                });


                this.setState({posts : posts});
            })
            .catch(err => {
                console.log(err);
                this.setState({error : 'Could not load posts !'});                
            });
    }

    postSelectedHandler = (postId) => {
        
        axios.get('posts/' + postId)
            .then(res => {
                let post = res.data;
                this.setState({selectedPost : post});
            })
            .catch(err => {
                console.log(err)
                this.setState({error : 'Could not find the requested post !'});
            })

    }

    postDeleteHandler = (postId) => {


        //The request is successfull but we cannot delete from that API because it is a fake one !!!
        axios.delete('posts/' + postId)
        .then(res => {
            console.log("DELETED");
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })


        //we set the new state
        let newPosts = [];
        
        this.state.posts.forEach(p => {
            if(p.id !== postId)
            {
                newPosts.push(p);
            }
        });

        //Remove from state
        this.setState({posts: newPosts, selectedPost : null});
    }



    render () {

        const posts = this.state.posts.map((p) => {
            return <Post 
                key={p.id} 
                clicked={() => this.postSelectedHandler(p.id)}    
                title={p.title} 
                author={p.author} />
        });

        return (
            <div>
                <section className="Posts">
                    <h2 style={{color : 'red', textAlign : 'center'}}>{this.state.error}</h2>
                    {posts}
                </section>
                <section>
                    <FullPost removePost={this.postDeleteHandler} selectedPost={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;