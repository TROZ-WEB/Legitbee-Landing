// Dependencies
import { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import Image from 'next/image';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Components
import Container from '../components/Container';
import List from '../components/List';
import Button from '../components/Button';
import Pricing from '../components/Pricing';

// Style
const ImageContainer = styled.div`
	width: 100%;
	max-width: 32rem;
`;

const StyledRow = styled(Row)`
	margin-top: 3rem;
`;

const LeftCol = styled(Col)`
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: ${(props) => props.theme.md}) {
		text-align: center;
		display: block;
		margin-bottom: 4rem;
		min-height: auto;
	}
`;

const RightCol = styled(Col)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TextContainer = styled.div`
	max-width: 30rem;
`;

const StyledModal = styled(Modal)`
	&.modal-dialog {
		width: 81.25rem;
		max-width: 90vw;
		position: relative;
	}
`;

const CloseButton = styled(Button)`
	width: 1rem;
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
`;

// Render
export default function Hero() {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	return (
		<Container>
			<StyledRow>
				<LeftCol
					xs={{ size: 12, order: 2 }}
					md={{ size: 7, order: 1 }}
					lg={{ size: 6, order: 1 }}
				>
					<TextContainer>
						<h1 className="mb-2">
							Rien ne se perd, <br />
							<mark>tout se transmet</mark>
						</h1>
						<List
							items={[
								"L'ensemble de vos données patrimoniales",
								'Votre héritage numérique et vos souvenirs',
								'Les informations indispensables à vos héritiers',
							]}
						/>
						<p className="my-2">
							Tout est organisé, sécurisé et transmis le moment venu aux bénéficiaires
							de votre choix.
						</p>
						<Button onClick={toggle}>Préparer ma succession</Button>
					</TextContainer>
				</LeftCol>
				<RightCol
					xs={{ size: 12, order: 1 }}
					md={{ size: 5, order: 2 }}
					lg={{ size: 6, order: 2 }}
				>
					<ImageContainer>
						<Image src="/assets/images/hero.jpg" alt="hero" width="900" height="1147" />
					</ImageContainer>
				</RightCol>
			</StyledRow>

			<StyledModal isOpen={modal} toggle={toggle}>
				<ModalBody className="d-flex flex-column align-items-center mb-3">
					<CloseButton className="nobutton" onClick={toggle}>
						<Image
							src="/assets/images/close.svg"
							alt="fermer"
							width="100"
							height="100"
						/>
					</CloseButton>
					<Pricing />
				</ModalBody>
			</StyledModal>
		</Container>
	);
}
