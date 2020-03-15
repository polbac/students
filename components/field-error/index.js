function FieldError({children}) {
    return (
        <React.Fragment>
            <div className="field-error">
                {children}
            </div>
        <style jsx>{`
            .field-error {
                font-size: 0.75em;
                color: red;
                margin-top: 10px;
            }
        `}</style>
        </React.Fragment>
    )
}

export default FieldError