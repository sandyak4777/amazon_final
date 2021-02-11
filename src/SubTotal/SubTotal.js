import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../StateProvider';
import {getBaskerTotal} from '../reducer';

function SubTotal() {
    const [{basket}, dispatch] = useStateValue();
    console.log(dispatch)
    return (
        <div className="sub-total">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            SubTotal: ({basket.length} items) : <strong>{`${value}`}</strong>
                        </p>
                        <small className="gift">
                            <input type="checkbox"/>This Order contains Gift Card
                        </small>
                        <button className="btn">Proceed To CheckOut</button>
                    </>
                )}
                decimalScale={2}
                value={getBaskerTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default SubTotal;