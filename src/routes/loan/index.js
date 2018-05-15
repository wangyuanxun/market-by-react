import React from 'react'
import { connect } from 'dva'
import ImgCarousel from '../../components/loan/imgCarousel'
import bannerDatas from '../../assets/datas/banner.json'

class Index extends React.Component {
    render() {
        return (
            <section>
                <ImgCarousel data={bannerDatas}></ImgCarousel>
            </section>
        )
    }
}

export default connect()(Index)