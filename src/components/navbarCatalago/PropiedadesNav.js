let contnav = [
    {
        "id": 1,
        "titulo": "Tortas",
        "icon": "https://e7.pngegg.com/pngimages/861/845/png-clipart-japanese-cuisine-shortcake-computer-icons-cake-angle-food.png"
    },

    {
        "id": 2,
        "titulo": "Postres",
        "icon": "https://cdn-icons-png.flaticon.com/512/186/186150.png"
    },

    {
        "id": 3,
        "titulo": "Galletas",
        "icon": "https://cdn-icons-png.flaticon.com/512/6122/6122403.png"
    },

    {
        "id": 4,
        "titulo": "Especiales",
        "icon": "https://marenco-galvis.co/wp-content/uploads/2020/07/pasabocas.png"
    },

    {
        "id": 5,
        "titulo": "Dietéticos",
        "icon": "https://i.pinimg.com/originals/4e/01/02/4e01024f9fe6f0f4537810eb9074f3a8.png"
    },

    {
        "id": 6,
        "titulo": "Pasabocas",
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
