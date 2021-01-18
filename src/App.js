import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <main className='container'>
            <Counters/>
        </main>
      </div>
    );
  }
}

export default App;
