import React,{useEffect} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import { ReceiptQueueProps } from '../../type';

const QueueRecceipt:React.FC<ReceiptQueueProps> = ({queuedata}) =>{  

     

    return(
        <MDBContainer className="py-5">
      <MDBCard>
        <MDBCardBody className="mx-4">
          <MDBContainer>
            <p className="my-5 text-center" style={{ fontSize: "30px" }}>
              จองการนัดตรวจสำเร็จเเล้ว
            </p>
            <MDBRow>
              <MDBTypography listUnStyled>
                <li className="text-black">ชื่อ-สกุล: <span style={{marginLeft:10}}>{queuedata.name}</span></li>
               
                <li className="text-black mt-1">เข้าตรวจวันที่: <span style={{marginLeft:10}}>{queuedata.date}</span></li>
              </MDBTypography>
              <hr />
              <MDBCol xl="10">
                <p>Pro Package</p>
              </MDBCol>
              <MDBCol xl="2">
                <p className="float-end">$199.00</p>
              </MDBCol>
              <hr />
            </MDBRow>
            <MDBRow>
              <MDBCol xl="10">
                <p>Consulting</p>
              </MDBCol>
              <MDBCol xl="2">
                <p className="float-end">$100.00</p>
              </MDBCol>
              <hr />
            </MDBRow>
            <MDBRow>
              <MDBCol xl="10">
                <p>Support</p>
              </MDBCol>
              <MDBCol xl="2">
                <p className="float-end">$10.00</p>
              </MDBCol>
              <hr style={{ border: "2px solid black" }} />
            </MDBRow>
            <MDBRow className="text-black">
              <MDBCol xl="12">
                <p className="float-end fw-bold">Total: $10.00</p>
              </MDBCol>
              <hr style={{ border: "2px solid black" }} />
            </MDBRow>
            <div className="text-center" style={{ marginTop: "90px" }}>
              <a>
                <u className="text-info">View in browser</u>
              </a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </MDBContainer>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    )
}

export default QueueRecceipt;