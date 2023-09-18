import React from 'react'
import slider from './Slider.module.scss'

const Slider = () => {
    return (
        <>
            <div className={slider.slider}>
                <div className="conitaner">
                      <div className="col-lg-12 col-md-12 col-12">
                      <div className={slider.slider__content}>
                            <p className={slider.slider__title}>
                                Тротуарная плитка в Волоколамске
                                напрямую от производителя
                            </p>
                            <p className={slider.slider__desc}>
                                Вам нужна качественная и недорогая тротуарная плитка в Волоколамске? Мы готовы предложить отличную возможность приобрести современные модели с высокими показателями эстетики и механической стойкости напрямую от производителя – компании «Мастер Строй».
                            </p>
                            <a className={slider.slider__btn} href="">Каталог</a>
                        </div>
                      </div>
                </div>
            </div>
        </>
    )
}

export default Slider