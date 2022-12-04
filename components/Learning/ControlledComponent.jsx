import React,{ Component } from "react";


class ControlledComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'hari',
            password :'12345',
            hasLoginSuccess:false,
            hasLoginFailed:false
        }
    /* this.handleUsernameChange = this.handleUsernameChange.bind(this)
     this.handlePasswordChange =this.handlePasswordChange.bind(this)*/
     this.handleChange=this.handleChange.bind(this)
     this.handleLogin=this.handleLogin.bind(this)
     this.submit=this.submit.bind(this)
    }
    handleUsernameChange(event){
      this.setState({
        username:event.target.value
      }

      )}
      handlePasswordChange(event){
        this.setState({
            password:event.target.value
          }
    
          )
      }
      handleLogin(){
        if(this.state.username ==="hari"& this.state.password ==="12345"){
            console.log('valid')
            this.setState({
                hasLoginSuccess:true,
                hasLoginFailed:false
                
            })
        }else{
            console.log('invalid')
            this.setState({
                hasLoginFailed:true,
                hasLoginSuccess:false
            })
        }
      }
      handleChange(event){
        this.setState({
           [event.target.name]:event.target.name
        }

        )

      }
    submit(event){
        event.preventDefault();
     /*console.log(this.state.username & this.state.password)*/
    }
    render(){
        return(
            <div className="controlled">
                <LoginSuccess loginstatus={this.state.hasLoginSuccess}></LoginSuccess>
                <LoginFailed loginstatus={this.state.hasLoginFailed}></LoginFailed>
               <form onSubmit={this.submit}>
            <label >username:</label>
            <input  type="text" name="username"value={this.state.username}onChange={this.handleChange}></input>
            <label >password</label>
            <input  type="text" name='password'value={this.state.password}onChange={this.handleChange}></input>
            <button type='submit' onClick={this.handleLogin} >submit</button>
           </form>
            </div>
        )
    }

}
function LoginSuccess(props) {
    if(props.loginstatus){
    return(
        <div className="success">
            Login Success
        </div>
    )
    }
    return null;
}
function LoginFailed(props) {
    if(props.loginstatus){
    return(
        <div className="failed">
            Login Failed
        </div>
    )
    }
    return null;    
}

export default ControlledComponent;