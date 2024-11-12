import React, { useState, useRef } from 'react'
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
  transition: box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, ${props => props.theme === 'dark' ? '0.3' : '0.1'});
    background-color: ${props => props.theme === 'dark' ? props.hoverColorDark : props.hoverColor};
    color: white;
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
  transition: background-color 0.3s ease;
  border:3px solid white;

  ${CardWrapper}:hover & {
    background-color: ${props => props.theme === 'dark' ? props.bgColorDark : props.bgColor};
  }
`

const Title = styled.h3`
  color: ${props => props.theme === 'dark' ? '#a0aec0' : '#6b7280'};
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  transition: color 0.3s ease;

  ${CardWrapper}:hover & {
    color: white;
  }
`

const Value = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#111827'};
  transition: color 0.3s ease;

  ${CardWrapper}:hover & {
    color: white;
  }
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
    transition: width 0.3s ease, background-color 0.3s ease;
  }

  ${CardWrapper}:hover &::after {
    background-color: white;
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
      bgColor: '#22c55e',
      bgColorDark: '#22c55e'
    },
    running: {
      icon: RulerIcon,
      color: '#a855f7',
      colorDark: '#c084fc',
      bgColor: '#a855f7',
      bgColorDark: '#a855f7'
    },
    cycling: {
      icon: Bike,
      color: '#ec4899',
      colorDark: '#f472b6',
      bgColor: '#ec4899',
      bgColorDark: '#ec4899'
    },
    yoga: {
      icon: PersonStanding,
      color: '#eab308',
      colorDark: '#facc15',
      bgColor: '#eab308',
      bgColorDark: '#eab308'
    }
  }
  return configs[type]
}

const StyledIcon = styled(({ icon: Icon, ...props }) => <Icon {...props} />)`
  color: white;
  transition: color 0.3s ease;
`

const Card = ({ title, value, type, progress }) => {
  const { theme } = useDados()
  const config = getCardConfig(type)
  const Icon = config.icon
  const cardRef = useRef(null)

  const handleMouseEnter = (e) => {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
  }

  const handleMouseLeave = () => {
  }

  return (
    <CardWrapper 
      ref={cardRef}
      theme={theme} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      hoverColor={config.color}
      hoverColorDark={config.colorDark}
    >
      <IconWrapper 
        theme={theme}
        bgColor={config.bgColor}
        bgColorDark={config.bgColorDark}
        border={config.border}
      >
        <StyledIcon 
          icon={Icon}
          size={32}
        />
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