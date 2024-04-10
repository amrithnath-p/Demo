import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CContainer, CHeader, CHeaderNav, CHeaderToggler, CNavLink, CNavItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu, cilMoon } from '@coreui/icons'
import { useNavigate } from 'react-router-dom';
import AppBreadcrumb from './AppBreadcrumb'; // Import the AppBreadcrumb component

const AppHeader = () => {
  const headerRef = useRef()
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('./forms/MyProfile');
  }

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="ms-auto">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilMoon} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <img
              src="https://via.placeholder.com/50"
              alt="profile"
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: '15px', cursor: 'pointer' }}
              onClick={handleProfileClick}
            />
          </CNavItem>
        </CHeaderNav>
      </CContainer>
     
      {/* Include the AppBreadcrumb component */}
      <AppBreadcrumb classname />
    </CHeader>
  )
}

export default AppHeader
