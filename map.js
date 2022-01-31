const obj = [
    { name : 'shark' , likes : 'ocean'},
    { name : 'whale' , likes : 'ocean'},
    { name : 'turtle' , likes : 'pond'},
    { name : 'otter' , likes : 'fish biscuits'},
    { name : 'lion' , likes : 'land'},
    { name : 'nemo' , likes : 'ocean'},
]

const result = obj.map(item => {
    const container = {};

    container [item.name] = item.likes;
    container.totalspesies = item.name.totals ;
    
    return container;    
})

console.log(result);

