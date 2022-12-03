import { lazy } from 'react'

const Landing = lazy(() => import('../Views/Landing'))
const Country = lazy(() => import('../Views/CountryDetails'))
const About = lazy(() => import('../Views/About'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Landing },
  { path: '/details', exact: true, name: 'Country Details', element: Country },
  { path: '/about', exact: true, name: 'About', element: About },
];

export default routes
