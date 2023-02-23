import ImageThumbnail from './ImageThumbnail.jsx'

export default function ImageSearchResults({ query, results, showDetails }) {
  let view = null
  
  if (results) {
    const resultThumbnails = results.map((result, i) => {
      return <ImageThumbnail key={i} index={i} imageData={result} onClick={showDetails}/>
    })

    view = (
      <div>
        <h3>Results for "{query}"</h3>
        <div className="flex flex-row flex-wrap">
          {resultThumbnails}
        </div>
      </div>
    )
  } else {
    const msg = "No results found"
    view = (<p>{msg}</p>)
  }

  return (
    <div>
      <h2 className="text-xl font-bold my-4">Results</h2>
      {view}
    </div>
  )
}