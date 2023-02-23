import { useState } from 'react';
import ImageSearchResults from './ImageSearchResults.jsx'


export default function ImageSearch({ searchQuery, results, onSearch, querying, showImageDetails }) {
  function updateSearchQuery(e) {
    setQuery(e.target.value)
  }

  function searchImages() {
    onSearch(query)
  }

  const defaultQuery = (searchQuery) ? searchQuery : 'Search Query'
  const [query, setQuery] = useState(defaultQuery);

  // TODO
  const queryingView = (
    <div>Searching for images...</div>
  )
  const resultsView = (
    <ImageSearchResults query={searchQuery} results={results} showDetails={showImageDetails} />
  )
  const resultsPane = querying ? queryingView : resultsView

  const inputClass = "relative inline appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-lg col-span-2"
  const buttonClass = "relative inline flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"

  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-3 gap-2">
        <input type="text" className={inputClass} value={query} onChange={updateSearchQuery} disabled={querying} />
        <button className={buttonClass} onClick={searchImages} disabled={querying}>Search</button>
      </div>
      <div>
        {resultsPane}
      </div>
    </div>
  )
}