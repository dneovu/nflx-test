import { NavLink } from 'react-router';
import LangIcon from '../../assets/LangIcon.svg?react';
import TelegramIcon from '../../assets/TelegramIcon.svg?react';
import VKIcon from '../../assets/VKIcon.svg?react';
import WhatsappIcon from '../../assets/WhatsappIcon.svg?react';

const Footer = () => {
  return (
    <footer className="mt-5 flex w-full justify-between rounded-2xl bg-white p-6">
      <NavLink to="/">
        <h2 className="hover:text-accent text-2xl font-bold uppercase">
          Qpick
        </h2>
      </NavLink>
      <nav aria-label="Дополнительная навигация">
        <ul className="flex flex-col gap-2.5">
          <li>
            <NavLink to="/favorites">
              <p className="hover:text-accent">Избранное</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <p className="hover:text-accent">Корзина</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <p className="hover:text-accent">Контакты</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col justify-between">
        <NavLink to="#">
          <p className="hover:text-accent">Условия сервиса</p>
        </NavLink>
        <div className="flex gap-4">
          <LangIcon />
          <div className="flex gap-4 select-none">
            <div>
              <input
                type="radio"
                name="lang"
                id="rus"
                defaultChecked
                className="peer hidden"
              />
              <label
                htmlFor="rus"
                className="text-primary peer-checked:text-accent hover:text-accent cursor-pointer peer-checked:font-bold"
              >
                Рус
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="lang"
                id="eng"
                className="peer hidden"
              />
              <label
                htmlFor="eng"
                className="text-primary peer-checked:text-accent hover:text-accent cursor-pointer peer-checked:font-bold"
              >
                Eng
              </label>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Социальные сети">
        <ul className="flex items-center gap-6">
          <li>
            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
              <VKIcon className="fill-primary hover:fill-accent size-6" />
            </a>
          </li>
          <li>
            <a
              href="https://web.telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon className="fill-primary hover:fill-accent size-6" />
            </a>
          </li>
          <li>
            <a
              href="https://whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon className="fill-primary hover:fill-accent size-6" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
