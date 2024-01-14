import Header from './components/Header/Header';
import List from './components/List/List';

function App() {
  return (
    <>
      <Header />
      <div style={{ marginTop: 200, padding: 100}}>
        <h2>Content</h2>
        <List />
      </div>
    </>
  );
}

export default App;
