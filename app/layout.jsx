import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';
// import ErrorBoundary from "@utils/ErrorBoundary";

export const metadata = {
	title: 'Promptopia',
	description: 'Discover & share AI Prompts',
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				{/* <ErrorBoundary> */}
				<Provider>
					<div className='main'>
						<div className='gradient' />
					</div>
					<main className='app'>
						<Nav />
						{children}
					</main>
				</Provider>
				{/* </ErrorBoundary> */}
			</body>
		</html>
	);
};

export default RootLayout;
