import useNavigationContext from '../hooks/use-navigation-context'
import cx from 'classnames'

const Link = ({to, children, className, activeClassName}) => {
  const {navigate, currentPath} = useNavigationContext()
  const handleClick = (event) => {
    event.preventDefault()
    navigate(to)
  }

  const classes = cx("text-blue-500", className, currentPath === to && activeClassName)

    return <a href={to} onClick={handleClick} className={classes}>{children}</a>
}

export default Link
