// import React, { useState } from 'react'
// import { ArrowRight, ArrowLeft, Search, Moon, Sun, Bell, MessageCircle, Gift, Menu, X } from 'lucide-react'
// import { useDados } from '../../Context/Dados'
// import './Header.css'

// const Header = () => {
//   const { isSidebarOpen, toggleSidebar, theme, toggleTheme } = useDados();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className={`header ${theme} ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//       <div className="header-left" style={{ marginLeft: isSidebarOpen ? '280px' : '0' }}>
//         {!isSidebarOpen && (
//           <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">
//             <ArrowRight size={20} />
//           </button>
//         )}
//         <h1 className="header-title">Dashboard</h1>
//       </div>

//       <div className="header-search">
//         <Search className="search-icon" size={20} />
//         <input 
//           type="text" 
//           placeholder="Search here" 
//           className="search-input"
//         />
//       </div>

//       <div className="header-right">
//         <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
//           {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
//         </button>
        
//         <div className="desktop-icons">
//           <button className="icon-button" aria-label="Notifications">
//             <Bell size={20} />
//             <span className="notification-dot"></span>
//           </button>
          
//           <button className="icon-button" aria-label="Messages">
//             <MessageCircle size={20} />
//             <span className="notification-dot"></span>
//           </button>
          
//           <button className="icon-button" aria-label="Gifts">
//             <Gift size={20} />
//             <span className="notification-dot"></span>
//           </button>
//         </div>

//         <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
//           <button className="icon-button" aria-label="Notifications">
//             <Bell size={20} />
//             <span>Notifications</span>
//           </button>
          
//           <button className="icon-button" aria-label="Messages">
//             <MessageCircle size={20} />
//             <span>Messages</span>
//           </button>
          
//           <button className="icon-button" aria-label="Gifts">
//             <Gift size={20} />
//             <span>Gifts</span>
//           </button>
//         </div>

//         <div className="user-profile">
//           <img 
//             src="/placeholder.svg?height=40&width=40" 
//             alt="User avatar" 
//             className="avatar"
//           />
//           <div className="user-info">
//             <span className="user-name">Peter Parkur</span>
//             <span className="user-role">Super Admin</span>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header
import React, { useState } from 'react'
import { ArrowRight, ArrowLeft, Search, Moon, Sun, Bell, MessageCircle, Gift, Menu, X } from 'lucide-react'
import { useDados } from '../../Context/Dados'
import './Header.css'

const Header = () => {
  const { isSidebarOpen, toggleSidebar, theme, toggleTheme } = useDados();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${theme} ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="header-left">
        <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <ArrowRight size={20} />
        </button>
        <h1 className="header-title">Dashboard</h1>
      </div>

      <div className="header-search">
        <Search className="search-icon" size={20} />
        <input 
          type="text" 
          placeholder="Search here" 
          className="search-input"
        />
      </div>

      <div className="header-right">
        <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        
        <div className="desktop-icons">
          <button className="icon-button" aria-label="Notifications">
            <Bell size={20} />
            <span className="notification-dot"></span>
          </button>
          
          <button className="icon-button" aria-label="Messages">
            <MessageCircle size={20} />
            <span className="notification-dot"></span>
          </button>
          
          <button className="icon-button" aria-label="Gifts">
            <Gift size={20} />
            <span className="notification-dot"></span>
          </button>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <button className="icon-button" aria-label="Notifications">
            <Bell size={20} />
            <span>Notifications</span>
          </button>
          
          <button className="icon-button" aria-label="Messages">
            <MessageCircle size={20} />
            <span>Messages</span>
          </button>
          
          <button className="icon-button" aria-label="Gifts">
            <Gift size={20} />
            <span>Gifts</span>
          </button>
        </div>

        <div className="user-profile">
          <img 
            src="/placeholder.svg?height=40&width=40" 
            alt="User avatar" 
            className="avatar"
          />
          <div className="user-info">
            <span className="user-name">Peter Parkur</span>
            <span className="user-role">Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header