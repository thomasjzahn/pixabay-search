export default function ImageThumbnail({ index, imageData, onClick }) {
  function getImageDetails() {
    onClick(index)
  }

  const {id, user, previewURL, previewWidth, previewHeight} = imageData
  const imgSrc = previewURL
  const imgCSS = {
    width: previewWidth,
    height: previewHeight
  }
  const titleString = "#" + id + " by User: " + user
  return (
    <div className="basis-1/4 shadow sm:rounded-lg my-2 mx-2">
      <div className="py-4 px-4">
        <a href="#" onClick={getImageDetails}>
          <img src={imgSrc} title={titleString} style={imgCSS} />
        </a>
      </div>
    </div>
  )
}