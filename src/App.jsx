import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { getRandomNumber } from './util/handleRandom'
import LocationInfo from './componets/LocationInfo'
import ResidentCard from './componets/ResidentCard'
import Pagination from './componets/Pagination'
import ResidentList from './componets/ResidentList'
import ResidentForm from './componets/ResidentForm'
import Baner from './componets/Baner'

const RESIDENTS_PERPAGE = 12

function App() {
  // estado que se  almacena la innformacion de la loccatidad
  const [location, setLocation] = useState()
  // estado que almacena el valor del  input no controlado
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)


  //funcion que se ejecuta en el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  //function que se encarga de obtener los residentes dependiendo de la pagina actual 
  const pagination = () => {
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit)
    return newResidents
  }



  //efecto que se ejecuta en el primmer render y cuando cambia
  //nameLocation
  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [nameLocation])

  return (
    <div className="App">
      <Baner />
      <ResidentForm handleSubmit={handleSubmit} />
      <LocationInfo location={location} />
      <Pagination Location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage} />
      <ResidentList pagination={pagination}></ResidentList>
      <Pagination Location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage} />
    </div>
  )
}
export default App
