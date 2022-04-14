import { useState } from "react"
export const AddTask = ({addTask}) => {
    const [ text, setText] = useState('');
    const [ day, setDay] = useState('');
    const [ reminder, setReminder] = useState(false);
   
    const onSubmit = (e) => {
        e.preventDefault();
        addTask({text, day, reminder})
        setText('');
        setDay('');
        setReminder(false)
    }
    return(
        <form onSubmit={onSubmit}>
            <div>
                <input
                type="text"
                value={text}
                placeholder="text"
                onChange={(e) => setText(e.target.value)}/>
            </div>
            <div>
                <input
                type="text"
                value={day}
                placeholder="date  time"
                onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div>
                <input checked={reminder}
                type='checkbox'
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="save task"/>
        </form>
    )
}
