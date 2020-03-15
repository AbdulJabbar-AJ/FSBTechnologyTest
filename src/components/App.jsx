import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import fetchSelections from '../actions/getSelections'

function App({fetchSelections, selections}) {
  useEffect(() =>{
    fetchSelections()
  }, [])

  useEffect(() =>{
    console.log(selections)
  }, [selections])

  return (
    <div>React App</div>
  );
}

const mapStateToProps = state => ({
  selections: state.selections
})

const mapDispatchToProps = dispatch => ({
  fetchSelections: () => dispatch(fetchSelections())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
