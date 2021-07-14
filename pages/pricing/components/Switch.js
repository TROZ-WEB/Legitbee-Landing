import React, { useState } from 'react';

export default function Table({ plan, setPlan }) {
	const handleSwitch = (plan) => {
		setPlan(plan);
	};
	return (
		<div className="price2_switch_container">
			<div className="price2_switch">
				<div
					className={`price2_switch_button ${
						plan === 'monthly' && 'price2_switch_button--active'
					}`}
					onClick={() => handleSwitch('monthly')}
				>
					Par mois
				</div>
				<div
					className={`price2_switch_button ${
						plan === 'once' && 'price2_switch_button--active'
					}`}
					onClick={() => handleSwitch('once')}
				>
					Par an
				</div>
			</div>
		</div>
	);
}
