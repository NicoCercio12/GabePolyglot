const textos = {
    es: {
        nav_inicio: "Inicio",
        nav_sobre_mi: "Sobre mí",
        nav_servicios: "Servicios",
        nav_resenas: "Reseñas",
        nav_contacto: "Contacto",
        hero_desc: "Te acompaño a aprender idiomas de una forma clara, cercana y efectiva, con clases adaptadas a tu ritmo y a tus objetivos.",
        sobre_titulo: "SOBRE MÍ",
        sobre_desc: "Soy profesor de idiomas con experiencia en catalán, francés, inglés, italiano y esperanto. Me apasiona crear clases dinámicas, claras y adaptadas a cada estudiante.",
        serv_ingles_titulo: "Inglés",
        serv_ingles_desc: "Clases personalizadas para mejorar tu fluidez, comprensión y confianza.",
        serv_frances_titulo: "Francés",
        serv_frances_desc: "Aprendé con una metodología clara, práctica y adaptada a tu nivel.",
        serv_italiano_titulo: "Italiano",
        serv_italiano_desc: "Clases dinámicas para expresarte con seguridad desde el inicio.",
        serv_esperanto_titulo: "Esperanto",
        serv_esperanto_desc: "Una opción ideal para explorar un idioma internacional de forma simple.",
        serv_catalan_titulo: "Catalán",
        serv_catalan_desc: "Clases enfocadas en comunicación, comprensión y uso real del idioma.",
        contacto_titulo: "Contacto",
        contacto_desc: "¿Tenés alguna consulta? No dudes en contactarme",
        label_nombre: "Nombre",
        label_email: "Email",
        label_mensaje: "Mensaje",
        form_enviar: "Enviar",
        reseñas_titulo: "Reseñas",
        resena_1_nombre: "Lucía Fernández",
        resena_1_texto: "Las clases son súper claras y dinámicas. En pocos meses mejoré muchísimo mi inglés.",
        resena_2_nombre: "Martín López",
        resena_2_texto: "Explica de una forma muy simple y con mucha paciencia. Se adapta a tu ritmo.",
        resena_3_nombre: "Sofía Ramírez",
        resena_3_texto: "Me ayudó a preparar un examen de francés y me fue excelente. Muy recomendable.",
        resena_4_nombre: "Diego Pérez",
        resena_4_texto: "Clases entretenidas y bien organizadas. Se nota la pasión por enseñar.",
        resena_5_nombre: "Valentina Gómez",
        resena_5_texto: "Aprender italiano con él fue una experiencia genial. Todo muy claro desde el primer día.",
        resena_6_nombre: "Javier Torres",
        resena_6_texto: "Muy profesional y cercano. Hace que aprender idiomas sea mucho más fácil."




    },
    en: {
        nav_inicio: "Home",
        nav_sobre_mi: "About me",
        nav_servicios: "Services",
        nav_resenas: "Reviews",
        nav_contacto: "Contact",
        hero_desc: "I help you learn languages in a clear, close and effective way, with classes adapted to your pace and goals.",
        sobre_titulo: "ABOUT ME",
        sobre_desc: "I am a language teacher with experience in Catalan, French, English, Italian and Esperanto. I am passionate about creating dynamic, clear and student-focused lessons.",
        serv_ingles_titulo: "English",
        serv_ingles_desc: "Personalized lessons to improve your fluency, understanding and confidence.",
        serv_frances_titulo: "French",
        serv_frances_desc: "Learn with a clear, practical method adapted to your level.",
        serv_italiano_titulo: "Italian",
        serv_italiano_desc: "Dynamic lessons to help you speak with confidence from the start.",
        serv_esperanto_titulo: "Esperanto",
        serv_esperanto_desc: "A great option to explore an international language in a simple way.",
        serv_catalan_titulo: "Catalan",
        serv_catalan_desc: "Lessons focused on communication, understanding and real use of the language.",
        contacto_titulo: "Contact",
        contacto_desc: "Do you have any questions? Feel free to contact me",
        label_nombre: "Name",
        label_email: "Email",
        label_mensaje: "Message",
        form_enviar: "Send",
        reseñas_titulo: "Reviews",
        resena_1_nombre: "Lucía Fernández",
        resena_1_texto: "The lessons are very clear and dynamic. In just a few months I improved my English a lot.",
        resena_2_nombre: "Martín López",
        resena_2_texto: "He explains things in a very simple way and with a lot of patience. He adapts to your pace.",
        resena_3_nombre: "Sofía Ramírez",
        resena_3_texto: "He helped me prepare for a French exam and it went great. Highly recommended.",
        resena_4_nombre: "Diego Pérez",
        resena_4_texto: "Fun and well-organized classes. You can really see the passion for teaching.",
        resena_5_nombre: "Valentina Gómez",
        resena_5_texto: "Learning Italian with him was a great experience. Everything was very clear from day one.",
        resena_6_nombre: "Javier Torres",
        resena_6_texto: "Very professional and approachable. He makes learning languages much easier."

    }
};

function cambiarIdioma(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (textos[lang][key]) {
            el.textContent = textos[lang][key];
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem("idioma", lang);

    document.getElementById("btn-es")?.classList.toggle("active", lang === "es");
    document.getElementById("btn-en")?.classList.toggle("active", lang === "en");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-es").onclick = () => cambiarIdioma("es");
    document.getElementById("btn-en").onclick = () => cambiarIdioma("en");

    cambiarIdioma(localStorage.getItem("idioma") || "es");
});