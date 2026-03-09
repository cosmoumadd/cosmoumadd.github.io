import { Link } from 'react-router-dom'

function NavigateBar() {
    return (
        <nav className="bg-slate-700">
            <div className="container mx-auto px-4">
                <ul className="flex gap-4 py-2">
                    <li>
                        <Link to="/" className="text-slate-100 hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-slate-100 hover:underline">About</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="text-slate-100 hover:underline">Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigateBar;