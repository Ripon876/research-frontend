import Header from  '../components/header/Header';
import PublishAnArticle from  '../components/publish-an-article/PublishAnArticle';
import Footer from  '../components/footer/Footer';


function PublishAnArticlePage() {
	return (
		<div>   
		    <Header />
		    <div className='my-4 pt-5'></div>
			<PublishAnArticle />
			<Footer />
		</div>
	)
}

export default PublishAnArticlePage;