import Link from 'next/link'

function Product({productId=100}){
    return (
    <div>
        <h1>Products</h1>
    <ul>
    <li><Link href="/productDetails/1">Product 1</Link></li>
    <li><Link href="/productDetails/2">Product 2</Link></li>
    <li><Link href="/productDetails/3">Product 3</Link></li>
    <li><Link href={`/productDetails/${productId}`}>Product {productId}</Link></li>
    </ul>    
    <Link href="/"> Back to Home
        </Link></div>)
}

export default Product