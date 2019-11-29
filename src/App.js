import React, { Component } from 'react';
import './App.css';
import Card from "./Components/Card/Card";
import nanoid from 'nanoid'

class App extends Component {
  state = {
    totalSpent: 0,
    text: '',
    price: 0,
    stuff: []
  };

  textChange = event =>{this.setState({text: event.target.value})};
  priceChange = event => {this.setState({price: parseInt(event.target.value)});};

  add = () =>{
    const newStuff = {
      name: this.state.text,
      price: this.state.price,
      id: nanoid(),
    };
    const totalSpent = this.state.totalSpent += this.state.price;
    this.setState({stuff: [...this.state.stuff, newStuff], totalSpent, text: '', price: 0});
  };

  remove = id => {
    const stuffId = this.state.stuff.findIndex(t => t.id === id);
    const stuff = [...this.state.stuff];
    let totalSpent = this.state.totalSpent - stuff[stuffId].price;
    stuff.splice(stuffId, 1);
    this.setState({stuff: stuff, totalSpent: totalSpent});
  };


  render() {
    let renderStuff = this.state.stuff.map(stuff => {
      return(
        <Card
          name={stuff.name}
          price={stuff.price}
          removeItem={() => this.remove(stuff.id)}

        />
      )});
    return (
      <div className="App">
        <div className='container'>
          <div className='remote'>
            <input type="text" placeholder="Enter name" onChange={this.textChange} id="text"/>
            <span><input type='number' placeholder="Enter price" onChange={this.priceChange} id="price"/>KGS</span>
            <button onClick={this.add}>Add</button>
            {/*<button onClick={this.totalSpentChange}>Check Total Spent</button>*/}
          </div>
        </div>
        <div className='box'>
          Total Spent: {this.state.totalSpent} KGS
          {renderStuff}
      </div>
      </div>
    );
  }
}

export default App;
