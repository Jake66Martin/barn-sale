import styles from './success.module.css'
import {useEffect} from 'react'



export default function Success() {
    
    useEffect(() => {
        // Remove specific items from local storage
        localStorage.removeItem('cart');
        console.log('Local storage cleared!');
      }, []);
    
    
    return (
        <>
        
        <div className={`${styles.main}`}>
        <p className={`${styles.text}`}>Your payment was successful.<br/>You may continue browsing the website.</p>
        </div>
        
        </>
    )
}