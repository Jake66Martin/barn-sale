import styles from './success.module.css'

export default function Success() {
    return (
        <>
        
        <div className={`${styles.main}`}>
        <p className={`${styles.text}`}>Your payment was successful.<br/>You may continue browsing the website.</p>
        </div>
        
        </>
    )
}