import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SuiteComponent from "../../components/suiteComponent1";
import { Helmet } from 'react-helmet';
import SuiteComponent2 from "../../components/suiteComponent2";
import Footer from '../../components/footer';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaSink, FaRulerCombined, FaShower, FaBath, FaBed, FaTv, FaFire, FaCloudSunRain } from 'react-icons/fa';
import { BiSolidFridge } from "react-icons/bi";
import { BsCupHotFill } from "react-icons/bs";
import { SiApachecouchdb } from "react-icons/si";
import { TbBrandWindows } from "react-icons/tb";
import { MdChair } from "react-icons/md";
import { MdDeck } from "react-icons/md";

const suites = [
    {
        id: "suite-1",
        NomedaSuite: "Suíte Superior 1",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 3 adultos",
        Description: "Uma suíte de 52m², com cama King Size, ar-condicionado e lareira para momentos acolhedores. A varanda privativa oferece vista para a natureza, e o banheiro conta com banheira relaxante e aquecedor de toalhas, garantindo total conforto e sofisticação.",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344205/suiteSuperior1_gpjls0_l6yhv9.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344197/1_o5yez9_vrlet1.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344198/3_aiyrqa_btekxc.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344200/4_ywuuuc_b8t7x3.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344203/5_onjzk1_ysyao3.webp',
        ]
    },
    {
        id: "suite-2",
        NomedaSuite: "Suíte Superior 2",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 3 adultos",
        Description: "Desfrute de 52m² de exclusividade: cama King Size, ar-condicionado e lareira para momentos de descanso. A varanda privativa oferece vista para a mata, e o banheiro com banheira e aquecedor de toalhas garante total conforto. A suíte ainda conta com frigobar, chaleira elétrica e Smart TV com canais a cabo.",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344820/1_x3uulk_dj8iz3.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344821/2_o7w1df_rfa8ao.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344824/3_u2ikyj_bbap70.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344826/4_wte9h1_nbgckn.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731344829/5_olm5xn_up47by.webp',
        ]
    },
    {
        id: "suite-3",
        NomedaSuite: "Suíte Superior 3",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 3 adultos",
        Description: "Viva 52m² de conforto, com cama King Size e a calorosa presença de uma lareira. A varanda privativa oferece vista para a mata, e o banheiro conta com banheira relaxante e aquecedor de toalhas. A suíte ainda tem frigobar, chaleira elétrica e Smart TV com canais a cabo, criando o ambiente perfeito para o descanso.",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345105/1_ylximp_j7rlx6.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345099/3_drrdp6_jeadzb.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345108/2_naq3yx_r415zb.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345101/4_lpovtm_pybn3y.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345103/5_tsqexf_xy8tbc.webp',
        ]
    },
    {
        id: "suite-4",
        NomedaSuite: "Suíte Standard 4",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 3 adultos",
        Description: "Desfrute de 52m² de conforto com cama King Size, ar-condicionado e lareira para momentos de descanso. Relaxe na banheira com vista para a mata, enquanto o banheiro oferece chuveiro e aquecedor de toalhas. Com frigobar, Smart TV a cabo e varanda com vista compartilhada.",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345365/1_s9b5nq_bkdxnp.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345367/2_hyhg8t_a7ameu.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345369/3_s0ig5c_vrsvhv.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345371/4_oppeg3_o41fdi.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345374/5_kb5ean_xhm0vu.webp',
        ]
    },
    {
        id: "suite-5",
        NomedaSuite: "Suíte Standard 5",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 4 adultos",
        Description: "Viva a experiência de 52m² de puro conforto com cama King Size, ar-condicionado e lareira para momentos acolhedores. A banheira, com vista para a mata, e o banheiro com chuveiro e aquecedor de toalhas garantem seu relaxamento.",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345603/1_rnbhj2_kghiue.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345605/2_msj4wh_rrl3zt.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345608/3_b8v99f_aiaxqa.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345617/4_rdcxvu_sjgtje.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345621/5_cwrlxp_pjsznc.webp',
        ]
    },
    {
        id: "suite-6",
        NomedaSuite: "Suíte Master 6",
        NomedaPousada: "Le Ange Serra",
        medida: "77m²",
        adultos: "Até 4 adultos",
        Description: "Desfrute de 77m² de luxo com cama King Size, ar-condicionado e lareira. Relaxe na chaise lounge ao lado da Bay Window, aproveite o frigobar e a Smart TV com canais a cabo, ou relaxe na banheira com vista para a mata.",
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
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Ampla varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345889/1_ytelar_a4gkq4.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345890/2_y07hp1_gxkw0f.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345893/3_ennrfl_tsrdpf.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345900/4_nmnmdm_pb6suc.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731345903/5_zjbujo_ojixkc.webp',
        ]
    },
    {
        id: "suite-7",
        NomedaSuite: "Suíte Standard 7",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 4 adultos",
        Description: "Relaxe em uma suíte de 52m², com cama King Size, ar-condicionado e lareira para total conforto. Aproveite a banheira com vista para a mata e desfrute do frigobar e Smart TV com canais a cabo. O banheiro conta com chuveiro e aquecedor de toalhas.",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda NÃO privativa' },
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
        id: "suite-8",
        NomedaSuite: "Suíte Standard 8",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 4 adultos",
        Description: "Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo.",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda NÃO privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346391/1_deflqw_o0h5op.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346395/3_apyt83_m5wg8y.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346393/2_vtsru4_j58fi3.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346398/4_a4uhie_akrdkl.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346401/5_s3imtf_jey5us.webp',
        ]
    },
    {
        id: "suite-9",
        NomedaSuite: "Suíte Superior 9",
        NomedaPousada: "Le Ange Serra",
        medida: "52m²",
        adultos: "Até 4 adultos",
        Description: "Desfrute de uma suíte de 52m² com cama King Size, ar-condicionado e lareira, criando o ambiente ideal para relaxar. A banheira com vista para a mata proporciona momentos únicos, enquanto o frigobar e a Smart TV com canais a cabo garantem seu entretenimento.",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346629/1_ougeas_aj0kkp.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346631/2_qiphp1_zbes5m.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346636/4_ams1oh_mxicwx.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346633/3_x7jhml_auko3f.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731346640/5_texuuu_e0gps2.webp',
        ]
    },
    {
        id: "suite-10",
        NomedaSuite: "Suíte Master 10",
        NomedaPousada: "Le Ange Serra",
        medida: "77m²",
        adultos: "Até 4 adultos",
        Description: "Viva o conforto em uma suíte de 77m² equipada com cama King Size, ar-condicionado e lareira para momentos de puro relaxamento. Desfrute de um recamier, poltrona de leitura e um confortável couch lounge, ideais para descanso e lazer.",
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
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba para casal' },
            { icon: <MdDeck />, text: 'Ampla varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347011/1_lj4tav_i26aev.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347012/2_rwd1oh_clvvnj.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347015/3_hybfzc_rsrbwj.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347018/4_p052an_rslqub.webp',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347020/5_aqbze0_ae2782.webp',
        ]
    },
];

const suites2 = [
    {
        id: "suite2-1",
        NomedaSuite: "Suíte Superior 1",
        NomedaPousada: "Le Ange Mar",
        medida: "28m²",
        adultos: "Até 3 adultos",
        Description: "A Suíte Superior 1 no Le Ange Mar oferece 28m² de conforto e sofisticação para até 3 adultos. Com uma cama King Size, a suíte garante uma estadia relaxante com ar-condicionado, lareira e frigobar. Desfrute de momentos de bem-estar na banheira relaxante ou no chuveiro.",
        features: [
            { icon: <FaRulerCombined />, text: "28m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347671/1_jbfcfw-compressed_fowhdw.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347679/2_avh1mm-compressed_jmpbxs.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347674/5_bw0qou-compressed_au8uhx.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347677/4_j3c1yo-compressed_fmuvak.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731347669/3_kplwmw-compressed_ctw3wb.jpg',
        ]
    },
    {
        id: "suite2-2",
        NomedaSuite: "Suíte Standard 2",
        NomedaPousada: "Le Ange Mar",
        medida: "30m²",
        adultos: "Até 4 adultos",
        Description: "A Suíte Standard 2 no Le Ange Mar oferece 30m² de conforto e tranquilidade, ideal para até 4 adultos. Com cama King Size, ar-condicionado e lareira, é o ambiente perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV para seu entretenimento.",
        features: [
            { icon: <FaRulerCombined />, text: "30m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731348252/2_uonrhf-compressed_vtj5ay.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731348249/3_ysfzuk-compressed_drqyfp.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731348244/5_dub0pj-compressed_nycmvi.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731348255/1_ofu5mj-compressed_ele8hy.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731348246/4_ulr721-compressed_njwzhs.jpg',
        ]
    },
    {
        id: "suite2-3",
        NomedaSuite: "Suíte Superior 3",
        NomedaPousada: "Le Ange Mar",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "A Suíte Superior 3 no Le Ange Mar oferece 32m² de sofisticação e conforto, ideal para até 2 adultos. A cama King Size, ar-condicionado e lareira criam um ambiente acolhedor, enquanto o frigobar, chaleira elétrica e Smart TV.",
        features: [
            { icon: <FaRulerCombined />, text: "32m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731348602/1_mkvfcp-compressed_gr43kj.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731348599/2_ciuk0m-compressed_cehbai.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731348597/3_njizit-compressed_na7v2c.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731348592/5_mjfm3k-compressed_tfneqy.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731348594/4_d5kp62-compressed_lcocv8.jpg',
        ]
    },
    {
        id: "suite2-4",
        NomedaSuite: "Suíte Superior 4",
        NomedaPousada: "Le Ange Mar",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "A Suíte Superior 4 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV.",
        features: [
            { icon: <FaRulerCombined />, text: "32m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731349318/1_znboil-compressed_yri6qq.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731349281/3_srrc1g-compressed_sxde4s.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731349273/5_lxdgp4-compressed_qaobnt.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731349314/2_edqaq4-compressed_hggyrj.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731349275/4_k1afap-compressed_do1fjk.jpg',
        ]
    },
    {
        id: "suite2-5",
        NomedaSuite: "Suíte Superior 5",
        NomedaPousada: "Le Ange Mar",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "A Suíte Superior 5 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV.",
        features: [
            { icon: <FaRulerCombined />, text: "32m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731349664/1_ztjmyc-compressed_qvus4l.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731349653/5_dkyssi-compressed_prm4wc.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731349655/4_rg0jvi-compressed_pknmhg.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731349661/2_djdgbx-compressed_zscwrg.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731349658/3_hkxuyr-compressed_fpwsiy.jpg',
        ]
    },
    {
        id: "suite2-6",
        NomedaSuite: "Suíte Superior 6",
        NomedaPousada: "Le Ange Mar",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "A Suíte Superior 6 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV.",
        features: [
            { icon: <FaRulerCombined />, text: "32m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350736/1_usupcb-compressed_z7nnww.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/5_v3dnrs-compressed_svhspj.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/4_n9wkv0-compressed_qqq4nw.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350720/2_egxqmp-compressed_hnybrg.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/3_pjp0sr-compressed_hnudyo.jpg',
        ]
    },
    {
        id: "suite2-7",
        NomedaSuite: "Suíte Master 7",
        NomedaPousada: "Le Ange Mar",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "A Suíte Master 7 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV.",
        features: [
            { icon: <FaRulerCombined />, text: "32m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350736/1_usupcb-compressed_z7nnww.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/5_v3dnrs-compressed_svhspj.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/4_n9wkv0-compressed_qqq4nw.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350720/2_egxqmp-compressed_hnybrg.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/3_pjp0sr-compressed_hnudyo.jpg',
        ]
    },
    {
        id: "suite2-8",
        NomedaSuite: "Suíte Master 8",
        NomedaPousada: "Le Ange Mar",
        medida: "32m²",
        adultos: "Até 2 adultos",
        Description: "A Suíte Master 8 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV.",
        features: [
            { icon: <FaRulerCombined />, text: "32m²" },
            { icon: <FaCloudSunRain />, text: 'Ar condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Chaleira elétrica' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaShower />, text: 'Chuveiro' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <FaSink />, text: 'Cuba única' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        images: [
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350404/1_pcudqj-compressed_sbpmpu.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350402/2-compressed_rudncg.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350399/3-compressed_tjw0xv.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350396/4-compressed_x5k7tn.jpg',
            'https://res.cloudinary.com/dupg7clzc/image/upload/v1731350394/5-compressed_rxetai.jpg',
        ]
    },
];

const Acomodacoes = () => {
    const location = useLocation();
    const swiperRef = useRef(null); 

    useEffect(() => {
        const hash = location.hash;
        console.log("Hash da URL:", hash); 

        if (hash) {
            const suiteId = hash.replace('#', '');
            const index = suites.findIndex(suite => suite.id === suiteId); 

            console.log("Índice da suíte:", index); 

            if (index !== -1 && swiperRef.current) {
                console.log("swiperRef:", swiperRef.current); 

                setTimeout(() => {
                    console.log("Swiper HTML:", swiperRef.current.outerHTML); 
                    console.log("Número de slides:", swiperRef.current.swiper.slides.length); 

                    if (swiperRef.current) {
                        console.log("Swiper está inicializado.");
                        console.log("Métodos disponíveis no Swiper:", Object.keys(swiperRef.current.swiper)); 

                        try {
                            swiperRef.current.swiper.update();
                            swiperRef.current.swiper.slideTo(index); 
                            console.log("Deslocando para o slide:", index); 
                        } catch (error) {
                            console.error("Erro ao tentar deslizar:", error); 
                        }
                    } else {
                        console.warn("Swiper não encontrado.");
                    }
                }, 500);
            } else {
                console.warn("Índice da suíte inválido ou Swiper não inicializado."); 
            }
        }
    }, [location]);

    return (
        <>
            <Helmet>
                <title>Acomodações - Pousada Le Ange</title>
                <link rel="icon" href="https://res.cloudinary.com/dupg7clzc/image/upload/v1731429751/6_lvujcp.svg" />
            </Helmet>

            <WhatsAppButton />

            <Swiper ref={swiperRef}>
                <SuiteComponent suites={suites} />
                <SuiteComponent2 suites={suites2} />
            </Swiper>
            <Footer />
        </>
    );
}

export default Acomodacoes;