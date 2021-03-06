import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';
import About from './About/About'
import {Route,NavLink} from 'react-router-dom'
import Counter2 from './Counter2';



class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cars: [
        { name: 'Ford', year: 2018 },
        // {name: 'Audi', year: 2016},
        // {name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({ cars })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({ cars })

  }

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  render() {
    console.log('App render')
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.year}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={event => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div style={divStyle}>
        {/*<h1>{this.state.pageTitle}</h1>*/}
        
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={'wfm-active'}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about"
              activeStyle={{color:'blue'}}>About</NavLink>
            </li>
            <li>
              <NavLink to={{pathname:'/car', hash: 'wfm-hash'}}>Cars</NavLink>
            </li>
          </ul>
        </nav>
        <hr/>
        {/*localhost:3000*/}
        <Route path="/" exact render={() => <h1>{this.props.title}</h1>} />
        <Route path="/about" component={About}/>
        <Route path="/cars" component={cars}/>

        <Counter />

        <Counter2/>

        <hr />
        <button
          style={{ marginTop: 20 }}
          className={'AppButton'}
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {cars}
        </div>
      </div>
    );
  }
}

export default App

