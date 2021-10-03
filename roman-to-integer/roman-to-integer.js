const romanToInt = (s) => {
    let data = {
        I : 1,
        V : 5, 
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    
    let result = 0
    for(let i=0; i< s.length; i++) {
        if(data[s[i]] < data[s[i+1]]) {
            result-= data[s[i]]
        }else {
            result += data[s[i]]
        }
    }
    
    return result
}
