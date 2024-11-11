import React from 'react'
import styled from 'styled-components'
import { Dumbbell, RulerIcon, Bike, PersonStanding } from 'lucide-react'
import { useDados } from '../../Context/Dados'

const CardWrapper = styled.div`
  background: ${props => props.theme === 'dark' ? '#2e2e2e' : 'white'};
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, ${props => props.theme === 'dark' ? '0.2' : '0.05'});
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 240px;
  height: 120px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: ${props => props.theme === 'dark' ? props.hoverColorDark : props.hoverColor};
  }
`

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${props => props.theme === 'dark' ? props.bgColorDark : props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h3`
  color: ${props => props.theme === 'dark' ? '#a0aec0' : '#6b7280'};
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`

const Value = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#111827'};
`

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: ${props => props.theme === 'dark' ? '#4a5568' : '#f3f4f6'};
  position: absolute;
  bottom: 0;
  left: 0;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.progress}%;
    background-color: ${props => props.color};
    transition: width 0.3s ease;
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`

const getCardConfig = (type, theme) => {
  const configs = {
    progress: {
      icon: Dumbbell,
      color: '#22c55e',
      colorDark: '#4ade80',
      bgColor: '#dcfce7',
      bgColorDark: '#064e3b'
    },
    running: {
      icon: RulerIcon,
      color: '#a855f7',
      colorDark: '#c084fc',
      bgColor: '#f3e8ff',
      bgColorDark: '#5b21b6'
    },
    cycling: {
      icon: Bike,
      color: '#ec4899',
      colorDark: '#f472b6',
      bgColor: '#fce7f3',
      bgColorDark: '#831843'
    },
    yoga: {
      icon: PersonStanding,
      color: '#eab308',
      colorDark: '#facc15',
      bgColor: '#fef9c3',
      bgColorDark: '#713f12'
    }
  }
  return configs[type]
}

const Card = ({ title, value, type, progress }) => {
  const { theme } = useDados()
  const config = getCardConfig(type)
  const Icon = config.icon

  return (
    <CardWrapper 
      theme={theme} 
      hoverColor={config.bgColor}
      hoverColorDark={config.bgColorDark}
    >
      <IconWrapper 
        theme={theme}
        bgColor={config.bgColor}
        bgColorDark={config.bgColorDark}
      >
        <Icon size={32} color={theme === 'dark' ? config.colorDark : config.color} />
      </IconWrapper>
      <CardContent>
        <Title theme={theme}>{title}</Title>
        <Value theme={theme}>{value}</Value>
      </CardContent>
      <ProgressBar 
        theme={theme}
        color={theme === 'dark' ? config.colorDark : config.color} 
        progress={progress} 
      />
    </CardWrapper>
  )
}

export default Card