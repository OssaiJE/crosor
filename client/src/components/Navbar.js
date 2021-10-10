import React, { useState } from 'react'


const Navbar = () => {
    const [activeItem, setActiveItem] = useState("")

    const handleItemClick = (e, {name}) => setActiveItem(name);
   
        return (
            <div>
               <h1>a</h1> 
            </div>
        )

    
}

export default Navbar