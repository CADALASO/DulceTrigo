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
        "icon": "https://cdn-icons.flaticon.com/png/128/3071/premium/3071257.png?token=exp=1655535341~hmac=cb2afa9bcc08d8300fc1c99e5b02f5a8"
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
