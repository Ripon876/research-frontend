import React from 'react'

function Research({research}) {
	return (
		<div className='pt-3' style={{overflowY: 'scroll',height: '85%',boxShadow: 'inset -20px 0rem 1rem rgb(0 0 0 / 15%) !important'}}>
			<h5 className="mb-0">{research?.title}</h5>
			<div className='py-3'>
				<div>
					<p>
						{research?.description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Research;