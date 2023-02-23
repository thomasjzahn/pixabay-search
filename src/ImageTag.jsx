export default function ImageTag( { label } ) {
  const tagClass = "justify-center rounded-md border border-transparent bg-green-300 py-2 px-2 text-sm font-medium"
  
  return (
    <li className={tagClass}>
      {label}
    </li>
  )
}