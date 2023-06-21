//promise.all

const varPromise = new Promise((resolve, reject) => {
        if(false){
            resolve('This is New Promise One')
        }  
        else{
            reject("Promise Rejected")
        }
    })
    
    function funcPromise(){
        return new Promise((res, rej) => {
            setTimeout(() => {
                res('Promise resolve')
            })
        })
    }
    
    Promise.all([varPromise, funcPromise()])
    .then((data)=> console.log(data))
    .catch((err) => console.log(err))

    //promise 
    var promise=new Promise(function(resolve, reject){
        let a = "tokyo"
        let b = "tokyo"
        if(a===b){
            resolve();
        }
        else{
            reject();
        }
    });
    promise.then(()=>{
        console.log("my promise is resolved");
    })
    .catch(()=>{
        console.log("my promise is rejected")
    })// output resolved

    //promise - function

    const promise =()=>{
        return new Promise(function(resolve, reject){
            let a = "Shraddha"
            let b = "Shivanshu"
            if(a===b){
                resolve();
            }
            else{
                reject();
            }
        });
        }
        promise().then(()=>{
            console.log("my promise is resolved");
        })
        .catch(()=>{
            console.log("my promise is rejected")
        })// output rejected 


        //promise chaining

        const pro=(num)=>{
            return new Promise((resolve,rej)=>{
                setTimeout(()=>{
                    console.log(num);
                    resolve();
                },1000)
            });
        }
        pro(1)
        .then(()=>pro(2))
        .then(()=>pro(3))
        .then(()=>pro(4))
        .then(()=>pro(5));

        // other one 

        function display(Num, timeout){
                return new Promise((res, rej) => {
                    setTimeout(() => {
                        console.log(Num);
                        res('Promise Resolved...')
                    }, timeout);
                })
            }
            display(1, 1000)
            .then(() => display(2, 6000))
            .then(() => display(3, 5000))
            .then(() => display(4, 4000))
            .then(() => display(5, 3000))
            .then(() => display(6, 2000))
            .then((data) => console.log('Promise Completed....'))


            //Closure 1st

            function outer(){
                    let a = 10
                    function inner(){
                        return "Hello"
                    }
                    return inner;
                }
                
                let res = outer();
                console.log(res());

                //2nd 
                var Obj1 = {
                        name: 'John',
                    }

                let Obj2 = new Object();
                   Obj2.age = 23;
                   Obj2['name']='Jane';

               console.log(Obj2['name']);
        
    