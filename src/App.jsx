import { useState } from 'react';
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
		<div className='flex flex-col justify-center'>

			<iframe className='m-4'
				title="YouTube Video"
				width="360"
				// height="120"
				src={`https://www.youtube.com/embed/${currentVideoUrl}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen></iframe>

			{targils.map((item, index) => (
				<div
				className="flex p-2  text-center items-center justify-center space-x-2 "
				data-id={item.videoID}
				key={index}>
					<button
						onClick={handleButtonClick}
						className="btn btn-sm btn-error disabled:btn-success disabled:opacity-30 flex items-center content-center">
						<YouTubeIcon />
					</button>
					<p className="min-w-20">{item.name}</p>
					<Timer time={item.time}></Timer>
				</div>
			))}
			</div>
		</>
	);
}

export default App;
