import "./index.css"

let Bnrcom = (props)=>{
    let {bannersList} = props
    let{name,description,bn,url } = bannersList
    const cardstyle = {
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        height:"30vh"
    }
    return(<div style={cardstyle} className="bgcard">
        <h1 className="h" >{name}</h1>
        <p className="pp">{description}</p>
        <button>{bn}</button>
    </div>)
}

export default Bnrcom