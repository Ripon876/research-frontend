import Moderator from './Moderator';
import "./Moderators.css";

function Moderators() {
	return (
		<div>
			<section id="moderators" className="moderators  mt-5 pt-5">
				<div className="container  mt-5 pt-5">
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
						
						{new Array(12)?.fill(1).map(() => 
							<Moderator />
						)}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Moderators;
