import ToursList from "./components/ToursList"

function Dashboard(props) {
  const { tours } = props

  // console.log('in Dashboard', tours)

  return (
    <main>
      <h1>Dashboard</h1>
      <ToursList tours={tours} />
    </main>
  )
}

export default Dashboard
