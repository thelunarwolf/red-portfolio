import React, { useContext, useEffect, useState } from "react"
import styles from './dialog.module.css';
import ReactDOM from 'react-dom';

const Dialog = (props: any) => {
    const [isOpen, setIsOpen] = useState(props.isOpen)
    useEffect(() => {
        if (props.isOpen) {
            setIsOpen(props.isOpen);
        } else {
            setTimeout(() => {
                setIsOpen(props.isOpen);
            }, 500)
        }
    }, [props.isOpen])
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className={`${styles.overlay} ${!props.isOpen ? styles.close_panel : ''}`}>
            <div className={styles.dialog}>
                <div className={styles.data__section}>
                    {props.children}
                </div>
            </div>
        </div>,
        (document.getElementById('portal') as Element)
    )
}

export default Dialog;