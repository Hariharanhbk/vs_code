import React,{Component}from "react";

class MountingComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            color:'white'
        }

    }
    /*static getDerivedStateFromProps(props,state){
        return{
            color: props.favColor
        }
    }*/
    render(){
        return(
            <div className="Mounding">
                <p>my fav color is {this.state.color}</p>
            </div>
        )
    }

componentDidMount(){
    setTimeout(()=>{
        this.setState({color:'blue'})
    },5000)
}
}

export default MountingComponent;