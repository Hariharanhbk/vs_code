import React from 'react';
import react , { Component, createRef } from 'react';



class UncontrolledComponent extends Component{
    constructor(props){
        super(props);
        this.username = React .createRef();
        this.password = React .createRef();
        this.submit = this.submit.bind(this);
    }
    
    submit(event){
       event.preventDefault();
       console.log(this.username.current.value)
    }
    render(){
        return(
        <div className='uncontrolled'>
           <form>
            <label>username:</label>
            <input ref={this.username} type="text" name='username'></input>
            <label >password</label>
            <input ref={this.password} type="text" name='password'></input>
            <button type='submit' onClick={this.submit}>submit</button>
           </form>
        </div>
        )
        
    }
}
export default UncontrolledComponent;