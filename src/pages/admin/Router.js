import { useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import CreateTourPage from "./tours/CreateTour"
import Dashboard from "./Dashboard"
import TicketsSummary from "./tickets/Summary"

import { LocalRoutes, APIEndpoints } from "../../config.js"

function AdminRouter() {
  const [tours, setTours] = useState([])

  // console.log({ tours })

  useEffect(() => {

    fetch(APIEndpoints.tours)
      .then(response => response.json())
      .then(data => {
        // console.log('my new tour data', data)
        setTours(data)
      })
      .catch(error => console.error('Admin Router error', error))

  }, [])

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={LocalRoutes.adminHome}>Home</Link>
            </li>
            <li>
              <Link to={LocalRoutes.admin}>Admin Dashboard</Link>
            </li>
            <li>
              <Link to={LocalRoutes.adminToursCreate}>Create a Tour</Link>
            </li>
            <li>
              <Link to={LocalRoutes.adminTicketsSummary}>Tickets Summary</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path={LocalRoutes.adminHome} element={<Dashboard tours={tours} />} />
        <Route
          path={LocalRoutes.adminToursCreate}
          element={<CreateTourPage tours={tours} setTours={setTours} />}
        />
        <Route path={LocalRoutes.adminTicketsSummary} element={<TicketsSummary />} />
      </Routes>
    </>
  )
}

export default AdminRouter
