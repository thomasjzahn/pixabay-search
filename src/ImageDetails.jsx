import ImageTag from './ImageTag.jsx'

export default function ImageDetails( { imageData, onClose} ) {
  const {id, webformatURL, user, tags, views, downloads, likes, comments, webformatWidth, webformatHeight} = imageData

  const userProfileURL = "https://pixabay.com/users/" + encodeURIComponent(user)

  // Stats:
  const statsFormatted = {
    "views": Number(views).toLocaleString('en-US'),
    "downloads": Number(downloads).toLocaleString('en-US'),
    "likes": Number(likes).toLocaleString('en-US'),
    "comments": Number(comments).toLocaleString('en-US')
  }
  
  const splitTags = tags.split(', ')
  
  const imageTags = splitTags.map((tag, i) => {
    return <ImageTag key={i} label={tag} />
  })
  
  const imgCSS = {
    width: webformatWidth,
    height: webformatHeight
  }

  const userProfileLinkClass = "underline text-green-700"
  
  const statsBoxClass = "rounded-md bg-slate-200 px-2 py-2"
  const statsDataClass = "text-3xl font-bold"
  const statsLabelClass = "text-md"

  const buttonClass = "relative inline flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 my-4"
  
  return (
    <div className="container px-8 py-8">
      <h3 className="text-2xl font-bold py-4">Image #{id}</h3>
      <h4 className="text-2xl py-4">
        from: <a href={userProfileURL} className={userProfileLinkClass} target="_blank">{user}</a>
      </h4>
      <img src={webformatURL} className="my-4" style={imgCSS} />
      <h4 className="text-xl font-bold my-4">Tags</h4>
      <ul className="inline-grid grid-cols-4 gap-4">
        {imageTags}
      </ul>
      <h4 className="text-xl font-bold my-4">Stats</h4>
      <div className="inline-grid grid-cols-4 gap-4">
        <div className={statsBoxClass}>
          <h6 className={statsDataClass}>
            {statsFormatted.views}
          </h6>
          <p className={statsLabelClass}>
            Views
          </p>
        </div>
        <div className={statsBoxClass}>
          <h6 className={statsDataClass}>
            {statsFormatted.downloads}
          </h6>
          <p className={statsLabelClass}>
            Downloads
          </p>
        </div>
        <div className={statsBoxClass}>
          <h6 className={statsDataClass}>
            {statsFormatted.likes}
          </h6>
          <p className={statsLabelClass}>
            Likes
          </p>
        </div>
        <div className={statsBoxClass}>
          <h6 className={statsDataClass}>
            {statsFormatted.comments}
          </h6>
          <p className={statsLabelClass}>
            Comments
          </p>
        </div>
      </div>
      
      <button className={buttonClass} onClick={onClose}>Back to Search Results</button>
    </div>
  )
}