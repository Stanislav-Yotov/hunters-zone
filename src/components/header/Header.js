import styles from './Header.module.css';

function Header(props) {
    return (
        <div className={styles.header}>
            <h1 className={styles.pulsate}>
                <span className={styles.span}>Web</span> Programming <span className={styles.span}>World</span>
            </h1>
        </div>
    );
}

export default Header;