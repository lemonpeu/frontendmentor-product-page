import { useState } from "react"

import MinusIcon from "../icons/MinusIcon"
import AddIcon from "../icons/AddIcon"

const InputSumToCart = () => {
    const [itemAmount, setItemAmount] = useState(0)

    const restItemsToCart = () => {
        if(itemAmount !== 0) {
            setItemAmount(itemAmount - 1)
        } 
    }

    return (
        <div className="flex justify-between items-center bg-gray-100 h-[55px] px-4 rounded-[15px]">
            <button onClick={() => restItemsToCart()}><MinusIcon fill="#FFA500"/></button>
            <span className="font-bold">{itemAmount}</span>
            <button onClick={() => setItemAmount(itemAmount + 1)}><AddIcon fill="#FFA500"/></button>
        </div>
    )
}

export default InputSumToCart