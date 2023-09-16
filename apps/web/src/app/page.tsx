import Image from 'next/image'
import styles from './page.module.css'
import Form from '@/components/Form'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>welcome to the P As SaaS (password as saas or pass ass) website</p>
        <Form />
      </div>
    </main>
  )
}
