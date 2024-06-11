import logo from './logo.svg';
import './App.css';
class App extends Component{
    name = "Cipher Schools";
  render(){
    return(
      <>
        <div>
          <h1>This is {this.name}</h1>
        </div>
        <div>
          <p>This is and name is : {this.name}</p>
        </div>
      </>
    )
  }
}

export default App;
