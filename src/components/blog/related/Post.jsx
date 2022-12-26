import React from "react";

function Post() {
	return (
		<div>
			<a href="#" class="text-dark">
				<div class="row mb-4 border-bottom pb-2">
					<div class="col-4 p-0">
						<img
							src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
							class="relatedPostImg shadow-1-strong rounded"
							alt="Hollywood Sign on The Hill"
						/>
					</div>

					<div class="col-8">
						<p class="mb-2">
							<strong>Lorem ipsum dolor sit amet</strong>
						</p>
						<p>
							<u> 15.07.2020</u>
						</p>
					</div>
				</div>
			</a>
		</div>
	);
}

export default Post;
