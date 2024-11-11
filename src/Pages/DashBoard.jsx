import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Card from '../Components/Card/Card'
import Header from '../Components/Header/Header'
import Sidebar from '../Components/SideBar/SideBar'
import { useDados } from '../Context/Dados'

const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  // Add more color variables as needed
}

const darkTheme = {
  background: '#333333',
  text: '#ffffff',
  // Add more color variables as needed
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
  margin-left: ${props => props.sidebarOpen ? '280px' : '0'};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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