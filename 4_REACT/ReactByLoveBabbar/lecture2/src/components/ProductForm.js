import {useState} from 'react';
import './ProductForm'

function ProductForm(props){

    const [NewTitle,setTitle] = useState('');
    const [NewDate,setDate] = useState('');

    function titleChangehandler(event){
        setTitle(event.target.value);
        console.log(event.target.value);
        // console.log("Title Change Karoge");

    }

    function dateChangehandler(event){

        setDate(event.target.value);
        // console.log(event.target.value);
       
    

    }

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title:NewTitle,
            date:NewDate
        };

        //console.log(productData)
         props.onSaveProduct(productData);
        setTitle('');
        setDate(''); 
    }


   return (
    <form onSubmit={submitHandler}>
        <div className='new-product_controls'>

        <div className='new-product_control'>
            <lable>Title</lable>
            <input type='text' value={NewTitle} onChange={titleChangehandler}></input>
        </div>
        <div className='new-product_control'>
            <label>Date</label>
            <input type='date' value={NewDate} onChange={dateChangehandler} min='2023-01-01' max='2023-12-12' ></input>
        </div>

        <div className='new-product_button'>
            <button type='submit'>Add Product</button>
        </div>
        </div>
    </form>
   )
}

export default ProductForm;