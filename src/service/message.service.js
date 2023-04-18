import {getRequest} from "./axios.service"

let APT_ENDPOINTS =  "https://www.1secmail.com/api/v1/";

//?action=genRandomMailbox&count=10
//https://www.1secmail.com/api/v1/?action=getMessages&login=zi3byt&domain=wuuvo.com





export const getMail = async () =>{
    try {
        
        const email = localStorage.getItem('mail_id');
            const parts = email.split("@");
            const username = parts[0];
            const domain = parts[1];

            const base = `https://www.1secmail.com/api/v1/?action=getMessages&login=${username}&domain=${domain}`
                console.log(base)
        let result = await getRequest(base);
        console.log("message result is:",result);
        return result;
    } catch (error) {
        throw error
    }
}

export const getMsg = async (id) =>{
    try {
        //https://www.1secmail.com/api/v1/?action=readMessage&login=ea3xeksmzv3&domain=kzccv.com&id=229135377
        const email = localStorage.getItem('mail_id');
            const parts = email.split("@");
            const username = parts[0];
            const domain = parts[1];

            const base = `https://www.1secmail.com/api/v1/?action=readMessage&login=${username}&domain=${domain}&id=${id}`
                console.log(base)
        let result = await getRequest(base);
        console.log("message result is:",result);
        return result;
    } catch (error) {
        throw error
    }
}
export const getId = async ()=>{
    try{
        let result = await getRequest(APT_ENDPOINTS+"?action=genRandomMailbox&count=1");
        console.log("result = ",result[0])
        // localStorage.setItem()
               localStorage.setItem('mail_id', result[0]);

        return result;
    }catch(err){
        throw err
    }
}
