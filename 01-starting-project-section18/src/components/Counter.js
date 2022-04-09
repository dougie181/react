import { useDispatch, useSelector , connect} from "react-redux";
import { Component } from "react";
import store from "../store";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const increasetHandler = () => {
    dispatch(counterActions.increase({amount: 5}));
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={increasetHandler}>Increase</button>
        <button onClick={decreaseHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   constructor() {
//     super();
//   }
  
//   incrementHandler() {
//     this.props.increment();

//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = ((state) => {
//   return {
//     counter: state.counter
//   }
// });

// const mapDispatchToProps = ((dispatch) => {
//   return {
//     increment: () => dispatch( {type: 'increment'}),
//     decrement: () => dispatch( {type: 'decrement'})
//   };
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
