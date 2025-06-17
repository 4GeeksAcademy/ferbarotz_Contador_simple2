import SecondsCounter from "./SecondsCounter.jsx"


const Home = ({seconds}) => {
	return (
		<div className="text-center">
            <SecondsCounter envio={seconds}></SecondsCounter>

		</div>
	);
};

export default Home;