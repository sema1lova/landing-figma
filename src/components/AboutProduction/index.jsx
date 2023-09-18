import React from 'react'
import aboutPro from './AboutProduction.module.scss'
import image1 from '../../assets/AboutProduction/1.png'
import image2 from '../../assets/AboutProduction/2.png'
import image3 from '../../assets/AboutProduction/3.png'
import image4 from '../../assets/AboutProduction/4.png'
import image5 from '../../assets/AboutProduction/5.png'


const AboutProduction = () => {
  return (
    <>
      <div className={aboutPro.aboutPro}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className={aboutPro.aboutPro__mainTitle}>О производстве</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className={aboutPro.aboutPro__content}>
                <div className={aboutPro.aboutPro__content__image}>
                  <img src={image5} alt="" />
                </div>
                <div className={aboutPro.aboutProAll}>
                 <div className="col-lg-12 col-md-12 col-12">
                 <div className={aboutPro.aboutProBox}>
                    <div className={aboutPro.aboutProBoxLeft}>
                        <img src={image1} alt="" />
                    </div>
                    <div className={aboutPro.aboutProBoxRight}>
                      <p className={aboutPro.aboutProBoxRight__desc}>Доставка и разгрузка плитки краном-манипулятором</p>
                    </div>
                  </div>
                 </div>
                <div className="col-lg-12 col-md-12 col-12">
                <div className={aboutPro.aboutProBox}>
                <div className={aboutPro.aboutProBoxLeft}>
                        <img src={image3} alt="" />
                    </div>
                    <div className={aboutPro.aboutProBoxRight}>
                    <p className={aboutPro.aboutProBoxRight__desc}>Весь товар сертифицирован! Официальная гарантия!</p>
                    </div>
                  </div>
                </div>
                 <div className="col-lg-12 col-md-12 col-12">
                 <div className={aboutPro.aboutProBox}>
                 <div className={aboutPro.aboutProBoxLeft}>
                        <img src={image2} alt="" />
                    </div>
                    <div className={aboutPro.aboutProBoxRight}>
                    <p className={aboutPro.aboutProBoxRight__desc}>Множество видов тротуарной плитки различной формы и фактуры</p>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <div className={aboutPro.aboutPro__image}>
              <img src={image4} alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutProduction