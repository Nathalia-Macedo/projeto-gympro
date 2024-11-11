import React from 'react'
import { ArrowRight, ArrowLeft, Search, Moon, Bell, MessageCircle, Gift } from 'lucide-react'
import { useDados } from '../../Context/Dados'
import './Header.css'

const Header = () => {
  const { isSidebarOpen, toggleSidebar } = useDados();

  return (
    <header className="header">
      <div className="header-left">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
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
        <button className="icon-button">
          <Moon size={20} />
        </button>
        
        <button className="icon-button">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>
        
        <button className="icon-button">
          <MessageCircle size={20} />
          <span className="notification-dot"></span>
        </button>
        
        <button className="icon-button">
          <Gift size={20} />
          <span className="notification-dot"></span>
        </button>

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