import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";


function GalleryPage() {
	return (
		<div>
			<Header />
			<div style={{ height: "150px" }}></div>
			<Gallery />
			<Footer />
		</div>
	)
}

export default GalleryPage;