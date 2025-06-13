import { useState } from 'react'
import Header from './Header'

const HeaderContainer = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    const toggleSidebar = () => setShowSidebar(!showSidebar)

    return (
        <Header showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    )
}

export default HeaderContainer