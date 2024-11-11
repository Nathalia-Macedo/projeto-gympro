import React from 'react'
import { useDados } from '../../Context/Dados'
import { 
  Ruler, 
  LayoutDashboard, 
  MonitorPlay, 
  Activity, 
  Map, 
  Utensils, 
  Trophy,
  Layout,
  Target,
  Briefcase,
  Settings,
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react'
import './Sidebar.css'

const Sidebar = () => {
  const { isSidebarOpen, theme, toggleTheme } = useDados();
  const [activeMenu, setActiveMenu] = React.useState('Dashboard');

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      isOpen: true,
      subItems: [
        { title: 'Dashboard', path: '/dashboard', onClick: () => {} },
        { 
          title: 'Dashboard Dark', 
          path: '/dashboard-dark', 
          isNew: true, 
          onClick: () => {
            toggleTheme();
          }
        },
        { title: 'Workout Statistic', path: '/workout-statistic', onClick: () => {} },
        { title: 'Workout Plan', path: '/workout-plan', onClick: () => {} },
        { title: 'Distance Map', path: '/distance-map', onClick: () => {} },
        { title: 'Diet Food Menu', path: '/diet-food', onClick: () => {} },
        { title: 'Personal Record', path: '/personal-record', onClick: () => {} },
      ]
    },
    {
      title: 'Apps',
      icon: Layout,
      path: '/apps'
    },
    {
      title: 'Icons',
      icon: Target,
      path: '/icons',
      isNew: true
    },
    {
      title: 'CMS',
      icon: Briefcase,
      path: '/cms',
      isNew: true
    }
  ];

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''} ${theme}`}>
      <div className="sidebar-header">
        <div className="logo">
          <Ruler size={32} className="logo-icon" />
          <span className="logo-text">Gymove.</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div key={item.title} className="nav-item">
            <div 
              className={`nav-link ${activeMenu === item.title ? 'active' : ''}`}
              onClick={() => item.subItems && setActiveMenu(activeMenu === item.title ? '' : item.title)}
            >
              <item.icon size={20} className="nav-icon" />
              <span className="nav-text">{item.title}</span>
              {item.isNew && <span className="badge-new">NEW</span>}
              {item.subItems && <ChevronDown className={`arrow-icon ${activeMenu === item.title ? 'open' : ''}`} />}
            </div>

            {item.subItems && activeMenu === item.title && (
              <div className="subnav">
                {item.subItems.map((subItem) => (
                  <a 
                    key={subItem.title} 
                    href={subItem.path}
                    className="subnav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      subItem.onClick();
                    }}
                  >
                    {subItem.title}
                    {subItem.isNew && <span className="badge-new">NEW</span>}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="theme-toggle">
        <button onClick={toggleTheme} className="theme-toggle-button">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar