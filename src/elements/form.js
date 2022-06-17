import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
    borde: "#AF8738",
    error: "#2B0D16",
    exito: "#AF8738"
}

const Formulario = styled.form`
width: 100%;
margin: auto;
display: flex;
flex-direction: column;

`;

const Label = styled.label`
color: ${colores.error};
font-family: 'delius';
font-weight:bold;
text-align: start;
margin:5px 0;

	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

const GrupoInput = styled.div`
	position: relative;
	z-index: 100;
`;

const Input = styled.input`
width: 100%;
	height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
    background-color: var(--pink-stick);
    border: 0.1px solid var(--red-wine);
    border-radius: 5px;
    margin-bottom: 2px;
	border: 3px solid transparent;
	font-family: 'delius';

	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	&::placeholder {
		font-family: 'delius';

	}

	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
		
	`}

	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
	
`;
const TextTarea = styled.textarea`
font-family: 'delius';
background-color: var(--pink-stick);
border: 3px solid transparent;
border-radius: 5px;
margin: 20px 0;
padding: 10px 0 0 10px;
&:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
}
&::placeholder {
    font-family: 'delius';

}

`;

const LeyendaError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;
	font-family: 'delius';
	font-weight:bold;


	${props => props.valido === 'true' && css`
		display: none;
	`}

	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 16px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;

	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}

	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;

const ContenedorTerminos = styled.div`
	grid-column: span 2;

	input {
		margin-right: 10px;
	}

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;
	margin: 0.5rem 0;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
padding: 10px 30px;
    color: var(--white);
    background-color: var(--red-wine);
    border: 1px solid var(--red-wine);
    border-radius: 30px;
    font-family: 'delius';
    font-weight: bolder;
    box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 10px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	transition: .1s ease all;

	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;

const MensajeExito = styled.p`
	font-size: 16px;
	text-align:center;
	color: ${colores.error};
	font-family: 'delius';
    font-weight: bold;
	margin:0.5rem 0;

`;

const MensajeError = styled.div`
	height: 30px;
	line-height: 20px;
	background: #731627;
    color:#f6f5ee;
	padding: 5px 15px;
	border-radius: 3px;
	.prueba {
		margin: 0;
		font-size: 14px;
		font-family: 'delius';
	} 
	b {
		margin-left: 10px;
	}
`;

export {
    Formulario,
    Label,
    GrupoInput,
    Input,
    LeyendaError,
    IconoValidacion,
    ContenedorTerminos,
    ContenedorBotonCentrado,
    Boton,
    MensajeExito,
    MensajeError,
    TextTarea,
};