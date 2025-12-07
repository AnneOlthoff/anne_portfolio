import { useRef } from "react";

export default function SvgHeartbeatAnimation() {
  const targetRef = useRef(null);

  const handleAnimationEnd = () => {
    const targetElement = targetRef.current;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div style={styles.logostyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="300"
        height="300"
        onAnimationEnd={handleAnimationEnd}
        className="heartbeat"
      >
        <style>
          {`
                        .heartbeat {
                            fill: #ff6b81;
                        }
                        .pulse {
                            fill: none;
                            stroke: #ff4757;
                            stroke-width: 4;
                            opacity: 0;
                            animation: heartbeat 5s infinite;
                        }
                        .pulse:nth-child(2) {
                            animation-delay: 1s;
                        }
                        .pulse:nth-child(3) {
                            animation-delay: 2.6s;
                        }
                        .pulse:nth-child(4) {
                          animation-delay: 3.0s;
                      }
                        @keyframes heartbeat {
                            0% {
                                r: 40px;
                                opacity: 0.8;
                            }
                          
                            60% {
                                r: 80px;
                                opacity: 0;
                            }
                            100% {
                                r: 40px;
                                opacity: 0;
                            }
                        }
                    `}
        </style>
        <circle className="pulse" cx="100" cy="100" r="40" />
        <circle className="pulse" cx="100" cy="100" r="40" />

        <circle className="pulse" cx="100" cy="100" r="40" />
        <circle cx="100" cy="100" r="40" className="heartbeat" />
      </svg>
      <div ref={targetRef} style={styles.target}></div>
    </div>
  );
}

const styles = {
  logostyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  target: {
    marginTop: "100vh",
    padding: "2rem",
  },
};
