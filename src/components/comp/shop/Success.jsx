import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const naviage = useNavigate();
   useEffect(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex flex-col justify-center items-center p-6 text-white">
            <div className="checkmark-wrapper mb-8">
                <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                >
                    <circle
                        className="checkmark__circle"
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                    />
                    <path
                        className="checkmark__check"
                        fill="none"
                        d="M14 27l7 7 16-16"
                    />
                </svg>
            </div>
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
                Order Placed Successfully!
            </h1>
            <p className="text-xl max-w-xl text-center mb-8 drop-shadow-md">
                Thank you for shopping with us. Your order is confirmed and is being
                processed. We will notify you once it is on the way.
            </p>
            <button
                onClick={()=>naviage('/shop')}
                className="bg-white text-purple-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white transition duration-300"
            >
                Continue Shopping
            </button>
            <style>{`
        .checkmark-wrapper {
          width: 100px;
          height: 100px;
          margin: 0 auto;
        }
        .checkmark {
          width: 100px;
          height: 100px;
          stroke-width: 4;
          stroke: #fff;
          stroke-miterlimit: 10;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
          animation: scaleIn 0.5s ease forwards;
        }

        .checkmark__circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 4;
          stroke-miterlimit: 10;
          stroke: #fff;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .checkmark__check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.4s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
        }

        @keyframes stroke {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes scaleIn {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
        </div>
        </>
    );
};

export default Success;
