import styles from './App.module.css';
import Header from './components/header/Header';
import SearchBar from './components/search/SearchBar';
import Dropdowns from './components/dropdowns/Dropdowns';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
      <Dropdowns />
    </div>
  );
}

export default App;
