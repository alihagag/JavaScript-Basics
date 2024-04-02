class Actions {
    static visitUrl(url){
            return new Promise ((resolve,reject) => {
                if(url.startsWith('www') || url.startsWith('https://')){
                    resolve(console.log("URL Visited Successfully"))
                } 
                else reject("Wrong URL")
            }) 
    }

    static login(username,password){
        return new Promise( (resolve,reject)=> {
            if(username === "TechGlobal" && password === 'Test1234'){
                resolve(console.log("logged in successfully"))
            } else reject('Wrong Credentials')
        })
    }

    static validateTitle(title){
        return new Promise((resolve,reject)=> {
            if(title.length > 0 && title !== null && title !== undefined) resolve (console.log('title Validated successfully'))
            else reject('wrong title')
        })


    }
}



function test(){
    Actions.visitUrl('www.amazon.com')
   .then(()=> Actions.login("TechGlobal",'Test1234'))
   .then(()=> Actions.validateTitle('GOT'))
   .catch(err => console.log(err))

    }

test();


async function test2(){
    try{
        await Actions.visitUrl('www.amazon.com')
        await Actions.login('TechGlobal','Test1234')
        await Actions.validateTitle('GOT')

    }catch(err){
        console.log(err)
    }
}


test2()
