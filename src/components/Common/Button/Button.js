import styles from './Button.module.css'

const Button = (props) => {
    const stylesValues = props.className.split(" ");
    let fullStyles = '';
    stylesValues.map(item => fullStyles += styles[item] + " ")

    return (
        <button className={fullStyles} type={props.type || 'button'}
            disabled={props.disabled} onClick={props.onClick} >
            {props.children}
        </button >

    );
}

export default Button;