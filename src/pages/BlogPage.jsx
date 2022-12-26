import Header from  '../components/header/Header';
import Footer from  '../components/footer/Footer';
import Blog from  '../components/blog/Blog';

function BlogPage() {
	return (
		<div>
			<Header />
			<div style={{ height: "150px" }}></div>
			<Blog />
			<Footer />
		</div>
	)
}

export default BlogPage;