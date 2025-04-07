import './styles/normalize.css'
import './App.scss'
import Header from "./components/Header.jsx";
import Appeal from "./components/Appeal.jsx";
import Map from "./components/Map.jsx";
import Mission from "./components/Mission.jsx";
import Business from "./components/Business.jsx";

function App() {
    const headerItems = ['Облачные решения','Кибербезопасность','Импортозамещение','Цифровая трансформация']
    const regionsArr = ['Все','Москва','Центр','Северо-Запад','Юг','Волга','Урал','Сибирь','Дальний восток']
    const businessesArr = [
        {
            img:"./img/IMG 2.png",
            desc:"Решения Softline"
        },
        {
            img:"./img/IMG 4 1.png",
            desc:"Кибербезопасность"
        },
        {
            img:"./img/IMG3.png",
            desc:"Импортозамещение"
        },
        {
            img:"./img/origin-mode_615x260_2 1.png",
            desc:"Облачные решения"
        },
        {
            img:"./img/origin-mode_615x260_ итог 4.png",
            desc:"Цифровая трансформмация и разработка ПО"
        },
        {
            img:"./img/IMG 1 1.png",
            desc:"Техническая поддержка Softline"
        }
    ]
  return (
    <div>
      <Header headerItemsArr={headerItems} />
      <Appeal />
      <Map regions={regionsArr} />
      <Mission/>
      <Business businesses={businessesArr} />
    </div>
  )
}

export default App
