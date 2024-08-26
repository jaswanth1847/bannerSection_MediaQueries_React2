import Bnrcom from "./components/Bnrcom/index"
import "./App.css"

let bannersList = [
  {
    uniqueId:1,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGzBVFCmD0wVh1tpFThWwcD-dF3g7BHfSfbLpK5xcI_ACrkTHg0pNZvWgrRl6IVNT1g&usqp=CAU",
    name:"The Sessions Latest",
    description:"Get the sessions all latest designs in a flick of your hand.",
    bn :"Show more"
  },
  {
    uniqueId:2,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGzBVFCmD0wVh1tpFThWwcD-dF3g7BHfSfbLpK5xcI_ACrkTHg0pNZvWgrRl6IVNT1g&usqp=CAU",
    name:"Our New Designs",
    description:"Get the designs developed by our in-house team all for yourself.",
    bn :"Show more"
  },
  {
    uniqueId:3,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW15icoHt_lvPErb-3IYEvNT8qGITh2Yb5ARilgWInXHpgIC1SnEforov1pcno5tKfFA&usqp=CAU",
    name:"Insiders",
    description:"Get the sessions all latest designs in a flick of your hand.",
    bn :"Show more"
  }
]

let App=()=>{
  return(<div className="con">
    {
      bannersList.map((item)=>{
        return(
          <Bnrcom bannersList = {item} key={item.uniqueId}/>
        )
      })
    }
    </div>)
}

export default App