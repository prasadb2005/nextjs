import {useRouter} from 'next/router';

function ProductReview(){
    const router = useRouter();
    const {productId, reviewId} = router.query;
    
    return <h1>This is review {reviewId} for the product {productId}</h1>
}

export default ProductReview