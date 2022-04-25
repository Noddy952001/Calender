import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Enddd}  from "./enddate"


export const MakeCal = () => {
    
    const [start , setStart] = useState()
    const [date, setdate] = useState(new Date());
    const [value, setValue] = useState(new Date());

    
    const onChange = (date) => {
        setdate(date)
    }

    const onChangesss = (value) => {
        setValue(value)
    }
    
    return (

        <div style={{display : "flex"   , marginLeft:"20%" , marginTop:"5%" ,
         border: "1px solid black" ,
          width:"57%" ,
          padding: "30px",
          borderRadius:"10px"
          
        }}>

            <div >
                <h3>Last 7 days</h3>
                <h3>Last 14 days</h3>
                <h3>Last 30 days</h3>
                <h3>Last 3 months</h3>
                <h3>Last 12 months</h3>
                <h3>Month to data </h3>
                <h3>Quator to data </h3>
                <h3>All time</h3>
            </div>

            <div style={{marginLeft:"6%"}}>

                <div style={{display : "flex"}}>
                    <div>
                    <Calendar onChange={onChange}  maxDatetrue value={date} />
                        {/* {console.log(date)} */}
                        {/* {date.toString()} */}
                      
                    </div>

                   <div>

                        <Calendar onChange={onChangesss}   value={value} />

                       {/* <Enddd/> */}
                   </div>
                </div>


                <div style={{marginTop:"10%"}}> 
                    <div style={{display : "flex"}}>
                        <div style={{border : "1px solid black",
                            width: "30%",
                            borderRadius:"10px"

                        }}>
                         {date.toString()}

                        </div>
                         <b>➝  </b>
                        
                        <div style={{border : "1px solid black",
                            width: "30%",
                            borderRadius:"10px"
                        }}>
                             {value.toString()}
                        </div>

                        <button>Cancel</button>
                        <button>Set date</button>
                    </div>
                </div>
            </div>


        </div>

    );
}