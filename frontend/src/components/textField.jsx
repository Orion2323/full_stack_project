export const TextField =({id, placeHolder, label, input_className, value, setValue}) => {
    return <>
        <div className="form-group mb-4 text-center">
            <label htmlFor={label}>{label}</label>
            <input id={id}
                placeholder={placeHolder}
                className={input_className}
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        
        </div>
    </>;
}