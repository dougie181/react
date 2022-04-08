import { Component} from 'react';
import classes from './User.module.css';

class User extends Component {

  componentDidMount() {
    //super();
    console.log("componentDidMount");
  }
  
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
