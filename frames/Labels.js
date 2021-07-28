// Dependencies
import { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import Image from 'next/image';

// Components
import Container from '../components/Container';
import StyledLink from '../components/StyledLink';
import Button from '../components/Button';
import CSNImage from '../public/assets/images/CSN.png';
import Rules from '../public/assets/images/rules.svg';
import Security from '../public/assets/images/security.svg';
import Privacy from '../public/assets/images/privacy.svg';

// Style
const IconContainer = styled.div`
	width: 3rem;
	margin-right: 1rem;
`;

const CSNContainer = styled.div`
	max-height: 5rem;
`;

const Background = styled.div`
	background-color: ${(props) => props.theme.lightPrimary};
	padding: 2rem 0rem;
`;

const StyledCol = styled(Col)`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: ${(props) => props.theme.sm}) {
		padding-bottom: 2rem;
	}
`;

// Render
export default function Labels() {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	return (
		<Background>
			<Container>
				<div className="d-flex flex-column align-items-center text-center">
					<CSNContainer>
						<Image
							src={CSNImage}
							alt="Conseil Supérieur du Notariat"
							width="294"
							height="171"
						/>
					</CSNContainer>
					<h2 className="mt-2 mb-2">
						Audité et labellisé par le <mark>Conseil Supérieur du Notariat</mark>
					</h2>
					<Row>
						<StyledCol xs={12} md={4}>
							<IconContainer>
								<Image
									src={Rules}
									alt="Respect de la déontologie"
									width="512"
									height="512"
								/>
							</IconContainer>
							<p>Respect de la déontologie</p>
						</StyledCol>
						<StyledCol xs={12} md={4}>
							<IconContainer>
								<Image
									src={Security}
									alt="Respect de la sécurité"
									width="512"
									height="512"
								/>
							</IconContainer>
							<p>Données sécurisées</p>
						</StyledCol>
						<StyledCol xs={12} md={4}>
							<IconContainer>
								<Image
									src={Privacy}
									alt="Respect du droit et de la vie privée"
									width="512"
									height="512"
								/>
							</IconContainer>
							<p>Respect du droit et de la vie privée</p>
						</StyledCol>
					</Row>
					<StyledLink onClick={toggle} className="arrow mt-2">
						En savoir plus
					</StyledLink>

					<Modal isOpen={modal} toggle={toggle}>
						<ModalBody className="d-flex flex-column align-items-center">
							<CSNContainer className="my-1">
								<Image
									src={CSNImage}
									alt="Conseil Supérieur du Notariat"
									width="294"
									height="171"
								/>
							</CSNContainer>
							<p className="mb-1">
								Notre solution est labellisée pour un développement éthique et du
								numérique notarial. Nous contribuons ainsi au développement vertueux
								d’un écosystème d’acteurs qui s’inscrivent dans les valeurs de la
								profession.
							</p>
							<p className="mb-1">
								La labellisation de notre société en tant que solutions numériques
								pour les notaires et leurs clients a été prononcée par le président
								du Conseil Supérieur du Notariat pour la période du 28 Juin 2021 au
								27 Juin 2024.
							</p>
							<p>
								Le périmètre audité inclus les activités de formalités postérieures
								et préalables.
							</p>
						</ModalBody>
						<ModalFooter className="border-top-0">
							<Button onClick={toggle}>Fermer</Button>
						</ModalFooter>
					</Modal>
				</div>
			</Container>
		</Background>
	);
}
