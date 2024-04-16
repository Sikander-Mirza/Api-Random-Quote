import React from 'react';
import './App.css';
import axios from 'axios'
class App extends React.Component{
  state={advice:''};
componentDidMount(){
  console.log('COMPONENT DID MOUNT');
  this.fetchAdvice();
}

fetchAdvice=()=>{
  axios.get('https://api.adviceslip.com/advice')
  
    .then((response)=>{
      const {advice}=response.data.slip;
      this.setState({advice});
  })
}
  render(){
    const {advice}=this.state;
    return(
      <div className='app'>
      <div className='card'>
      <h3 className='heading'>{advice}</h3>
      <button className='button' onClick={this.fetchAdvice}>
        <span>GIVE ME A ADVICE!</span>
      </button>
      </div>
      </div>

    );
  }
}

export default App;