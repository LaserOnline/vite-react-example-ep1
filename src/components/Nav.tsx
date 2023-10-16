import '../App.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
     

    </nav>
  )
}