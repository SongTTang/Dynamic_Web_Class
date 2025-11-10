import Link from "./Link"

const LINKS = [
  { lable: 'Cats', path: '/cats' },
  { lable: 'Chickens', path: '/chickens' },
  { lable: 'Cage', path: '/cage' },
  { lable: 'Wu Tang', path: '/wu' },
]

const Menu = () => {

  // map through our Links array and render Link components
  const renderedLinks = LINKS.map((link) => {
    return (
      <Link key={link.lable} to={link.path} className="mb-3" activeClassName="font-bold borfer-l-4 border-blue-500 pl-2">
        {link.lable}
      </Link>
    )
  })
  return <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">{renderedLinks}</div>
}

export default Menu
