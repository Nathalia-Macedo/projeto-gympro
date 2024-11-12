// import React from 'react'
// import styled, { ThemeProvider } from 'styled-components'
// import Card from '../Components/Card/Card'
// import Header from '../Components/Header/Header'
// import Sidebar from '../Components/SideBar/SideBar'
// import { useDados } from '../Context/Dados'

// const lightTheme = {
//   background: '#ffffff',
//   text: '#333333',
//   // Add more color variables as needed
// }

// const darkTheme = {
//   background: '#333333',
//   text: '#ffffff',
//   // Add more color variables as needed
// }

// const DashboardContainer = styled.div`
//   display: flex;
//   background-color: ${props => props.theme.background};
//   color: ${props => props.theme.text};
//   min-height: 100vh;
// `

// const MainContent = styled.main`
//   flex: 1;
//   transition: margin-left 0.3s ease;
//   margin-left: ${props => props.sidebarOpen ? '280px' : '80px'};
//   padding-left: 10px; // Adiciona espaço para o cabeçalho

//   @media (max-width: 768px) {
//     margin-left: 0;
//     padding-left: 10px;
//   }
// `

// const DashboardGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 24px;
//   padding: 24px;
//   max-width: 1400px;
//   margin: 0 auto;
//   justify-content: center;

//   & > * {
//     min-width: 600px; // Minimum width before wrapping
//     max-width: calc(50% - 24px); // Prevent cards from growing too large
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
   
//     align-items: center;
//     padding: 16px;
    
//     & > * {
//       flex: 1 1 100%;
//       max-width: 100%;
//       width: 100%;
//     }
//   }
// `

// const Dashboard = () => {
//   const { isSidebarOpen, cardData, theme } = useDados();
//   const currentTheme = theme === 'light' ? lightTheme : darkTheme;

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <DashboardContainer>
//         <Sidebar />
//         <MainContent sidebarOpen={isSidebarOpen}>
//           <Header />
//           <DashboardGrid>
//             {cardData.map((card) => (
//               <Card
//                 key={card.title}
//                 title={card.title}
//                 value={card.value}
//                 type={card.type}
//                 progress={card.progress}
//               />
//             ))}
//           </DashboardGrid>
//         </MainContent>
       
//       </DashboardContainer>
//     </ThemeProvider>
//   )
// }

// export default Dashboard

import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Card from '../Components/Card/Card'
import Header from '../Components/Header/Header'
import Sidebar from '../Components/SideBar/SideBar'
import { useDados } from '../Context/Dados'

const lightTheme = {
  background: '#ffffff',
  text: '#333333',
}

const darkTheme = {
  background: '#333333',
  text: '#ffffff',
}

const DashboardContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  min-height: 100vh;
`

const MainContent = styled.main`
  flex: 1;
  transition: margin-left 0.3s ease;
  margin-left: ${props => props.sidebarOpen ? '280px' : '80px'};
  padding-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
 
  }
`

const DashboardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: center;

  & > * {
    min-width: 600px;
    max-width: calc(50% - 24px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 16px;
    margin-top: 0;
    flex-wrap:nowrap;
    
    & > * {
      min-width: unset;
      max-width: 100%;
      width: calc(100% - 32px);
      margin: 0 16px;
    }
  }
`

const Dashboard = () => {
  const { isSidebarOpen, cardData, theme } = useDados();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <DashboardContainer>
        <Sidebar />
        <MainContent sidebarOpen={isSidebarOpen}>
          <Header />
          <DashboardGrid>
            {cardData.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                value={card.value}
                type={card.type}
                progress={card.progress}
              />
            ))}
          </DashboardGrid>
        </MainContent>
      </DashboardContainer>
    </ThemeProvider>
  )
}

export default Dashboard