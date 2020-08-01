import React,{useState} from 'react';
import {MDBInput,MDBRow,MDBCol} from 'mdbreact'
import dispatch from '../reducer'
function AddTodo(){
    let [val,setVal] = useState()
    function setState({keyCode}){
        if(keyCode === 13){
            console.log(val)
            dispatch({
                type:"ADD_TODO",
                todo:{
                    Id:Date.now(),
                    text:val,
                    completed:false
                }
            })
            setVal('')
        }
      
    }



    return (
        <MDBRow center>
            <MDBCol md="6">
                <MDBInput 
                style={{marginTop:"3rem"}}
                label="Add Todo"
                icon = "plus"
                onInput={({target})=>setVal(target.value)}
                value={val}
                onKeyDown={setState}
                />
            </MDBCol>
        </MDBRow>
    )
}
export default AddTodo