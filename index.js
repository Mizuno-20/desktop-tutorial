import styles from './src/styles/layout.css';

export default function Home() {
  return (
    <>
      <div className="styles.back">
        <div>トップページ</div>
        <li><a href="/login/">Login</a></li>
        <li><a href="/account/">Sing up</a></li>
      </div>
    </>
  )
}