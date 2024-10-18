
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { FashionPage } from './Pages/FashionPage'
import { TravelPage } from './Pages/TravelPage'
import { TechnologyPage } from './Pages/TechnologyPage'
import { LifestylePage } from './Pages/LifestylePage'
import { FeaturesPage } from './Pages/FeaturesPage'
import { EducationPage } from './Pages/EducationPage'
import { PagesPage } from './Pages/PagesPage'
import { SportsPage } from './Pages/SportsPage'
import { LayoutOne } from './components/layouts/LayoutOne'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/' element={<LayoutOne />}>
           <Route path='/fashion' element={<FashionPage/>}/>
           <Route path='/travel' element={<TravelPage/>}/>
           <Route path='/technology' element={<TechnologyPage/>}/>
           <Route path='/lifestyle' element={<LifestylePage/>}/>
           <Route path='/features' element={<FeaturesPage/>}/>
           <Route path='/education' element={<EducationPage/>}/>
           <Route path='/pages' element={<PagesPage/>}/>
           <Route path='/sports' element={<SportsPage/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
