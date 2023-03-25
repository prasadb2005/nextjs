import Link from "next/link"
function MyBlog(){
    return (<div><h1>Product Details</h1>
    <Link href="/product">
        Back to Product list
        </Link>
        <Link href="/">
        Back to Homepage
        </Link>
    </div>)
}

export default MyBlog