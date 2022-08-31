import React from 'react'
import './Shop.style.scss'
import { Route, Routes, useMatch } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

const Shop = () => {

    return (
        <div className='shop-page'>
            <Routes>
                <Route path='' element={<CollectionsOverview />} />
                <Route path=':collectionId' element={<CollectionPage />} />
            </Routes>
        </div>
    )
}

export default Shop
