import React from 'react'
import topHeader from './TopHeader.module.scss'
// import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <>
      <div className={topHeader.topHeader}>
        <div className="container">
          <div className="row ">
            <div className={topHeader.topHeaderAll}>
              <div className={topHeader.topHeaderBox}>
                <div className={topHeader.topHeaderBox__icon}>
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className={topHeader.topHeaderBox__content}>
                  <p>Волоколамский район, пос. Чисмена, ул. Центральная, 1</p>
                </div>
              </div>
              <div className={topHeader.topHeaderBox}>
                <div className={topHeader.topHeaderBox__icon}>
                  <i className="fa-regular fa-clock" />
                </div>
                <div className={topHeader.topHeaderBox__content}>
                  <p>Режим работы: с 8:00 до 20:00</p>
                </div>
              </div>
              <div className={topHeader.topHeaderBox}>
                <div className={topHeader.topHeaderBox__icon}>
                  <i className="fa-solid fa-phone" />
                </div>
                <div className={topHeader.topHeaderBox__content}>
                  <p>+7 (926) 105-94-14 +7 (910) 470-67-97</p>
                </div>
              </div>
              <div className={topHeader.topHeaderBox}>
                <div className={topHeader.topHeaderBox__content}>
                  <p>+7 (499) 994-90-99</p>
                </div>
              </div>

              <div className={topHeader.topHeaderBox}>
                <div className={topHeader.topHeaderBox__content}>
                  <a href='https://www.figma.com/file/2pNLP5xRc1dULSCiaIWw7F/landing?type=design&node-id=1-2&mode=design&t=eYOlJJu4axlme6Yx-0'>Закзать звонок</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default TopHeader