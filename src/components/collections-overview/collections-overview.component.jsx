import React from 'react'
import './collections-overview.style.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({collections}) => {
  return (
    <div className='collections-overview'>

       {collections.map(({id, ...otherCollections}) => (
            <CollectionPreview key={id} {...otherCollections} />
        ))}

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
