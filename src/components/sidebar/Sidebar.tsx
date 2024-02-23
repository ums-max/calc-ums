import styled from "styled-components"
import { useAppStore } from "../../store/store"
import SideLogo from "./SideLogo"
import { Link } from "react-router-dom"
import BtnIcon from "../../ui/BtnIcon"

// Variable
const asideWidth = 300

// Sidebar
const Aside = styled.aside<{ $opened: boolean }>`
  background: var(--color-bg);
  border-right: 1px solid var(--color-line);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${asideWidth}px;
  z-index: 1000;
  transform: translateX(${props => props.$opened ? 'none' : `-${asideWidth}px`});
  transition: all 100ms linear;
`
const AsideItem = styled.div`
  padding: 14px 20px;
`
const Overlay = styled.div<{ $opened: boolean }>`
  background: rgba(0,0,0,0.75);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 990;
  display: ${props => props.$opened ? 'block' : 'none'};
`
const Nav = styled.ul`
  color: var(--color-text);
  display: block;
  margin: 0;
  padding: 0;
  li {
    border-bottom: 1px solid var(--color-line);
    font-size: 14px;
    list-style: none;
    a {
      align-items: center;
      color: var(--color-text);
      display: flex;
      padding: 14px 20px;
      text-decoration: none;
      transition: all 200ms ease-in-out;
      &:hover {
        background: var(--color-line);
      }
      svg {
        fill: var(--color-svg);
        width: 20px;
        margin: 0 14px 0 0;
      }
    }
  }
`

const Sidebar: React.FC = () => {
  const { aside, setAside, theme, toggleTheme } = useAppStore()
  
  return (
    <>
      <Aside $opened={aside}>
        <SideLogo title="Калькулятор металла и краски" />
        
        <Nav>
          <li>
            <Link to="/" onClick={() => setAside()}>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M322.248 85.684L61.432 224.717l-41.145 109.94 7.233 3.85 153.673 81.8 308.495-164.215-37.752-99.903-129.688-70.506zm119.035 95.187l25.11 66.45-102.56 54.594L430.39 186.64l10.893-5.77zm-89.576 47.417L284.957 343.9l-41.67 22.182 72.195-118.62 36.225-19.175zM72.38 248.78l28.21 14.933-54.012 54.012L72.38 248.78zm210.827 15.767L211.19 382.87l.26.16-17.208 9.16 5.795-83.618 83.17-44.025zm-165.334 8.312l16.963 8.98-60.445 60.445-16.93-9.012 60.413-60.414zM181.42 306.9l-6.174 89.07-54.1-28.798 60.274-60.272z"/></svg>
              Калькулятор металла
            </Link>
          </li>
          <li>
            <Link to="/paint" onClick={() => setAside()}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.002 2h-4a1 1 0 0 0-1 1v3.812a5.998 5.998 0 0 0-3 5.188v.988L3 13l.002.072V21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a5.999 5.999 0 0 0-3-5.188V3a1 1 0 0 0-1-1zm-3 4V4h2v2h-2zm5.001 14h-8v-6h8v6zm-8.001-8c0-2.206 1.794-4 4-4s4 1.794 4 4h-8zm8.001-9h2v2h-2zM16 3h2v2h-2zm0 3h2v2h-2zm3-3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"/></svg>
              Калькулятор краски
            </Link>
          </li>
          <li>
            <a href="#">
              <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 3.75h-24c-1.794 0.002-3.248 1.456-3.25 3.25v18c0.002 1.794 1.456 3.248 3.25 3.25h24c1.794-0.001 3.249-1.456 3.25-3.25v-18c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM4 6.25h24c0.219 0.001 0.415 0.097 0.549 0.248l0.001 0.001-12.55 8.964-12.55-8.964c0.135-0.152 0.331-0.248 0.549-0.249h0zM28 25.75h-24c-0.414-0-0.75-0.336-0.75-0.75v-15.571l12.023 8.588c0.031 0.018 0.069 0.037 0.108 0.054l0.008 0.003c0.031 0.018 0.068 0.037 0.107 0.054l0.008 0.003c0.145 0.070 0.315 0.113 0.494 0.118l0.002 0h0.002c0.181-0.005 0.351-0.048 0.503-0.121l-0.008 0.003c0.046-0.020 0.084-0.039 0.12-0.060l-0.006 0.003c0.047-0.020 0.085-0.040 0.121-0.061l-0.006 0.003 12.023-8.588v15.571c-0 0.414-0.336 0.75-0.75 0.75v0z"></path>
              </svg>
              Написать разработчику
            </a>
          </li>
          <li>
            <a href="#">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" />
              </svg>
              Рассказать другу
            </a>
          </li>
          <li>
            <Link to="/info" onClick={() => setAside()}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z" />
                <path d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" />
                <path d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z" />
              </svg>
              Информация
            </Link>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.801 550.801">
                <g>
                  <path d="M136.129,282.393c-2.753-9.181-5.508-20.656-7.802-29.834h-0.453c-2.3,9.178-4.602,20.891-7.117,29.834l-9.181,32.827
                    h34.188L136.129,282.393z"/>
                  <path d="M270.18,251.641c-7.117,0-11.934,0.686-14.468,1.377v45.67c2.987,0.686,6.661,0.918,11.712,0.918
                    c18.597,0,30.062-9.408,30.062-25.255C297.486,260.128,287.614,251.641,270.18,251.641z"/>
                  <path d="M488.427,197.019h-13.226v-63.822c0-0.401-0.063-0.799-0.116-1.205c-0.021-2.531-0.828-5.023-2.563-6.993L366.325,3.694
                    c-0.031-0.034-0.063-0.045-0.084-0.076c-0.633-0.709-1.371-1.298-2.151-1.804c-0.232-0.158-0.465-0.287-0.707-0.422
                    c-0.675-0.366-1.393-0.675-2.131-0.896c-0.2-0.053-0.379-0.135-0.58-0.19C359.871,0.119,359.037,0,358.193,0H97.201
                    c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.378c-17.049,0-30.874,13.818-30.874,30.87v160.542
                    c0,17.044,13.824,30.876,30.874,30.876h13.223V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.601-9.693,21.601-21.601
                    V419.302h13.226c17.044,0,30.87-13.827,30.87-30.87V227.89C519.297,210.832,505.471,197.019,488.427,197.019z M97.201,21.601
                    h250.193v110.51c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108h-356.4V21.601z M332.143,273.444c0,15.14-5.052,27.997-14.222,36.719
                    c-11.944,11.243-29.61,16.3-50.274,16.3c-4.583,0-8.709-0.237-11.929-0.69v55.308h-34.652V228.456
                    c10.79-1.83,25.943-3.206,47.274-3.206c21.584,0,36.951,4.126,47.287,12.382C325.493,245.439,332.143,258.293,332.143,273.444z
                    M95.516,381.08h-36.26l47.271-154.691h45.9l47.965,154.691h-37.645l-11.929-39.704h-44.292L95.516,381.08z M453.601,523.347
                    h-356.4V419.302h356.4V523.347z M440.259,381.08l-37.874-66.783l-13.31,16.295v50.488h-34.657V226.389h34.657v68.392h0.686
                    c3.438-5.964,7.113-11.47,10.558-16.985l35.121-51.411h42.909l-51.188,65.87l53.937,88.815h-40.838V381.08z"/>
                </g>
              </svg>
              Скачать на телефон
            </a>
          </li>
        </Nav>
        <AsideItem>
          <BtnIcon areaLabel="Смена цвета темы" classname={`switchIcon ${theme ? 'active' : ''}`} handler={() => toggleTheme()} />
        </AsideItem>
      </Aside>
      <Overlay $opened={aside} onClick={() => setAside()} />
    </>
  )
}

export default Sidebar
