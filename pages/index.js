import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  
  const handleClick= (e) =>{
    console.log('in handle click')
    router.push('/product')
  }
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">
      Blog
      </Link>
      <Link href="/product">
        Product
        </Link>
        <div>
          <button onClick={handleClick}>Product click</button>
        </div>
    </div>
  )
}
