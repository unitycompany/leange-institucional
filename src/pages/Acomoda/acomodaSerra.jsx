import Quarto from "../../components/quarto";
import styled from "styled-components";
import { FaRulerCombined, FaBath, FaBed, FaTv, FaFire, FaCloudSunRain } from 'react-icons/fa';
import { BiSolidFridge } from "react-icons/bi";
import { BsCupHotFill } from "react-icons/bs";
import { SiApachecouchdb } from "react-icons/si";
import { TbBrandWindows } from "react-icons/tb";
import { MdChair } from "react-icons/md";
import { MdDeck } from "react-icons/md";
import Footer from "../../components/footer";

const TituloAcomoda = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 100%;
    padding: 22vh 0 10vh 0;
    font-size: 1.7rem;
    font-family: var(--font--comfortaa);
    gap: 5px;
    font-weight: 200;

    @media (max-width: 768px){
        height: 15vh;
        padding: 20vh 0 6vh 0 ;
    }

    & > b{
        color: var(--color--green);
        font-weight: 400;
    }

`

const SuiteSup1Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344205/suiteSuperior1_gpjls0_l6yhv9.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344197/1_o5yez9_vrlet1.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344198/3_aiyrqa_btekxc.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344200/4_ywuuuc_b8t7x3.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344203/5_onjzk1_ysyao3.webp',
];

const SuiteSup1Text = [
    {
        NomedaSuite: "Suíte Superior 1",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Uma suíte de 52m², com cama King Size, ar-condicionado e lareira para momentos acolhedores. A varanda privativa oferece vista para a natureza, e o banheiro conta com banheira relaxante e aquecedor de toalhas, garantindo total conforto e sofisticação.",
    },
]

const SuiteSup2Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344820/1_x3uulk_dj8iz3.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344821/2_o7w1df_rfa8ao.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344824/3_u2ikyj_bbap70.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344826/4_wte9h1_nbgckn.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344829/5_olm5xn_up47by.webp',
];

const SuiteSup2Text = [
    {
        NomedaSuite: "Suíte Superior 2",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Desfrute de 52m² de exclusividade: cama King Size, ar-condicionado e lareira para momentos de descanso. A varanda privativa oferece vista para a mata, e o banheiro com banheira e aquecedor de toalhas garante total conforto. A suíte ainda conta com frigobar, chaleira elétrica e Smart TV com canais a cabo.",
    },
]

const SuiteSup3Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345105/1_ylximp_j7rlx6.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345099/3_drrdp6_jeadzb.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345108/2_naq3yx_r415zb.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345101/4_lpovtm_pybn3y.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345103/5_tsqexf_xy8tbc.webp',
];

const SuiteSup3Text = [
    {
        NomedaSuite: "Suíte Superior 3",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Viva 52m² de conforto, com cama King Size e a calorosa presença de uma lareira. A varanda privativa oferece vista para a mata, e o banheiro conta com banheira relaxante e aquecedor de toalhas. A suíte ainda tem frigobar, chaleira elétrica e Smart TV com canais a cabo, criando o ambiente perfeito para o descanso.",
    },
]

const SuiteStan4Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345365/1_s9b5nq_bkdxnp.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345367/2_hyhg8t_a7ameu.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345369/3_s0ig5c_vrsvhv.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345371/4_oppeg3_o41fdi.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345374/5_kb5ean_xhm0vu.webp',
];

const SuiteStan4Text = [
    {
        NomedaSuite: "Suíte Standard 4",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Desfrute de 52m² de conforto com cama King Size, ar-condicionado e lareira para momentos de descanso. Relaxe na banheira com vista para a mata, enquanto o banheiro oferece chuveiro e aquecedor de toalhas. Com frigobar, Smart TV a cabo e varanda com vista compartilhada.",
    },
]

const SuiteStan5Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345603/1_rnbhj2_kghiue.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345605/2_msj4wh_rrl3zt.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345608/3_b8v99f_aiaxqa.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345617/4_rdcxvu_sjgtje.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345621/5_cwrlxp_pjsznc.webp',
];

const SuiteStan5Text = [
    {
        NomedaSuite: "Suíte Standard 5",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Viva a experiência de 52m² de puro conforto com cama King Size, ar-condicionado e lareira para momentos acolhedores. A banheira, com vista para a mata, e o banheiro com chuveiro e aquecedor de toalhas garantem seu relaxamento.",
    },
]

const SuiteMas6Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345889/1_ytelar_a4gkq4.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345890/2_y07hp1_gxkw0f.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345893/3_ennrfl_tsrdpf.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345900/4_nmnmdm_pb6suc.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345903/5_zjbujo_ojixkc.webp',
];

const SuiteMas6Text = [
    {
        NomedaSuite: "Suíte Master 6",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "77m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <MdChair />, text: 'Chaise lounge' },
            { icon: <TbBrandWindows />, text: 'Bay window' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Ampla varanda privativa' },
        ],
        Description: "Desfrute de 77m² de luxo com cama King Size, ar-condicionado e lareira. Relaxe na chaise lounge ao lado da Bay Window, aproveite o frigobar e a Smart TV com canais a cabo, ou relaxe na banheira com vista para a mata.",
    },
]

const SuiteStan7Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146635/1_r9brij.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146632/2_lp3nwj.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146632/3_hahgqj.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146193/4_rdcxvu.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730146631/4_hstjdq.jpg',
];

const SuiteStan7Text = [
    {
        NomedaSuite: "Suíte Standard 7",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda NÃO privativa' },
        ],
        Description: "Relaxe em uma suíte de 52m², com cama King Size, ar-condicionado e lareira para total conforto. Aproveite a banheira com vista para a mata e desfrute do frigobar e Smart TV com canais a cabo. O banheiro conta com chuveiro e aquecedor de toalhas.",
    },
]

const SuiteStan8Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346391/1_deflqw_o0h5op.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346395/3_apyt83_m5wg8y.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346393/2_vtsru4_j58fi3.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346398/4_a4uhie_akrdkl.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346401/5_s3imtf_jey5us.webp',
];

const SuiteStan8Text = [
    {
        NomedaSuite: "Suíte Standard 8",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda NÃO privativa' },
        ],
        Description: "Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo.",
    },
]

const SuiteSup9Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346629/1_ougeas_aj0kkp.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346631/2_qiphp1_zbes5m.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346636/4_ams1oh_mxicwx.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346633/3_x7jhml_auko3f.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346640/5_texuuu_e0gps2.webp',
];

const SuiteSup9Text = [
    {
        NomedaSuite: "Suíte Superior 9",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Desfrute de uma suíte de 52m² com cama King Size, ar-condicionado e lareira, criando o ambiente ideal para relaxar. A banheira com vista para a mata proporciona momentos únicos, enquanto o frigobar e a Smart TV com canais a cabo garantem seu entretenimento.",
    },
]

const SuiteMas10Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347011/1_lj4tav_i26aev.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347012/2_rwd1oh_clvvnj.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347015/3_hybfzc_rsrbwj.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347018/4_p052an_rslqub.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347020/5_aqbze0_ae2782.webp',
];

const SuiteMas10Text = [
    {
        NomedaSuite: "Suíte Master 10",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "77m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: < SiApachecouchdb />, text: 'Recamier e poltrona de leitura' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <MdChair />, text: 'Couch lounge' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Ampla varanda privativa' },
        ],
        Description: "Viva o conforto em uma suíte de 77m² equipada com cama King Size, ar-condicionado e lareira para momentos de puro relaxamento. Desfrute de um recamier, poltrona de leitura e um confortável couch lounge, ideais para descanso e lazer.",
    },
]

const AcomodaSerra = () => {
    return(
        <>
            <TituloAcomoda>Acomodações da<b>Pousada Le Ange Serra</b></TituloAcomoda>

            <Quarto images={SuiteSup1Images} suites={SuiteSup1Text} reverse={true} background="#CAD76680"/>
            <Quarto images={SuiteSup2Images} suites={SuiteSup2Text} reverse={false} background="#CAD76680"/>
            <Quarto images={SuiteSup3Images} suites={SuiteSup3Text} reverse={true} background="#CAD76680"/>
            <Quarto images={SuiteStan4Images} suites={SuiteStan4Text} reverse={false} background="#CAD76680"/>
            <Quarto images={SuiteStan5Images} suites={SuiteStan5Text} reverse={true} background="#CAD76680"/>
            <Quarto images={SuiteMas6Images} suites={SuiteMas6Text} reverse={false} background="#CAD76680"/>
            <Quarto images={SuiteStan7Images} suites={SuiteStan7Text} reverse={true} background="#CAD76680"/>
            <Quarto images={SuiteStan8Images} suites={SuiteStan8Text} reverse={false} background="#CAD76680"/>
            <Quarto images={SuiteSup9Images} suites={SuiteSup9Text} reverse={true} background="#CAD76680"/>
            <Quarto images={SuiteMas10Images} suites={SuiteMas10Text} reverse={false} background="#CAD76680"/>

            <Footer />
        </>
    )
} 

export default AcomodaSerra;