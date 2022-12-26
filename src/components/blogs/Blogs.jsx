import Blog from "./blog/Blog";

function Blogs() {
	return (
		<div>
			<div className="container">
				<div className="section-title">
					<h2>Blogs</h2>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate. Et
						nemo qui impedit suscipit alias ea. Quia fugiat sit in
						iste officiis commodi quidem hic quas.
					</p>
				</div>
			</div>
			<div className="container">
				{new Array(5).fill(1)?.map((item, i) => (
					<Blog i={i} />
				))}
			</div>
			<div className='text-center'>
				<nav aria-label="Page navigation example">
					<ul class="pagination pg-blue justify-content-center">
						<li class="page-item ">
							<a class="page-link" tabindex="-1">
								Previous
							</a>
						</li>
						<li class="page-item">
							<a class="page-link">1</a>
						</li>
						<li class="page-item active">
							<a class="page-link">
								2 <span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="page-item">
							<a class="page-link">3</a>
						</li>
						<li class="page-item ">
							<a class="page-link">Next</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Blogs;
