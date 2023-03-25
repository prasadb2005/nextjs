import {useRouter} from 'next/router';
import Link from 'next/link';
function ProductDetails({productId=100}){
    const router = useRouter();
    const prodId = router.query.productId;
    return (<div><h1>Product Details for product {prodId}</h1>
        <Link href="/product">
        Back to Product list
        </Link>
        <Link href="/">
        Back to Homepage
        </Link>
    </div>)
}

export default ProductDetails