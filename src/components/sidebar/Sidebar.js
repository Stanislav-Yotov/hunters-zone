import styles from './Sidebar.module.css';
import FindLocation from './FindLocation';

function Sidebar() {


    return (
        <>
            <div className={styles.sidebar}>
                <a href="javascript:window.print()"><img src="img/print-icon.png" alt="print this page" id="print-button" title="Print" /></a>
                <a rel="noreferrer" href="http://creativecommons.org/licenses/by/3.0/" target="_blank"><img src="img/creative-icon.png" title="Creative Commons" alt='' /></a>
                <a href="http://www.smashingmagazine.com/feed/" target="_blank" rel="noreferrer"><img src="img/rss-feed-icon.png" alt="[Valid RSS]" title="RSS feeds" /></a>
                
                <a href='/'><img src="img/marker.png" alt="marker" title="Show Location" /></a>
                
            </div>

        </>
    );
}

export default Sidebar;