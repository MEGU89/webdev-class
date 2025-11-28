
// pass props or we can also do {count} inplace of props to access count
const Counter2 = (props) => {

    // Destructuring
    let {count, onIncrement, onDecrement} = props;

  return (
    <div>
        <button className="btn btn-primary" onClick={onIncrement} >Increment</button>
       <span className="m-2 btn btn-warning" style={count === 0 ? {color:"red"} : {color:"black"}}> {count === 0 ? "Zero" : count}</span>
      <button onClick={onDecrement} className="btn btn-primary">Decrement</button>
    </div>
  )
}

export default Counter2
