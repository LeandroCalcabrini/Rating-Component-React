
export function Button ({text,buttonId,setCount}){

    return(
        <button 
        className='card-button'
        onClick={()=>setCount(buttonId)}>
        {text}
         </button>
    )
}