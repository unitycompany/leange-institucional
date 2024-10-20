import SuiteComponent from "../../components/suiteComponent1";
import SuiteComponent2 from "../../components/suiteComponent2";
import { FaUtensils, FaMusic, FaPaw } from 'react-icons/fa';

const suites = [
    {
        // id: "master-1",
        NomedaSuite: "Master 1",
        NomedaPousada: "Le Ange Serra",
        medida: "28m²",
        adultos: "Até 3 adultos",
        Description: "Descrição da suíte 1.",
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Música ao vivo' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        images: [
            '/public/suites/master-6.webp',
            '/public/suites/standart4.webp',
            '/public/suites/standart7.webp',
            '/public/suites/stardart-5.webp',
            '/public/suites/stardart-5.webp',
            
        ]
    },
    {
        // id: "master-2",
        NomedaSuite: "Master 2",
        NomedaPousada: "Le Ange Serra",
        medida: "30m²",
        adultos: "Até 4 adultos",
        Description: "Descrição da suíte 2.",
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Música ao vivo' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
            { icon: <FaMusic />, text: 'Música' },
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        images: [
            '/public/suites/master-6.webp',
            '/public/suites/standart4.webp',
            '/public/suites/standart7.webp',
            '/public/suites/stardart-5.webp',
            '/public/suites/stardart-5.webp',
        ]
    },
    {
        // id: "master-3",
        NomedaSuite: "Master 3",
        NomedaPousada: "Le Ange Serra",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "Descrição da suíte 3.",
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Música ao vivo' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        images: [
            '/public/suites/master-6.webp',
            '/public/suites/standart4.webp',
            '/public/suites/standart7.webp',
            '/public/suites/stardart-5.webp',
            '/public/suites/stardart-5.webp',
        ]
    }
];

const suites2 = [
    {
        // id: "master-1",
        NomedaSuite: "Master 1",
        NomedaPousada: "Le Ange Serra",
        medida: "28m²",
        adultos: "Até 3 adultos",
        Description: "Descrição da suíte 1.",
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Música ao vivo' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        images: [
            '/public/suites/master-6.webp',
            '/public/suites/standart4.webp',
            '/public/suites/standart7.webp',
            '/public/suites/stardart-5.webp',
            '/public/suites/stardart-5.webp',
            
        ]
    },
    {
        // id: "master-2",
        NomedaSuite: "Master 2",
        NomedaPousada: "Le Ange Serra",
        medida: "30m²",
        adultos: "Até 4 adultos",
        Description: "Descrição da suíte 2.",
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Música ao vivo' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
            { icon: <FaMusic />, text: 'Música' },
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        images: [
            '/public/suites/master-6.webp',
            '/public/suites/standart4.webp',
            '/public/suites/standart7.webp',
            '/public/suites/stardart-5.webp',
            '/public/suites/stardart-5.webp',
        ]
    },
    {
        // id: "master-3",
        NomedaSuite: "Master 3",
        NomedaPousada: "Le Ange Serra",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "Descrição da suíte 3.",
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Música ao vivo' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        images: [
            '/public/suites/master-6.webp',
            '/public/suites/standart4.webp',
            '/public/suites/standart7.webp',
            '/public/suites/stardart-5.webp',
            '/public/suites/stardart-5.webp',
        ]
    }
];


const Acomodacoes = () => {
    return (
        <>
            <SuiteComponent suites={suites} />
            <SuiteComponent2 suites={suites2} />
        </>
    )

}

export default Acomodacoes;