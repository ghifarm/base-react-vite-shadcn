import { CSSProperties } from 'react';

interface LoadingSpinnerProps {
  size?: number;
}

const LoadingSpinner = ({ size = 48 }: LoadingSpinnerProps) => {
  const loaderStyle: CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    display: 'block',
    // margin: "15px auto",
    position: 'relative',
    color: '#005fad',
    boxSizing: 'border-box',
    animation: 'rotation 1s linear infinite',
  };

  return (
    <>
      <style>
        {`
                    @keyframes rotation {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                    @keyframes animloader {
                        50% {
                            transform: scale(1) translate(-50%, -50%);
                        }
                    }
                    .loader::after,
                    .loader::before {
                        content: '';
                        box-sizing: border-box;
                        position: absolute;
                        width: ${size / 2}px;
                        height: ${size / 2}px;
                        top: 50%;
                        left: 50%;
                        transform: scale(0.5) translate(0, 0);
                        background-color: #b5c500;
                        border-radius: 50%;
                        animation: animloader 1s infinite ease-in-out;
                    }
                    .loader::before {
                        background-color: #FF3D00;
                        transform: scale(0.5) translate(-${size}px, -${size}px);
                    }
                `}
      </style>
      <span className="loader" style={loaderStyle}></span>
    </>
  );
};

export default LoadingSpinner;
