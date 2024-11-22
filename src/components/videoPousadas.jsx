// import React, { useState } from "react";
// import styled from "styled-components";

// const VideoContainer = styled.div`
//   position: fixed;
//   top: ${({ isFullScreen }) => (isFullScreen ? "0" : "68%")};
//   left: ${({ isFullScreen }) => (isFullScreen ? "0" : "92%")};
//   width: ${({ isFullScreen }) => (isFullScreen ? "100vw" : "100px")};
//   height: ${({ isFullScreen }) => (isFullScreen ? "100vh" : "180px")};
//   background-color: ${({ isFullScreen }) =>
//     isFullScreen ? "rgba(0, 0, 0, 0.8)" : "transparent"};
//   display: ${({ isFullScreen }) => (isFullScreen ? "flex" : "block")};
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
//   transition: all 0.3s ease;

//   @media (max-width: 768px) {
//     left: ${({ isFullScreen }) => (isFullScreen ? "0" : "77%")};
//     top: ${({ isFullScreen }) => (isFullScreen ? "0" : "80%")};
//     width: ${({ isFullScreen }) => (isFullScreen ? "100vw" : "80px")};
//     height: ${({ isFullScreen }) => (isFullScreen ? "100vh" : "140px")};
//   }
// `;

// const Video = styled.video`
//   width: ${({ isFullScreen }) => (isFullScreen ? "auto" : "100%")};
//   height: ${({ isFullScreen }) => (isFullScreen ? "90%" : "100%")};
//   max-width: ${({ isFullScreen }) => (isFullScreen ? "400px" : "none")};
//   cursor: pointer;
//   border-radius: ${({ isFullScreen }) =>
//     isFullScreen ? "0" : "12px 0 12px 0"};
//   object-fit: cover;
//   transition: all 0.3s ease;

//   @media (max-width: 768px) {
//     max-width: ${({ isFullScreen }) => (isFullScreen ? "100%" : "none")};
//     height: ${({ isFullScreen }) => (isFullScreen ? "100%" : "100%")};
//     border-radius: ${({ isFullScreen }) =>
//       isFullScreen ? "0" : "10px 0 10px 0"};
//   }
// `;

// const Button = styled.button`
//   position: absolute;
//   background: ${({ isCloseButton }) => (isCloseButton ? "red" : "#25D366")};
//   color: white;
//   border: none;
//   cursor: pointer;
//   padding: 10px 20px;
//   border-radius: 5px;
//   top: ${({ isCloseButton }) => (isCloseButton ? "20px" : "auto")};
//   left: ${({ isCloseButton }) => (isCloseButton ? "20px" : "50%")};
//   transform: ${({ isCloseButton }) =>
//     isCloseButton ? "none" : "translateX(-50%)"};
//   bottom: ${({ isCloseButton }) => (isCloseButton ? "auto" : "20px")};
//   z-index: 1500;
// `;

// const VideoPlayer = ({ videoSrc = "video.mp4" }) => {
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [isClosed, setIsClosed] = useState(false);

//   const handleToggleFullScreen = () => {
//     setIsFullScreen(!isFullScreen);
//   };

//   const handleClose = () => {
//     setIsClosed(true);
//   };

//   if (isClosed) return null;

//   return (
//     <VideoContainer isFullScreen={isFullScreen}>
//       <Video
//         src={videoSrc}
//         autoPlay
//         loop
//         muted={!isFullScreen}
//         controls={isFullScreen}
//         isFullScreen={isFullScreen}
//         onClick={handleToggleFullScreen}
//       />
//       {isFullScreen && (
//         <>
//           <Button
//             isCloseButton
//             onClick={handleToggleFullScreen}
//             aria-label="Voltar"
//           >
//             Voltar
//           </Button>
//           <Button
//             onClick={() => window.open("https://wa.me/1234567890", "_blank")}
//             aria-label="WhatsApp"
//           >
//             WhatsApp
//           </Button>
//         </>
//       )}
//     </VideoContainer>
//   );
// };

// export default VideoPlayer;
