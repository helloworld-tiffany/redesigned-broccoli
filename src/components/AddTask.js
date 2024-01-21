import {useState} from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('false')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('할 일을 입력해주세요!')
            return
        }
        // onAdd({text, day, reminder}) 
        
        //clear 
        setText('')
        setDay('')                    
        setReminder(false)
    }
  return (
    <form className = 'add-form' onSubmit={onSubmit}>
        <div className = 'form-control'>
            <lable>Task</lable>
            <input type = 'text' placeholder = '할 일을 입력해주세요' value = {text} onChange = {(e)=>
            setText(e.target.value)}/>
        </div>
        <div className = 'form-control'>
            <lable>Day & Time</lable>
            <input type = 'text' placeholder = '날짜와 시간을 입력해주세요' value = {day} onChange = {(e)=>
            setDay(e.target.value)}/>
        </div>
        
        <div className = 'form-control form-control-check' >
            <lable>Set Reminder</lable>
            <input type = 'checkbox' 
            checked = {reminder}
            value = {reminder} 
            onChange = {(e)=>
            setReminder(e.currentTarget.checked)}/> 
        </div> 
        <input type = 'submit' value = 'Save Task' className = 'btn btn-block'/>
    </form>
  )
}
export default AddTask 