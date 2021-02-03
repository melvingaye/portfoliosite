export const filterList=(lists, query)=>{

    console.log(lists.filter(list => list.tasks.filter(task => Object.keys(task).some(key => task[key].toLowerCase().includes(query.toLowerCase())))))
    const results =  lists.filter(list => list.tasks.filter(task => Object.keys(task).some(key => task[key].toLowerCase().includes(query.toLowerCase()))))
    console.log(results)
    return results
}