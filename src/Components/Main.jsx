'use client'

import React from 'react'
import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react'
import Card from './Card'
import styles from './Main.module.css'

export default function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.cardGrid}>
        <Card 
          title="Total de Alunos" 
          value="1.234" 
          icon={<Users className={styles.cardIcon} />}
          trend={5.2}
          color="blue"
        />
        <Card 
          title="Receita Mensal" 
          value="R$ 56.789" 
          icon={<DollarSign className={styles.cardIcon} />}
          trend={-2.5}
          color="green"
        />
        <Card 
          title="Novos Membros" 
          value="89" 
          icon={<TrendingUp className={styles.cardIcon} />}
          trend={12.3}
          color="orange"
        />
        <Card 
          title="Taxa de Retenção" 
          value="95.6%" 
          icon={<Activity className={styles.cardIcon} />}
          trend={1.2}
          color="purple"
        />
      </div>
    </main>
  )
}