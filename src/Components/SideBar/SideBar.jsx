// import React from 'react'
// import { useDados } from '../../Context/Dados'
// import { 
//   Ruler, 
//   LayoutDashboard, 
//   Monitor, 
//   BarChart2, 
//   MapPin, 
//   Apple, 
//   Award,
//   Layout,
//   Target,
//   Briefcase,
//   Settings,
//   ChevronDown,
//   Sun,
//   Moon
// } from 'lucide-react'
// import './Sidebar.css'

// const Sidebar = () => {
//   const { isSidebarOpen, theme, toggleTheme } = useDados();
//   const [activeMenu, setActiveMenu] = React.useState('Dashboard');

//   const menuItems = [
//     {
//       title: 'Dashboard',
//       icon: LayoutDashboard,
//       isOpen: true,
//       color: '#6366f1',
//       subItems: [
//         { title: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, onClick: () => {} },
//         { 
//           title: 'Dashboard Dark', 
//           path: '/dashboard-dark', 
//           icon: Moon,
//           isNew: true, 
//           onClick: () => {
//             toggleTheme();
//           }
//         },
//         { title: 'Workout Statistic', path: '/workout-statistic', icon: BarChart2, onClick: () => {} },
//         { title: 'Workout Plan', path: '/workout-plan', icon: Target, onClick: () => {} },
//         { title: 'Distance Map', path: '/distance-map', icon: MapPin, onClick: () => {} },
//         { title: 'Diet Food Menu', path: '/diet-food', icon: Apple, onClick: () => {} },
//         { title: 'Personal Record', path: '/personal-record', icon: Award, onClick: () => {} },
//       ]
//     },
//     {
//       title: 'Apps',
//       icon: Layout,
//       path: '/apps',
//       color: '#818cf8'
//     },
//     {
//       title: 'Icons',
//       icon: Target,
//       path: '/icons',
//       isNew: true
//     },
//     {
//       title: 'CMS',
//       icon: Briefcase,
//       path: '/cms',
//       isNew: true
//     },
//     {
//       title: 'Settings',
//       icon: Settings,
//       path: '/settings'
//     }
//   ];

//   return (
//     <aside className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'} ${theme}`}>
//       <div className="sidebar-header">
//         <div className="logo">
//           <Ruler size={32} className="logo-icon" />
//         </div>
//       </div>

//       <nav className="sidebar-nav">
//         {menuItems.map((item) => (
//           <div key={item.title} className="nav-item">
//             <div 
//               className={`nav-link ${activeMenu === item.title ? 'active' : ''}`}
//               onClick={() => item.subItems && setActiveMenu(activeMenu === item.title ? '' : item.title)}
//             >
//               <item.icon 
//                 size={20} 
//                 className="nav-icon"
//                 style={{ color: item.color }} 
//               />
//               <span className="nav-text">{item.title}</span>
//               {item.isNew && <span className="badge-new">NEW</span>}
//               {item.subItems && <ChevronDown className={`arrow-icon ${activeMenu === item.title ? 'open' : ''}`} />}
//             </div>

//             {item.subItems && activeMenu === item.title && (
//               <div className="subnav">
//                 {item.subItems.map((subItem) => (
//                   <a 
//                     key={subItem.title} 
//                     href={subItem.path}
//                     className="subnav-link"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       subItem.onClick();
//                     }}
//                   >
//                     {subItem.icon && <subItem.icon size={16} className="subnav-icon" />}
//                     <span>{subItem.title}</span>
//                     {subItem.isNew && <span className="badge-new">NEW</span>}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </nav>

//       <div className="theme-toggle">
//         <button onClick={toggleTheme} className="theme-toggle-button">
//           {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
//           <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
//         </button>
//       </div>
//     </aside>
//   )
// }

// export default Sidebar

import React from 'react'
import { useDados } from '../../Context/Dados'
import { 
  Ruler, 
  LayoutDashboard, 
  Monitor, 
  BarChart2, 
  MapPin, 
  Apple, 
  Award,
  Layout,
  Target,
  Briefcase,
  Settings,
  ChevronDown,
  Sun,
  Moon,
  ChevronLeft
} from 'lucide-react'
import './Sidebar.css'

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar, theme, toggleTheme } = useDados();
  const [activeMenu, setActiveMenu] = React.useState('Dashboard');

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      isOpen: true,
      color: '#6366f1',
      subItems: [
        { title: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, onClick: () => {} },
        { 
          title: 'Dashboard Dark', 
          path: '/dashboard-dark', 
          icon: Moon,
          isNew: true, 
          onClick: () => {
            toggleTheme();
          }
        },
        { title: 'Workout Statistic', path: '/workout-statistic', icon: BarChart2, onClick: () => {} },
        { title: 'Workout Plan', path: '/workout-plan', icon: Target, onClick: () => {} },
        { title: 'Distance Map', path: '/distance-map', icon: MapPin, onClick: () => {} },
        { title: 'Diet Food Menu', path: '/diet-food', icon: Apple, onClick: () => {} },
        { title: 'Personal Record', path: '/personal-record', icon: Award, onClick: () => {} },
      ]
    },
    {
      title: 'Apps',
      icon: Layout,
      path: '/apps',
      color: '#818cf8'
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
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/settings'
    }
  ];

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'} ${theme}`}>
      <div className="sidebar-header">
        <div className="logo">
          <Ruler size={32} className="logo-icon" />
          <span className="logo-text">Gympro</span>
        </div>
        {isSidebarOpen && (
          <button className="sidebar-close" onClick={toggleSidebar}>
            <ChevronLeft size={24} />
          </button>
        )}
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div key={item.title} className="nav-item">
            <div 
              className={`nav-link ${activeMenu === item.title ? 'active' : ''}`}
              onClick={() => item.subItems && setActiveMenu(activeMenu === item.title ? '' : item.title)}
            >
              <item.icon 
                size={20} 
                className="nav-icon"
                style={{ color: item.color }} 
              />
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
                    {subItem.icon && <subItem.icon size={16} className="subnav-icon" />}
                    <span>{subItem.title}</span>
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