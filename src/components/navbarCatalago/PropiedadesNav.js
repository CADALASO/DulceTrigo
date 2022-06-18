let contnav = [
    {
        "id": 1,
        "titulo": "Tortas",
        "direccion": "/pasteleria/tortas",
        "icon": "https://cdn-icons.flaticon.com/png/512/2682/premium/2682340.png?token=exp=1655495979~hmac=6af2fa9a002d1aa5bed610d0e8907f76"
    },

    {
        "id": 2,
        "titulo": "Postres",
        "direccion": "/pasteleria/postres",
        "icon": "https://cdn-icons.flaticon.com/png/512/2353/premium/2353761.png?token=exp=1655495897~hmac=2e74331999f7c428627fd649eef9e070"
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
        "icon": "https://marenco-galvis.co/wp-content/uploads/2020/07/pasabocas.png"
    },

    {
        "id": 5,
        "titulo": "Dietéticos",
        "direccion": "/panaderia/integral",
        "icon": "https://i.pinimg.com/originals/4e/01/02/4e01024f9fe6f0f4537810eb9074f3a8.png"
    },

    {
        "id": 6,
        "titulo": "Pasabocas",
        "direccion": "/panaderia/pasabocas",
        "icon": "https://img.favpng.com/9/21/4/croissant-scalable-vector-graphics-bread-icon-png-favpng-n1Z8cj97gdnixRhVSbjTGMrvD.jpg"
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
