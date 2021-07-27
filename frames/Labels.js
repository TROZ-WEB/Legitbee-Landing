// Dependencies
import { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Components
import Container from '../components/Container';
import StyledLink from '../components/StyledLink';
import Button from '../components/Button';

// Style
const Icon = styled.img`
	width: 3rem;
	margin-right: 1rem;
`;

const CSN = styled.img`
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
`;

// Render
export default function Labels() {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	return (
		<Background>
			<Container>
				<div className="d-flex flex-column align-items-center">
					<CSN src="/assets/images/CSN.png" alt="Conseil Supérieur du Notariat" />
					<h2 className="mt-2 mb-2">
						Audité et labellisé par le <mark>Conseil Supérieur du Notariat</mark>
					</h2>
					<Row>
						<StyledCol>
							<Icon src="/assets/images/rules.svg" alt="Respect de la déontologie" />
							<p>Respect de la déontologie</p>
						</StyledCol>
						<StyledCol>
							<Icon src="/assets/images/security.svg" alt="Respect de la sécurité" />
							<p>Données sécurisées</p>
						</StyledCol>
						<StyledCol>
							<Icon
								src="/assets/images/privacy.svg"
								alt="Respect du droit et de la vie privée"
							/>
							<p>Respect du droit et de la vie privée</p>
						</StyledCol>
					</Row>
					<StyledLink onClick={toggle} className="arrow mt-2">
						En savoir plus
					</StyledLink>

					<Modal isOpen={modal} toggle={toggle}>
						<ModalBody className="d-flex flex-column align-items-center">
							<CSN
								src="/assets/images/CSN.png"
								alt="Conseil Supérieur du Notariat"
								className="my-1"
							/>
							<p className="mb-1">
								Notre solution est labellisée pour un développement éthique et du
								numérique notarial. Nous contribuons ainsi au développement vertueux
								d’un écosystème d’acteurs qui s’inscrivent dans les valeurs de la
								profession.
							</p>
							<p className="mb-1">
								La labellisation de notre société en tant que solutions numériques
								pour les notaires et leurs clients a été prononcée par le président
								du Conseil Supérieur du Notariat pour la période du 28 Juin 2021
								au 27 Juin 2024.
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
