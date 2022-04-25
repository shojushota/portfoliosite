import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DragAndDrop from './components/dragAndDrop'

export default function Home() {
  return (
    <div>
      <DragAndDrop/>
    </div>
  )
}
