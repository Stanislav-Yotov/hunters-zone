import styles from './Dropdowns.module.css';


function Dropdowns(props) {

    // <form method="post" action="">
    // 			<div class="dropdown">
    // 				<button class="dropbtn"><i class="fa fa-sign-in"></i> Login</button>
    // 				<div class="dropdown-content">
    // 					<button type="button" id="qr-auth" style="cursor:pointer" onclick="window.location.href='./forms/login_form.php'" value="qrCode">2FA with QR code</button>
    // 					<button type="button" id="sms-auth" style="cursor:pointer" onclick="window.location.href='./forms/login_form_sms.php'" value="smsCode">2FA with SMS code</button>
    // 				</div>
    // 			</div>
    // 		</form>

    return (
        <div className={styles.container}>
            <div className={styles.dropdown}>
                <a><i className='fa fa-user-plus'>Sign up</i></a>
            </div>
            <div className={styles.dropdown}>
                <a><i className='fa fa-sign-in'>Login</i></a>
                <div className={styles['dropdown-content']}>
                    <button type="button" id="qr-auth" style={{ cursor: 'pointer' }} onclick="window.location.href='./forms/login_form.php'" value="qrCode">2FA with QR code</button>
                    <button type="button" id="sms-auth" style={{ cursor: 'pointer' }} onclick="window.location.href='./forms/login_form_sms.php'" value="smsCode">2FA with SMS code</button>
                </div>
            </div>
        </div>
    );

}

export default Dropdowns;