import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../redux/actions'

function App({fetchCategories, categories}) {
  useEffect(() =>{
    fetchCategories()
  }, [])



  return (
    <div>React App</div>
  );
}

const mapStateToProps = state => ({
  categories: state.categories
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
