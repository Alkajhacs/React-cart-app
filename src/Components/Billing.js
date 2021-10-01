import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import cards from '../CardList/list.json'

const Billing = (props) => {
    let sno = 0;
    let disc = 0;
    // qty will contain the quantity of each item
    let qty = [];
    let deliveryfee = 5;

    //totalPrice will contain the multiplication of quantity and price
    let totalPrice = [];
    let taxAndCharge = 2;
    //put state value
    let state = useSelector(state => state.cardItems.cartData)

    //setting state value if user refreshes the page
    if (!state[0] && JSON.parse(localStorage.getItem('state'))) {
        state = JSON.parse(localStorage.getItem('state')).cartData;
    }

    //calculating the cumulative of all the discounted items.
    const discountprice = (qty) => {
        let sumo = 0;
        let sump = 0;
        for (let i = 0; i < cards.length; i++) {
            if (qty[i] && cards[i].original_price) {
                sumo += (qty[i] * cards[i].original_price)
                sump += (qty[i] * cards[i].final_price)
            }
        }
        return sumo - sump;
    }
    //calculating total price 
    const total = (totalPrice) => {
        let sum = 0;
        for (let i = 0; i < totalPrice.length; i++) {
            if(totalPrice[i])
            sum += totalPrice[i];
        }
       
        return sum;
    }

    return (
        <div className="cart-billing">
            <div className="cart-items">
                <Link to="/"> <input type="button" className="bth-btn" value="<--Back to home"></input></Link><br></br>
                <h1>Order summary({Object.keys(state).length} items)</h1><br></br>
                <div className="items-tbl">
                    <table className="item-list">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Items</th>
                                <th>Quantity</th>
                            </tr>

                        </thead>
                        <tbody >
                            <tr>
                                <td colSpan="3"><hr className="hr-bill"></hr></td>
                            </tr>
                            {
                                // iterating and displaying cards json data
                                cards.map((cardDetail) => {
                                    return (
                                        <tr key={cardDetail.id}>
                                            {state[cardDetail.id] ? <td>{sno += 1}</td> : <></>}
                                            {state[cardDetail.id] ? <td >{cardDetail.name}</td> : <></>}
                                            {state[cardDetail.id] ? <td className="td-inc-dec">

                                                <button className="inc-dec" onClick={
                                                    () => { props.removeToCartHandler({ cardDetail }) }
                                                }>-</button>
                                                <button className="qty-count">{state[cardDetail.id]}</button>
                                                <button className="inc-dec" onClick={
                                                    () => { props.addToCartHandler({ cardDetail }) }
                                                }>+</button>
                                            </td> : <></>}
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td colSpan="3"><hr className="hr-bill"></hr></td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="add-more"><Link to="/">+ Add more items</Link></p>
                </div>
            </div>
            {Object.keys(state).length ?
                <div className="pricing">
                    <h4> Price details </h4>
                    <hr></hr>
                    <table className="price-tbl">
                        <tbody>
                            {
                                //iterating card details and diaplaying prices
                                cards.map((cardDetail, index) => {
                                    return (
                                        <tr key="state[cardDetail.id]">
                                            {state[cardDetail.id] ? <td > {qty[index] = state[cardDetail.id]}  X  ${cardDetail.final_price}</td> : <></>}
                                            {state[cardDetail.id] ? <td>
                                                ${totalPrice[index] = state[cardDetail.id] * cardDetail.final_price}
                                            </td> : <></>}
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td colSpan="2" ><hr></hr></td>
                            </tr>
                            <tr>
                                <td>
                                    Discount
                                </td>
                                <td className="disc">
                                    - ${disc = discountprice(qty)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Delivery Fee
                                </td>
                                <td>
                                    ${deliveryfee}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Tax and charges
                                </td>
                                <td>
                                    ${taxAndCharge}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" ><hr></hr></td>
                            </tr>
                            <tr>
                                <td>
                                    To pay
                                </td>
                                {disc? <td>
                                    ${(taxAndCharge + deliveryfee + total(totalPrice)) - disc}
                                </td> : <td>${taxAndCharge + deliveryfee + parseInt(total(totalPrice))}
                                </td>}
                            </tr>
                        </tbody>
                    </table>
                    <button className="add-cart">Place Order</button>
                </div> : <></>}
        </div>
    )
}

export default Billing
