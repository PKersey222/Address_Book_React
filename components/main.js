import { Component } from "react";
import BeerDetails from "./BeerDetails";
import axios from "axios";
import "./App.css";




class App extends Component {
    constructor() {
      super();
      this.state = {
        arrayOfBeers: [],
      };
    }
    componentDidMount() {
      console.log("component loaded");
      axios.get("https://randomuser.me/api?results=25").then((data) => {
        console.log(data);
        this.setState({ arrayOfBeers: data.data });
      });
    }
    componentDidUpdate() {
      console.log(this.state);
    }
    render() {
      return (
        <div className="App">
          {this.state.arrayOfBeers.map((beer) => {
            return <BeerDetails beer={beer}/>;
          })}
        </div>
      );
    }
  }

  export default App;