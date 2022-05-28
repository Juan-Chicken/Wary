import '../styles/Welcome.css';
import '../styles/App.css'
import Card from '../components/Card'

function Browse() {
  return (
    <div className="App">
        <div className='Welcome-message'>
          <h1>Browse Reports</h1>
          <h3>“feeling or showing caution about possible dangers or problems.”</h3>

          <div>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
        

    </div>
  );
}

export default Browse;
