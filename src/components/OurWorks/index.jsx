import React from 'react'
import ourWorks from './OurWorks.module.scss'

import image1 from '../../assets/OurWorks/Rectangle 33.png'
import image2 from '../../assets/OurWorks/Rectangle 34.png'
import image3 from '../../assets/OurWorks/Rectangle 35.png'
import image4 from '../../assets/OurWorks/Rectangle 36.png'
import image5 from '../../assets/OurWorks/Rectangle 37.png'
import image6 from '../../assets/OurWorks/Rectangle 38.png'
import image7 from '../../assets/OurWorks/Rectangle 39.png'
import image8 from '../../assets/OurWorks/Rectangle 40.png'

const OurWorks = () => {
  return (
    <>
      <div className={ourWorks.ourWorks}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={ourWorks.ourWorks__main__content}>
                <p className={ourWorks.ourWork__mainTitle}>
                  Наши работы
                </p>
                <p className={ourWorks.ourWorks__mainDesc}>
                  Отделка участка, сада, входной группы или любой другой частной территории требует большого внимания со стороны владельца, поскольку именно эти зоны являются «лицом», а значит и престижем вашего дома или коммерческого объекта. Подбор прочного и эстетически презентабельного материала для оформления входа, дорожек, пешеходных зон – это уже половина успеха отделки. Вторая половина – это, безусловно, грамотная укладка, обеспечивающая долговечность покрытия.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={ourWorks.ourWorksAll}>
              <div className="col-lg-4 col-md-6 col-12">
                <div className={ourWorks.ourWorksBox}>
                  <img src={image1} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className={ourWorks.ourWorksBox}>
                  <img src={image2} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className={ourWorks.ourWorksBox}>
                  <img src={image3} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className={ourWorks.ourWorksBox}>
                  <img src={image4} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className={ourWorks.ourWorksBox}>
                  <img src={image5} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className={ourWorks.ourWorksBox}>
                  <img src={image6} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className={ourWorks.ourWorksBox}>
                  <img src={image7} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className={ourWorks.ourWorksBox}>
                  <img src={image8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurWorks