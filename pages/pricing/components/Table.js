import React, { useState } from 'react';
import Info from './Info';
import Switch from './Switch';

export default function Table(props) {
	const [plan, setPlan] = useState('monthly');

	return (
		<div>
			{/* <PriceSwitch plan={plan} setPlan={setPlan} /> */}
			<div className="price2 container--basic">
				<div className="price2_table_container">
					<ul className="price2_table price2_table--white">
						<li className="price2_cell">
							<h2 className="price2_title">
								Testez Legitbee pendant <br /> 1 mois, c'est gratuit et sans
								engagement.
							</h2>
						</li>
						{props.contentData.map((item, i) => (
							<li className="price2_cell" key={i}>
								{item.text}
								{item.info && <PriceInfo text={item.info} id={i} />}
							</li>
						))}
						<li className="price2_cell"></li>
					</ul>
					{/* <ul className='price2_table'>
						<li className='price2_cell'>
							<div className='price2_img_container'>
								<img
									src='/images/landing-page/gratuit.svg'
									className='price2_img'
									alt=''
								/>
							</div>
							<h2 className='price2_title'>Découverte</h2>
							<p className='price2_text text'>
								Décidez de l'avenir de votre vie numérique et planifiez l'envoi de
								vos messages posthumes
							</p>
						</li>
						{props.contentData.map((item, i) => (
							<li className='price2_cell' key={i}>
								{item.free && typeof item.free === 'boolean' ? (
									<img
										className='price2_img price2_img--ok'
										src='/images/landing-page/ok.svg'
										alt='Checkmark'
									/>
								) : (
									typeof item.free === 'string' && item.free
								)}
							</li>
						))}
						<li className='price2_cell'>
							<h2 className='price2_subtitle subtitle'>Gratuit</h2>
							<br />
							<a
								href='https://app.legitbee.com/auth/register'
								className='price2_button price2_button--space button'
							>
								Découvrir
							</a>
						</li>
					</ul> */}
					<ul className="price2_table price2_table--highlight">
						<li className="price2_cell">
							<div className="price2_img_container">
								<img
									src="/images/landing-page/serenite.svg"
									className="price2_img"
									alt=""
								/>
							</div>
							<h2 className="price2_title">Sérénité</h2>
							<p className="price2_text text">
								Transmettez votre patrimoine numérique, vos souvenirs et simplifiez
								les démarches de vos héritiers
							</p>
						</li>
						{props.contentData.map((item, i) => (
							<li className="price2_cell" key={i}>
								{item.serenity && typeof item.serenity === 'boolean' ? (
									<img
										className="price2_img price2_img--ok"
										src="/images/landing-page/ok.svg"
										alt="Checkmark"
									/>
								) : (
									typeof item.serenity === 'string' && item.serenity
								)}
							</li>
						))}
						<li className="price2_cell">
							<h2 className="price2_subtitle subtitle">
								{plan === 'once' ? '30€/an' : '3€/mois'}
							</h2>
							<p className="text">ou 30€/an</p>
							<br />
							<a
								href="https://app.legitbee.com/auth/register?plan=basic"
								className="price2_button button"
							>
								Découvrir
							</a>
							<p className="price2_text text">Un mois d'essai</p>
						</li>
					</ul>
					<ul className="price2_table">
						<li className="price2_cell">
							<div className="price2_img_container">
								<img
									src="/images/landing-page/premium.svg"
									className="price2_img"
									alt=""
								/>
							</div>
							<h2 className="price2_title">Premium</h2>
							<p className="price2_text text">
								Anticipez et simplifiez la transmission de votre patrimoine
								diversifié
							</p>
						</li>
						{props.contentData.map((item, i) => (
							<li className="price2_cell" key={i}>
								{item.premium && typeof item.premium === 'boolean' ? (
									<img
										className="price2_img price2_img--ok"
										src="/images/landing-page/ok.svg"
										alt="Checkmark"
									/>
								) : (
									typeof item.premium === 'string' && item.premium
								)}
							</li>
						))}
						<li className="price2_cell">
							<h2 className="price2_subtitle subtitle">
								{plan === 'once' ? '90€/an' : '9€/mois'}
							</h2>
							<p className="text">ou 90€/an</p>
							<br />
							<a
								href="https://app.legitbee.com/auth/register?plan=premium"
								className="price2_button button"
							>
								Découvrir
							</a>
							<p className="price2_text text">Un mois d'essai</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
