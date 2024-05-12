
export const InputComponent = ({type, placeholder, onEvent}) => {

    const style = {
        borderRadius: "5px",
        paddingLeft: "5px",
        background: "rgba(0, 0, 0, .3)"
    }

    return (
        <>
            <input
             type={type} 
             placeholder={placeholder} 
             onChange={onEvent}
             style={style}
             />
        </>
    )
}