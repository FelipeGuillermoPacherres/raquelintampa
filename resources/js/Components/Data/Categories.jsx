import img1 from "../../../../public/img/categories-services/post-op-care.jpg";
import img2 from "../../../../public/img/categories-services/lymphatic-drainage.jpg";
import img3 from "../../../../public/img/categories-services/massage-body-wellness.jpg";
import img4 from "../../../../public/img/categories-services/hair-styling.jpg";
import img5 from "../../../../public/img/categories-services/hair-color-highlights.jpg";
import img6 from "../../../../public/img/categories-services/hair-treatments.jpg";
import img7 from "../../../../public/img/categories-services/manicure-acrylic-nails.jpg";
import img8 from "../../../../public/img/categories-services/pedicure.jpg";
import img9 from "../../../../public/img/categories-services/body-waxing.jpg";
import img10 from "../../../../public/img/categories-services/facials.jpg";


export const categories = [
    {
        id: 1,
        name: {
            es: "Cuidado postoperatorio",
            en: "Post-Op Care",
        },
        hasSessions: true,
        description: {
            es: "Atención cercana y personalizada durante tu recuperación, siguiendo las indicaciones de tu cirujano.",
            en: "Thoughtful, personalized support throughout your recovery, guided by your surgeon's instructions.",
        },
        icon: "fa-solid fa-hand-holding-heart",
        img: img1,
        imgAlt: {
            es: "Atención postoperatoria personalizada en Raquel in Tampa",
            en: "Personalized post-op care at Raquel in Tampa",
        },
        pricingType: "packages",
        services: [
            { es: "1 sesión", en: "Single Session", sessions: 1, price: 80 },
            { es: "Paquete de 5 sesiones", en: "5-Session Package", sessions: 5, price: 360 },
            { es: "Paquete de 10 sesiones", en: "10-Session Package", sessions: 10, price: 720 },
            {
                es: "Plan personalizado (10% Dscto.)",
                en: "Custom Plan (10% off)",
                sessions: null,
                price: null,
                isCustom: true,
            },
        ],
    },
    {
        id: 2,
        name: {
            es: "Drenaje linfático",
            en: "Lymphatic Drainage",
        },
        hasSessions: true,
        description: {
            es: "Un cuidado manual suave y personalizado, adaptado a tus necesidades.",
            en: "Gentle, hands-on care tailored to your individual needs.",
        },
        icon: "fa-solid fa-spa",
        img: img2,
        imgAlt: {
            es: "Sesión de drenaje linfático abdominal en Raquel in Tampa",
            en: "Abdominal lymphatic drainage session at Raquel in Tampa",
        },
        pricingType: "packages",
        services: [
            { es: "1 sesión", en: "Single Session", sessions: 1, price: 80 },
            { es: "Paquete de 5 sesiones", en: "5-Session Package", sessions: 5, price: 400 },
            { es: "Paquete de 10 sesiones", en: "10-Session Package", sessions: 10, price: 800 },
            {
                es: "Plan personalizado (10% Dscto.)",
                en: "Custom Plan (10% off)",
                sessions: null,
                price: null,
                isCustom: true,
            },
        ],
    },
    {
        id: 3,
        name: {
            es: "Masajes y bienestar corporal",
            en: "Massage & Body Wellness",
        },
        hasSessions: true,
        description: {
            es: "Dedica un momento a cuidarte con sesiones de masaje y cuidado corporal adaptadas a ti.",
            en: "Make time for yourself with massage and body care tailored to you.",
        },
        icon: "fa-solid fa-hands",
        img: img3,
        imgAlt: {
            es: "Masaje profesional de espalda en Raquel in Tampa",
            en: "Professional back massage at Raquel in Tampa",
        },
        pricingType: "packages",
        services: [
            { es: "1 sesión", en: "Single Session", sessions: 1, price: 70 },
            { es: "Paquete de 5 sesiones", en: "5-Session Package", sessions: 5, price: 320 },
            { es: "Paquete de 10 sesiones", en: "10-Session Package", sessions: 10, price: 650 },
            {
                es: "Plan personalizado (10% Dscto.)",
                en: "Custom Plan (10% off)",
                sessions: null,
                price: null,
                isCustom: true,
            },
        ],
    },
    {
        id: 4,
        name: {
            es: "Cabello y peinados",
            en: "Hair & Styling",
        },
        hasSessions: false,
        icon: "fa-solid fa-scissors",
        img: img4,
        imgAlt: {
            es: "Corte y peinado profesional en Raquel in Tampa",
            en: "Professional haircut and styling at Raquel in Tampa",
        },
        pricingType: "services",
        services: [
            { es: "Lavado y peinado estándar", en: "Standard Wash & Style", price: 35 },
            { es: "Lavado y peinado con extensiones", en: "Wash & Style with Extensions", price: 45 },
            { es: "Lavado y peinado con secadora", en: "Wash & Style with Blower", price: 35 },
            { es: "Solo secado", en: "Blow Dry Only", price: 25 },
            { es: "Corte para mujer", en: "Women's Haircut", price: 30 },
            { es: "Corte de flequillo", en: "Bangs Trim", price: 10 },
        ],
    },
    {
        id: 5,
        name: {
            es: "Coloración y reflejos",
            en: "Hair Color & Highlights",
        },
        hasSessions: false,
        icon: "fa-solid fa-palette",
        img: img5,
        imgAlt: {
            es: "Aplicación profesional de reflejos en Raquel in Tampa",
            en: "Professional highlights application at Raquel in Tampa",
        },
        pricingType: "services",
        services: [
            { es: "Retoque de color permanente", en: "Permanent Root Touch-Up", price: 45 },
            { es: "Color semipermanente", en: "Semi-Permanent Color", price: 45 },
            { es: "Baño de color", en: "Gloss / Color Bath", price: 30 },
            { es: "Corrección de color", en: "Color Correction", price: 150 },
            { es: "Matizador", en: "Toner", price: 35 },
            { es: "Reflejos con papel aluminio - Media cabeza", en: "Foil Highlights - Half Head", price: 90 },
            { es: "Reflejos con papel aluminio - Cabeza completa", en: "Foil Highlights - Full Head", price: 150 },
            { es: "Ondulación permanente", en: "Permanent Wave", price: 70 },
            { es: "Alisado permanente", en: "Permanent Straightening", price: 120 },
        ],
    },
    {
        id: 6,
        name: {
            es: "Tratamientos capilares",
            en: "Hair Treatments",
        },
        hasSessions: false,
        icon: "fa-solid fa-pump-soap",
        img: img6,
        imgAlt: {
            es: "Tratamiento de acondicionamiento capilar en Raquel in Tampa",
            en: "Deep conditioning hair treatment at Raquel in Tampa",
        },
        pricingType: "services",
        services: [
            { es: "Acondicionamiento profundo - Corto", en: "Deep Conditioning - Short", price: 15 },
            { es: "Acondicionamiento profundo - Medio", en: "Deep Conditioning - Medium", price: 20 },
            { es: "Acondicionamiento profundo - Largo", en: "Deep Conditioning - Long", price: 30 },
            { es: "Tratamiento hidratante / reparador", en: "Hydrating / Repairing Treatment", price: 30 },
            { es: "Tratamiento de keratina express", en: "Express Keratin Treatment", price: 65 },
        ],
    },
    {
        id: 7,
        name: {
            es: "Manicura y uñas acrílicas",
            en: "Manicure & Acrylic Nails",
        },
        hasSessions: false,
        icon: "fa-solid fa-hand-sparkles",
        img: img7,
        imgAlt: {
            es: "Manicura profesional con acabado francés en Raquel in Tampa",
            en: "Professional French manicure at Raquel in Tampa",
        },
        pricingType: "services",
        services: [
            { es: "Manicura regular", en: "Regular Manicure", price: 30 },
            { es: "Manicura en gel", en: "Gel Manicure", price: 40 },
            { es: "Dar forma a las uñas", en: "Nail Shaping", price: 10 },
            { es: "Agregar francés", en: "Add French Finish", price: 8 },
            { es: "Manicura para niñas", en: "Kids Manicure", price: 30 },
            { es: "Capa de acrílico", en: "Acrylic Overlay", price: 40 },
            { es: "Set completo con esmalte regular", en: "Full Set with Regular Polish", price: 35 },
            { es: "Set completo con esmalte en gel", en: "Full Set with Gel Polish", price: 45 },
            { es: "Rosa y blanco", en: "Pink & White", price: 55 },
            { es: "Set completo ombré", en: "Full Set Ombré", price: 55 },
            { es: "Set completo francés", en: "Full Set French", price: 50 },
            { es: "Gel duro", en: "Hard Gel", price: 45 },
            { es: "Uñas Apres", en: "Apres Nails", price: 45 },
            { es: "Relleno con gel", en: "Gel Fill", price: 35 },
            { es: "Relleno ombré", en: "Ombré Fill", price: 40 },
            { es: "Relleno francés", en: "French Fill", price: 40 },
        ],
    },
    {
        id: 8,
        name: {
            es: "Pedicura",
            en: "Pedicure",
        },
        hasSessions: false,
        icon: "fa-solid fa-shoe-prints",
        img: img8,
        imgAlt: {
            es: "Pedicura profesional con esmalte rosado en Raquel in Tampa",
            en: "Professional pink polish pedicure at Raquel in Tampa",
        },
        pricingType: "services",
        services: [
            { es: "Pedicura estándar", en: "Standard Pedicure", price: 30 },
            { es: "Pedicura con gel", en: "Gel Pedicure", price: 40 },
            { es: "Acrílico en uñas de los pies", en: "Acrylic Toes", price: 20 },
            { es: "Retiro de gel", en: "Gel Removal", price: 7 },
            { es: "Acabado francés", en: "French Finish", price: 10 },
            { es: "Forma especial", en: "Special Shape", price: 5 },
            { es: "Largo de uñas", en: "Nail Length", price: [5, 10, 15] },
            { es: "Polvo de color", en: "Color Powder", price: 5 },
            { es: "Francés / Francés profundo", en: "French / Deep French", price: [5, 15] },
            { es: "Diseño", en: "Nail Design", price: 10 },
            { es: "Retiro de acrílico", en: "Acrylic Removal", price: 15 },
        ],
    },
    {
        id: 9,
        name: {
            es: "Depilación corporal",
            en: "Body Waxing",
        },
        hasSessions: false,
        icon: "fa-solid fa-spa",
        img: img9,
        imgAlt: {
            es: "Depilación profesional de piernas con cera en Raquel in Tampa",
            en: "Professional leg waxing at Raquel in Tampa",
        },
        pricingType: "services",
        services: [
            { es: "Axilas", en: "Underarms", price: 20 },
            { es: "Medios brazos", en: "Half Arms", price: 30 },
            { es: "Brazos completos", en: "Full Arms", price: 45 },
            { es: "Medias piernas", en: "Half Legs", price: 40 },
            { es: "Piernas completas", en: "Full Legs", price: 70 },
            { es: "Espalda completa", en: "Full Back", price: 55 },
            { es: "Línea de bikini", en: "Bikini Line", price: 35 },
        ],
    },
    {
        id: 10,
        name: {
            es: "Tratamientos faciales",
            en: "Facials",
        },
        hasSessions: false,
        icon: "fa-solid fa-leaf",
        img: img10,
        imgAlt: {
            es: "Aplicación de mascarilla facial en Raquel in Tampa",
            en: "Professional facial mask application at Raquel in Tampa",
        },
        pricingType: "services",
        services: [
            {
                es: "Limpieza facial básica",
                en: "Basic Facial Cleansing",
                price: 50,
                duration: 45,
            },
            {
                es: "Hidratación facial",
                en: "Hydrating Facial",
                price: 60,
                duration: 50,
            },
        ],
    },
];
