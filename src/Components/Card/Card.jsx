import React from 'react'
import styled from 'styled-components'
import { Dumbbell, RulerIcon, Bike, PersonStanding } from 'lucide-react'

const CardWrapper = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 240px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.hoverColor};
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h3`
  color: #6b7280;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`

const Value = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #111827;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: #f3f4f6;
  border-radius: 2px;
  overflow: hidden;
  
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
  gap: 8px;
`

const getCardConfig = (type) => {
  const configs = {
    progress: {
      icon: Dumbbell,
      color: '#22c55e',
      bgColor: '#dcfce7'
    },
    running: {
      icon: RulerIcon,
      color: '#a855f7',
      bgColor: '#f3e8ff'
    },
    cycling: {
      icon: Bike,
      color: '#ec4899',
      bgColor: '#fce7f3'
    },
    yoga: {
      icon: PersonStanding,
      color: '#eab308',
      bgColor: '#fef9c3'
    }
  }
  return configs[type]
}

const Card = ({ title, value, type, progress }) => {
  const config = getCardConfig(type)
  const Icon = config.icon

  return (
    <CardWrapper hoverColor={config.bgColor}>
      <IconWrapper bgColor={config.bgColor}>
        <Icon size={24} color={config.color} />
      </IconWrapper>
      <CardContent>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </CardContent>
      <ProgressBar color={config.color} progress={progress} />
    </CardWrapper>
  )
}

export default Card