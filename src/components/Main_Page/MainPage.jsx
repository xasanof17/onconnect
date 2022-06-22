import React, { useState } from "react";
import { images } from "../../constants";
import "./Main_Page.scss";

const MainPage = () => {
  const [show1, setShow1] = useState("false");
  const [show2, setShow2] = useState("false");
  const [show3, setShow3] = useState("false");
  const Show1 = () => {
    setShow1((prevState) => !prevState);
  };
  const Show2 = () => {
    setShow2((prevState) => !prevState);
  };
  const Show3 = () => {
    setShow3((prevState) => !prevState);
  };
  return (
    <section className="onconnect">
      <nav className="onconnect_nav">
        <div className="onconnect_nav-content">
          <ul className="onconnect_nav-content_list">
            <li className="onconnect_nav-content_item">
              <a href="/about" className="onconnect_nav-content_link active">
                Электрон кабул
              </a>
              <span>3</span>
            </li>
            <li className="onconnect_nav-content_item">
              <a href="/contact" className="onconnect_nav-content_link">
                Руйхатга олиш
              </a>
              <span>3</span>
            </li>
            <li className="onconnect_nav-content_item">
              <a href="/contact" className="onconnect_nav-content_link">
                Таксимаш
              </a>
            </li>
            <li className="onconnect_nav-content_item">
              <a href="/contact" className="onconnect_nav-content_link">
                Иш юритишни тиклаш
              </a>
            </li>
            <li className="onconnect_nav-content_item">
              <a href="/contact" className="onconnect_nav-content_link">
                Натижани кабул килиш
              </a>
            </li>
            <li className="onconnect_nav-content_item">
              <a href="/contact" className="onconnect_nav-content_link">
                Кайта таксимлаш
              </a>
            </li>
            <li className="onconnect_nav-content_item">
              <a href="/about" className="onconnect_nav-content_link">
                Учирилган
              </a>
            </li>
            <li className="onconnect_nav-content_item">
              <a href="/about" className="onconnect_nav-content_link">
                Рад этилган
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="onconnect__content">
        <div className="onconnect__content-left">
          <div className="onconnect__content-left_form">
            <form action="" className="form" method="get">
              <a href="/about" className="filter">
                <img src={images.filter} alt="filter" />
              </a>
              <input type="search" className="input" placeholder="Поиск" />
              <button className="search" type="search">
                <img src={images.search} alt="search" />
              </button>
            </form>
          </div>
          <div className="onconnect__content-left_card active">
            <div className="onconnect__content-left_card-top">
              <span className="num__decision">1-2676-2021/5677</span>
              <span className="num__date">
                <img src={images.download} alt="icon" />
                12.02.2021
              </span>
              <span className="num__time">
                <img src={images.decision} alt="icon" />
                12.02.2021 - 12:00
              </span>
            </div>
            <div className="onconnect__content-left_card-content">
              <p>10- Сайлов комиссиясининг харакатлари низолаш тугрисида</p>
              <span>Тулик канаотлантирилган</span>
            </div>
          </div>
          <div className="onconnect__content-left_card">
            <div className="onconnect__content-left_card-top">
              <span className="num__decision">1-2676-2021/5677</span>
              <span className="num__date">
                <img src={images.download} alt="icon" />
                12.02.2021
              </span>
              <span className="num__time">
                <img src={images.decision} alt="icon" />
                12.02.2021 - 12:00
              </span>
            </div>
            <div className="onconnect__content-left_card-content">
              <p>10- Сайлов комиссиясининг харакатлари низолаш тугрисида</p>
              <span>Тулик канаотлантирилган</span>
            </div>
          </div>
          <div className="onconnect__content-left_card">
            <div className="onconnect__content-left_card-top">
              <span className="num__decision">1-2676-2021/5677</span>
              <span className="num__date">
                <img src={images.download} alt="icon" />
                12.02.2021
              </span>
              <span className="num__time">
                <img src={images.decision} alt="icon" />
                12.02.2021 - 12:00
              </span>
            </div>
            <div className="onconnect__content-left_card-content">
              <p>10- Сайлов комиссиясининг харакатлари низолаш тугрисида</p>
              <span>Тулик канаотлантирилган</span>
            </div>
          </div>
          <div className="onconnect__content-left_card">
            <div className="onconnect__content-left_card-top">
              <span className="num__decision">1-2676-2021/5677</span>
              <span className="num__date">
                <img src={images.download} alt="icon" />
                12.02.2021
              </span>
              <span className="num__time">
                <img src={images.decision} alt="icon" />
                12.02.2021 - 12:00
              </span>
            </div>
            <div className="onconnect__content-left_card-content">
              <p>10- Сайлов комиссиясининг харакатлари низолаш тугрисида</p>
              <span>Тулик канаотлантирилган</span>
            </div>
          </div>
          <div className="onconnect__content-left_card">
            <div className="onconnect__content-left_card-top">
              <span className="num__decision">1-2676-2021/5677</span>
              <span className="num__date">
                <img src={images.download} alt="icon" />
                12.02.2021
              </span>
              <span className="num__time">
                <img src={images.decision} alt="icon" />
                12.02.2021 - 12:00
              </span>
            </div>
            <div className="onconnect__content-left_card-content">
              <p>10- Сайлов комиссиясининг харакатлари низолаш тугрисида</p>
              <span>Тулик канаотлантирилган</span>
            </div>
          </div>
          <div className="onconnect__content-left_bottom">
            <p>
              (<span className="first">7</span> тадан{" "}
              <span className="second">7</span>)
            </p>
            <div className="onconnect__content-left_bottom-btns">
              <button type="button" className="prev">
                <img src={images.sliderLeft} alt="prev" />
              </button>
              <button type="button" className="nums">
                1
              </button>
              <button type="button" className="next">
                <img src={images.sliderRight} alt="next" />
              </button>
            </div>
          </div>
        </div>
        <button className="onconnect__content-btn">
          <img src={images.button} alt="button" />
        </button>
        <div className="onconnect__content-right">
          <div className="container">
            <div className="onconnect__content-right_top">
              <h2>Маъмурий низо - Биринчи инстанция</h2>
              <div className="onconnect__content-right_top-box">
                <table className="table">
                  <thead className="thead">
                    <tr className="box-tr">
                      <th className="doc__name">Хужжат номери</th>
                      <th className="doc__name">Хужжат санаси</th>
                      <th className="doc__name">Кирим санаси</th>
                      <th className="doc__name">Жунатиш тури</th>
                      <th className="doc__name">Манфаатдор идора</th>
                    </tr>
                  </thead>
                  <tbody className="tbody">
                    <tr className="box-tr">
                      <td className="doc__value">1234567890</td>
                      <td className="doc__value">12.02.2021</td>
                      <td className="doc__value">12.02.2021</td>
                      <td className="doc__value">Почта</td>
                      <td className="doc__value">Идоранинг номи</td>
                    </tr>
                  </tbody>
                </table>
                <a href="/about" className="btn">
                  Тулик куриш
                </a>
              </div>
            </div>
            <div className="onconnect__content-right_bottom">
              <h2>Ариза (Шикоят) мазмуни</h2>
              <div className="onconnect__content-right_bottom-box">
                <div className="onconnect__content-right_bottom-box_top">
                  <div className="box__name ml">
                    <div className="num">№</div>
                    Иш туркуми
                  </div>
                  <div className="box__name ml">Кушимча иш туркуми</div>
                  <div className="box__name">Иккиламчи иш туркуми</div>
                </div>
                <div className="onconnect__content-right_bottom-box_bottom">
                  <div className="onconnect__content-right_bottom-box_bottom-box">
                    <div className="onconnect__content-right_bottom-box_bottom-box_content">
                      <div
                        className="onconnect__content-right_bottom-box_bottom-box_content-top"
                        onClick={() => Show1()}
                      >
                        <div className="num">1</div>
                        <h4 className="about">
                          10-Сайлов комиссияларнинг харакатлари низолашиш
                          тугрисида
                        </h4>
                        <h4 className="about">
                          2.2 - Маъмурий орган, фукаролар узини узи бошкариш
                          органларининг ва...{" "}
                        </h4>
                        <h4 className="about">
                          2.2 - Маъмурий орган, фукаролар узини узи бошкариш
                          органл...
                        </h4>
                        <img src={images.arrowTop} alt="arrowTop" />
                      </div>
                      <div
                        className={
                          show1
                            ? "onconnect__content-right_bottom-box_bottom-box_content-bottom"
                            : "onconnect__content-right_bottom-box_bottom-box_content-bottom active"
                        }
                      >
                        <table className="table">
                          <thead className="thead">
                            <tr className="tr">
                              <th className="doc__name">Карор раками</th>
                              <th className="doc__name">Карор санаси</th>
                              <th className="doc__name">
                                Карор кучга кирган сана{" "}
                              </th>
                              <th className="doc__name">Бекор килиш учун асос</th>
                              <th className="doc__name">Маъмурий орган номи</th>
                            </tr>
                          </thead>
                          <tbody className="tbody">
                            <tr className="tr">
                              <td className="doc__value">1234567890</td>
                              <td className="doc__value">12.03.2021</td>
                              <td className="doc__value">12.03.2021</td>
                              <td className="doc__value">Келтирилган асос</td>
                              <td className="doc__value">Маъмурий орган номи</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Карорни имзолаган шахс</th>
                            </tr>
                            <tr>
                              <td>ANTONYUK SERGEY ALEKSANDROVICH</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    {/* second */}
                    <div className="onconnect__content-right_bottom-box_bottom-box_content">
                      <div
                        className="onconnect__content-right_bottom-box_bottom-box_content-top"
                        onClick={() => Show2()}
                      >
                        <div className="num">2</div>
                        <h4 className="about">
                          10-Сайлов комиссияларнинг харакатлари низолашиш
                          тугрисида
                        </h4>
                        <h4 className="about">
                          2.2 - Маъмурий орган, фукаролар узини узи бошкариш
                          органларининг ва...{" "}
                        </h4>
                        <h4 className="about">
                          2.2 - Маъмурий орган, фукаролар узини узи бошкариш
                          органл...
                        </h4>
                        <img src={images.arrowTop} alt="arrowTop" />
                      </div>
                      <div
                        className={
                          show2
                            ? "onconnect__content-right_bottom-box_bottom-box_content-bottom"
                            : "onconnect__content-right_bottom-box_bottom-box_content-bottom active"
                        }
                      >
                        <table className="table">
                          <thead className="thead">
                            <tr className="tr">
                              <th className="doc__name">Карор раками</th>
                              <th className="doc__name">Карор санаси</th>
                              <th className="doc__name">
                                Карор кучга кирган сана{" "}
                              </th>
                              <th className="doc__name">Бекор килиш учун асос</th>
                              <th className="doc__name">Маъмурий орган номи</th>
                            </tr>
                          </thead>
                          <tbody className="tbody">
                            <tr className="tr">
                              <td className="doc__value">1234567890</td>
                              <td className="doc__value">12.03.2021</td>
                              <td className="doc__value">12.03.2021</td>
                              <td className="doc__value">Келтирилган асос</td>
                              <td className="doc__value">Маъмурий орган номи</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Карорни имзолаган шахс</th>
                            </tr>
                            <tr>
                              <td>ANTONYUK SERGEY ALEKSANDROVICH</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    {/* third */}
                    <div className="onconnect__content-right_bottom-box_bottom-box_content">
                      <div
                        className="onconnect__content-right_bottom-box_bottom-box_content-top"
                        onClick={() => Show3()}
                      >
                        <div className="num">3</div>
                        <h4 className="about">
                          10-Сайлов комиссияларнинг харакатлари низолашиш
                          тугрисида
                        </h4>
                        <h4 className="about">
                          2.2 - Маъмурий орган, фукаролар узини узи бошкариш
                          органларининг ва...
                        </h4>
                        <h4 className="about">
                          2.2 - Маъмурий орган, фукаролар узини узи бошкариш
                          органл...
                        </h4>
                        <img src={images.arrowTop} alt="arrowTop" />
                      </div>
                      <div
                        className={
                          show3 
                            ? "onconnect__content-right_bottom-box_bottom-box_content-bottom"
                            : "onconnect__content-right_bottom-box_bottom-box_content-bottom active"
                        }
                      >
                        <table className="table">
                          <thead className="thead">
                            <tr className="tr">
                              <th className="doc__name">Карор раками</th>
                              <th className="doc__name">Карор санаси</th>
                              <th className="doc__name">
                                Карор кучга кирган сана{" "}
                              </th>
                              <th className="doc__name">Бекор килиш учун асос</th>
                              <th className="doc__name">Маъмурий орган номи</th>
                            </tr>
                          </thead>
                          <tbody className="tbody">
                            <tr className="tr">
                              <td className="doc__value">1234567890</td>
                              <td className="doc__value">12.03.2021</td>
                              <td className="doc__value">12.03.2021</td>
                              <td className="doc__value">Келтирилган асос</td>
                              <td className="doc__value">Маъмурий орган номи</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Карорни имзолаган шахс</th>
                            </tr>
                            <tr>
                              <td>ANTONYUK SERGEY ALEKSANDROVICH</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="onconnect__content-right_btns">
              <a href="/about" className="onconnect__content-right_btns-btn">
                Иш муддатини узайтириш
              </a>
              <a href="/about" className="onconnect__content-right_btns-btn">
                Кайта таксимлаш
              </a>
              <a href="/about" className="onconnect__content-right_btns-btn">
                Учириш
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
