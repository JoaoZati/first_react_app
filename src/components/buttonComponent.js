function ButtonComponent(props) {
    return <button onClick={props['onClick']}>{props['button_text']}</button>
}

export default ButtonComponent
