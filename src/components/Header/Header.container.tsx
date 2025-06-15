import { useState } from 'react'
import Header from './Header'

const HeaderContainer = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    const navList = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Favorites',
            path: '/favorites'
        },
    ]

    const toggleSidebar = () => setShowSidebar(!showSidebar)

    return (
        <Header showSidebar={showSidebar} toggleSidebar={toggleSidebar} navList={navList} />
    )
}

export default HeaderContainer