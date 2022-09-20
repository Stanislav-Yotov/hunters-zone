import styles from './App.module.css';
import Header from './components/header/Header';
import SearchBar from './components/search/SearchBar';
import Dropdowns from './components/dropdowns/Dropdowns';
import Slider from './components/slider/Slider';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
      <Dropdowns />
      <Slider />
      <Sidebar />
    </div>
  );
}

export default App;
