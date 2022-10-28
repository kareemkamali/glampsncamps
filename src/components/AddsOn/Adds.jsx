import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import './Adds.css';
import yellowbar from '../../assets/images/yellow.png';
import { useState } from 'react';
import imgDis from '../../assets/images/16.png'
const Adds = () => {
const [count,setCount]=useState([
    {id:0,
     qty:0
    },
    {
        id:1,
        qty:0
    },
    {id:2,
        qty:0
       },
       {
           id:3,
           qty:0
       },
       {id:4,
        qty:0
       },
       {id:4,
        qty:0
       },
       {id:5,
        qty:0
       },
       {id:6,
        qty:0
       },
    
]);


    const append =(ids)=>{
        setCount(count=>
            count.map((items)=>ids === items.id?{...items,qty:items.qty + 1}:items));
        
     
    }

    const deppend =(ids)=>{
       
      
            setCount(count=>
                count.map((items)=>ids === items.id?{...items,qty:items.qty - (items.qty>0?1:0)}:items));
            
        
    }



  return (
<>
<div className="adds-title">
            <img src={yellowbar} alt="choose your trip" />
            <div className="title-wrap">
            <SectionTitle title='choose your' titlespan="Add's on"/>
            </div>

            </div>

            <div className="adds">
                <div className="container">
                <div className='left-adds'>
                <h2>Glamping & Glamping</h2>

                <div className="adds-data">
                
                <label htmlFor="chair">
                    <input id='chair' type="checkbox" name='chair' for="chair"/>
                                 CHAIR
                                                <span className="checkmarker"></span>
                </label>

                <div className="nb">
                     <button onClick={()=>append(0)}>+</button>
                      <input type="text" readOnly value={count[0].qty} min='0'/>
                    <button onClick={()=>deppend(0)}>-</button>
                </div>
             

</div>

<div className="adds-data">
                <label htmlFor="Fish">
                    <input id='Fish' type="checkbox" name='Fish' for="Fish"/>
                    FISH ROD
                                                <span className="checkmarker"></span>
                </label>

                <div className="nb">
                     <button onClick={()=>append(1)}>+</button>
                      <input type="text" readOnly value={count[1].qty} min='0'/>
                    <button onClick={()=>deppend(1)}>-</button>
                </div>

</div>

<div className="adds-data">

                <label htmlFor="table">
                    <input id='table' type="checkbox" name='table' for="table"/>
                   TABEL
                                                <span className="checkmarker"></span>
                </label>

                <div className="nb">
                     <button onClick={()=>append(2)}>+</button>
                      <input type="text" readOnly value={count[2].qty} min='0'/>
                    <button onClick={()=>deppend(2)}>-</button>
                </div>

</div>
<div className="adds-data">
                <label htmlFor="wook">
                    <input id='wook' type="checkbox" name='wook' for="wook"/>
             WOOK
                                                <span className="checkmarker"></span>
                </label>

                <div className="nb">
                     <button onClick={()=>append(3)}>+</button>
                      <input type="text" readOnly value={count[3].qty} min='0'/>
                    <button onClick={()=>deppend(3)}>-</button>
                </div>


                </div>
                <div className="adds-data">

                <label htmlFor="spoon">
                    <input id='spoon' type="checkbox" name='spoon' for="spoon"/>
            SPOON
                                                <span className="checkmarker"></span>
                </label>

                <div className="nb">
                     <button onClick={()=>append(4)}>+</button>
                      <input type="text" readOnly value={count[4].qty} min='0'/>
                    <button onClick={()=>deppend(4)}>-</button>
                </div>

</div>

<div className="adds-data">
                <label htmlFor="fork">
                    <input id='fork' type="checkbox" name='fork' for="fork"/>
            FORK
                                                <span className="checkmarker"></span>
                </label>

                <div className="nb">
                     <button onClick={()=>append(5)}>+</button>
                      <input type="text" readOnly value={count[5].qty} min='0'/>
                    <button onClick={()=>deppend(5)}>-</button>
                </div>                
                </div>

                





                            </div>


                  <div className='right-adds'>

                    <h2>Activity</h2>

                    <div className="adds-wrap">

                    
                    <div className="adds-data">
                
                <label htmlFor="fork">
                    <input id='fork' type="checkbox" name='fork' for="fork"/>
                                 FORK
                                                <span className="checkmarker"></span>
                </label>

                <div className="nb">
                     <button onClick={()=>append(6)}>+</button>
                      <input type="text" readOnly value={count[6].qty} min='0'/>
                    <button onClick={()=>deppend(6)}>-</button>
                </div>
             

</div>
<div className="adds-data">
                
                <label htmlFor="fork">
                    <input id='fork' type="checkbox" name='fork' for="fork"/>
                                 FORK
                                                <span className="checkmarker"></span>
                </label>

                <div className="nb">
                     <button onClick={()=>append(6)}>+</button>
                      <input type="text" readOnly value={count[6].qty} min='0'/>
                    <button onClick={()=>deppend(6)}>-</button>
                </div>
             

</div>
<div className="adds-data">
                
                <label htmlFor="fork">
                    <input id='fork' type="checkbox" name='fork' for="fork"/>
                                 FORK
                                                <span className="checkmarker"></span>
                </label>

                <div className="nb">
                     <button onClick={()=>append(6)}>+</button>
                      <input type="text" readOnly value={count[6].qty} min='0'/>
                    <button onClick={()=>deppend(6)}>-</button>
                </div>
             

</div>
<div className="adds-data">
                
                <label htmlFor="fork">
                    <input id='fork' type="checkbox" name='fork' for="fork"/>
                                 FORK
                                                <span className="checkmarker"></span>
                </label>

                <div className="nb">
                     <button onClick={()=>append(6)}>+</button>
                      <input type="text" readOnly value={count[6].qty} min='0'/>
                    <button onClick={()=>deppend(6)}>-</button>
                </div>
             

</div>
</div>
                  </div>
                </div>



                <div className="diclaimer">
    <img src={yellowbar} alt="choose your trip" />
    <div className="container-disclaimer">
     
        <div className="disclaimer-icon">
        <img src={imgDis} alt="disclaimer" />
        Disclaimer
        </div>
    <div className="video">
    <iframe src=""  title="Iframe Example"></iframe>

    </div>
    
    <div className="adds-data">
                
                <label htmlFor="disclaimer">
                    <input id='disclaimer' type="checkbox" name='disclaimer' for="disclaimer"/>
                              I READ THE DISCLAIMER
                                                <span className="checkmarker"></span>
                </label>
                </div>
                <div className="adds-data">
                
                <label htmlFor="video">
                    <input id='video' type="checkbox" name='video' for="video"/>
                             I WATCHED THE VIDEO
                                                <span className="checkmarker"></span>
                </label>
                </div>
<div className="button-submit">
<button> Confirm booking</button>
</div>
             

    </div>
    </div>



            </div>
</>
  )
}

export default Adds