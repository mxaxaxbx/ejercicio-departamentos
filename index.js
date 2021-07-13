const departments = [
    { id: 1, name: "Amazonas", city: "Leticia", url: "https://es.wikipedia.org/wiki/Amazonas_(Colombia)"  },
    { id: 2, name: "Antioquia", city: "Medellín", url: "https://es.wikipedia.org/wiki/Antioquia"  },
    { id: 3, name: "Arauca", city: "Arauca", url: "https://es.wikipedia.org/wiki/Arauca_(Colombia)"  },
    { id: 4, name: "Atlantico", city: "Barranquilla", url: "https://es.wikipedia.org/wiki/Atl%C3%A1ntico_(Colombia)"  },
    { id: 5, name: "Bolivar", city: "Cartagena", url: "https://es.wikipedia.org/wiki/Cartagena_de_Indias"  },
    { id: 6, name: "Boyacá", city: "Tunja", url: "https://es.wikipedia.org/wiki/Tunja"  },
    { id: 7, name: "Caldas", city: "Manizales", url: "https://es.wikipedia.org/wiki/Manizales"  },
    { id: 8, name: "Caquetá", city: "Florencia", url: "https://es.wikipedia.org/wiki/Florencia_(Caquet%C3%A1)"  },
    { id: 9, name: "Casanare", city: "Yopal", url: "https://es.wikipedia.org/wiki/Yopal"  },
    { id: 10, name: "Cauca", city: "Popayán", url: "https://es.wikipedia.org/wiki/Popay%C3%A1n"  },
    { id: 11, name: "Cesar", city: "Valledupar", url: "https://es.wikipedia.org/wiki/Valledupar"  },
    { id: 12, name: "Chocó", city: "Quibdó", url: "https://es.wikipedia.org/wiki/Quibd%C3%B3"  },
    { id: 13, name: "Córdoba", city: "Montería", url: "https://es.wikipedia.org/wiki/Monter%C3%ADa"  },
    { id: 14, name: "Cundinamarca", city: "Bogotá", url: "https://es.wikipedia.org/wiki/Bogot%C3%A1"  },
    { id: 15, name: "Guainía", city: "Inírida", url: "https://es.wikipedia.org/wiki/In%C3%ADrida"  },
    { id: 16, name: "Guaviare", city: "San José del Guaviare", url: "https://es.wikipedia.org/wiki/San_Jos%C3%A9_del_Guaviare"  },
    { id: 17, name: "Huila", city: "Neiva", url: "https://es.wikipedia.org/wiki/Neiva"  },
    { id: 18, name: "La Guajira", city: "Rioacha", url: "https://es.wikipedia.org/wiki/Riohacha"  },
    { id: 19, name: "Magdalena", city: "Santa Marta", url: "https://es.wikipedia.org/wiki/Santa_Marta_(Colombia)"  },
    { id: 20, name: "Meta", city: "Villavicencio", url: "https://es.wikipedia.org/wiki/Villavicencio"  },
    { id: 21, name: "Nariño", city: "Pasto", url: "https://es.wikipedia.org/wiki/San_Juan_de_Pasto"  },
    { id: 22, name: "Norte de Santander", city: "Cúcuta", url: "https://es.wikipedia.org/wiki/C%C3%BAcuta"  },
    { id: 23, name: "Putumayo", city: "Mocoa", url: "https://es.wikipedia.org/wiki/Mocoa"  },
    { id: 24, name: "Quindío", city: "Armenia", url: "https://es.wikipedia.org/wiki/Armenia_(Quind%C3%ADo)"  },
    { id: 25, name: "Risaralda", city: "Pereira", url: "https://es.wikipedia.org/wiki/Pereira"  },
    { id: 26, name: "San Andrés y Providencia", city: "San Andrés", url: "https://es.wikipedia.org/wiki/San_Andr%C3%A9s_(San_Andr%C3%A9s_y_Providencia)"  },
    { id: 27, name: "Santander", city: "Bucaramanga", url: "https://es.wikipedia.org/wiki/Bucaramanga"  },
    { id: 28, name: "Sucre", city: "Sincelejo", url: "https://es.wikipedia.org/wiki/Sincelejo"  },
    { id: 29, name: "Tolima", city: "Ibagué", url: "https://es.wikipedia.org/wiki/Ibagu%C3%A9"  },
    { id: 30, name: "Valle del Cauca", city: "Cali", url: "https://es.wikipedia.org/wiki/Cali"  },
    { id: 31, name: "Vaupés", city: "Mitú", url: "https://es.wikipedia.org/wiki/Mit%C3%BA"  },
    { id: 32, name: "Vichada", city: "Puerto Carreño", url: "https://es.wikipedia.org/wiki/Puerto_Carre%C3%B1o"  },
];

const select = document.getElementById("departments");

const depSelected = document.getElementById("depSelected");
const citSelected = document.getElementById("citSelected");
const uriSelected = document.getElementById("uriSelected");
const ifra = document.getElementById("ifra");

const fillSelect = () => {
    departments.forEach( (department) => {
        const opt = document.createElement("option");
        opt.value = department.id;
        opt.innerHTML = department.name;
        
        select.append(opt);
    });
}

fillSelect();

const setDepSelected = (dep) => {
    depSelected.innerHTML = dep.name;
    citSelected.innerHTML = dep.city;
    uriSelected.innerHTML = dep.city;
    uriSelected.href = dep.url;
    ifra.src = dep.url;

    setTimeout(() => {
        uriSelected.click();
    }, 2000);
}

select.onchange = function() {
    const depIdStr = select.value;
    const depId = parseInt(depIdStr);
    const dep = departments.find( dep => dep.id === depId );

    setDepSelected( dep );
}
