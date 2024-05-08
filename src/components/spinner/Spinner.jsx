import spinner from './spinner.gif'

export const Spinner = () => {
    return (
        <div>
            <img 
                src={spinner} 
                alt="Loading..." 
                style={{widht: "40px", margin: "auto", display:"block"}} 
            />
        </div>
    )
}