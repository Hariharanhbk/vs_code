import React ,{ Component } from "react";
import '../counter/bootstrap.css' 


class ListComponent extends Component{

constructor(props){
    super(props)
    this.state ={
        userlist : [
         {id:1,username:"hari",Designation:"student"},
         {id:2,username:"maddy",Designation:"student"},
         {id:3,username:"arun",Designation:"student"},
         {id:4,username:"raja",Designation:"student"}
        ]
    }
}
    render(){
        return(
            <React.Fragment>
            <div className="list">
                <h3>Table</h3>
                <div className="container">
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                 {this.state.userlist.map(
                    (user) =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.Designation}</td>
                    </tr>
                    )}
                        
                        

                    </tbody>
                </table>
                </div>

            </div>
            </React.Fragment>

        )
    }
}

export default ListComponent;