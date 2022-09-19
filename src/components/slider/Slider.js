import styles from './Slider.module.css';

function Slider() {
    return (
        <div className={styles.videoSlider}>
            <div className={styles.slide}>
                <iframe className={styles.video} src='https://www.youtube.com/embed/hQAHSlTtcmY?enablejsapi=1' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className={styles.slide}>
                <iframe className={styles.video} src='https://www.youtube.com/embed/dGcsHMXbSOA?enablejsapi=1' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className={styles['slide-arrow']}>
                <div className={styles.left} />
                <div className={styles.right} />
            </div>
        </div>
    );
}

export default Slider;