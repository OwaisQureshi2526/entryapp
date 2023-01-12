import "../components/Navbar.css"

export const Navbar = () => {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src="./logo.png" alt="" height={100} />
                    <h3 id="heading">INWARD REGISTER</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">

                        </ul>

                        
                    </div>
                </div>
            </nav>
        </>
    )
}
