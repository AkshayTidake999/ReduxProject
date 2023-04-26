

 
import React, { useEffect, useState } from 'react';
function Home(props) {
  


    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://dummyjson.com/products")
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          setData(res.products);
          // console.log(res.products);
        });
    }, []);
    return (
      <div className='child'>
          <div className='fixedpos'>
              <h1>Primespot</h1>
              <div className='handicon'><img src="https://www.transparentpng.com/thumb/shopping/1u2Cz4-shopping-wonderful-picture-images.png" /></div>
              <ul className='linkIcon'>
              <li>Deals</li>
              <li>Mobile</li>
              <li>Laptop</li>
              <li>Kitchen</li>
              <li>Beauty</li>
              <li>Coustmer Service</li>
              <li>About US</li>
          </ul>
              <div className='cartlength'>{props.data.length}</div>
              <div className='cartItem'>              
                  <img src="https://img.freepik.com/free-icon/shopping-cart_318-659884.jpg" alt='img'/>
              </div> 
          </div>
          <div className='slider'></div>
        <div className="container">
          {data.map((v, i) => {
            return (
              <div className='contax'>
              <ul key={i} className="box">
                <div className='setHeightforlist'>
                  <li><img src={v.thumbnail} alt={v.title}></img></li>
                  <li className='it-title'>{v.title}</li>
                  <li className='it-desc'>{v.description}</li>
                  <li className='it-rate'>{v.rating} <span> ⭐⭐⭐⭐	</span>	</li>
                  <li className='it-price'>$ {v.price}</li>
                </div>
            <button onClick={()=>props.addToCartHandlere({name : "Oppo" , price : 200})}>Add To Cart</button>
  
              </ul>
              </div>
              
            );
            
          })}
          
        </div>
         
        
      </div>
    );         
}
export default Home;