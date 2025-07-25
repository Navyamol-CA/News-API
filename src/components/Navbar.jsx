import React from 'react'

const Navbar = () => {
    return (
        <div>

            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand"><h1>News</h1></a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>


        </div>
    )
}

export default Navbar