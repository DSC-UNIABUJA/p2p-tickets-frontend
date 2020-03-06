import React from 'react'
// import needed actions
import {addSomething} from "../actions/addAction"
import {connect} from "react-redux"

const Redux = ( { addSomething, sum } ) => {
  return (
    <div>
      <h1>just testing out redux</h1>

      <h3>counter: {sum}</h3>
      <button onClick={() => addSomething(1)}>increase counter</button>

    </div>
  )
}

const mapStateToProps = state => ({
  sum: state.sum.sum,
});

const mapDispatchToProps = {
  addSomething
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux)

