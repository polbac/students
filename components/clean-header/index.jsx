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

            @media(max-width: 600px) {
                margin: 0;
                text-align: center;
                padding-bottom: 20px;
            }
        `}</style>
        </React.Fragment>
    )
}

export default CleanHeader