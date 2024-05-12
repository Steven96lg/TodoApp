
export const SelectComponent = ({onEvent, list}) => {

    return (
        <div>
            <select name="" id="" onChange={onEvent}>
                {
                    list.map(item => (
                        <option key={item} value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
}