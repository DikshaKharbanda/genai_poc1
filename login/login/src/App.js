import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/login.jsx';

function App() {
  return (
    <>
      <div>
      <div className='image left'>
          <img src="ey_logo.png"/>
          <div className='text3'>
            <div className='text2'>CKYC</div>
            One stop Platform for KYC updation.
          </div>
      </div>
    <div className='login left'>
      <Login/>
    </div>
    </div>
    </>
  );
}

export default App;
