type Level = 'junior' | 'middle' | 'senior';

interface Developer {
    login : string,
    skills: string[],
    level: Level
}
const dev : Developer ={
    login: 'Ilona',
    skills:['js','react'],
    level: 'middle'
}
function gradeDeveloper(dev:{login : string, skills :string[], level:Level}):string|undefined{
    if (dev.level == 'junior'){
        console.log(dev.level='middle')
        return  dev.level
    }
    if (dev.level == 'middle'){
        console.log(dev.level='senior')
        return  dev.level
    }
}