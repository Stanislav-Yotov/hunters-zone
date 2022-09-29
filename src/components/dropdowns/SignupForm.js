import styles from './SignupForm.module.css';

function SignupForm(props) {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <label htmlFor='fullName'>Full name</label>
                <input
                    type='text'
                    id='fname'
                    name='fullName'
                    placeholder='Your full name'
                    required />

                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder='Your email adress'
                    required />

                <label htmlFor='message'>Send me a message</label>
                <textarea
                    id="subject"
                    name="message"
                    placeholder="Type your message here"
                    required />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SignupForm;