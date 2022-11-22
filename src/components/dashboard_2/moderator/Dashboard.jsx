import Header from '../header/Header';
import Posts from '../posts/Posts';

function MDashboard() {
	console.log('moderator Dashboard')
	return (
		<div>
			<Header />
			<Posts />
		</div>
	)
}

export default MDashboard;