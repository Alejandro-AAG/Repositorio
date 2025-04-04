

document.addEventListener("DOMContentLoaded", function () {
    const bubbleContainer = document.getElementById("bubble-container");

    // Temas a mostrar en las burbujas
    const topics = ["JavaScript", ".NET - C#", "Html + CSS", "Spring Boot", "Kubernetes", "Arquitectos TI", 
                    "Developers", "Ciberseguridad", "DevSecOps", "Docker", "Soporte", "Hacking", "Fullstack", 
                    "Angular", "Laravel", "Front-End", "QA", "Vue", "GCP", "AWS", "Flask", "React", "Django", 
                    "Python", "AZURE", "DevOps", "CTO", "Java", "PHP", "DataScience"];

    // Colores de burbujas
    const colors = ["#d4c4fb", "#f8f0a1", "#a3f0b2", "#a6d4f2", "#f7c5a3", "#f5a6c6"];

    // Número de filas de burbujas
    const numRows = 5; // Puedes cambiarlo para más o menos filas

    for (let i = 0; i < numRows; i++) {
        // Crear un nuevo <ul> para cada fila
        const bubbleList = document.createElement("ul");
        bubbleList.classList.add("bubble-list");

        // Agregar burbujas a la fila
        topics.forEach((topic, index) => {
            const bubble = document.createElement("li");
            bubble.classList.add("bubble");
            bubble.textContent = topic;
            bubble.style.backgroundColor = colors[index % colors.length];
            bubbleList.appendChild(bubble);
        });

        // Agregar la fila al contenedor
        bubbleContainer.appendChild(bubbleList);
    }
});
