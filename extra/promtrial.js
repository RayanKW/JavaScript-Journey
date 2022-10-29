const OnMyWed = (isHappy)=>{
    return new Promise((resolve, reject) => {
        setTimeout (()=>{
            if (isHappy === true){
                resolve(1)
            }else{
                reject(new Error(0))
            }

        }, 2000)
    })
}
OnMyWed(true)
.then(()=>{
        console.log(`I have ${result} cakes`)
})
.catch(()=>{
    console.log(error)
})
.finally(()=>{
    console.log('parrryy!!')
});
