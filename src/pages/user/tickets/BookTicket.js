import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { Link } from "react-router-dom"

import { fetchData } from "../../../fetch.js"

import { LocalRoutes, APIEndpoints } from "../../../config.js"

function BookTicket() {
  const [ticketToCreate, setTicketToCreate] = useState({
    tourId: null,
    email: "",
    quantity: 0,
    date: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  // console.log({ location })

  const setData = data => navigate(LocalRoutes.tickets)

  useEffect(() => {

    if ( submitted ) {

      const fetchOptions = {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(ticketToCreate)
      }

      const fetchDataParams = {
        url: APIEndpoints.tickets,
        options: fetchOptions,
        cb: setData
      }

      fetchData(fetchDataParams)
      setSubmitted(false);
    }

  }, [ticketToCreate, navigate, submitted])

  function handleSubmit(event) {
    event.preventDefault()

    if (location.state) {
      const { tour } = location.state
      setTicketToCreate({ ...ticketToCreate, tourId: tour.id })
      setSubmitted(true)
    }
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    setTicketToCreate({ ...ticketToCreate, [name]: value })
  }

  return (
    <form className="form-stack" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={ticketToCreate.email}
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        type="text"
        id="quantity"
        name="quantity"
        onChange={handleChange}
        value={ticketToCreate.quantity}
      />
      <label htmlFor="date">Date</label>
      <input
        type="datetime-local"
        id="date"
        name="date"
        onChange={handleChange}
        value={ticketToCreate.date}
      />
      <button type="submit">Book Ticket</button>
      <Link to="/">Cancel</Link>
    </form>
  )
}

export default BookTicket
