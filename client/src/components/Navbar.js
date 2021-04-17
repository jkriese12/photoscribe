import React from 'react'

const Navbar = () => {
    return (
        
        <Navbar bg="light">
            <Navbar.Brand href="/">PhotoScribe</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="/login">Sign In</a>
                    </Navbar.Text>
                </Navbar.Collapse>
        </Navbar> 
   

    )
}

export default Navbar;





