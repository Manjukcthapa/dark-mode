import React from "react"
import CoinCard from "./Currency"

const CoinsList=({data}) => {
    return(
        <div className="cardlist">
            {data.map((item, id) => {
                return (
                    <CoinCard  key={id} data={item} />
                )
            })}    
        </div>
    )
}

export default CoinsList;