import React,{useState} from "react";
import {
  MDBInput,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdbreact";
import dispatch from '../reducer'
import {useQuery,gql} from '@apollo/client'


function List() {
    let [isOpen,setIsOpen] = useState();
    let [modalValue,setModalValue] = useState();
    const GET_TODO = gql`
    query{
        Todos
    }
    `
    const {data,} = useQuery(GET_TODO)
    function setComplete(i){
        dispatch({
            type:"COMPLETE_TODO",
            todo:{
                ...i,
            }
        })
    }

    function setDelete(i){
        dispatch({
            type:"DELETE_TODO",
            todo:{
                ...i
            }
        })
    }
    function setModal(i){
        setModalValue(i)
        setIsOpen(true)
    }

    function update({keyCode}){
        if(keyCode === 13){
            dispatch({
                type:"UPDATE_TODO",
                todo:{
                    ...modalValue
                }
            })
            setModalValue("")
            setIsOpen(false)
        }
    }

    function updateModal(){
        dispatch({
            type:"UPDATE_TODO",
            todo:{
                ...modalValue
            }
        })
        setModalValue("")
        setIsOpen(false)
    }

  return (
    <MDBRow center>
        <MDBCol md="9">
            <MDBListGroup style={{marginTop: "3rem"}} >
                
                {data.Todos.map((i,key)=>{
                    return (
                        <MDBListGroupItem key={key}>
                            <div onClick={()=>setComplete(i)}>
                            {!i.completed? i.text:<strike>{i.text}</strike>}
                            </div>
                            <MDBIcon
                            onClick={()=>setDelete(i)}
                            icon="trash-alt"
                            pull="right"
                            style={{marginRight:"16px"}}
                            />
                            <MDBIcon
                            onClick={()=>setModal(i)}
                            icon="edit"
                            pull="right"
                            style={{marginRight:"16px"}}
                            />
                        </MDBListGroupItem>
                    )
                })}
            </MDBListGroup>
            <MDBModal size="sm" isOpen={isOpen} toggle={()=>setIsOpen(!setIsOpen)}>
                <MDBModalBody>
                    <MDBInput
                    style={{marginTop:"3rem"}}
                    label="Update Todo"
                    icon="edit"
                    onInput = {({target})=>setModalValue({...modalValue,text:target.value})}
                    value={modalValue&&modalValue.text}
                    onKeyDown={update}
                    />
                </MDBModalBody>
                <MDBModalFooter>
                    <button className="btn-secondary" onClick={()=>setIsOpen(!setIsOpen)}>close</button>
                    <button className="btn-primary" onClick={updateModal}>Save</button>
                </MDBModalFooter>
            </MDBModal>
        </MDBCol>
    </MDBRow>
    
  );
}
export default List;
