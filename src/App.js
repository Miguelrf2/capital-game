import './Style.css';
import { useState, useEffect } from 'react';
import { randomizeCountry } from './functions/random';
import handleIdiom from './functions/idiom.js';
import brazil from './images/brazil.png'
import usa from './images/usa.png'

function App() {
  const [country, setCountry] = useState('')
  const [capital, setCapital] = useState('')
  const [capitalWrited, setCapitalWrited] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const newCountry = randomizeCountry() //Will return a list
    setCountry(newCountry[0])
    setCapital(newCountry[1])
  }, [country, capital]);

  const verifyCapital = () => {
        if (capitalWrited !== capital){
          setMessage(
            `Wrong anwser. ${capital} is capital of ${country}`
            )
        } else {
          setMessage(
            `Correct!! ${capital} is capital of ${country}`
          ) 
        }
        setTimeout(() => {
          window.location.reload()
        }, 2000);
    }

  return (
    <section>
      <div id='top'>
        <span className='circle-flag' onClick={() => handleIdiom('portuguese')}>
          <img src={brazil} alt='flag'/>
        </span> 

        <span className='circle-flag' onClick={() => handleIdiom('english0')}>
          <img src={usa} alt='flag'/>
        </span>
      </div>

      <div id='container'>
          <h1>Capital Game</h1>
          <h3>Write {country} capital</h3>
          <input
            type='text'
            id='inputCapital'
            placeholder='Capital'
            autoFocus
            onChange={(event) => setCapitalWrited(event.target.value)}
            value={capitalWrited}
          />
          <p>{message}</p>
          <button onClick={verifyCapital}>
            Verify
          </button>
      </div>
    </section>
  );
}

export default App;
