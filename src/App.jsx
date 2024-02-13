import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Timer from './cmp/Timer';
import YouTubeIcon from '@mui/icons-material/YouTube';

function App() {
	// const [count, setCount] = useState(0);
	const [targils, settargils] = useState([
		{
			name: 'מתח',
			time: 120,
			sets: 3,
			url: 'https://www.youtube.com/watch?v=_WnQmTe64YQ&list=PL0mBYTE1vseZjRMuH_Yzu59TD45AV6C_e&index=21',
      videoID:'_WnQmTe64YQ'
		},
		{
			name: 'מקבילים',
			time: 120,
			sets: 3,
			url: 'https://www.youtube.com/watch?v=_WnQmTe64YQ&list=PL0mBYTE1vseZjRMuH_Yzu59TD45AV6C_e&index=21',
      videoID:'YuClWLdDcsQ'
		},
		{
			name: 'תנוחת צפרדע',
			time: 120,
			sets: 3,
			url: 'https://www.youtube.com/watch?v=rl7sOSjbSyI&list=PL0mBYTE1vseZjRMuH_Yzu59TD45AV6C_e&index=55',
      videoID:'rl7sOSjbSyI'
		},
	]);
	const [currentVideoUrl, setCurrentVideoUrl] = useState(targils[0].videoID);
	const [timers, settimers] = useState([120, 60, 30]);
	const handleButtonClick = (e) => {
    console.log('Event:', e);
    console.log('Current Target:', e.currentTarget);
    console.log('Parent Element:', e.currentTarget.parentElement);
    console.log('Data ID:', e.currentTarget.parentElement.dataset.id);
    let id=e.currentTarget.parentElement.dataset.id;
		setCurrentVideoUrl(id);
	};
	return (
		<>
			<iframe
				title="YouTube Video"
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${currentVideoUrl}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen></iframe>

			{targils.map((item, index) => (
				<div
					className="flex bg-slate-500 p-2 text-center items-center justify-center space-x-2 "
					data-id={item.videoID}
					key={index}>
					<button
						onClick={handleButtonClick}
						className="btn btn-sm btn-error disabled:btn-success disabled:opacity-30 flex items-center content-center">
						<YouTubeIcon />
					</button>
					<p className="min-w-40">{item.name}</p>
					<Timer time={item.time}></Timer>
				</div>
			))}
		</>
	);
}

export default App;
