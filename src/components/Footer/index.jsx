import React from 'react'
import footer from './Footer.module.scss'
import image1 from '../../assets/Footer/1.png'
import image2 from '../../assets/Footer/2.png'

const Footer = () => {
  return (
    <>
    <div className={footer.footer}>
      <div className="container">
        <div className="row">
          <div className={footer.footerAll}>
            <div className="col-lg-6 col-md-6 col-12">
              <div className={footer.footerBox}>
                <h4>Магазин</h4>
                <a className='mb-3' href=""><img src={image1} alt="" /> Режим работы: с 8:00 до 20:00</a>
                <a href=""> <img src={image2} alt="" />+7 (499) 994-90-99</a>
                <a className={footer.number} href="">+7 (926) 105-94-14</a>
                <a className={footer.number} href="">+7 (910) 470-67-97</a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-12">
              <div className={footer.footerBox}>
                <h4>Каталог</h4>
                <a href="">Акции</a>
                <a href="">Тротуарная плитка</a>
                <a href="">Бордюры</a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className={footer.footerBox}>
                <h4>Сервисы</h4>
                <a href="">Дизайн-проект</a>
                <a href="">Укладка брусчатки</a>
                <a href="">Доставка</a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className={footer.footerBox}>
                <h4>О компании</h4>
                <a href="">Контакты</a>
                <a href="">Завод BRAER</a>
                <a href="">Портфолио</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mt-2 mb-3">
            <div className="copyright__content">
              <p className="copyright__title">
              © 2022 ООО "Мастер строй"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer   