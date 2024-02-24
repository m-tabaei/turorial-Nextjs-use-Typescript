import styles from "./page.module.css";
import Users from '../components/Users';

export default function Home() {
  const users = [
    {name:"user1", age: 25},
    {name:"user2", age: 26}
  ]
  return (
    <main className={styles.main}>
      <h2>Next - Typescript  Starter</h2>
      <Users users={users}/>
    </main>
  );
}
