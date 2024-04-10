import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom' // Importing useNavigate hook from react-router-dom
import { CButton } from '@coreui/react'

const Dashboard = () => {
  const navigate = useNavigate() // Initializing useNavigate hook
  const handleNavigate = () => {
    navigate('/dashboard')
  }

  return (
    <CRow className="h-100">
      <CCol xs="12" md="6">
        <CCard className="custom-card mt-4">
          <CCardHeader>Active Projects</CCardHeader>
          <CCardBody className="d-flex flex-column">
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Project Name</CTableHeaderCell>
                  <CTableHeaderCell>Start Date</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>Project 1</CTableDataCell>
                  <CTableDataCell>01/01/2024</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Project 2</CTableDataCell>
                  <CTableDataCell>02/01/2024</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Project 3</CTableDataCell>
                  <CTableDataCell>03/01/2024</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard className="custom-card mt-4">
          <CCardHeader>Team</CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Team Size</CTableHeaderCell>
                  <CTableHeaderCell>Team-Non Billable</CTableHeaderCell>
                  <CTableHeaderCell>Team on Bench</CTableHeaderCell>
                  <CTableHeaderCell>Team - Billable</CTableHeaderCell>
                  <CTableHeaderCell>WFH</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow style={{ textAlign: 'center' }}>
                  <CTableDataCell>10</CTableDataCell>
                  <CTableDataCell>5</CTableDataCell>
                  <CTableDataCell>2</CTableDataCell>
                  <CTableDataCell>3</CTableDataCell>
                  <CTableDataCell>4</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard className="custom-card mt-4">
          <CCardHeader>Resources On Bench</CCardHeader>
          <CCardBody className="d-flex flex-column flex-grow-1">
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Resources Name</CTableHeaderCell>
                  <CTableHeaderCell>From</CTableHeaderCell>
                  <CTableHeaderCell>Bench Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>Name 1</CTableDataCell>
                  <CTableDataCell>12/10/2023</CTableDataCell>
                  <CTableDataCell>Fully</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Name 2</CTableDataCell>
                  <CTableDataCell>Another date</CTableDataCell>
                  <CTableDataCell>Partially</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Name 3</CTableDataCell>
                  <CTableDataCell>Some other date</CTableDataCell>
                  <CTableDataCell>Fully</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard className="custom-card mt-4">
          <CCardHeader
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            Requests for Resources
            <CButton color="primary" onClick={handleNavigate}>
              View All
            </CButton>
          </CCardHeader>
          <CCardBody className="d-flex flex-column flex-grow-1">
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Skillset</CTableHeaderCell>
                  <CTableHeaderCell>Date of Request</CTableHeaderCell>
                  <CTableHeaderCell>No of Resources</CTableHeaderCell>
                  <CTableHeaderCell>Requested By</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>Skill 1</CTableDataCell>
                  <CTableDataCell>12/10/2023</CTableDataCell>
                  <CTableDataCell>1234567890</CTableDataCell>
                  <CTableDataCell>Name 1</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Skill 2</CTableDataCell>
                  <CTableDataCell>Another date</CTableDataCell>
                  <CTableDataCell>9876543210</CTableDataCell>
                  <CTableDataCell>Name 2</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Skill 3</CTableDataCell>
                  <CTableDataCell>Some other date</CTableDataCell>
                  <CTableDataCell>5555555555</CTableDataCell>
                  <CTableDataCell>Name 3</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dashboard
