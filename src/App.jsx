import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card';
function App() {
  
  return (
    <>
      <div>
        <Navbar />
        <div className="cards">
          <Card title="Card-1" description="desc of card -1" />
          <Card title="Card-2" description="desc of card -2" />
          <Card title="Card-3" description="desc of card -3" />
          <Card title="Card-4" description="desc of card -4" />
        </div>
      </div>
    </>
  );
}

export default App;
