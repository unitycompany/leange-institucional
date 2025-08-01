import React, { useState } from 'react';
import ImagePopup from '../components/ImagePopup';

const ImagePopupExample = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    // URLs de exemplo de imagens
    const exampleImages = [
        'https://picsum.photos/800/600?random=1',
        'https://picsum.photos/600/800?random=2',
        'https://picsum.photos/1200/800?random=3'
    ];

    const openPopup = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedImage('');
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Exemplo de Popup de Imagem</h2>
            <p>Clique em uma das imagens abaixo para abrir o popup:</p>

            <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '20px'
            }}>
                {exampleImages.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={`Exemplo ${index + 1}`}
                        style={{
                            width: '200px',
                            height: '150px',
                            objectFit: 'cover',
                            cursor: 'pointer',
                            borderRadius: '8px',
                            transition: 'transform 0.3s ease',
                            border: '2px solid #ddd'
                        }}
                        onClick={() => openPopup(imageUrl)}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    />
                ))}
            </div>

            <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
                <p><strong>Funcionalidades do Popup:</strong></p>
                <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                    <li>Clique no X para fechar</li>
                    <li>Clique fora da imagem para fechar</li>
                    <li>Pressione ESC para fechar</li>
                    <li>Totalmente responsivo</li>
                    <li>Imagem se adapta ao tamanho da tela</li>
                </ul>
            </div>

            <ImagePopup
                show={showPopup}
                onClose={closePopup}
                imageUrl={selectedImage}
                imageAlt="Imagem ampliada"
            />
        </div>
    );
};

export default ImagePopupExample;
