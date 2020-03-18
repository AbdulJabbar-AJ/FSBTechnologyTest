import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../../../redux/actions'
import Category from '../components/Category'


function GamesList({fetchCategories, categories}) {
    useEffect(() => fetchCategories(), [])

    return (
        <div className='gamesList'>
            <h1 className='gamesList-heading'>Games List</h1>
            {categories.map(cat => <Category {...{ key: cat.id, category: cat }} /> )}
        </div>
    )
}

const mapStateToProps = state => ({ categories: state.categories })
const mapDispatchToProps = dispatch => ({ fetchCategories: () => dispatch(fetchCategories()) })

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);
