import * as React from 'react';
import './App.scss'
import PageInterface from './interfaces/PageInterface';
import img from './assets/img/cuttree.jpg'

class App extends React.Component<PageInterface, {}> {
  render() {
    const { color } = this.props
    return (
      <div className="text-center mt-3">
        <h1 className={`header text-${color} text-uppercase display-4`}>
          React-Typescript
        </h1>
        <img src={img} className="my-5" alt="sada"/>
        <p className="mt-3 secondaryHeader">The color of this page is: {color}</p>
      </div>
    );
  }
}

export default App;
