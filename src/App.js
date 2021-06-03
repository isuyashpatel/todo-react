import React, { Component } from 'react'
import Plan from './Plan'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
   state={
     items:[],
     text:""
   }
   handleChange = e =>{
     this.setState({text : e.target.value})
   }
   handleAdd = e =>{
    if(this.state.text!==""){
      const items=[...this.state.items, this.state.text];
      this.setState({items:items,text: ""});
    }
  }
    render() {
        return ( 
          <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center"> TodoList </h2>
            <div className="container-fluid">
              <div className="row">
                {/*from here start*/}
              <div className="container-fluid">
                  <ul className="list-unstyled row m-5" >
                    {this.state.items.map((value,i)=>{
                         return <Plan  value={value} />
                    })
                    }
                  </ul>
                </div>
                {/*and here it end*/}
                <div className="col-9">
                  <input type="text" className="form-control" placeholder="Enter New List" value={this,this.state.text} onChange={this.handleChange} />
                </div>
                <div className="col-2">
                  <button className="but" onClick={this.handleAdd}><b>+</b></button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
        )
    }
}

export default App;