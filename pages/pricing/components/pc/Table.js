// Dependencies
import Info from './Info';
import styled from 'styled-components';

// Components
import Button from '../../../../components/Button';
import Price from '../Price';

// Style
const Checkmark = styled.img`
	width: 1rem;
`;

const Container = styled.div`
	-webkit-box-shadow: 0rem 0rem 0.625rem 0rem rgba(0, 0, 0, 0.1);
	box-shadow: 0rem 0rem 0.625rem 0rem rgba(0, 0, 0, 0.1);
	border-radius: 1.25rem;
	display: flex;
	flex-wrap: nowrap;
	width: 100%;
	margin: 10rem 0rem 5rem 0rem;
`;

const StyledUl = styled.ul`
	background-color: ${(props) => props.theme.lightPrimary};
	display: inline-block;
	padding: 0rem;
	margin: 0rem;
	flex-shrink: 1;
	width: 60%;

	li:first-child {
		min-height: 13.75rem;
		padding-top: 3rem;
	}

	li:last-child {
		min-height: 11.25rem;
		border-bottom: 0rem;
	}

	${(props) =>
		props.white &&
		`background-color: white;
		border-radius: 1.25rem 0rem 0rem 1.25rem;
		text-align: left;
		width: 100%;

		li {
			padding : 1rem 2.5rem 1rem 1.5rem
		}
		
		li:not(:first-child) {
			align-items: flex-start;
		}`}

	${(props) =>
		props.highlight &&
		`-webkit-box-shadow: 0rem 0rem 0.625rem 0rem rgba(0, 0, 0, 0.1);
		box-shadow: 0rem 0rem 0.625rem 0rem rgba(0, 0, 0, 0.1);
		border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
		margin: -1.5rem 0rem;
		padding: 1.5rem 0rem;
		position: relative;
		z-index: 10;
		
		li:first-child {
			padding-top: 4rem;
		}`}
`;

const StyledLi = styled.li`
	list-style: none;
	height: 2.5rem;
	border-bottom: 0.125rem solid #eeeeee;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
	padding: 1rem 1.5rem;
`;

// Datas
import Content from '../../../../public/assets/data/content.json';

// Render
export default function Table() {
	return (
		<Container>
			<StyledUl white>
				<StyledLi>
					<h2>
						Testez Legitbee pendant 1 mois,{' '}
						<mark>c&apos;est gratuit et sans engagement.</mark>
					</h2>
				</StyledLi>
				{Content.pricing.list.map((item, i) => (
					<StyledLi key={i}>
						<p>
							{item.text}
							{item.info && <Info text={item.info} id={i} />}
						</p>
					</StyledLi>
				))}
				<StyledLi></StyledLi>
			</StyledUl>
			{/* <StyledUl>
				<StyledLi>
					<Price monthPrice="Gratuit" />
					<h2>Découverte</h2>
					<p className="text-center">
						Décidez de l&apos;avenir de votre vie numérique et planifiez l&apos;envoi de
						vos messages posthumes
					</p>
				</StyledLi>
				{Content.pricing.list.map((item, i) => (
					<StyledLi key={i}>
						{item.free && typeof item.free === 'boolean' ? (
							<Checkmark src="assets/images/pricing/checkmark.svg" alt="Checkmark" />
						) : (
							typeof item.free === 'string' && item.free
						)}
					</StyledLi>
				))}
				<StyledLi>
					<h2>Gratuit</h2>
					<br />
					<Button href="https://app.legitbee.com/auth/register">Découvrir</Button>
				</StyledLi>
			</StyledUl> */}
			<StyledUl highlight>
				<StyledLi>
					<Price monthPrice="3€/mois" yearPrice="ou 30€/an" />
					<h2>Sérénité</h2>
					<p className="text-center">
						Transmettez votre patrimoine numérique, vos souvenirs et simplifiez les
						démarches de vos héritiers
					</p>
				</StyledLi>
				{Content.pricing.list.map((item, i) => (
					<StyledLi key={i}>
						{item.serenity && typeof item.serenity === 'boolean' ? (
							<Checkmark src="assets/images/pricing/checkmark.svg" alt="Checkmark" />
						) : (
							typeof item.serenity === 'string' && item.serenity
						)}
					</StyledLi>
				))}
				<StyledLi>
					<h2>3€/mois</h2>
					<p className="text">ou 30€/an</p>
					<br />
					<Button to="https://app.legitbee.com/auth/register?plan=basic">
						Découvrir
					</Button>
					<p>Un mois d&apos;essai</p>
				</StyledLi>
			</StyledUl>
			<StyledUl>
				<StyledLi>
					<Price monthPrice="9€/mois" yearPrice="ou 90€/an" />
					<h2>Premium</h2>
					<p className="text-center">
						Anticipez et simplifiez la transmission de votre patrimoine diversifié
					</p>
				</StyledLi>
				{Content.pricing.list.map((item, i) => (
					<StyledLi key={i}>
						{item.premium && typeof item.premium === 'boolean' ? (
							<Checkmark src="assets/images/pricing/checkmark.svg" alt="Checkmark" />
						) : (
							typeof item.premium === 'string' && item.premium
						)}
					</StyledLi>
				))}
				<StyledLi>
					<h2>9€/mois</h2>
					<p className="text">ou 90€/an</p>
					<br />
					<Button to="https://app.legitbee.com/auth/register?plan=premium">
						Découvrir
					</Button>
					<p>Un mois d&apos;essai</p>
				</StyledLi>
			</StyledUl>
		</Container>
	);
}
