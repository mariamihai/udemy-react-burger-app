import React from 'react';

import styles from "./Modal.module.css";

import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Auxiliary>
        <Backdrop
            show={props.show}
            click={props.modalClose}
        />
        <div
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
            className={styles.Modal}
        >
            {props.children}
        </div>
    </Auxiliary>
)

export default modal;