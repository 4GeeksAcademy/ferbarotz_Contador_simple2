import Digit from "./Digit.jsx"

const SecondsCounter= ({envio})=>{
    
    let digit1= Math.floor(envio %10)
    let digit2=Math.floor(envio /10 )%10
    let digit3=Math.floor(envio /100)%10
    let digit4=Math.floor(envio /1000)%10  
    return(
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ display: 'flex', justifyContent: 'center', gap: '5px'}} >
            <Digit digit={digit4} ></Digit>
            <Digit digit={digit3}></Digit>
            <Digit digit={digit2}></Digit>
            <Digit digit={digit1}></Digit>
        </div>

    )


}

export default SecondsCounter