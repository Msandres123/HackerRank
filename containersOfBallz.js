function organizingContainers(container) {
    let capacityEach = []
    let typeEach = []
    for (let i = 0; i < container.length; i++) {
        let total = 0;
        let type = 0;
        for (let j = 0; j < container[i].length; j++) {
            total+= container[i][j]
            type += container[j][i]
            
        }
        capacityEach.push(total)
        typeEach.push(type)
    }
     console.log(capacityEach)
     console.log(typeEach)
     let capSorted = capacityEach.sort((a,b) => a - b)
     let typeSorted = typeEach.sort((a,b) => a - b)
     for (let i = 0; i < capSorted.length; i++) {
         if(capSorted[i] != typeSorted[i]) {
             return "Impossible"
         }
     }
     return "Possible"
}


let containers = [[2,0,0], [1,1,1], [0,2,1]];

console.log(organizingContainers(containers))