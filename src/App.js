import React, { Component } from 'react';
import './App.css';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/searchbox.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchString: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(returnData => this.setState({
          users: returnData
        })
      )
  }

  handleChange = (e) =>{
    this.setState ({ searchString: e.target.value })
  }

  render(){
    const { users, searchString } = this.state;
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchString.toLowerCase())
      );
    return (
      <div className="App">
        <h1 class="logo_google_font">React SPA</h1>       
        <SearchBox 
          changeEvent={ this.handleChange }
          placeholder="Search Users" /><br/>
        <CardListComponent userlist={filteredUsers}>
        </CardListComponent>        
      </div>
    );
  }
}

export default App;
