import Billing from '../Components/Billing.js'
import {connect} from 'react-redux'
import {addToCart, removeToCart} from '../service/actions/actions'

//this will take data from redux
const mapStateToProps=state=>({
    data:state.cardItems
})

//this will take data from react
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Billing)