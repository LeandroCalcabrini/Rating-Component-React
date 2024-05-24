import { useState } from 'react'
import { Button } from './assets/components/buttons'
import { Success } from './assets/components/img'

function App() {
  const [count, setCount] = useState(0)
  const [isSubmit, setIsSubtmit] = useState(false)  
  return (
    <>
    <main className='main'>
    <article className='card'>
      <div className={`card-first ${isSubmit == true ? 'active' : ''}`}>
      <figure className='card-star'>
      <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
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
