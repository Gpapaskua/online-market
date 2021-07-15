import React from 'react'
import HeadphoneSpec from './specifications/HeadphoneSpec'
import LaptopSpec from './specifications/LaptopSpec'
import MobileSpecifications from './specifications/MobileSpec'
import TvSpecifications from './specifications/TvSpec'
import Mp3Spec from './specifications/Mp3Spec'
import ProductInfo from './ProductInfo'
import VideoSpecifications from './specifications/VideoSpec'
import { withRouter } from 'react-router-dom'

function Specifications(props) {
    switch (props.category) {
        case 'mobile':
            return <MobileSpecifications setSpecifications={props.setSpecifications} />
        case 'tv':
            return <TvSpecifications setSpecifications={props.setSpecifications} />
        case 'video':
            return <VideoSpecifications setSpecifications={props.setSpecifications} />
        case 'headphones':
            return <HeadphoneSpec setSpecifications={props.setSpecifications} />
        case 'laptops':
            return <LaptopSpec setSpecifications={props.setSpecifications} />
        case 'photo-cameras':
            return <LaptopSpec setSpecifications={props.setSpecifications} />
        case 'mp3-players':
            return <Mp3Spec setSpecifications={props.setSpecifications} />
        case 'smart-watches':
            return <ProductInfo {...props} />
        case 'music-technic':
            return <ProductInfo {...props} />
        case 'loud-speakers':
            return <ProductInfo {...props} />
        case 'drones':
            return <ProductInfo {...props} />
        case 'computer-parts':
            return <ProductInfo {...props} />
        case 'home-technic':
            return <ProductInfo {...props} />
        case 'memory-cards':
            return <ProductInfo {...props} />
        case 'tv-equipment':
            return <ProductInfo {...props} />
        default:
            return <ProductInfo {...props} />
    }
}
export default withRouter(Specifications)
