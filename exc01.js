function calculoCobre(resistivcobre, comptrue, areatrans){
    return (resistivcobre * comptrue) / areatrans
}
    
function calculoAluminio(resistivalu, comptrue, areatrans){
    return (resistivalu * comptrue) / areatrans
}

function calculoComprimento(compfalse){
    return compfalse * 1000
}

function principal(){
    const resistivcobre = 0.017
    const resistivalu = 0.028

    let compfalse = 7 // compfalse ta sendo usado para a kilometragem
    let comptrue = calculoComprimento(compfalse) // comptrue é o calculo ja feito em metros
    let areatrans = 6 // em mL
    let tipo = `aluminio`

    if(tipo === `cobre`){
        let rescob = calculoCobre(resistivcobre, comptrue, areatrans)
        console.log(`A Resistência do Cobre equivale à ${rescob.toFixed(3)}Ω`)

    }else if(tipo === `aluminio`){
        let resalu = calculoAluminio(resistivalu, comptrue, areatrans)
        console.log(`A Resistência do Alumínio equivale à ${resalu.toFixed(3)}Ω`)

    }else{
        console.log(`Tipo Inválido, Digite Novamente`)
    }
    
}

principal()