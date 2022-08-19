import React from 'react'
import './collection-preview.style.scss'
import CollectioItem from '../collectionItem/collection-item.component'

const Collection = ({items,title}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {
          items.filter((item,id) => id < 4)
            .map(({id, ...otherItemProps}) => (
            <CollectioItem key={id} {...otherItemProps} />
          ))
        }
      </div>
      
    </div>
  )
}

export default Collection
