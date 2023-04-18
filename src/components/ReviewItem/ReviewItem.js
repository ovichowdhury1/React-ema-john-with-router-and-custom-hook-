import React from 'react';
import './ReviewItem.css';
import { faCoffee,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItem = ({product,handleRemoveButton}) => {
    const{id,name,price,quantity,shipping,img} = product;
    return (
        <div className='review-Item'>
                <div>
                    <img src={img} alt="" />
                </div>

                <div className='review-details-container'>
                      <div className='review-details'>
                           <p>{name}</p>
                           <p><small>name: ${price}</small></p>
                           <p><small>Shipping: ${shipping}</small></p>
                           <p><small>price: {quantity}</small></p>
                      </div>
                      <div  className='button-container'>
                          <button className='button-delete' onClick={() => handleRemoveButton(id)}>
                           <FontAwesomeIcon className='deleteIcon' icon={faTrashAlt}></FontAwesomeIcon>
                          </button>
                      </div>
                </div>
                
        </div>
    );
};

export default ReviewItem;