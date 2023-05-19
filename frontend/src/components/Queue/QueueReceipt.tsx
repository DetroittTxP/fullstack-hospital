import React, { useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { ReceiptQueueProps } from '../../type';

const QueueRecceipt: React.FC<ReceiptQueueProps> = ({ queuedata }) => {



  return (
    <>
      <br />zz
      <MDBContainer className="py-5" >
        <MDBCard>
          <MDBCardBody className="mx-4">
            <MDBContainer>
              <p className="my-5 text-center" style={{ fontSize: "30px" }}>
                จองการนัดตรวจสำเร็จเเล้ว
              </p>
              <MDBRow>
                <MDBTypography listUnStyled>
                  <li className="text-black">ชื่อผู้ใช้ <span style={{ marginLeft: 10 }}>{queuedata.creator}</span></li>

                  <li className="text-black mt-1">ที่อยู่ <span style={{ marginLeft: 10 }}>{queuedata.address}</span></li>
                </MDBTypography>
                <hr />
                <MDBCol xl="10">
                  <p>ชื่อผู้ป่วย:</p>
                </MDBCol>
                <MDBCol xl="2">
                  <p className="float-end">{queuedata.name}</p>
                </MDBCol>
                <hr />
              </MDBRow>
              <MDBRow>
                <MDBCol xl="10">
                  <p>อายุ</p>
                </MDBCol>
                <MDBCol xl="2">
                  <p className="float-end">{queuedata.age} ปี</p>
                </MDBCol>
                <hr />
              </MDBRow>

              <MDBRow>
                <MDBCol xl="10">
                  <p>เพศ</p>
                </MDBCol>
                <MDBCol xl="2">
                  <p className="float-end">{queuedata.gender}</p>
                </MDBCol>
                <hr />
              </MDBRow>
              <MDBRow>
                <MDBCol xl="10">
                  <p>เลขประจำตัวประชาชน</p>
                </MDBCol>
                <MDBCol xl="2">
                  <p className="float-end">{queuedata.id_card}</p>
                </MDBCol>
                <hr style={{ border: "2px solid black" }} />
              </MDBRow>
              <MDBRow className="text-black">
                <MDBCol xl='1='>
                    <p className='fw-bold'>วันที่เข้าตรวจ</p>
                </MDBCol>
                <MDBCol xl="12">
                  <p className="float-end fw-bold">{queuedata.date}</p>
                </MDBCol>
                <hr style={{ border: "2px solid black" }} />
              </MDBRow>


              {/* <div className="text-center" style={{ marginTop: "90px" }}>
                <a>
                  <u className="text-info">View in browser</u>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div> */}
            </MDBContainer>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>

  )
}

export default QueueRecceipt;