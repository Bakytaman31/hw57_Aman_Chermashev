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

  totalSpentAdd = () => {
      const total = this.state.stuff.reduce((acc, item) => {
      acc+=item.price;
      return acc
    }, this.state.totalSpent);
      console.log(this.state.price);
      console.log(total);
      this.setState({totalSpent: total})

  };

  totalSpentRemove = () =>{
    const total = this.state.stuff.reduce((acc, item) => {
      acc-=item.price;
      return acc
    }, this.state.totalSpent);

    console.log(this.state.price);
    console.log(total);
    this.setState({totalSpent: total})
  };
  add = () =>{
    const newStuff = {
      name: this.state.text,
      price: this.state.price,
      id: nanoid(),
    };
    this.setState({stuff: [...this.state.stuff, newStuff]});
    this.totalSpentAdd();
    document.getElementById("text").value = "";
    document.getElementById("price").value = "";

  };

  remove = id => {
    const stuffId = this.state.stuff.findIndex(t => t.id === id);
    const stuff = [...this.state.stuff];
    stuff.splice(stuffId, 1);
    this.setState({stuff});
    this.totalSpentRemove();
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
            <button onClick={this.totalSpentChange}>Check Total Spent</button>
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
