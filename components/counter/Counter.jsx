import { Component } from 'react';
import '../counter/counter.css'
import PropTypes  from 'prop-types';
import '../counter/bootstrap.css'


class Countercomponent extends Component{ 

    constructor(props){
        super(props);
        this.state={
        counterAll : 0
        }
        this.incrementMethod=this.incrementMethod.bind(this);
        this.DecrementMethod=this.DecrementMethod.bind(this);
        this.onResetClick=this.onResetClick.bind(this);   
    }

    incrementMethod(value){
           {/*console.log(value)*/}
           this.setState({
            counterAll:this.state.counterAll+value
           })
        }

    DecrementMethod(value1){
        {/*console.log(value)*/}
        this.setState({
         counterAll:this.state.counterAll-value1
        })
    }

 onResetClick(a){
    a.preventDefault();
    this.setState({
     counterAll:(this.state.counterAll=0)
    })}

    render(){
        return(
            <div className="Countercomponent">
                <h2>COUNTER</h2>
            <Counter value={1}incrementMethod ={this.incrementMethod}
                     value1={1}DecrementMethod ={this.DecrementMethod}/>
            <Counter value={10}incrementMethod ={this.incrementMethod}
                     value1={10}DecrementMethod ={this.DecrementMethod}/>
            <Counter value={100}incrementMethod ={this.incrementMethod}
                     value1={100}DecrementMethod ={this.DecrementMethod}/>
            <span class="count">{this.state.counterAll}</span>
            <br></br>
            <button style={{backgroundColor : "red"}}className="btn btn-danger"onClick={this.onResetClick}>reset</button>
            </div>
        );
    }
}

class Counter extends Component {

    constructor(){
        super();
        this.state={
        counter : 0
        }
        this.increment = this.increment.bind(this)
        this.Decrement = this.Decrement.bind(this)}
    render(){
        return(
        <div>
        <button className="btn btn-success counter" onClick={this.increment}>+{this.props.value}</button>
        <button className="btn btn-success counter" onClick={this.Decrement}>-{this.props.value1}</button>
            {/*<span class="count">{this.state.counter}</span>*/}
        </div> 
)
}

increment (){
    this.setState({
        counter :this.state.counter + this.props.value
    })
    this.props.incrementMethod(this.props.value);
}

Decrement (){
    this.setState({
        counter :this.state.counter - this.props.value1
    })
    this.props.DecrementMethod(this.props.value1);
}}

Counter.defaultProps ={
    value:1}
  Counter.propTypes ={
    value : PropTypes.number}
export default Countercomponent;