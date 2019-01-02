import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
import 'font-awesome/css/font-awesome.css'

class App extends Component {
  state={
    form:[]
  }
  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {
      this.setState({
        form: resp.data
      })
    })
  }
  render() {
    return (
      <div className='mainCon'>
        <div className="signUp"> Sign up </div>
        {this.state.form.map(item =>{
          if (item.type === 'text'){
         return <div className="divs"> <i className={'fa ' + item.icon} ></i> <input id={item.id} type={item.type} placeholder={item.label}/> </div>
        }else if (item.type === 'email'){
          return <div className="divs"> <i className={'fa ' + item.icon} ></i> <input id={item.id} type={item.type} placeholder={item.label}/> </div>
        }else if (item.type === 'tel'){
          return <div className="divs"> <i className={'fa ' + item.icon} ></i> <input id={item.id} type={item.type} placeholder={item.label}/> </div>
        }else if (item.type === 'select'){
          return <select className="divs" id={item.id}>  
          <option> {item.label} </option>
          {item.options.map(opt => {
            return <option> {opt.label} </option>
          })}
          </select>
        } else {
          return <div className="divs"> <i className={'fa ' + item.icon} ></i><textarea id={item.id} placeholder={item.label}> </textarea> </div>
        }





        }
          )}
        <div className="submit"> <button>Submit Form</button> </div>
      </div>
    );
  }
}

export default App;
