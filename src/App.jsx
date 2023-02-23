import './App.css'
import { useState } from 'react'
import ImageSearch from './ImageSearch.jsx'
import ImageDetails from './ImageDetails.jsx'


export default function App() {
  function getSearchView() {
    return <ImageSearch searchQuery={searchQuery} results={searchResults} onSearch={searchImages} querying={querying} showImageDetails={showImageDetails} />
  }

  function getImageDetailsView() {
    return <ImageDetails imageData={imgDetailData} onClose={closeImageDetails} />
  }

  function getView () {
    let viewComponent = null
    
    switch(view) {
      case 'search':
        viewComponent = getSearchView()
        break
      case 'details':
        viewComponent = getImageDetailsView()
        break
      default:
        throw new Error('Invalid View')
    }
    return viewComponent
  }

  function searchImages(query) {
    const query_encoded = encodeURIComponent(query)

    setSearchQuery(query)
    setQuerying(true)

    const API_URL = "https://pixabay.com/api/"
    // Secrets in Codebase:
    // I would never do this in a production application!
    const API_KEY = "33855265-80e5655ee21b3f2ce83ffc680"
    const API_PATH = API_URL + "?q=" + query_encoded + "&image_type=photo&key=" + API_KEY
    fetch(API_PATH)
      .then(res => res.json())
      .then(
        (result) => {
          setQuerying(false)
          setSearchResults(result.hits)
        },
        (error) => {
          setError('ERROR!', error.message)
        }
      )
  }

  function showImageDetails(id) {
    setImgDetailID(id)
    const imageData = searchResults[id]
    setImgDetailData(imageData)
    setView('details')
  }

  function closeImageDetails() {
    setView('search')
  }

  const [view, setView] = useState('search')
  const [searchQuery, setSearchQuery] = useState(null)
  const [searchResults, setSearchResults] = useState(null)
  const [querying, setQuerying] = useState(false)
  const [imgDetailID, setImgDetailID] = useState(null)
  const [imgDetailData, setImgDetailData] = useState(null)
  const [error, setError] = useState(null)  // TODO
  
  const thisView = getView()
  
  return (
    <main className="bg-gray-400">
      <div className="container mx-auto px-4 py-8">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg px-4 py-8">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Pixabay Image Search</h1>
          {thisView}
        </div>
      </div>
    </main>
  )
}
