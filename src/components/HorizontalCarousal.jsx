import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-12 items-center justify-center mt-0 mb-0">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-12 items-center justify-center mt-0 mb-0">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

//   return (
//     <section ref={targetRef} className="relative h-[70vh] bg-neutral-900"
    
//     >
//       <div className="sticky mt-0 mb-0 flex h-screen items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-4">
//           {cards.map((card) => {
//             return <Card card={card} key={card.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  // Splitting the cards array into two parts
  const firstFiveCards = cards.slice(0, 12);
  const remainingCards = cards.slice(13);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* First div with first five cards */}
        <motion.div style={{ x }} className="flex gap-4">
          {firstFiveCards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Second div with remaining cards */}
        <motion.div style={{ x }} className="flex gap-4">
          {remainingCards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[250px] w-[450px] overflow-hidden bg-neutral-200 mt-0 mb-0" 
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },

  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 8,
  }, {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 9,
  }, {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 10,
  }, {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 11,
  }, {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 12,
  },

  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 13,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 14,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 15,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 16,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 17,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 18,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 19,
  },

  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 20,
  }, {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 21,
  }, {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 22,
  }, {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 23,
  }, {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 24,
  },
];


// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";

// const Example = () => {
//   return (
//     <div className="bg-neutral-800">
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll down
//         </span>
//       </div>
//       <HorizontalScrollCarousel />
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll up
//         </span>
//       </div>
//     </div>
//   );
// };

// // const HorizontalScrollCarousel = () => {
// //   const targetRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: targetRef,
// //   });

// //   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

// //   return (
// //     <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
// //       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
// //         <motion.div style={{ x }} className="flex gap-4">
// //           {cards.map((card) => {
// //             return <Card card={card} key={card.id} />;
// //           })}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };
// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

//   // Splitting the cards array into groups of 5
//   const cardGroups = [];
//   for (let i = 0; i < Math.ceil(cards.length / 5); i++) {
//     cardGroups.push(cards.slice(i * 5, i * 5 + 5));
//   }

//   return (
//     <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         {/* Render each group of cards in a separate row */}
//         <div style={{ x }} className="flex flex-wrap gap-4">
//           {cardGroups.map((group, index) => (
//             <div key={index} className="flex gap-4">
//               {group.map((card) => (
//                 <Card card={card} key={card.id} />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//           {card.title}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Example;

// const cards = [
//   {
//     url: "/imgs/abstract/1.jpg",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "/imgs/abstract/2.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "/imgs/abstract/3.jpg",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "/imgs/abstract/4.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "/imgs/abstract/5.jpg",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "/imgs/abstract/6.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 7,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 8,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 9,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 10,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 11,
//   },


//   {
//     url: "/imgs/abstract/1.jpg",
//     title: "Title 1",
//     id: 12,
//   },
//   {
//     url: "/imgs/abstract/2.jpg",
//     title: "Title 2",
//     id: 13,
//   },
//   {
//     url: "/imgs/abstract/3.jpg",
//     title: "Title 3",
//     id: 14,
//   },
//   {
//     url: "/imgs/abstract/4.jpg",
//     title: "Title 4",
//     id: 15,
//   },
//   {
//     url: "/imgs/abstract/5.jpg",
//     title: "Title 5",
//     id: 16,
//   },
//   {
//     url: "/imgs/abstract/6.jpg",
//     title: "Title 6",
//     id: 17,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 18,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 19,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 20,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 21,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 22,
//   },
// ];