import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Blogs from "../components/blogs/Blogs";

function BlogsPage() {
	return (
		<div>
			<Header />
			<div style={{ height: "150px" }}></div>
			<Blogs />
			<Footer />
		</div>
	);
}

export default BlogsPage;
