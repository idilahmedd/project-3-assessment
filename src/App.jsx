import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      userId: 1
    }
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
  }
  componentDidMount() {

    console.log('component did mount')
    axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(result => {
        this.setState({
          posts: result.data,

        })
      })
  }


  handleClickLeft(e) {
    e.preventDefault();
    var userId = this.state.userId - 1
    console.log(userId);
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    if (userId >= 10) {
      // userId--;
      this.setState({
        userId
      })
    } else {
      userId = 1;
      this.setState({
        userId
      })
    }
    console.log("about to call axios with this url:", url)
    axios.get(url).then(result => {
      this.setState({
        posts: result.data
      })
    })
  }
  handleClickRight(e) {
    e.preventDefault();
    var userId = this.state.userId + 1
    console.log(userId);
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    if (userId <= 10) {
      // userId++;
      this.setState({
        userId
      })
    } else {
      userId = 1;
      this.setState({
        userId
      })
    }
    console.log("about to call axios with this url:", url)
    axios.get(url).then(result => {
      this.setState({
        posts: result.data
      })
    })
  }

  render() {

    return (
      <>
        <div className="App">
          <h1>Cycle Through Users:</h1>
          <div>
            <button onClick={this.handleClickLeft}><i className="left"></i></button>
            <button onClick={this.handleClickRight}><i className="right"></i></button>
          </div>
          <div className="content">
            <Posts posts={this.state.posts} />
          </div>
        </div>
      </>
    )
  }
}

export default App






