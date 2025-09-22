

opcionMenu = 0
const tipoEvento=[]
const nombreEvento=[]
const horaEvento=[]
const costoEvento=[]
const listaCompleta=[]
let finalListString = ""
let costoTotal = 0

let index = 0;

alert("Bienvenido a el planeador de vacaciones. Con esta pequeña aplicacion podras planear un dia de tus vacaciones y presupuestarlo. Presiona Ok para comenzar")

while (opcionMenu!=5){
    opcionMenu = parseInt(prompt("Planea tu dia \n\nQue quieres hacer? \n\n1. Agregar Evento\n2. Quitar Evento\n3. Mostrar los eventos del dia\n4. Obten el presupuesto del dia\n5. Salir"))
    switch (opcionMenu){
        case 1:

            //Preguntar Tipo de evento
            opcionEvento = parseInt(prompt("Agregar evento\nQue tipo de evento es?\n1. Atraccion\n2. Transporte\n3. Comida"))
            switch (opcionEvento){
                case 1:
                    tipoEvento.push("Atraccion")
                    break
                case 2:
                    tipoEvento.push("Transporte")
                    break
                case 3:
                    tipoEvento.push("Comida")
                    break
                default:
                    break
            }

            //Segun el tipo de evento, indicar un nombre identificador
            if(tipoEvento[index]=="Transporte"){
                nombreEvento.push(prompt("Ponle nombre a este " + tipoEvento[index] + ":" ))
            } else {
                nombreEvento.push(prompt("Ponle nombre a esta " + tipoEvento[index] + ":" ))
            }

            //Establecer la hora
            horaEvento.push(prompt("A que hora es? (Use el formato HH:MM)"))

            //Establecer el presupuesto
            costoEvento.push(parseInt(prompt("Cual es el presupuesto dedicado a este evento")))

            //Imprime todo el evento
            if(tipoEvento[index]=="Transporte"){
                alert("Se agrego un " + tipoEvento[index]+ "\nCon el nombre " + nombreEvento[index] + "\nA las "+ horaEvento[index]+"\nCon el presupuesto de " +costoEvento[index]) 
            } else {
                alert("Se agrego una " + tipoEvento[index]+ "\nCon el nombre " + nombreEvento[index] + "\nA las "+ horaEvento[index]+"\nCon el presupuesto de " +costoEvento[index]) 
            }
            

            //Guardar en arreglo para mostrar o quitar

            listaCompleta.push()

            //Se incremente el indice para el siguiente elemento
            index+=1

            break
            
        case 2:
            finalListString = ""
            for(let i = 0; i<index; i++){
                let numb = i+1
                finalListString += numb +". [" + tipoEvento[i]+ "] Con el nombre " + nombreEvento[i] + " a las "+ horaEvento[i]+" con el presupuesto de " +costoEvento[i] + "\n"
            }
            opcionQuitar = parseInt(prompt("Quitar Evento\n\nIngresa identificador del evento que quieras quitar:\n"+finalListString))

            console.log(opcionQuitar)



            //quitar el evento de cada arreglo

            let indexQuitar = opcionQuitar-1
            console.log(indexQuitar)

            console.log("Se quito" + tipoEvento[indexQuitar]+ "] Con el nombre " + nombreEvento[indexQuitar] + " a las "+ horaEvento[indexQuitar]+" con el presupuesto de " +costoEvento[indexQuitar])

            tipoEvento.splice(indexQuitar,1)
            console.log(tipoEvento)
            nombreEvento.splice(indexQuitar,1)
            console.log(nombreEvento)
            horaEvento.splice(indexQuitar,1)
            costoEvento.splice(indexQuitar,1)

            index-=1

            break
        case 3:
            //Crear el String para visualizar

            if (index!=0){
                finalListString = ""

                for(let i = 0; i<index; i++){
                    let numb = i+1
                    finalListString += numb +". [" + tipoEvento[i]+ "] Con el nombre " + nombreEvento[i] + " a las "+ horaEvento[i]+" con el presupuesto de " +costoEvento[i] + "\n"
                }

                alert("Visualizar Dia\n\n"+finalListString)                
            } else {
                alert("No tienes eventos el dia de hoy")
            }

            break
        case 4:
            const sumar = function(){
                costoTotal = 0
                for(let i = 0; i<index; i++){
                    costoTotal+=costoEvento[i]
                }
                console.log(costoTotal)

                return costoTotal
            }

            alert("El presupuesto total es de: " + sumar())

        default:
            break
    }
}