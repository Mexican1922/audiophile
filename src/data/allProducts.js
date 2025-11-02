// --- HEADPHONE IMAGES (XX99 Mark II) ---
import xx99MarkIITwoDesk from "../assets/Images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99MarkIITwoTablet from "../assets/Images/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import xx99MarkIITwoMobile from "../assets/Images/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import xx99MarkIITwoGallery1 from "../assets/Images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import xx99MarkIITwoGallery2 from "../assets/Images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import xx99MarkIITwoGallery3 from "../assets/Images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

// --- HEADPHONE IMAGES (XX99 Mark I) ---
import xx99MarkIOneDesk from "../assets/Images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx99MarkIOneTablet from "../assets/Images/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx99MarkIOneMobile from "../assets/Images/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import xx99MarkIOneGallery1 from "../assets/Images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import xx99MarkIOneGallery2 from "../assets/Images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import xx99MarkIOneGallery3 from "../assets/Images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";

// --- HEADPHONE IMAGES (XX59) ---
import xx59Desk from "../assets/Images/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import xx59Tablet from "../assets/Images/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xx59Mobile from "../assets/Images/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import xx59Gallery1 from "../assets/Images/product-xx59-headphones/desktop/image-gallery-1.jpg";
import xx59Gallery2 from "../assets/Images/product-xx59-headphones/desktop/image-gallery-2.jpg";
import xx59Gallery3 from "../assets/Images/product-xx59-headphones/desktop/image-gallery-3.jpg";

// --- SPEAKER IMAGES (ZX9) ---
import zx9SpeakerDesk from "../assets/Images/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx9SpeakerTablet from "../assets/Images/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import zx9SpeakerMobile from "../assets/Images/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import zx9SpeakerGallery1 from "../assets/Images/product-zx9-speaker/desktop/image-gallery-1.jpg";
import zx9SpeakerGallery2 from "../assets/Images/product-zx9-speaker/desktop/image-gallery-2.jpg";
import zx9SpeakerGallery3 from "../assets/Images/product-zx9-speaker/desktop/image-gallery-3.jpg";

// --- SPEAKER IMAGES (ZX7) ---
import zx7SpeakerDesk from "../assets/Images/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import zx7SpeakerTablet from "../assets/Images/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import zx7SpeakerMobile from "../assets/Images/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import zx7SpeakerGallery1 from "../assets/Images/product-zx7-speaker/desktop/image-gallery-1.jpg";
import zx7SpeakerGallery2 from "../assets/Images/product-zx7-speaker/desktop/image-gallery-2.jpg";
import zx7SpeakerGallery3 from "../assets/Images/product-zx7-speaker/desktop/image-gallery-3.jpg";

// --- EARPHONES IMAGES (YX1) ---
import yx1EarphonesDesk from "../assets/Images/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import yx1EarphonesTablet from "../assets/Images/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import yx1EarphonesMobile from "../assets/Images/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import yx1EarphonesGallery1 from "../assets/Images/product-yx1-earphones/desktop/image-gallery-1.jpg";
import yx1EarphonesGallery2 from "../assets/Images/product-yx1-earphones/desktop/image-gallery-2.jpg";
import yx1EarphonesGallery3 from "../assets/Images/product-yx1-earphones/desktop/image-gallery-3.jpg";

export const ALL_PRODUCTS = [
  // --- EXISTING HEADPHONES (ID 1, 2, 3) remain here ---
  {
    id: 1,
    slug: "xx99-mark-two",
    name: "XX99 Mark II Headphones",
    category: "headphones",
    price: 2999,
    formattedPrice: "$2,999",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    isNew: true,
    images: {
      desktop: xx99MarkIITwoDesk,
      tablet: xx99MarkIITwoTablet,
      mobile: xx99MarkIITwoMobile,
    },
    details: {
      features: [
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hourbattery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
      ],
      inTheBox: [
        { item: "Headphone Unit", quantity: 1 },
        { item: "Power Cable", quantity: 2 },
        { item: "User Manual", quantity: 1 },
        { item: "3.5mm 5m Audio Cable", quantity: 1 },
        { item: "Travel Bag ", quantity: 1 },
      ],
      gallery: [
        xx99MarkIITwoGallery1,
        xx99MarkIITwoGallery2,
        xx99MarkIITwoGallery3,
      ],
    },
  },
  {
    id: 2,
    slug: "xx99-mark-one",
    name: "XX99 Mark I Headphones",
    category: "headphones",
    price: 1750,
    formattedPrice: "$1,750",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. ",
    isNew: false,
    images: {
      desktop: xx99MarkIOneDesk,
      tablet: xx99MarkIOneTablet,
      mobile: xx99MarkIOneMobile,
    },
    details: {
      features: [
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
      ],
      inTheBox: [
        { item: "Headphone Unit", quantity: 1 },
        { item: "Replacement Earcups", quantity: 2 },
        { item: "User Manual", quantity: 1 },
        { item: "3.5mm 5m Audio Cable", quantity: 1 },
      ],
      gallery: [
        xx99MarkIOneGallery1,
        xx99MarkIOneGallery2,
        xx99MarkIOneGallery3,
      ],
    },
  },
  {
    id: 3,
    slug: "xx59",
    name: "XX59 Headphones",
    category: "headphones",
    price: 899,
    formattedPrice: "$899",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    isNew: false,
    images: {
      desktop: xx59Desk,
      tablet: xx59Tablet,
      mobile: xx59Mobile,
    },
    details: {
      features: [
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
      ],
      inTheBox: [
        { item: "Headphone Unit", quantity: 1 },
        { item: "Replacement Earcups", quantity: 2 },
        { item: "User Manual", quantity: 1 },
        { item: "3.5mm 5m Audio Cable", quantity: 1 },
      ],
      gallery: [xx59Gallery1, xx59Gallery2, xx59Gallery3],
    },
  },

  {
    id: 4,
    slug: "zx9-speaker",
    name: "ZX9 SPEAKER",
    category: "speakers",
    price: 4500,
    formattedPrice: "$4,500",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    isNew: true,
    images: {
      desktop: zx9SpeakerDesk,
      tablet: zx9SpeakerTablet,
      mobile: zx9SpeakerMobile,
    },
    details: {
      // Placeholder details
      features: [
        "The most powerful speaker system we offer, engineered for the highest fidelity audio.",
        "Equipped with built-in Wi-Fi and Bluetooth for seamless wireless streaming.",
        "Sturdy aluminum casing with acoustic dampening for minimal vibration and distortion.",
        "Includes a custom remote control and setup guide.",
      ],
      inTheBox: [
        { item: "ZX9 Speaker Unit", quantity: 2 },
        { item: "Power Cable", quantity: 2 },
        { item: "Custom Remote", quantity: 1 },
        { item: "Speaker Wire", quantity: 1 },
        { item: "User Manual", quantity: 1 },
      ],
      gallery: [zx9SpeakerGallery1, zx9SpeakerGallery2, zx9SpeakerGallery3],
    },
  },
  {
    id: 5,
    slug: "zx7-speaker",
    name: "ZX7 SPEAKER",
    category: "speakers",
    price: 3500,
    formattedPrice: "$3,500",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    isNew: false,
    images: {
      //  FIX: Corrected typo from 'ddesktop' to 'desktop'
      desktop: zx7SpeakerDesk,
      tablet: zx7SpeakerTablet,
      mobile: zx7SpeakerMobile,
    },
    details: {
      // Placeholder details
      features: [
        "Sleek, minimalist design fits into any home or studio aesthetic.",
        "Lossless wireless streaming via AirPlay 2 and Chromecast.",
        "Advanced driver array delivers a wide, accurate sound stage.",
        "Easy plug-and-play setup for instant high-fidelity audio.",
      ],
      inTheBox: [
        { item: "ZX7 Speaker Unit", quantity: 2 },
        { item: "Power Cable", quantity: 2 },
        { item: "User Manual", quantity: 1 },
      ],
      gallery: [zx7SpeakerGallery1, zx7SpeakerGallery2, zx7SpeakerGallery3],
    },
  },

  {
    id: 6,
    slug: "yx1-earphones",
    name: "YX1 WIRELESS EARPHONES",
    category: "earphones",
    price: 599,
    formattedPrice: "$599",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    isNew: true,
    images: {
      desktop: yx1EarphonesDesk,
      tablet: yx1EarphonesTablet,
      mobile: yx1EarphonesMobile,
    },
    details: {
      // Placeholder details
      features: [
        "Active Noise Cancellation (ANC) with customizable transparency mode.",
        "Ergonomic fit ensures comfort during extended use.",
        "IPX4 sweat and water resistance for fitness.",
        "Compact charging case provides an extra 18 hours of playtime.",
      ],
      inTheBox: [
        { item: "Earphone Unit", quantity: 2 },
        { item: "Charging Case", quantity: 1 },
        { item: "Silicone Ear Tips", quantity: 3 },
        { item: "USB-C Cable", quantity: 1 },
        { item: "User Manual", quantity: 1 },
      ],
      gallery: [
        yx1EarphonesGallery1,
        yx1EarphonesGallery2,
        yx1EarphonesGallery3,
      ],
    },
  },
];
