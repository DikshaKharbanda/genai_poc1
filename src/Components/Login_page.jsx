import './Login_page.css';
import Login from './login';


function Login_page() {
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

export default Login_page;
