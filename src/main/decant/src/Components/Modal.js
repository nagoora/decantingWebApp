import React, {useState} from 'react';
import classes from '../Styling/modal.css';

const Modal = props => {

    const [modalState, setModalState] = useState();

    const modalHandler = (e) => {
        e.preventDefault(); //i added this to prevent the default behavior
        this.setState({
          modalToggle: true
        })
      }

    return (
        <div className={classes.Modal} style={{
            transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.show ? 1 : 0
        }}>
            {props.children}
        </div>
    );
};


export default Modal;