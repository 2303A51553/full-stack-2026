import React,{useState}from"react"

function Calculator(){
const[input,setInput]=useState("")

const handleClick=(value)=>{
setInput(input+value)
}

const calculate=()=>{
try{
setInput(eval(input).toString())
}catch{
setInput("Error")
}
}

const clear=()=>{
setInput("")
}

return(
<div style={{
width:"260px",
margin:"80px auto",
padding:"20px",
borderRadius:"12px",
backgroundColor:"#222",
boxShadow:"0 6px 15px rgba(0,0,0,0.4)",
textAlign:"center"
}}>

<h2 style={{color:"#fff"}}>Calculator</h2>

<div style={{
backgroundColor:"#000",
color:"#00ffcc",
fontSize:"28px",
padding:"15px",
borderRadius:"8px",
marginBottom:"15px"
}}>
{input}
</div>

<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}}>

<button onClick={()=>handleClick("7")}>7</button>
<button onClick={()=>handleClick("8")}>8</button>
<button onClick={()=>handleClick("9")}>9</button>
<button onClick={()=>handleClick("/")}>÷</button>

<button onClick={()=>handleClick("4")}>4</button>
<button onClick={()=>handleClick("5")}>5</button>
<button onClick={()=>handleClick("6")}>6</button>
<button onClick={()=>handleClick("*")}>×</button>

<button onClick={()=>handleClick("1")}>1</button>
<button onClick={()=>handleClick("2")}>2</button>
<button onClick={()=>handleClick("3")}>3</button>
<button onClick={()=>handleClick("-")}>−</button>

<button onClick={()=>handleClick("0")}>0</button>
<button onClick={()=>handleClick(".")}>.</button>
<button onClick={calculate}>=</button>
<button onClick={()=>handleClick("+")}>+</button>

<button
onClick={clear}
style={{
gridColumn:"1 / 5",
backgroundColor:"#ef233c",
color:"#fff",
border:"none",
padding:"12px",
borderRadius:"8px"
}}>
CLEAR
</button>

</div>
</div>
)
}

export default Calculator
