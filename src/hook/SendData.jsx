export const SendData = function SendData(data){
    const url = "http://localhost:3000/reviews"
  
    async function sendingData(){
    await fetch(url, {
        method: "POST",
        headers:{ "content-type": "application/json"},
        body: JSON.stringify(data)
    }) 
  }
  sendingData()
  }