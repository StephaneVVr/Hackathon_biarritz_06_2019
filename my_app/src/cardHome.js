import React from 'react';

function CardHome() {
	return (
		<div className='container'>
			<div className='d-flex align-items-center justify-content-center'>
				<div className='card'>
					<div className='card-header text-center'>Welcome to Wild </div>
					<div className='card-body'>
						<button className='btn btn-primary w-100'> Recruteurs</button>

						<hr />

						<button className='btn btn-primary w-100'> Futurs Wilders</button>

						<hr />
					</div>
				</div>
			</div>
		</div>
	);
}
export default CardHome;
