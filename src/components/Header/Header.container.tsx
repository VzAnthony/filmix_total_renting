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
            name: 'Top Movies',
            path: '/top-movies'
        },
        {
            name: 'Favorites',
            path: '/favorites'
        },
        {
            name: 'Genders',
            path: '/genders'
        },
        {
            name: 'Releases',
            path: '/releases'
        }
    ]

    const toggleSidebar = () => setShowSidebar(!showSidebar)

    return (
        <Header showSidebar={showSidebar} toggleSidebar={toggleSidebar} navList={navList} />
    )
}

export default HeaderContainer