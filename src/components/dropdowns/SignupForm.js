import styles from './SignupForm.module.css';

function SignupForm(props) {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <label htmlFor='fullName'>User Name</label>
                <input
                    type='text'
                    id='uname'
                    name='userName'
                    placeholder='Your username'
                    required />

                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder='Your email adress'
                    required />

                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Your password'
                    required />

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    placeholder='Confirm your password'
                    required />
                {/* <label htmlFor='message'>Send me a message</label>
                <textarea
                    id="subject"
                    name="message"
                    placeholder="Type your message here"
                    required /> */}

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SignupForm;