
import './App.css'
import Navbar from './Navbar/Navbar'
import SearchBar from './search-bar/SearchBar'
import Categories from './Categories/Categories'
// import ListingCards from './ListingCards/ListingCards'
import Footer from './Footer/Footer'
import Listings from './Components/Listings.jsx'
function App() {

  return (
    <>
      <Navbar/>
      <SearchBar/>
      <Categories/>
      <Listings />
      <Footer/>
    </>
  )
}

export default App
