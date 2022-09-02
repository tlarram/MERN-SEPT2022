import React, {useState} from 'react'
import IcecreamDisplay from '../components/icecreamList/IcecreamDisplay'
import IcecreamForm from '../components/icecreamList/IcecreamForm'

const IcecreamTruck = () => {
    const [icecreamList, setIcecreamList] = useState([])

    const receiveIcecreamRequest = (newRequest)=>{
        setIcecreamList([...icecreamList, newRequest])
    }

    const updateList = (updatedList)=>{
        setIcecreamList(updatedList)
    }

    return (
        <div>
            <h1> Icecream Truck </h1>
            <IcecreamForm sendRequest = {receiveIcecreamRequest}/>
            <IcecreamDisplay 
                icecreamList={icecreamList} 
                onUpdate = {updateList}
                />

        </div>
    )
}

export default IcecreamTruck