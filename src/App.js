import React from "react";
import './App.css';
import photo from './PhotoNasr.jfif'

class App extends React.Component {
  constructor(){
    super()
    this.state = {Person: {fullName: "Nassreddine Hnana",
      bio: "Im  FullStack  JS  intern  at  Gomycode",
      imgSrc: photo,
      profession: "Electric-Automatic Engineer"},
      shows: true,
      time: 0,
    }
  }

  showState = (shows) => this.setState({shows: !shows})

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
    this.tock();
  }
  tick() {
    this.setState({
      time: this.state.time+1
    });
  }
  tock() {
    this.setState({
      time: 0
    });
  }

  render () {
    console.log(this.state.shows)
    console.log('render')
    return(
      <div className="App">
        <button className = "stylebutton" onClick = { () => this.showState(this.state.shows) }>
        {this.state.shows ? "Profile" : "Show profile"}
        </button>
        {() => this.handleTime(this.state.time)}
        <h2>{this.state.shows ? this.state.time : null}</h2>
        <div className="profile" style = {this.state.shows ? null: {display: "none"} }>
          <img className = "stylePhoto" src={this.state.Person.imgSrc} alt = "PicNasr" />
          <h1 className = "styleText">
            Hello, my name is
            <span className = "styleName"> {this.state.Person.fullName}</span>
          </h1>
          
          <h2 className = "styleText">
            My profession is : <span className = "styleProfession"> {this.state.Person.profession}</span>
          </h2>
          <h2>
            <span className = "styleText"> {this.state.Person.bio}</span>
          </h2>
          <footer>
            <p>Copyritghts &copy; {this.state.Person.fullName} 2021</p>
          </footer>
        </div>
      </div>
    )
  } 
};

export default App;
