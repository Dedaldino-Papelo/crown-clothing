import React from 'react'
import './collection.style.scss'
import CollectionItem from '../../components/collectionItem/collection-item.component'
import { useParams } from 'react-router-dom'
import { selectCollection } from '../../redux/shop/shop.selectors'
import { useSelector } from 'react-redux'

const CollectionPage = () => {
  let {collectionId} = useParams()
  const collection = useSelector(state =>selectCollection(collectionId));

  console.log("obj", collection)

  return (
    <div className='collection-page '>
      <h2 className='title'>Category Page</h2>
      <div className='items'>
      </div>
    </div>
  )
}

export default CollectionPage
