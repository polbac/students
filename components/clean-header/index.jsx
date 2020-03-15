import Brand from '../brand'

function CleanHeader() {
    return (
        <React.Fragment>
            <header className='clean-header'>
                <Brand/>
            </header>
        <style jsx>{`
            .clean-header {
                margin: 32px 70px 16px 48px;
            }
        `}</style>
        </React.Fragment>
    )
}

export default CleanHeader