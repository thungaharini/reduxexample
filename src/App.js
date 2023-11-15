import './App.css';
import { connect } from 'react-redux';
import { IncAction } from './actions';
import { DecAction } from './actions';

const App = ({local_variable, IncAction, DecAction}) => {
  return(
    <div>
      <center>
         <h1>{local_variable }</h1> <br />
         <button onClick={() => IncAction(2)}>InCrement</button>
         <button onClick={DecAction}>DeCrement</button>
         
      </center>
    </div>
  )  
}
const mapStateToProps = state => ({
  local_variable : state

})
export default connect(mapStateToProps,{IncAction,DecAction})(App);
