import logo from './images/logo.svg';
import mockups from './images/illustration-mockups.svg';

import './App.scss';

function App() {
  return (
    <article className='huddle'>
      <section className='hudle-logo'>
      <img className='logo' src={logo} alt=''/>
      <section className='mockups'>
        <img src={mockups} alt=''/>
      </section>
      </section>
      <section className='huddle-info'>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
        <button>Register</button>
        <section className='icons'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-square-instagram"></i>
        </section>
      </section>
    </article>
  );
}

export default App;
