import React from 'react'
import './Shop.style.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { selectCollections } from '../../redux/shop/shop.selectors'

import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

const Shop = ({collections}) => {
        return (
            <div className='shop-page'>
               {
                collections.map(({id,...otherCollections}) => (
                    <CollectionPreview key={id} {...otherCollections} />
                ))
               }
            </div>
        )
    }

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps) (Shop)
