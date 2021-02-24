
const adjective = [
    'Adaptable',
    'Zesty',
    'Exuberant',
    'Hysterical',
    'Cowardly',
    'Dusty',
    'Graceful'
]

const objects = [
    'Silas',
    'Boomer',
    'Bozo',
    'Barney',
    'George',
    'Ziggy',
    'Ozzy'
]

function usernameGenerator(){
    const adj=adjective[Math.floor(Math.random() * 7)]
    const obj=objects[Math.floor(Math.random() * 7)]
    return `${adj}-${obj}`
}

module.exports={
    usernameGenerator
}


    //test case// 
// function task(){
//     console.log(usernameGenerator())
//     console.log(usernameGenerator())
//     console.log(usernameGenerator())
//     console.log(usernameGenerator())
// }

// task()
