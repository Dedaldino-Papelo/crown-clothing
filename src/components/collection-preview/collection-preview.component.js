import React from 'react'
import './collection-preview.style.scss'
import CollectionItem from '../collectionItem/collection-item.component'

const Collection = ({items,title}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {
          items.filter((item,id) => id < 4)
            .map((item) => (
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default Collection
