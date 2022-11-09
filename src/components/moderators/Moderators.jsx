import Moderator from './Moderator';
import "./Moderators.css";

function Moderators() {
	return (
		<div>
			<section id="moderators" className="moderators">
				<div className="container">
					<div className="section-title">
						<h2>Moderators</h2>
						<p>
							Magnam dolores commodi suscipit. Necessitatibus eius
							consequatur ex aliquid fuga eum quidem. Sit sint
							consectetur velit. Quisquam quos quisquam
							cupiditate. Et nemo qui impedit suscipit alias ea.
							Quia fugiat sit in iste officiis commodi quidem hic
							quas.
						</p>
					</div>
					<div className="justify-content-center row mt-4">
						<Moderator />
						<Moderator />
						<Moderator />
						<Moderator />
						<Moderator />
					</div>
				</div>
			</section>
		</div>
	);
}

export default Moderators;
