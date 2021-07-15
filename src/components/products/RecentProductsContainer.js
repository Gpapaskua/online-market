import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getRecentProducts } from '../../redux/ProductsReducer'
import RecentProducts from './RecentProducts'

function RecentProductsContainer(props) {
    const { recentProducts, categories } = props
    useEffect(() => {
        props.getRecentProducts(categories)
    }, [])
    if (recentProducts) {
        return (
            <Container>
                {
                    categories.map((cat, index) => {
                        return recentProducts[cat] && <RecentProducts data={recentProducts[cat]}
                            items={recentProducts[cat]?.length} head={'მობილური ტელეფონები'}
                            cat={cat} key={index} />
                    })
                }


            </Container>
        )
    }
    return null
}
const mapStateToProps = (state) => {
    return {
        recentProducts: state.products.recentProducts,
        categories: state.products.categories
    }
}
const Container = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 1rem;

`

export default connect(mapStateToProps, { getRecentProducts })(RecentProductsContainer)
