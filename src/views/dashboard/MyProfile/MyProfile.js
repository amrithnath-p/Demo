import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons

const MyProfile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>My Profile</strong>
          </CCardHeader>
          <CCardBody>
            <h6>User Details</h6>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="name">Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="username">Username</CFormLabel>
                <CFormInput
                  type="text"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="email">Email</CFormLabel>
                <CFormInput
                  type="email"
                  id="email"
                  placeholder="example@softnotions.com"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="department">Department</CFormLabel>
                <CFormInput
                  type="text"
                  id="department"
                  placeholder="Department"
                />
              </div>
            </CForm>
            <br />
            <h6>Reset Password</h6>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="currentPassword">Current Password</CFormLabel>
                <CInputGroup>
                  <CFormInput
                    type={showPassword ? 'text' : 'password'}
                    id="currentPassword"
                    placeholder="Current Password"
                  />
                  <CInputGroupText onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </CInputGroupText>
                </CInputGroup>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="newPassword">New Password</CFormLabel>
                <CInputGroup>
                  <CFormInput
                    type={showPassword ? 'text' : 'password'}
                    id="newPassword"
                    placeholder="New Password"
                  />
                  <CInputGroupText onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </CInputGroupText>
                </CInputGroup>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="confirmPassword">Confirm New Password</CFormLabel>
                <CInputGroup>
                  <CFormInput
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    placeholder="Confirm New Password"
                  />
                  <CInputGroupText onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </CInputGroupText>
                </CInputGroup>
              </div>
              <CButton color="primary" type="submit">
                Reset Password
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default MyProfile;
