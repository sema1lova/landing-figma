import React from 'react'
import catPro from './CatalogProducts.module.scss'
import image1 from '../../assets/CatalogProducts/Rectangle 20.png'
import image2 from '../../assets/CatalogProducts/Rectangle 21.png'
import image3 from '../../assets/CatalogProducts/Rectangle 22.png'
import image4 from '../../assets/CatalogProducts/Rectangle 23.png'
import image5 from '../../assets/CatalogProducts/Rectangle 28.png'
import image6 from '../../assets/CatalogProducts/Rectangle 29.png'
import image7 from '../../assets/CatalogProducts/Rectangle 30.png'
import image8 from '../../assets/CatalogProducts/Rectangle 31.png'

function CatalogProducts () {
  return (
    <>
      <div className={catPro.catalogProducts}>
        <div className="container">
          <div className="row text-center mt-5 mb-5">
            <h1>Каталог продукции</h1>
          </div>
          <div className="row">
            <div className={catPro.catProAll}>
              <div className="col-lg-3 col-md-6 col-12">
                <div className={catPro.catProBox}>
                  <div className={catPro.catProBox__image}>
                  <img src={image1} alt="" />
                  </div>
                    
                  <div className={catPro.catProBox__content}>
                    <p className={catPro.catProBox__title}>
                    Прессованная плитка
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 col-12">
                <div className={catPro.catProBox}>
                  <div className={catPro.catProBox__image}>
                  <img src={image2} alt="" />
                  </div>
                    
                  <div className={catPro.catProBox__content}>
                    <p className={catPro.catProBox__title}>
                    Прессованная плитка
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className={catPro.catProBox}>
                  <div className={catPro.catProBox__image}>
                  <img src={image3} alt="" />
                  </div>
                    
                  <div className={catPro.catProBox__content}>
                    <p className={catPro.catProBox__title}>
                    Прессованная плитка
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className={catPro.catProBox}>
                  <div className={catPro.catProBox__image}>
                  <img src={image4} alt="" />
                  </div>
                    
                  <div className={catPro.catProBox__content}>
                    <p className={catPro.catProBox__title}>
                    Прессованная плитка
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className={catPro.catProBox}>
                  <div className={catPro.catProBox__image}>
                  <img src={image5} alt="" />
                  </div>
                    
                  <div className={catPro.catProBox__content}>
                    <p className={catPro.catProBox__title}>
                    Прессованная плитка
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className={catPro.catProBox}>
                  <div className={catPro.catProBox__image}>
                  <img src={image6} alt="" />
                  </div>
                    
                  <div className={catPro.catProBox__content}>
                    <p className={catPro.catProBox__title}>
                    Прессованная плитка
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 col-12">
                <div className={catPro.catProBox}>
                  <div className={catPro.catProBox__image}>
                  <img src={image7} alt="" />
                  </div>
                    
                  <div className={catPro.catProBox__content}>
                    <p className={catPro.catProBox__title}>
                    Прессованная плитка
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className={catPro.catProBox}>
                  <div className={catPro.catProBox__image}>
                  <img src={image8} alt="" />
                  </div>
                    
                  <div className={catPro.catProBox__content}>
                    <p className={catPro.catProBox__title}>
                    Прессованная плитка
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className={catPro.catPro__btn}>
              <a href="">Больше товаров</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CatalogProducts