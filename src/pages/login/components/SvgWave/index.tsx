import styles from "./SvgWave.module.css";

function SvgWave() {
  return (
    <div className={styles.svg}>
      <svg
        className={styles.waves}
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={styles.parallax}>
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.8"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="1"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="2"
            fill="rgba(255,255,255,0.6)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="4"
            fill="rgba(255,255,255,0.4)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="6"
            fill="rgba(255,255,255,0.2)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  );
}

export default SvgWave;
