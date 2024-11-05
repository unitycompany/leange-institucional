import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SuiteComponent from "../../components/suiteComponent1";
import SuiteComponent2 from "../../components/suiteComponent2";
import Footer from '../../components/footer';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Certifique-se de importar o CSS do Swiper
import { FaUtensils, FaMusic, FaPaw, FaShower, FaBath, FaBed, FaTv, FaFire, FaCloudSunRain } from 'react-icons/fa';



const suites = [
    {
        // id: "master-1",
        NomedaSuite: "Suíte Superior 1",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 3 adultos",
        Description: "Desfrute de uma suíte ampla de 52m² com cama King Size, ar-condicionado e lareira para momentos de aconchego. A varanda privativa oferece vista para a natureza, e o banheiro conta com banheira relaxante e aquecedor de toalhas para maior conforto.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730133147/suiteSuperior1_gpjls0.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145067/1_o5yez9.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145067/3_aiyrqa.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145067/4_ywuuuc.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145067/5_onjzk1.jpg',
        ]
    },

    {
        // id: "master-2",
        NomedaSuite: "Suíte Superior 2",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 3 adultos",
        Description: "Descubra o conforto em 52m² de pura exclusividade: cama King Size, ar-condicionado e lareira para dias de descanso perfeitos. Aproveite a varanda privativa com vista para a mata e o relaxamento de uma banheira especial no banheiro equipado com aquecedor de toalhas. Além disso, a suíte oferece conveniências como frigobar, chaleira elétrica e Smart TV com canais a cabo para uma estadia completa.",
        features: [
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/1_x3uulk.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/2_o7w1df.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/3_u2ikyj.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/4_wte9h1.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/5_olm5xn.jpg',
        ]
    },

    {
        // id: "master-3",
        NomedaSuite: "Suíte Superior 3",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 3 adultos",
        Description: "Aproveite 52m² de puro conforto com uma cama King Size e o aconchego de uma lareira. A varanda privativa revela uma vista deslumbrante para a mata, enquanto o banheiro oferece uma banheira relaxante e aquecedor de toalhas. Equipado com frigobar, chaleira elétrica e Smart TV com canais a cabo, este espaço foi projetado para momentos de tranquilidade e comodidade.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145754/1_ylximp.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145754/3_drrdp6.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145754/2_naq3yx.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145753/4_lpovtm.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145753/5_tsqexf.jpg',
        ]
    },

    {
        // id: "master-2",
        NomedaSuite: "Suíte Standard 4",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 3 adultos",
        Description: "Mergulhe no conforto de uma suíte de 52m² com cama King Size, ar-condicionado e lareira para dias de descanso. Relaxe na banheira com vista para a mata e aproveite o banheiro com chuveiro e aquecedor de toalhas. Com frigobar e Smart TV a cabo, além de uma varanda com vista compartilhada, esta acomodação combina praticidade e tranquilidade em cada detalhe.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145996/1_s9b5nq.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145996/2_hyhg8t.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145971/3_s0ig5c.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145971/4_oppeg3.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730145971/5_kb5ean.jpg',
        ]
    },

    {
        // id: "master-2",
        NomedaSuite: "Suíte Standard 5",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 4 adultos",
        Description: "Descrição da suíte 2.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146196/1_rnbhj2.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146195/2_msj4wh.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146193/4_rdcxvu.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146194/3_b8v99f.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146193/5_cwrlxp.jpg',
        ]
    },

    {
        // id: "master-2",
        id: "suite-master-6",
        NomedaSuite: "Suíte Master 6",
        NomedaPousada: "Le Ange Serra",
        medida: "77m²",
        adultos: "Até 4 adultos",
        Description: "Experimente o luxo em uma suíte de 77m² com cama King Size, ar-condicionado e uma lareira acolhedora. Descanse na chaise lounge junto à Bay Window, aproveite o frigobar e a Smart TV com canais a cabo, ou relaxe na banheira com vista para a mata. O banheiro sofisticado conta com chuveiro, aquecedor de toalhas e dupla cuba, enquanto a ampla varanda privativa é perfeita para apreciar a paisagem em total privacidade.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Chaise lounge' },
            { icon: <FaUtensils />, text: 'Bay window' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Ampla varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146446/1_ytelar.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146445/2_y07hp1.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146444/3_ennrfl.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146443/4_nmnmdm.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146443/5_zjbujo.jpg',
        ]
    },

    {
        // id: "master-2",
        NomedaSuite: "Suíte Standard 7",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 4 adultos",
        Description: "Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo. Com chuveiro e aquecedor de toalhas, além de uma varanda com vista compartilhada, esta acomodação combina charme e comodidade para sua estadia.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda NÃO privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146635/1_r9brij.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146632/2_lp3nwj.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146632/3_hahgqj.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146193/4_rdcxvu.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146631/4_hstjdq.jpg',
        ]
    },

    {
        // id: "master-2",
        NomedaSuite: "Suíte Standard 8",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 4 adultos",
        Description: "Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo. Com chuveiro e aquecedor de toalhas, além de uma varanda com vista compartilhada, esta acomodação combina charme e comodidade para sua estadia.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda NÃO privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146991/1_deflqw.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146989/3_apyt83.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146989/2_vtsru4.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146988/4_a4uhie.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146988/5_s3imtf.jpg',
        ]
    },

    {
        // id: "master-2",
        NomedaSuite: "Suíte Superior 9",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 4 adultos",
        Description: "Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo. Com chuveiro e aquecedor de toalhas, além de uma varanda com vista compartilhada, esta acomodação combina charme e comodidade para sua estadia.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730147149/1_ougeas.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730147149/2_qiphp1.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730147149/3_x7jhml.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730147146/4_ams1oh.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730147147/5_texuuu.jpg',
        ]
    },

    {
        // id: "master-2",
        NomedaSuite: "Suíte Master 10",
        NomedaPousada: "Le Ange Serra",
        medida: "77m²",
        adultos: "Até 4 adultos",
        Description: "Viva o conforto em uma suíte de 77m² equipada com cama King Size, ar-condicionado e lareira para momentos de puro relaxamento. Desfrute de um recamier, poltrona de leitura e um confortável couch lounge, ideais para descanso e lazer. A banheira relaxante oferece uma vista única para a mata, enquanto o banheiro conta com chuveiro, aquecedor de toalhas e dupla cuba. Para completar, uma ampla varanda privativa permite que você aprecie a paisagem com total exclusividade.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaFire />, text: 'Recamier e poltrona de leitura' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Couch lounge' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba para casal (dupla)' },
            { icon: <FaUtensils />, text: 'Ampla varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730147346/1_lj4tav.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730147345/2_rwd1oh.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730147344/3_hybfzc.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730147342/4_p052an.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730147342/5_aqbze0.jpg',
        ]
    },
];

const suites2 = [
    {
        // id: "master-1",
        NomedaSuite: "Suíte Superior 1",
        NomedaPousada: "Le Ange Mar",
        medida: "28m²",
        adultos: "Até 3 adultos",
        Description: "Descrição da suíte 1.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149632/1_jbfcfw.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149631/2_avh1mm.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149632/4_j3c1yo.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149634/3_kplwmw.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149633/5_bw0qou.jpg',
        ]
    },

    {
        // id: "master-2",
        NomedaSuite: "Suíte Standard 2",
        NomedaPousada: "Le Ange Mar",
        medida: "30m²",
        adultos: "Até 4 adultos",
        Description: "Descrição da suíte 2.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149728/2_uonrhf.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149729/3_ysfzuk.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149732/5_dub0pj.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149708/1_ofu5mj.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149729/4_ulr721.jpg',
        ]
    },

    {
        // id: "master-3",
        NomedaSuite: "Suíte Superior 3",
        NomedaPousada: "Le Ange Mar",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "Descrição da suíte 3.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149783/1_mkvfcp.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149785/2_ciuk0m.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149786/3_njizit.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149785/5_mjfm3k.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149786/4_d5kp62.jpg',
        ]
    },

    {
        // id: "master-3",
        NomedaSuite: "Suíte Superior 4",
        NomedaPousada: "Le Ange Mar",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "Descrição da suíte 3.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149834/1_znboil.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149834/2_edqaq4.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149836/3_srrc1g.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149837/4_k1afap.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149838/5_lxdgp4.jpg',
        ]
    },

    {
        // id: "master-3",
        NomedaSuite: "Suíte Superior 5",
        NomedaPousada: "Le Ange Mar",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "Descrição da suíte 3.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149916/1_ztjmyc.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149922/5_dkyssi.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149916/2_djdgbx.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149921/4_rg0jvi.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149917/3_hkxuyr.jpg',
        ]
    },

    {
        // id: "master-3",
        NomedaSuite: "Suíte Standard 6",
        NomedaPousada: "Le Ange Mar",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "Descrição da suíte 3.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149976/1_tywkpb.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149977/2_yvfwhn.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149982/5_b7dida.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149980/4_p22p1t.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730149978/3_zpt6tw.jpg',
        ]
    },

    {
        // id: "master-3",
        NomedaSuite: "Suíte Master 7",
        NomedaPousada: "Le Ange Mar",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "Descrição da suíte 3.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730150026/1_usupcb.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730150032/5_v3dnrs.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730150032/4_n9wkv0.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730150029/3_pjp0sr.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730150027/2_egxqmp.jpg',
        ]
    },

    {
        // id: "master-3",
        NomedaSuite: "Suíte Master 8",
        NomedaPousada: "Le Ange Mar",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "Descrição da suíte 3.",
        features: [
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaUtensils />, text: 'Frigobar' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaUtensils />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaUtensils />, text: 'Cuba única' },
            { icon: <FaUtensils />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730150383/1_pcudqj.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730150385/2_itizcf.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730150388/4_netqeh.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730150389/5_ntad9j.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1730150385/3_bzklvq.jpg',
        ]
    },
];

const Acomodacoes = () => {
    const location = useLocation();
    const swiperRef = useRef(null); // Criar uma referência para o swiper

    useEffect(() => {
        const hash = location.hash; // Pega o hash da URL

        if (hash) {
            const suiteId = hash.replace('#', ''); // Remove o hash
            const index = suites.findIndex(suite => suite.id === suiteId); // Busca o índice da suíte

            if (index !== -1 && swiperRef.current) {
                setTimeout(() => {
                    swiperRef.current.swiper.slideTo(index); // Desloca para o slide correspondente
                }, 100); // 100 ms de atraso
            }
        }
    }, [location]);

    return (
        <>
            <Swiper ref={swiperRef} /* outras props do swiper */>
                <SuiteComponent suites={suites} />
                <SuiteComponent2 suites={suites2} />
            </Swiper>
            <Footer />
        </>
    );
}

export default Acomodacoes;