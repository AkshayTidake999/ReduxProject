import Home  from "../Component/Home";
import{ connect} from 'react-redux'
import addToCart from '../Services/Actions/Actions'


const mapStateToProps = state =>({
    data : state.cardItems
})
const mapDispatchToProps = dispatch => ({
    addToCartHandlere : data => dispatch (addToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps )(Home)

