import React from 'react'
import cards from '../CardList/list.json'
import {useSelector} from 'react-redux'

const Home = (props) => {
    let state=  useSelector(state => state.cardItems.cartData)
    console.log("check",!state[0])
    if(!state[0] && JSON.parse(localStorage.getItem('state'))){
        state= JSON.parse(localStorage.getItem('state')).cartData;
    }
    console.log("state return", state)
    return (
        <div>
            
            {
                //displaying card details
                cards.map((cardDetail) => {
                    return (
                        <div className="card" key={cardDetail.id}>

                            <img src={cardDetail.img_url}></img><br></br>
                            <div className="card-price">
                                <h4 style={{ textAlign: "left" }}>{cardDetail.name}</h4>

                                
                                <div className="orgprice">{cardDetail.original_price?<>$</>: <></>}{cardDetail.original_price}</div>
                                <h5 className="price">${cardDetail.final_price}<br></br></h5>
                            </div>

                            <p>  {cardDetail.description}<br></br></p>

                            { !state[cardDetail.id]&& <button className="add-cart"
                                onClick={
                                    () => { props.addToCartHandler({ cardDetail }) }
                                }>
                                Add To Cart</button>}

                            {state[cardDetail.id] ?<>
                                    <button className="inc-dec" onClick={
                                    () => { props.removeToCartHandler({cardDetail}) }
                                }>-</button>
                                
                                   <button className="qty-count"> {state[cardDetail.id]}</button>
                                    <button className="inc-dec" onClick={
                                    () => { props.addToCartHandler({ cardDetail }) }
                                }>+</button>
                                </>:<></>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home
