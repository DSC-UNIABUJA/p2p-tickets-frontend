import styled from "styled-components";
export default styled.div`
	.mainHeader {
		text-align: center;
		font-size: 3rem;

		@media screen and (max-width: 500px) {
			font-size: 2.3rem;
		}
	}

	.mainParagraph {
		font-size: 1.8rem;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;

		@media screen and (max-width: 710px) {
			flex-direction: column;
		}

		@media screen and (max-width: 500px) {
			font-size: 1.2rem;
		}
	}

	.cardContainer {
		display: flex;
		margin-left: 0.3rem;

		@media screen and (max-width: 710px) {
			margin-left: 0;
		}
	}

	p {
		/* max-width: 750px; */
		margin: 0 auto;
		text-align: center;
	}

	.secondHeader {
		@media screen and (max-width: 500px) {
			margin-top: 1.6rem;
		}
	}

	.secondHeader,
	.thirdHeader {
		text-align: center;
		font-size: 1.8rem;
		margin-top: 3rem;

		@media screen and (max-width: 500px) {
			font-size: 1.5rem;
		}
	}

	.secondHeaderParagraph,
	.thirdHeaderParagraph {
		text-align: center;
		font-size: 1.1rem;

		@media screen and (max-width: 500px) {
			font-size: 1rem;
		}
	}

	.secondHeaderParagraph {
		margin-top: 2.5rem;
		margin-bottom: 2rem;
	}

	.typewriterEffect {
		font-size: 1.5rem;
		margin-top: 2rem;
		text-align: center;

		@media screen and (max-width: 500px) {
			font-size: 1.1rem;
			margin-top: 1.4rem;
		}
	}

	.thirdHeaderParagraph {
		font-size: 1.2rem;
		max-width: 700px;

		@media screen and (max-width: 500px) {
			font-size: 1rem;
		}
	}

	.sellTicketLists {
		list-style: none;
		max-width: 700px;
		text-align: center;
		margin: 2rem auto 1rem auto;
		font-weight: bold;
		font-size: 1.1rem;
		padding: 0;

		@media screen and (max-width: 500px) {
			font-size: 1rem;
		}

		li {
			margin-bottom: 1rem;
		}
	}
`;
