import React, { Component } from 'react'
import logo from './logo.svg';
import Crud from './components/crud/Crud'
import Formulario from './components/formulario/Formulario'
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './App.css'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (        
        <Provider store={ store }>
            <div className="App">
                <Crud />
            </div>
        </Provider>
    )
  }
}

export default App;
