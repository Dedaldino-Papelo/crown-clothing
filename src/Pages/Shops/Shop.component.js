import React, { Component } from 'react'
import './Shop.style.scss'
import Shop_Data from './Shop_Data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

export default class Shop extends Component {
    constructor() {
        super()
        this.state = {
            collections: Shop_Data
        }
    }
    render() {
        const { collections } = this.state
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
}
