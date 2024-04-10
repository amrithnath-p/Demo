// import React from 'react'
// import MyProfile from './views/MyProfile/MyProfile'

// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const Requests = React.lazy(() => import('./views/dashboard/Requests/requests'))
// const MyProfile = React.lazy(() => import('./views/dashboard/MyProfile/myprofile'))
// const routes = [
//   { path: '/', exact: true, name: 'Home' },
//   { path: '/dashboard', name: 'Dashboard', element: Dashboard },
//   { path: '/dashboard/Requests/requests', name: 'Requests', element: Requests },
//   { path: '/dashboard/MyProfile/myprofile.js', name: 'My Profile', element: MyProfile },
// ]

// export default routes




import React from 'react'
import MyProfile from './views/MyProfile/MyProfile'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const dash = React.lazy(() => import('./views/dashboard/dash'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/dash', name: 'dash', element: dash },
  { path: '/forms/MyProfile', name: 'MyProfile', element: MyProfile },
]

export default routes