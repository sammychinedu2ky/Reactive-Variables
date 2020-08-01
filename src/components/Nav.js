import React from 'react';
import {MDBNavbar,MDBNavbarBrand,MDBRow} from 'mdbreact'
function Nav(){
    return (
        <>
        <MDBRow center>
            <MDBNavbar color="red">
                <MDBNavbarBrand style={{textAlign:'center',width:'100vw'}}>
                    <strong style={{fontSize:'2rem'}} className="white-text">My Todo List</strong>
                </MDBNavbarBrand>
            </MDBNavbar>
        </MDBRow>
        </>
    )
}
export default Nav