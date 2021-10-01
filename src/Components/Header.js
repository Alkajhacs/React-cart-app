import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import cards from '../CardList/list.json'

const Header = (props) => {
    let state=  useSelector(state => state.cardItems.cartData)
    let totalitem=0;
    if(!state[0]&& JSON.parse(localStorage.getItem('state'))){
        state= JSON.parse(localStorage.getItem('state')).cartData;
    }

    //calculating total items added to cart
    for(let i=1;i<=cards.length;i++)
    {
        if(state[i])
        totalitem+= state[i];
    }
    
    return (
        <div className="header">
            <img className="logo-img" src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"></img>
            <h2 className="head">Happay</h2>

            <span className="cart-count">{totalitem}</span>
            <Link to="/cart"><i className ="fa fa-shopping-cart cart-img" style={{fontSize: "40px", marginTop: "-2.2rem",marginRight:"1rem", float: "right"}}></i></Link>
        </div>
    )
}

export default Header
