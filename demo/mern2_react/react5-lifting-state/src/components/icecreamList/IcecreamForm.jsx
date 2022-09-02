import React, { useState } from 'react'

// form : input --> state

const IcecreamForm = (props) => {
    const [flavor, setFlavor] = useState("")
    const [quantity, setQuantity] =useState(0)
    const [hasChocolateChip, setHasChocolateChip] = useState(false)

    const handleSubmit =(e) =>{
        e.preventDefault()
        props.sendRequest({flavor, quantity, hasChocolateChip, isServed: false })
    }

    return (
        <div>
        <h1> Icecream Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label> Flavor</label>
                <select name="flavor" value={flavor} onChange={(e)=>setFlavor(e.target.value)}>
                    <option hidden> Choose a flavor</option>
                    <option value="watermelon"> Watermelon</option>
                    <option value="peach"> Peach</option>
                    <option value="pistachio"> Pistachio</option>
                </select>
            </div>
            <div>
                <label> Quantity</label>
                <input type="number" name="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
            </div>
            <div>
                <label> Chocolate chip?</label>
                <input type="checkbox" name="hasChocolateChip" checked={hasChocolateChip} 
                    onChange={(e)=>setHasChocolateChip(e.target.checked)} />
            </div>
            <button type="submit"> Add the order</button>
        </form>
        </div>
    )
}

export default IcecreamForm