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
  ChevronDown
} from 'lucide-react'
import './Sidebar.css'

const menuItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    isOpen: true,
    subItems: [
      { title: 'Dashboard', path: '/dashboard' },
      { title: 'Dashboard Dark', path: '/dashboard-dark', isNew: true },
      { title: 'Workout Statistic', path: '/workout-statistic' },
      { title: 'Workout Plan', path: '/workout-plan' },
      { title: 'Distance Map', path: '/distance-map' },
      { title: 'Diet Food Menu', path: '/diet-food' },
      { title: 'Personal Record', path: '/personal-record' },
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
]

const Sidebar = () => {
  const { isSidebarOpen } = useDados();
  const [activeMenu, setActiveMenu] = React.useState('Dashboard');

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
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
    </aside>
  )
}

export default Sidebar