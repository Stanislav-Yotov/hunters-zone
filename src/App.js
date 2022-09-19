import styles from './App.module.css';
import Header from './components/header/Header';
import SearchBar from './components/search/SearchBar';
import Dropdowns from './components/dropdowns/Dropdowns';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
      <Dropdowns />
      <Slider />
    </div>
  );
}

export default App;
