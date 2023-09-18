import React from 'react'
import about from './AboutUs.module.scss'
import aboutImage from '../../assets/AboutUs/Rectangle 45.png'

const AboutUs = () => {
  return (
    <>
      <div className={about.about}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className={about.about__image}>
                <img src={aboutImage} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className={about.about__content}>
                <p className={about.about__title1}>О нас</p>
                <p className={about.about__title2}>«Мастер Строй» - надежная и недорогая тротуарная плитка в Волоколамском районе</p>
                <p className={about.about__desc1}>
                  Наша компания готова помочь вам и с первым и со вторым аспектом данной задачи. В нашем каталоге вы сможете подобрать желаемый вариант материала и сразу заказать профессиональную укладку на вашем участке. Вниманию покупателей всегда доступна качественная и прочная тротуарная плитка от производителя по оптимальной стоимости.
                </p>
                <p className={about.about__desc2}>
                  Если вам нужна надежная тротуарная плитка, купить  в Волоколамском районе такой материал можно у нас, цена продукции из каталога вас приятно удивит и не ударит по бюджету. Оформить заказ можно прямо на сайте. Если в процессе выбора вам понадобится консультация специалиста, вы всегда можете заказать обратный звонок, используя специальную функцию на сайте, либо самостоятельно позвонить менеджеру по указанным телефонам.
                </p>
                <p className={about.about__desc3}>
                  Теперь если вам нужна тротуарная плитка, вы знаете где ее можно приобрести. «Мастер Строй» - компания-производитель, которая гарантирует достойный уровень качества по приятной цене.
                </p>
                <p className={about.about__desc4}>
                  ООО «МАСТЕ
                </p>
                <div className={about.about__btn}>
                  <a href="">Приобрести</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AboutUs