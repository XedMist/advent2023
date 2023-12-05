import { indexOfLine } from "bun"

let file = Bun.file(Bun.argv[2])

let content = await file.text()
function run(content:string):number {

    let sum = 0
    for (const line of content.split('\n')) {
        const first = line.match('[0-9]')
        const last = line.split('').reverse().join('').match('[0-9]')
        if(first === null || last === null){
            continue
        }
        sum += Number(first[0]+ last[0])
    }
    return sum
}

const namesOfNumber = {one:'1','1':'1',two:'2','2':'2',three:'3','3':'3',four:'4','4':'4',five:'5','5':'5',six:'6','6':'6',seven:'7','7':'7',eight:'8','8':'8',nine:'9','9':'9'}
const keys = Object.keys(namesOfNumber) as Array<keyof typeof namesOfNumber>
function run2(content:string):number{
    let sum = 0
    for(const line of content.split('\n')){
        let first = undefined
        let last = undefined
        for(let i = 0; i< line.length; i++){
            if(first === undefined){
                let lineSlice = line.slice(i,i+6)
                const firstMatch = keys.find((k) => lineSlice.startsWith(k))
                if(firstMatch){
                    first = namesOfNumber[firstMatch]
                }
            }
            if(last === undefined){
                let size = Math.max(line.length-i-5,0)
                let lineSlice = line.slice(size,line.length-i)
                const firstMatch = keys.find((k) => lineSlice.endsWith(k))
                if(firstMatch){
                    last = namesOfNumber[firstMatch]
                }
            }
            if(first !== undefined && last !== undefined){
                break;
            }
        }
        console.log(first,last)
        sum += Number((first ?? '') + (last ?? ''))
    }
    return sum
}



console.log("Result: " + run2(content))