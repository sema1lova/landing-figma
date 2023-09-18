import React from 'react'
import ourAdvan from './OurAdvantages.module.scss'
import image1 from '../../assets/OurAdvantages/1.png'
import image2 from '../../assets/OurAdvantages/2.png'
import image3 from '../../assets/OurAdvantages/3.png'
import image4 from '../../assets/OurAdvantages/4.png'
import image5 from '../../assets/OurAdvantages/5.png'
import image6 from '../../assets/OurAdvantages/6.png'

const OurAdvantages = () => {
  return (
    <>
    <div className={ourAdvan.ourAdvan}>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <div className={ourAdvan.ourAdvan__mainTitle__content}>
                <p className={ourAdvan.ourAdvan__mainTitle}>
                Наши преимущества
                </p>
              </div>
            </div>
        </div>

        <div className="row">
          <div className={ourAdvan.ourAdvanAll}>
            <div className="col-lg-4 col-md-6 col-12">
              <div className={ourAdvan.ourAdvanBox}>
                <div className={ourAdvan.ouradvan__img}>
                  <img src={image1} alt="" />
                </div>
                <div className={ourAdvan.ourAdvanBox__content}>
                  <p className={ourAdvan.ourAdvanBox__title}>
                  Тротуарная плитка от производителя в широком ассортименте
                  </p>
                  <p className={ourAdvan.ourAdvanBox__desc}>
                  На сайте вы сможете подобрать прессованную, вибролитую или фасадную плитку, блоки и бордюры, водостоки, крышки на столбы и многое другое.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className={ourAdvan.ourAdvanBox}>
                <div className={ourAdvan.ouradvan__img}>
                  <img src={image2} alt="" />
                </div>
                <div className={ourAdvan.ourAdvanBox__content}>
                  <p className={ourAdvan.ourAdvanBox__title}>
                  Тротуарная плитка от производителя в широком ассортименте
                  </p>
                  <p className={ourAdvan.ourAdvanBox__desc}>
                  На сайте вы сможете подобрать прессованную, вибролитую или фасадную плитку, блоки и бордюры, водостоки, крышки на столбы и многое другое.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className={ourAdvan.ourAdvanBox}>
                <div className={ourAdvan.ouradvan__img}>
                  <img src={image3} alt="" />
                </div>
                <div className={ourAdvan.ourAdvanBox__content}>
                  <p className={ourAdvan.ourAdvanBox__title}>
                  Тротуарная плитка от производителя в широком ассортименте
                  </p>
                  <p className={ourAdvan.ourAdvanBox__desc}>
                  На сайте вы сможете подобрать прессованную, вибролитую или фасадную плитку, блоки и бордюры, водостоки, крышки на столбы и многое другое.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className={ourAdvan.ourAdvanBox}>
                <div className={ourAdvan.ouradvan__img}>
                  <img src={image4} alt="" />
                </div>
                <div className={ourAdvan.ourAdvanBox__content}>
                  <p className={ourAdvan.ourAdvanBox__title}>
                  Тротуарная плитка от производителя в широком ассортименте
                  </p>
                  <p className={ourAdvan.ourAdvanBox__desc}>
                  На сайте вы сможете подобрать прессованную, вибролитую или фасадную плитку, блоки и бордюры, водостоки, крышки на столбы и многое другое.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className={ourAdvan.ourAdvanBox}>
                <div className={ourAdvan.ouradvan__img}>
                  <img src={image5} alt="" />
                </div>
                <div className={ourAdvan.ourAdvanBox__content}>
                  <p className={ourAdvan.ourAdvanBox__title}>
                  Тротуарная плитка от производителя в широком ассортименте
                  </p>
                  <p className={ourAdvan.ourAdvanBox__desc}>
                  На сайте вы сможете подобрать прессованную, вибролитую или фасадную плитку, блоки и бордюры, водостоки, крышки на столбы и многое другое.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className={ourAdvan.ourAdvanBox}>
                <div className={ourAdvan.ouradvan__img}>
                  <img src={image6} alt="" />
                </div>
                <div className={ourAdvan.ourAdvanBox__content}>
                  <p className={ourAdvan.ourAdvanBox__title}>
                  Тротуарная плитка от производителя в широком ассортименте
                  </p>
                  <p className={ourAdvan.ourAdvanBox__desc}>
                  На сайте вы сможете подобрать прессованную, вибролитую или фасадную плитку, блоки и бордюры, водостоки, крышки на столбы и многое другое.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default OurAdvantages