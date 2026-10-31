function comisionPorVentas (){
    let n,v, ant;
    alert("Este algoritmo determina la comision de cada venta");
    n= parseFloat(prompt("Ingrese el nombre"));
    v= number(prompt("Ingrese la venta"));
    ant= number(prompt("Ingrse los años de antiguedad"));

    porcentaje = 0;
    if (venta >=80000 && antiguedad >=2) {
        porcentaje = 10;
 }else if(ventas >= 3000000){
        porcentaje = 5;
    }

    comision = ventas * porcentaje / 100;

    alert("Vendedor: " + nombre);
    alert("Comision: " + comision);
}
        
    


function solicitudPrestamo () {
    let n, i, gas, his, disp;

    n = prompt("Ingrese el nombre");
    i = parseFloat(prompt("Ingrese sus ingresos"));
    gas = parseFloat(prompt("Ingrese sus gastos"));
    his = prompt("Ingrese historial positivo o negativo");

    disp = i - gas;

    if(i <= gas){
        alert("Prestamo rechazado");
    }else if(his == "negativo"){
        alert("Prestamo rechazado por historial");
    }else if(his == "positivo" && disp >= 1000000){
        alert("Prestamo preaprobado");
    }else{
        alert("Prestamo pendiente");
    }
}



function alojamientoHotel() {
    let nom, tp, tm, no, tr, tl;

    nom = prompt("Ingrese el nombre del huesped");
    tp = prompt("Ingrese tipo de habitacion: estandar, ejecutiva o suite");
    tm = prompt("Ingrese temporada alta o baja");
    no = parseInt(prompt("Ingrese cantidad de noches"));

    if(tp == "estandar"){
        tr = 150000;
    }else if(tp == "ejecutiva"){
        tr = 250000;
    }else if(tp == "suite"){
        tr = 400000;
    }

    if(tm == "alta"){
        tr = tr * 1.20;
    }

    tl = tr * no;

    if(no >= 5){
        tl = tl * 0.90;
    }

    alert("Huesped: " + no);
    alert("Total a pagar: " + tl);
}




function clasificarTriangulo(){
    let a, b, c, s, area, tipo;

    a = parseFloat(prompt("Ingrese el lado 1"));
    b = parseFloat(prompt("Ingrese el lado 2"));
    c = parseFloat(prompt("Ingrese el lado 3"));

    if(a + b > c && a + c > b && b + c > a){

        if(a == b && b == c){
            tipo = "Equilatero";
        }else if(a == b || a == c || b == c){
            tipo = "Isosceles";
        }else{
            tipo = "Escaleno";
        }

        s = (a + b + c) / 2;
        area = Math.sqrt(s * (s-a) * (s-b) * (s-c));

        alert("Tipo: " + tipo);
        alert("Area: " + area.toFixed(2));

    }else{
        alert("El triangulo no es valido");
    }
}


function rendimientoAcademico(){
    let nombre, n1, n2, n3, asistencia, promedio;

    nombre = prompt("Ingrese el nombre del estudiante");
    n1 = parseFloat(prompt("Ingrese nota 1"));
    n2 = parseFloat(prompt("Ingrese nota 2"));
    n3 = parseFloat(prompt("Ingrese nota 3"));
    asistencia = parseFloat(prompt("Ingrese asistencia"));

    promedio = (n1 + n2 + n3) / 3;

    if(asistencia < 80){
        alert("No aprobado por asistencia");
    }else if(promedio < 60){
        alert("No aprobado por notas");
    }else{
        alert("Estudiante aprobado");
    }

    alert("Promedio: " + promedio(2));
}
    



// ALGORITMOS DE BUCLES


function registroVentas(){
    let can, v, tl, prom, my, con;

    can = parseInt(prompt("Ingrese cantidad de ventas"));
    tl = 0;
    my = 0;
    con = 0;

    for(let i = 1; i <= can; i++){
        v = parseFloat(prompt("Ingrese valor de la venta"));

        tl = tl + v;

        if(v > my){
            my = v;
        }

        if(v > 200000){
            con++;
        }
    }

    prom = tl / can;

    alert("total vendido: " + tl);
    alert("promedio: " + prom);
    alert("ventas mayores a 200000: " + con);
    alert("venta mayor: " + my);

    alert("Venta mayor: " + mayor);
}


function controlInventario(){
    let pd, inv, u, v;

    pd = prompt("Ingrese nombre del producto");
    inv = parseInt(prompt("Ingrese inventario inicial"));
    v = 0;

    while(inv > 0){
        u = parseInt(prompt("Ingrese unidades vendidas"));

        if(u > 0 && u <= inv){
            inv = inv - u;
            v = v + u;
        }else{
            alert("Cantidad no valida");
        }
    }

    alert("Producto: " + pd);
    alert("Unidades vendidas: " + v);
    alert("Inventario final: " + inv);
}




function analizarTemperaturas(){
    let dias, temp, suma, my, mn, prom, cont;

    dias = parseInt(prompt("Ingrese cantidad de dias"));
    suma = 0;
    my = -Infinity;
    mn = Infinity;
    cont = 0;

    for(let i = 1; i <= dias; i++){
        temp = parseFloat(prompt("Ingrese temperatura"));

        suma = suma + temp;

        if(temp > my){
            my = temp;
        }

        if(temp < mn){
            mn = temp;
        }

        if(temp > 30){
            cont++;
        }
    }

    prom = suma / dias;

    alert("Promedio: " + prom);
    alert("Temperatura mayor: " + my);
    alert("Temperatura menor: " + mn);
    alert("Dias mayores a 30 grados: " + cont);
}





function estadisticasNumeros(){
    let cant, n, suma, pos, neg, cero, my, prom;

    cant = parseInt(prompt("Ingrese cantidad de numeros"));
    suma = 0;
    pos = 0;
    neg = 0;
    cero = 0;
    my = -Infinity;

    for(let i = 1; i <= cant; i++){
        n = parseInt(prompt("Ingrese un numero"));

        suma = suma + n;

        if(n > 0){
            pos++;
        }else if(n < 0){
            neg++;
        }else{
            cero++;
        }

        if(n > my){
            my = n;
        }
    }

    prom = suma / cant;

    alert("Suma: " + suma);
    alert("Promedio: " + prom);
    alert("Positivos: " + pos);
    alert("Negativos: " + neg);
    alert("Ceros: " + cero);
    alert("Numero mayor: " + my);
}
    




function pagoPrestamo(){
    let c, d, pago, total, cant;

    c = prompt("Ingrese nombre del cliente");
    d = parseFloat(prompt("Ingrese valor de la deuda"));
    total = 0;
    cant = 0;

    while(d > 0){
        pago = parseFloat(prompt("Ingrese valor del pago"));

        if(pago > 0 && pago <= d){
            d = d - pago;
            total = total + pago;
            cant++;
        }else{
            alert("Pago no valido");
        }
    }

    alert("Cliente: " + c);
    alert("Total pagado: " + total);
    alert("Cantidad de pagos: " + cant);
    alert("Deuda restante: " + d);
}
