import React from 'react'
import { Carousel } from 'antd-mobile'
import { Link } from 'dva/router'
import styles from './imgCarousel.less'

class ImgCarousel extends React.Component {
    render() {
        let data = this.props.data,
            items = [];
        data.forEach((item, idx) => {
            if (item.img_url) {
                let imgObj = require('../../assets/images/' + item.img_url);
                if (item.img_link && item.img_link !== '#') {
                    items.push(<section key={'imgCarousel' + idx}><Link to={item.img_link}><img src={imgObj} alt='' /></Link></section>)
                } else {
                    items.push(<section key={'imgCarousel' + idx}><img src={imgObj} alt='banner' /></section>)
                }
            }
        })
        return (
            <Carousel className={styles.banner} autoplay={true} infinite={true}>
                {items}
            </Carousel>
        )
    }
}

export default ImgCarousel