import styles from './failure.module.css'

export default function Failure() {
    return (
        <>
        <div className={`${styles.main}`}>
        <p className={`${styles.text}`}>Your payment was denied. <br/>Please check with your creditors. <br/>You may continue browsing the website.</p>
        </div>
        </>
    )
}