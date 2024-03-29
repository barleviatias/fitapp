/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
// import alert from './assets/alert.wav';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';

let timer;

function SuperSet(props) {
	const alertRef = useRef(null);
	//   const [timerForm, setTimerForm] = useState({ minutes: '', seconds: '' });
	// eslint-disable-next-line react/prop-types
	const [countdown, setCountdown] = useState(props.targils.time);
	const [isCounting, setIsCounting] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (countdown === 0 && isCounting) {
			reset();
			setTimeout(() => {
				alertRef.current?.play();
			}, 1000);
		}
	}, [countdown]);

	const minutes = Math.floor(countdown / 60);
	const seconds = countdown % 60;

	const start = () => {
		setIsCounting(true);
		timer = setInterval(() => {
			setCountdown((_countdown) => _countdown - 1);
		}, 1000);
	};

	const reset = () => {
		setCountdown(props.targils.time);
		setIsCounting(false);
		setIsPaused(false);
		clearInterval(timer);
	};

	const pause = () => {
		setIsPaused(true);
		clearInterval(timer);
	};

	const resume = () => {
		setIsPaused(false);
		timer = setInterval(() => {
			setCountdown((_countdown) => _countdown - 1);
		}, 1000);
	};

	return (
		<div className="container bg-gray-700 rounded-xl p-4 w-80">
			<h1 className='text-center font-extrabold'>super set</h1>
			{/* <audio className="hidden" ref={alertRef}>
        <source src={alert} />
      </audio> */}

			<div className="flex flex-col items-center gap-1">
				<div className="flex justify-between w-full items-center flex-col">
					<div className='flex w-full justify-between'> 
						<button
							onClick={props.click}
							data-id={props.targils.videoID[0]}
							className="btn btn-sm btn-error disabled:btn-success disabled:opacity-30 flex items-center content-center">
							<YouTubeIcon />
						</button>
						<p className="  font-bold md:w-50 text-sm text-center m-2">
							{props.targils.name[0]}
						</p>
					</div>
					<div className='flex w-full justify-between'>
						<button
							onClick={props.click}
							data-id={props.targils.videoID[1]}
							className="btn btn-sm btn-error disabled:btn-success disabled:opacity-30 flex items-center content-center">
							<YouTubeIcon />
						</button>
						<p className="font-bold md:w-50 text-sm text-center m-2">
							{props.targils.name[1]}
						</p>
					</div>
				</div>
				<div className=" flex">
					<div className="grid grid-flow-col text-center auto-cols-max items-center gap-2">
						<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
							<span className="countdown font-mono text-1-sm">
								<span style={{ '--value': minutes }}>{minutes}</span>
							</span>
						</div>
						<span className="font-mono">:</span>
						<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
							<span className="countdown font-mono text-1-sm">
								<span style={{ '--value': seconds }}>{seconds}</span>
							</span>
						</div>
						{!isCounting && (
							<button
								className="btn btn-sm btn-success disabled:btn-success disabled:opacity-30 flex items-center content-center"
								disabled={countdown <= 0}
								onClick={start}>
								<PlayCircleFilledWhiteIcon></PlayCircleFilledWhiteIcon>
							</button>
						)}
						{isCounting && (
							<button
								className="btn btn-sm btn-warning content-center"
								onClick={isPaused ? resume : pause}>
								{isPaused ? (
									<PlayCircleIcon />
								) : (
									<PauseCircleIcon></PauseCircleIcon>
								)}
							</button>
						)}
						<button
							className="btn btn-sm btn-error disabled:btn-error disabled:text-green-50 disabled:opacity-30 flex items-center content-center"
							disabled={!isCounting}
							onClick={reset}>
							Reset
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SuperSet;
