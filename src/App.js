import styles from './App.module.css';
import Header from './components/header/Header';
import SearchBar from './components/search/SearchBar';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
