import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup = ({ pageType = 'home', pageData = {} }) => {
    const baseSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://pousadaleange.com.br/#organization",
                "name": "Pousada Le Ange",
                "alternateName": "Le Ange Pousada Pet Friendly",
                "url": "https://pousadaleange.com.br",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",
                    "width": 600,
                    "height": 315
                },
                "description": "A pousada mais Pet Friendly do Brasil, com duas unidades localizadas em Miguel Pereira RJ e Búzios RJ",
                "telephone": "+55 21 99424-0871",
                "email": "pousadaleange@gmail.com",
                "sameAs": [
                    "https://www.instagram.com/pousadaleange/",
                    "https://www.tiktok.com/@pousadaleange",
                    "https://br.pinterest.com/pousadaleange/"
                ],
                "address": [
                    {
                        "@type": "PostalAddress",
                        "streetAddress": "Miguel Pereira",
                        "addressLocality": "Miguel Pereira",
                        "addressRegion": "RJ",
                        "addressCountry": "BR",
                        "name": "Le Ange Serra"
                    },
                    {
                        "@type": "PostalAddress",
                        "streetAddress": "Praia Rasa",
                        "addressLocality": "Armação dos Búzios",
                        "addressRegion": "RJ",
                        "addressCountry": "BR",
                        "name": "Le Ange Mar"
                    }
                ]
            },
            {
                "@type": "LodgingBusiness",
                "@id": "https://pousadaleange.com.br/#lodging",
                "name": "Pousada Le Ange",
                "description": "Pousada 100% Pet Friendly com duas unidades: Le Ange Serra em Miguel Pereira e Le Ange Mar em Búzios. Oferecemos hospedagem completa com todas as refeições incluídas.",
                "url": "https://pousadaleange.com.br",
                "telephone": "+55 21 99424-0871",
                "email": "pousadaleange@gmail.com",
                "image": [
                    "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/519c4332-73ef-4e4f-d51e-c5bb8162bc00/public",
                    "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public",
                    "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public"
                ],
                "priceRange": "$$",
                "starRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "amenityFeature": [
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Pet Friendly",
                        "value": true
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "All Inclusive",
                        "value": true
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Café da manhã incluído",
                        "value": true
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Almoço incluído",
                        "value": true
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Jantar incluído",
                        "value": true
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Wi-Fi gratuito",
                        "value": true
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Ar condicionado",
                        "value": true
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Piscina",
                        "value": true
                    }
                ],
                "petsAllowed": true,
                "checkinTime": "15:00",
                "checkoutTime": "12:00",
                "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Pix"],
                "address": [
                    {
                        "@type": "PostalAddress",
                        "streetAddress": "Miguel Pereira",
                        "addressLocality": "Miguel Pereira",
                        "addressRegion": "RJ",
                        "postalCode": "26900-000",
                        "addressCountry": "BR"
                    },
                    {
                        "@type": "PostalAddress",
                        "streetAddress": "Praia Rasa",
                        "addressLocality": "Armação dos Búzios",
                        "addressRegion": "RJ",
                        "postalCode": "28950-000",
                        "addressCountry": "BR"
                    }
                ],
                "geo": [
                    {
                        "@type": "GeoCoordinates",
                        "latitude": -22.4539,
                        "longitude": -43.4675,
                        "name": "Le Ange Serra - Miguel Pereira"
                    },
                    {
                        "@type": "GeoCoordinates",
                        "latitude": -22.7419,
                        "longitude": -41.8881,
                        "name": "Le Ange Mar - Búzios"
                    }
                ]
            },
            {
                "@type": "TouristAttraction",
                "@id": "https://pousadaleange.com.br/#attraction",
                "name": "Pousada Le Ange - Experiência Pet Friendly",
                "description": "A primeira pousada 100% Pet Friendly do Brasil, oferecendo experiências únicas para você e seu pet na serra e no mar",
                "url": "https://pousadaleange.com.br",
                "image": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",
                "touristType": [
                    "Pet Owners",
                    "Family",
                    "Couples",
                    "Nature Lovers"
                ],
                "availableLanguage": "pt-BR",
                "isAccessibleForFree": false
            },
            {
                "@type": "WebSite",
                "@id": "https://pousadaleange.com.br/#website",
                "url": "https://pousadaleange.com.br",
                "name": "Pousada Le Ange",
                "description": "Site oficial da Pousada Le Ange - A mais Pet Friendly do Brasil",
                "publisher": {
                    "@id": "https://pousadaleange.com.br/#organization"
                },
                "inLanguage": "pt-BR",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://pousadaleange.com.br/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://pousadaleange.com.br/#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Início",
                        "item": "https://pousadaleange.com.br/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Le Ange Serra",
                        "item": "https://pousadaleange.com.br/serra"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Le Ange Mar",
                        "item": "https://pousadaleange.com.br/mar"
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "Pacotes",
                        "item": "https://pousadaleange.com.br/pacotes"
                    },
                    {
                        "@type": "ListItem",
                        "position": 5,
                        "name": "Acomodações Serra",
                        "item": "https://pousadaleange.com.br/acomodaSerra"
                    },
                    {
                        "@type": "ListItem",
                        "position": 6,
                        "name": "Acomodações Mar",
                        "item": "https://pousadaleange.com.br/acomodaMar"
                    },
                    {
                        "@type": "ListItem",
                        "position": 7,
                        "name": "Eventos",
                        "item": "https://pousadaleange.com.br/event"
                    },
                    {
                        "@type": "ListItem",
                        "position": 8,
                        "name": "Sobre",
                        "item": "https://pousadaleange.com.br/sobre"
                    }
                ]
            },
            {
                "@type": "Service",
                "@id": "https://pousadaleange.com.br/#service",
                "name": "Hospedagem Pet Friendly All Inclusive",
                "description": "Serviço completo de hospedagem com todas as refeições incluídas, especialmente desenvolvido para receber você e seu pet",
                "provider": {
                    "@id": "https://pousadaleange.com.br/#organization"
                },
                "areaServed": [
                    {
                        "@type": "Place",
                        "name": "Miguel Pereira, RJ"
                    },
                    {
                        "@type": "Place",
                        "name": "Armação dos Búzios, RJ"
                    }
                ],
                "serviceType": "Hospedagem",
                "audience": {
                    "@type": "Audience",
                    "audienceType": "Pet Owners"
                }
            }
        ]
    };
    // Schemas específicos para cada tipo de página
    const pageSchemas = {
        serra: {
            "@type": "Place",
            "@id": "https://pousadaleange.com.br/serra",
            "name": "Le Ange Serra - Miguel Pereira",
            "description": "Pousada Pet Friendly localizada em Miguel Pereira, RJ, na Mata Atlântica com trilhas e cachoeiras",
            "url": "https://pousadaleange.com.br/serra",
            "image": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/519c4332-73ef-4e4f-d51e-c5bb8162bc00/public",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Miguel Pereira",
                "addressRegion": "RJ",
                "addressCountry": "BR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": -22.4539,
                "longitude": -43.4675
            }
        },
        mar: {
            "@type": "Place",
            "@id": "https://pousadaleange.com.br/mar",
            "name": "Le Ange Mar - Búzios",
            "description": "Pousada Pet Friendly localizada em Búzios, RJ, a 150 metros da Praia Rasa",
            "url": "https://pousadaleange.com.br/mar",
            "image": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Armação dos Búzios",
                "addressRegion": "RJ",
                "addressCountry": "BR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": -22.7419,
                "longitude": -41.8881
            }
        },
        event: {
            "@type": "Event",
            "@id": "https://pousadaleange.com.br/event",
            "name": "Eventos Pet Friendly - Pousada Le Ange",
            "description": "Eventos especiais e corporativos em ambiente pet friendly",
            "url": "https://pousadaleange.com.br/event",
            "image": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9c2d46b5-4488-4382-1bf4-865c6f914100/public",
            "organizer": {
                "@id": "https://pousadaleange.com.br/#organization"
            },
            "location": [
                {
                    "@type": "Place",
                    "name": "Le Ange Serra",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Miguel Pereira",
                        "addressRegion": "RJ"
                    }
                },
                {
                    "@type": "Place",
                    "name": "Le Ange Mar",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Armação dos Búzios",
                        "addressRegion": "RJ"
                    }
                }
            ]
        },
        pacotes: {
            "@type": "Product",
            "@id": "https://pousadaleange.com.br/pacotes",
            "name": "Pacotes Pet Friendly - Pousada Le Ange",
            "description": "Pacotes especiais, promoções e programações para hospedagem pet friendly",
            "url": "https://pousadaleange.com.br/pacotes",
            "image": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbca820c-502b-48cf-a6d6-8a4d4da25900/public",
            "brand": {
                "@id": "https://pousadaleange.com.br/#organization"
            },
            "offers": {
                "@type": "AggregateOffer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "BRL",
                "lowPrice": "200",
                "highPrice": "800"
            }
        },
        sobre: {
            "@type": "AboutPage",
            "@id": "https://pousadaleange.com.br/sobre",
            "name": "Sobre a Pousada Le Ange",
            "description": "História e filosofia da primeira pousada 100% Pet Friendly do Brasil",
            "url": "https://pousadaleange.com.br/sobre",
            "mainEntity": {
                "@id": "https://pousadaleange.com.br/#organization"
            }
        },
        acomodaSerra: {
            "@type": "Accommodation",
            "@id": "https://pousadaleange.com.br/acomodaSerra",
            "name": "Acomodações Le Ange Serra",
            "description": "Suítes pet friendly com lareira, banheira, varanda e todas as comodidades",
            "url": "https://pousadaleange.com.br/acomodaSerra",
            "image": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public",
            "petsAllowed": true,
            "amenityFeature": [
                "Lareira",
                "Banheira",
                "Varanda com rede",
                "Ar condicionado",
                "Smart TV",
                "Frigobar"
            ]
        },
        acomodaMar: {
            "@type": "Accommodation",
            "@id": "https://pousadaleange.com.br/acomodaMar",
            "name": "Acomodações Le Ange Mar",
            "description": "Suítes pet friendly com vista para o mar e todas as comodidades",
            "url": "https://pousadaleange.com.br/acomodaMar",
            "image": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public",
            "petsAllowed": true,
            "amenityFeature": [
                "Vista para o mar",
                "Ar condicionado",
                "Smart TV",
                "Banheira",
                "Couch lounge",
                "Bay window"
            ]
        }
    };

    // Adiciona schema específico da página se existir
    const finalSchema = { ...baseSchema };
    if (pageSchemas[pageType]) {
        finalSchema["@graph"].push(pageSchemas[pageType]);
    }

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(finalSchema)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;
