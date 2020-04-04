import React, { useState } from 'react';
import axios from 'axios';
import queryString from'query-string';
function MainProductDetail(props){
    const [val,setVal] = useState('')
    React.useEffect(()=>{
        let id = queryString.parse(props.location.search).pid;
        axios.post(`http://localhost:8000/data/product-detail`, { id})
        .then(res=>{
          setVal(res.data)
        })
    },[])
  
    return (
      <>
      {console.log(val)}
  <section id="aa-catg-head-banner">
   <img src={process.env.PUBLIC_URL + '/assets/img/fashion/fashion-header-bg-8.jpg'} alt="fashion img"/>
   <div className="aa-catg-head-banner-area">
     <div className="container">
      <div className="aa-catg-head-banner-content">
        <h2>T-Shirt</h2>
        <ol className="breadcrumb">
          <li><a href="index.html">Home</a></li>         
          <li><a href="#">Product</a></li>
          <li className="active">T-shirt</li>
        </ol>
      </div>
     </div>
   </div>
  </section>
  <section id="aa-product-details">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-product-details-area">
            <div className="aa-product-details-content">
              <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-12">                              
                  <div className="aa-product-view-slider">                                
                    {/* <div id="demo-1" className="simpleLens-gallery-container">
                      <div className="simpleLens-container">
                        <div className="simpleLens-big-image-container"><a data-lens-image={process.env.PUBLIC_URL + '/assets/img/view-slider/large/polo-shirt-1.png'} className="simpleLens-lens-image">
                        <img src={process.env.PUBLIC_URL + '/assets/img/view-slider/medium/polo-shirt-1.png'} className="simpleLens-big-image"/></a></div>
                      </div>
                      <div className="simpleLens-thumbnails-container">
                          <a data-big-image="img/view-slider/medium/polo-shirt-1.png" data-lens-image="img/view-slider/large/polo-shirt-1.png" className="simpleLens-thumbnail-wrapper" href="#">
                            <img src="img/view-slider/thumbnail/polo-shirt-1.png"/>
                          </a>                                    
                          <a data-big-image="img/view-slider/medium/polo-shirt-3.png" data-lens-image="img/view-slider/large/polo-shirt-3.png" className="simpleLens-thumbnail-wrapper" href="#">
                            <img src="img/view-slider/thumbnail/polo-shirt-3.png"/>
                          </a>
                          <a data-big-image="img/view-slider/medium/polo-shirt-4.png" data-lens-image="img/view-slider/large/polo-shirt-4.png" className="simpleLens-thumbnail-wrapper" href="#">
                            <img src="img/view-slider/thumbnail/polo-shirt-4.png"/>
                          </a>
                      </div>
                    </div> */}
                    <div id="demo-1" className="simpleLens-gallery-container">
                      <div className="simpleLens-container">
                        <div className="simpleLens-big-image-container"><a data-lens-image={`http://localhost:8000/${val.img}`} className="simpleLens-lens-image">
                        <img src={`http://localhost:8000/${val.img}`} className="simpleLens-big-image"/></a></div>
                      </div>
                      <div className="simpleLens-thumbnails-container">
                          <a data-big-image={`http://localhost:8000/${val.img}`} data-lens-image={`http://localhost:8000/${val.img}`} className="simpleLens-thumbnail-wrapper" href="#">
                            <img src={`http://localhost:8000/${val.img}`} style={{height:"50px"}}/>
                          </a>                                    
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-7 col-sm-7 col-xs-12">
                  <div className="aa-product-view-content">
                    <h3>{val.product_name}</h3>
                    <div className="aa-price-block">
                      <span className="aa-product-view-price">${val.price}</span>
                      <p className="aa-product-avilability">Avilability: <span>In stock</span></p>
                    </div>
                    <p>{val.desc}</p>
                    <h4>Size</h4>
                    <div className="aa-prod-view-size">
                      <a href="#">S</a>
                      <a href="#">M</a>
                      <a href="#">L</a>
                      <a href="#">XL</a>
                    </div>
                    <h4>Color</h4>
                    <div className="aa-color-tag">
                      <a href="#" className="aa-color-green"></a>
                      <a href="#" className="aa-color-yellow"></a>
                      <a href="#" className="aa-color-pink"></a>                      
                      <a href="#" className="aa-color-black"></a>
                      <a href="#" className="aa-color-white"></a>                      
                    </div>
                    <div className="aa-prod-quantity">
                      <form action="">
                        <select id="" name="">
                          <option selected="1" value="0">1</option>
                          <option value="1">2</option>
                          <option value="2">3</option>
                          <option value="3">4</option>
                          <option value="4">5</option>
                          <option value="5">6</option>
                        </select>
                      </form>
                      <p className="aa-prod-category">
                        Category: <a href="#">Polo T-Shirt</a>
                      </p>
                    </div>
                    <div className="aa-prod-view-bottom">
                      <a className="aa-add-to-cart-btn" href="#">Add To Cart</a>
                      <a className="aa-add-to-cart-btn" href="#">Wishlist</a>
                      <a className="aa-add-to-cart-btn" href="#">Compare</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aa-product-details-bottom">
              <ul className="nav nav-tabs" id="myTab2">
                <li><a href="#description" data-toggle="tab">Description</a></li>
                <li><a href="#review" data-toggle="tab">Reviews</a></li>                
              </ul>

              
              <div className="tab-content">
                <div className="tab-pane fade in active" id="description">
                  {val.desc}
                </div>
                <div className="tab-pane fade " id="review">
                 Review page
                </div>            
              </div>
            </div>
            Related product
          </div>
        </div>
      </div>
    </div>
  </section>
      </>
    );
  
}

export default MainProductDetail;