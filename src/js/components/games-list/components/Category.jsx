import React from 'react';
import Subcategory from './Subcategory'
import triangle from '../../../../media/img/triangle.svg'
import classNames from 'classnames'

export default function Category({category}) {

    return (
        <div className='category'>
            <img src={triangle} className={classNames('triangleIcon')} />
            <h2 className='category-heading'>{category.name}</h2>
            {category.subcat.map(cat => <Subcategory {...{ key: cat.id, subcategory: cat }} /> )}
        </div>
    )
}
