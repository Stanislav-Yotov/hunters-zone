import styles from './App.module.css';
import Header from './components/header/Header';
import SearchBar from './components/search/SearchBar';
import Dropdowns from './components/dropdowns/Dropdowns';
import Slider from './components/slider/Slider';
import Sidebar from './components/sidebar/Sidebar';
import FindLocation from './components/sidebar/FindLocation';
import SidebarRight from './components/sidebar/SidebarRight';
import { useState } from 'react';

function App() {

  const [clicked, setClicked] = useState(false);
  function clickHandler() {
    if(!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
    console.log(clicked);
  }

  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
      <Dropdowns />
      <Slider />
      <Sidebar onClick={clickHandler} />
      {clicked && <FindLocation />}
      <SidebarRight /> 
    </div>
  );
}

export default App;
