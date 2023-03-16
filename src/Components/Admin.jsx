import React,{useState} from 'react'
import '../styles/Admin.css'
export default function Admin() {
    const [name, setName] = useState()
    const [slot, setSlot] = useState()
    const [deductedAmount, setDeductedAmount] = useState(0)
    const [objectID, setObjectID] = useState()     
    const submit = ()=>{
        let amount = deductedAmount*10000000
    }
  return (
    <div className='admin'>
        <div className='admin-container'>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Team Name'  className='input' />
            <input type="text" value={slot} onChange={(e)=>{setSlot(e.target.value)}} placeholder='Slot' className='input' />
            <input type="text" value={deductedAmount} onChange={(e)=>{Number(setDeductedAmount(e.target.value))}} placeholder='Enter amount (in Cr)' className='input' />
            <input type="text" value={objectID} onChange={(e)=>{setObjectID(e.target.value)}} placeholder='Enter object ID of player ' className='input'/>
            <button className='button' onClick={submit}>Submit</button>
        </div>  
    </div>
  )
}
