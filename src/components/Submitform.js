import "./Submitform.css"

function Submitform(){
    return(
        <div className='form'>
     <form>
        <input className='input' placeholder='Add Task' />
        <button className='add-button' type='submit'>Add</button>
    </form>   
    
</div>
    )
    
}

export default Submitform