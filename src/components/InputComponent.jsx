
export const InputComponent = ({type, placeholder, onEvent}) => {
    return (
        <>
            <input type={type} placeholder={placeholder} onChange={onEvent}/>
        </>
    )
}