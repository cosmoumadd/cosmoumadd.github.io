import NavigateBar from './NavigateBar.tsx'

function Header() {
    return (
        <header className="bg-slate-800 text-slate-100 py-4">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold">Cosmo's Portfolio</h1>
            </div>
            <NavigateBar />
        </header>
    )
}

export default Header;
