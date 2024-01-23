// import MainSidebar from "../../components/mainsidebar/MainSidebar";
// import FirstHeader from "../../components/header/FirstHeader";
// import MainHeading from "../../components/header/MainHeading";
// import { useFloating } from "@floating-ui/react";
// import { useState } from "react";
// import "./help.scss";
// // import { Menu } from 'antd';

// const help = () => {
//   const [isOpen, setIsOpen] = useState();

//   const { refs, floatingStyles } = useFloating({
//     open: isOpen,
//     onOpenChange: setIsOpen,
//   });
//   return (
//     <div className="main">
//       <MainSidebar />
//       <div className="body">
//         <FirstHeader></FirstHeader>
//         <MainHeading></MainHeading>
//         <button ref={refs.setReference} onClick={() => setIsOpen(true)}>
//           Button
//         </button>
//         {isOpen && (
//           <div ref={refs.setFloating} style={floatingStyles}>
//             hello world2
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default help;
