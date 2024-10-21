import Home from './Container/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import Contacts from './Container/Contacts/Contacts.tsx';
import { ClothesBLock } from './type';
import Clothes from './Container/Clothes/Clothes.tsx';
import ToolBar from './Components /ToolBar/ToolBar.tsx';


const App = () => {
  const clothes: ClothesBLock[] = [
    {
      id: "1",
      name: "Hoodie",
      photo: 'https://i.pinimg.com/564x/e8/8b/82/e88b8251f22e6018ab5100ab184acd8a.jpg',
      price: 1000,
    },
    {
      id: "2",
      name: "T-shirt",
      photo: 'https://i.pinimg.com/564x/36/c4/39/36c43962464d7035c5387e86e6b681da.jpg',
      price: 1500,
    },
    {
      id: "3",
      name: "Sports pants",
      photo: 'https://i.pinimg.com/enabled/564x/2e/a6/05/2ea605676755541df7d8086bd0eada61.jpg',
      price: 1700,
    },
    {
      id: "4",
      name: "Sweater",
      photo: 'https://i.pinimg.com/564x/34/5a/fe/345afef0073dfb34ab27a31ca3bce8b2.jpg',
      price: 2000,
    }
  ];
  return (
    <>
      <header className="App-header">
        <ToolBar/>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/collection" element={<Clothes clothes={clothes}/>}/>
      </Routes>
    </>
  );
}
export default App

