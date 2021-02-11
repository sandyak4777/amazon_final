import React from 'react';
import './Cart.css';
import CheckOutList from '../CheckoutList/CheckOutList';
import {useStateValue} from '../StateProvider';
import SubTotal from '../SubTotal/SubTotal';
import MoodBadSharpIcon from '@material-ui/icons/MoodBadSharp';
import ArrowRightAltSharpIcon from '@material-ui/icons/ArrowRightAltSharp';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { Link } from 'react-router-dom';

function Cart() {
    const [{basket}]= useStateValue();
    return (
        <div className="cart">
            <div className="cart-left">
                {basket?.length===0 ?
                    (
                        <div>   
                                <img className="ad-image" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1500x300_1216785_in_certified_refurbished_renewed_mobiles_category_1093f42a_fae7_4c3c_bd5e_35fb0bd1b71e_jpg_LOWER_QL85_.jpg" alt=""/>
                                <MoodBadSharpIcon/>
                                <div className="text-info">
                                    <h2>Your Cart is Empty</h2>
                                    <h5>Click Here</h5>
                                    <ArrowRightAltSharpIcon/>
                                    <Link to="/"><LocalMallOutlinedIcon/></Link>
                                    <p>(To Direct it to Shop Page)</p>
                                </div>
                        </div>
                    ):
                    (
                        <div>        
                            <img className="ad-image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Microsoft/COOP/17_06_2020/V209073725_IN_PC_Microsoft_COOP_refreshing_Baneers_1500x200_2.jpg" alt=""/>
                            <div className="cart-title">
                                <h2>Cart Is Ready to CheckOut</h2>
                                {basket?.map(item=>(
                                    <CheckOutList
                                        index={item.id}
                                        title={item.title}
                                        price={item.price}
                                        image={item.image}
                                        rating={item.rating}/>
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="cart-right">
                {basket.length>0 &&
                    (
                        <div className="cart-right">
                            <SubTotal/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart;
