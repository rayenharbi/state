import React from 'react';
import './style.css'



class Person extends React.Component {
  state = {
    shows: false,
    person: {
      fullName: "Rayen harbi",
      bio: "I'm a software engineer",
      imgSrc: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
      profession: "Developer"
    }
  }

  toggleShows = () => {
    this.setState({
      shows: !this.state.shows
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(`Component mounted ${new Date().toLocaleTimeString()}`);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShows}>Click Here</button>
        {this.state.shows && (
          <div>
            <img src={this.state.person.imgSrc} alt="Person" />
            <h1>{this.state.person.fullName}</h1>
            <h2>{this.state.person.profession}</h2>
            <p>{this.state.person.bio}</p>
          </div>
        )}
      </div>
    )
  }
}

export default Person;