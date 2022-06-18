let contnav = [
    {
        "id": 1,
        "titulo": "Tortas",
        "direccion": "/pasteleria/tortas",
        "icon": "https://cdn-icons-png.flaticon.com/512/3531/3531332.png"
    },

    {
        "id": 2,
        "titulo": "Postres",
        "direccion": "/pasteleria/postres",
        "icon": "https://cdn-icons-png.flaticon.com/512/1548/1548976.png"
    },

    {
        "id": 3,
        "titulo": "Galletas",
        "direccion": "/pasteleria/galletas",
        "icon": "https://cdn-icons-png.flaticon.com/512/894/894355.png"
    },

    {
        "id": 4,
        "titulo": "Especiales",
        "direccion": "/panaderia/especial",
        "icon": "https://cdn-icons-png.flaticon.com/512/877/877951.png"
    },

    {
        "id": 5,
        "titulo": "Dietéticos",
        "direccion": "/panaderia/integral",
        "icon": "https://cdn-icons-png.flaticon.com/128/3014/3014502.png"
    },

    {
        "id": 6,
        "titulo": "Pasabocas",
        "direccion": "/panaderia/pasabocas",
        "icon": "https://cdn-icons-png.flaticon.com/512/2164/2164014.png"
    }
]

export function getAllPropNav() {
    return contnav;
}

export function getFirst3PropNav() {
    return contnav.filter(item2 => item2.id <= 3);
}

export function getLast3PropNav() {
    return contnav.filter(item2 => item2.id > 3)
}

/*export function getFirst3PropNav(){
    if(Especial || Pasabocas || Dietetico){
        return contnav.filter(item => item.id >3);
    }else if(Tortas || Postres || Galletas){
        return contnav.filter(item2 => item2.id <= 3);
    }
    
}*/
