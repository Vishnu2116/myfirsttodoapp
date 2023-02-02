import "./Submitform.css"
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Submitform(){
    return(
        <div className='form'>
     <form>
        <input className='input'  placeholder='Add Task' />
        
        <button className='add-button' type='submit'>Add</button>
    </form>   
    
</div>

    )
    
}



export default Submitform