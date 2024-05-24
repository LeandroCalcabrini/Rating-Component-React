import { useState } from 'react'
import { Button } from './assets/components/buttons'
import { Success } from './assets/components/img'
import { Star } from './assets/components/star'

function App() {
  const [count, setCount] = useState(0)
  const [isSubmit, setIsSubtmit] = useState(false)  
  return (
    <>
    <main className='main'>
    <article className='card'>
      <div className={`card-first ${isSubmit == true ? 'active' : ''}`}>
      <figure className='card-star'>
        <Star/>
    </figure>
    <strong className='card-title'>How did we do?</strong>
    <p className='card-text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    <div className='card-button-container'>
      <Button
      buttonId={1}
      text='1'
      setCount={setCount}
      />
      <Button
      buttonId={2}
      text='2'  
      setCount={setCount}
      />
      <Button
      buttonId={3}
      text='3'
      setCount={setCount}
      />
      <Button
      buttonId={4}
      text='4'
      setCount={setCount}
      />
      <Button
      buttonId={5}
      text='5'
      setCount={setCount}
      />
    </div>
    <button 
    disabled={count > 0 ? false : true }
    className='card-button-submit'
    onClick={()=>setIsSubtmit(true)}
    >SUBMIT</button>
    </div>
    <div className={`card-second ${isSubmit == true ? 'active' : ''}`}>
      <figure className='card-second-img'> 
      <Success/>
      </figure>
      <span className='card-second-selected'>You selected {count} out of 5</span>
      <strong className='card-second-title'>Thank you!</strong>
      <p className='card-second-text'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  </article>
    </main>   
    </>
  )
}
export default App
