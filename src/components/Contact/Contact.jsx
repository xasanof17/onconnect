import React from "react";
import { images } from "../../constants";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__document">
        <div className="select">
          <select name="" id="">
            <option value="Маъмурий низо">Маъмурий низо</option>
            <option value="Маъмурий низо">Жиноий низо</option>
          </select>
          <span>Хужжат тури</span>
        </div>
        <div className="select">
          <select name="" id="">
            <option value="Биринчи инстанция">Биринчи инстанция</option>
            <option value="Иккинчи инстанция">Иккинчи инстанция</option>
          </select>
          <span>Хужжат тури</span>
        </div>
      </div>
      <div className="contact__instance">
        <div className="contact__instance-top">
          <img src={images.instance} alt="contact__instance_icon" />
          <h1 className="contact__instance-top_title">
            Маъмурий низо - Биринчи инстанция
          </h1>
        </div>
        <div className="contact__instance-bottom">
          <div className="contact__instance-bottom_input">
            <span>Номер документа</span>
            <input type="text" placeholder="123456567890" />
          </div>
          <div className="contact__instance-bottom_data-doc">
            <label className="date-span">Дата документа</label>
            <input type="date" className="date-input" />
            <button>
              <img src={images.date} alt="icon" />
            </button>
          </div>
          <div className="contact__instance-bottom_data-doc">
            <label className="date-span">Кирим санаси</label>
            <input type="date" className="date-input" />
            <button>
              <img src={images.date} alt="icon" />
            </button>
          </div>
          <div className="contact__instance-bottom_select">
            <select name="" id="">
              <option value="Тип отправки">Тип отправки</option>
              <option value="Тип отправки">Тип отправки</option>
            </select>
          </div>
          <div className="contact__instance-bottom_select">
            <select name="" id="" className="selct">
              <option value="Манфаатдор идора">Манфаатдор идора</option>
              <option value="Манфаатдор идора">Манфаатдор идора</option>
            </select>
          </div>
          <div className="contact__instance-bottom_switch">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Колдик</p>
          </div>
        </div>
      </div>
      <div className="contact__app">
        <div className="contact__instance-top">
          <img src={images.app} alt="icon" />
          <h2 className="contact__instance-top_title">
            Ариза (шикоят) мазмуни
          </h2>
        </div>
        <div className="contact__app-bottom">
          <div className="contact__app-bottom_select">
            <span>Жавобгар</span>
            <select name="" id="">
              <option value="">PARPIYEVA SHAXLO SHOKIR QIZI</option>
              <option value="">PARPIYEVA SHAXLO SHOKIR QIZI</option>
            </select>
          </div>
          <div className="contact__app-bottom_select">
            <span>Иш туркуми</span>
            <select name="" id="">
              <option value="">
                2.2 - Маъмурий орган, фукаролар узини узи бошк...
              </option>
              <option value="">
                2.2 - Маъмурий орган, фукаролар узини узи бошк...
              </option>
            </select>
          </div>
          <div className="contact__app-bottom_select">
            <span>Иккиламчи иш туркуми</span>
            <select name="" id="">
              <option value="">
                2.2 - Маъмурий орган, фукаролар узини узи бошка...
              </option>
              <option value="">
                2.2 - Маъмурий орган, фукаролар узини узи бошка...
              </option>
            </select>
          </div>
          <div className="contact__app-bottom_select">
            <span>Кушимча иш туркумлари</span>
            <select name="" id="">
              <option value="">
                2.2 - Маъмурий орган, фукаролар узини узи бошка...
              </option>
              <option value="">
                2.2 - Маъмурий орган, фукаролар узини узи бошка...
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="contact__calc">
        <div className="contact__calc-top">
          <img src={images.calc} alt="icon" />
          <h2 className="contact__instance-top_title">
            Ариза (шикоят) мазмуни
          </h2>
        </div>
        <div className="contact__calc-bottom">
          <div className="contact__calc-bottom_block">
            <input
              type="text"
              className="payment_num"
              placeholder="Электрон тўлов рақами"
            />
            <button className="sup">
              <img src={images.support} alt="support" />
            </button>
          </div>
          <div className="contact__calc-bottom_block">
            <div className="contact__calc-bottom_block-price">
              <p>Ихтиёрий туланган давлат божи:</p>
              <span>40140000 сум</span>
            </div>
            <div className="contact__calc-bottom_block-select">
              <select name="" id="">
                <option value="">Почта харажати холати</option>
                <option value="">Почта харажати холати</option>
              </select>
            </div>
            <div className="contact__calc-bottom_block-btn">
              <a href="/contact">Чет эл валютасидаги тўлов</a>
            </div>
            <div className="contact__calc-bottom_block-result">
              <div className="contact__calc-bottom_block-result_currency">
                <label>Валюта</label>
                <select name="" id="" className="result-currency">
                  <option value="">1 - Сум</option>
                  <option value="">2 - Сум</option>
                </select>
              </div>
              <div className="contact__calc-bottom_block-result_receipt">
                <label>Квитанция рақами</label>
                <input
                  type="number"
                  className="result-receipt"
                  placeholder="193081573002"
                />
              </div>
              <div className="contact__calc-bottom_block-result_summa">
                <label>Суммаси</label>
                <input
                  type="number"
                  className="result-receipt"
                  placeholder="193081573002"
                />
              </div>
              <div className="contact__calc-bottom_block-result_date">
                <label>Санаси</label>
                <input type="date" className="date-input" />
                <button>
                  <img src={images.date} alt="icon" />
                </button>
              </div>
              <div className="contact__calc-bottom_block-result_delete">
                <a href="/contact">
                  <img src={images.del} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact__calc-bottom_block">
            <div className="contact__calc-bottom_block-price">
              <p>Ихтиёрий туланган давлат божи:</p>
              <span></span>
            </div>
            <div className="contact__calc-bottom_block-select">
              <select name="" id="">
                <option value="">ВКА харажати холати</option>
                <option value="">ВКА харажати холати</option>
              </select>
            </div>
            <div className="contact__calc-bottom_block-btn">
              <a href="/contact">Чет эл валютасидаги тўлов</a>
            </div>
            <div className="contact__calc-bottom_block-result">
              <div className="contact__calc-bottom_block-result_currency">
                <label>Валюта</label>
                <select name="" id="" className="result-currency">
                  <option value="">1 - Сум</option>
                  <option value="">2 - Сум</option>
                </select>
              </div>
              <div className="contact__calc-bottom_block-result_receipt">
                <label>Квитанция рақами</label>
                <input
                  type="number"
                  className="result-receipt"
                  placeholder="193081573002"
                />
              </div>
              <div className="contact__calc-bottom_block-result_summa">
                <label>Суммаси</label>
                <input
                  type="number"
                  className="result-receipt"
                  placeholder="193081573002"
                />
              </div>
              <div className="contact__calc-bottom_block-result_date">
                <label>Санаси</label>
                <input type="date" className="date-input" />
                <button>
                  <img src={images.date} alt="icon" />
                </button>
              </div>
              <div className="contact__calc-bottom_block-result_delete">
                <a href="/contact">
                  <img src={images.del} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact__calc-bottom_block">
            <div className="contact__calc-bottom_block-price">
              <p>Ихтиёрий туланган давлат божи:</p>
              <span></span>
            </div>
            <div className="contact__calc-bottom_block-select">
              <select name="" id="">
                <option value="">Давлат божи холати</option>
                <option value="">Давлат божи холати</option>
              </select>
            </div>
            <div className="contact__calc-bottom_block-btn">
              <a href="/contact">Чет эл валютасидаги тўлов</a>
            </div>
            <div className="contact__calc-bottom_block-result">
              <div className="contact__calc-bottom_block-result_currency">
                <label>Валюта</label>
                <select name="" id="" className="result-currency">
                  <option value="">1 - Сум</option>
                  <option value="">2 - Сум</option>
                </select>
              </div>
              <div className="contact__calc-bottom_block-result_receipt">
                <label>Квитанция рақами</label>
                <input
                  type="number"
                  className="result-receipt"
                  placeholder="193081573002"
                />
              </div>
              <div className="contact__calc-bottom_block-result_summa">
                <label>Суммаси</label>
                <input
                  type="number"
                  className="result-receipt"
                  placeholder="193081573002"
                />
              </div>
              <div className="contact__calc-bottom_block-result_date">
                <label>Санаси</label>
                <input type="date" className="date-input" />
                <button>
                  <img src={images.date} alt="icon" />
                </button>
              </div>
              <div className="contact__calc-bottom_block-result_delete">
                <a href="/contact">
                  <img src={images.del} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact__comment">
        <div className="contact__comment-top">
          <img src={images.comment} alt="icon" />
          <h2 className="contact__instance-top_title">Бошка маълумотлар</h2>
        </div>
        <div className="contact__comment-bottom">
          <textarea className="message" name="" id="" placeholder='Изох'>
            {/* Изох */}
          </textarea>
          <div className="contact__comment-bottom-btns">
            <a href="/contact" className="dark">
              Бекор килиш
            </a>
            <a href="/contact" className="light">
              Саклаш
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
