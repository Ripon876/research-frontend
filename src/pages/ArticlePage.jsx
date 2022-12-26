import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Article from "../components/article/Article";

function ArticlePage() {
	return (
		<div>
			<Header />
			<div style={{ height: "150px" }}></div>
			<Article />
			<Footer />
		</div>
	);
}

export default ArticlePage;
