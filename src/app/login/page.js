'use client'
export default function Login() {
    return (<>
        <div className="mainContainer">
            <div className={'titleContainer'}>
                <h1>Welcome!</h1>
            </div>
            <h4>This is the home page.</h4>
        </div>
        <style jsx>{`
            h4 {
                color: red;
            }
            .mainContainer {
                padding: 1rem;
                background-color: white;
                color: black;
            }
        `}</style>
    </>)
}