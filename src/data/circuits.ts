
import { Circuit } from "../types";

export const circuits: Circuit[] = [
  {
    id: "circuit-001",
    title: "La Route Nationale 7",
    description: "Découvrez les merveilles du sud malgache par la mythique RN7",
    longDescription: "La Route Nationale 7 est l'un des circuits les plus populaires de Madagascar. Partant d'Antananarivo, la capitale, jusqu'à Tuléar sur la côte sud-ouest, ce parcours vous fera découvrir une incroyable diversité de paysages : des hautes terres centrales aux forêts tropicales, en passant par les formations rocheuses de l'Isalo et les plages paradisiaques d'Ifaty. Ce voyage est idéal pour les familles et les groupes souhaitant s'immerger dans la culture malgache tout en profitant de sites naturels exceptionnels.",
    image: "/lovable-uploads/00d6d4c1-dc1a-41e4-9ba7-f4bf4e29a934.png",
    price: 1800000,
    duration: 8,
    featured: true,
    destinations: ["Antananarivo", "Antsirabe", "Ranomafana", "Isalo", "Tuléar", "Ifaty"],
    departureDates: ["2023-06-15", "2023-07-10", "2023-08-05", "2023-09-12"]
  },
  {
    id: "circuit-002",
    title: "Allée des Baobabs",
    description: "Admirez le spectacle majestueux des baobabs au coucher du soleil",
    longDescription: "L'Allée des Baobabs est l'un des sites naturels les plus emblématiques de Madagascar. Cette majestueuse avenue bordée de baobabs géants offre un spectacle inoubliable, particulièrement au coucher du soleil lorsque la lumière dorée illumine ces arbres millénaires. Ce circuit vous permettra de découvrir non seulement ce site exceptionnel, mais aussi les villages traditionnels environnants où vous pourrez vous immerger dans la culture sakalava. Une expérience photographique unique pour les voyageurs en quête d'images saisissantes et de rencontres authentiques.",
    image: "/lovable-uploads/649e61b1-1f26-4213-a75d-61d26b12cd55.png",
    price: 2500000,
    duration: 10,
    featured: true,
    destinations: ["Antananarivo", "Morondava", "Allée des Baobabs", "Kirindy"],
    departureDates: ["2023-07-05", "2023-08-15", "2023-09-20", "2023-10-25"]
  },
  {
    id: "circuit-003",
    title: "La côte Est luxuriante",
    description: "Entre canal des Pangalanes et forêts primaires",
    longDescription: "La côte Est de Madagascar est un véritable paradis tropical. Ce circuit vous fait découvrir le canal des Pangalanes, une voie navigable unique bordée d'une végétation luxuriante. Visitez la réserve d'Andasibe pour observer les célèbres lémuriens indri-indri, les plus grands lémuriens de Madagascar, reconnaissables à leur chant mélodieux qui résonne dans la forêt. Terminez votre séjour sur les plages paradisiaques de Sainte-Marie. Ce voyage convient parfaitement aux groupes scolaires souhaitant combiner découvertes naturelles et relaxation.",
    image: "/lovable-uploads/47ed232c-0cc8-4097-b56c-9ca1bba7dd10.png",
    price: 2200000,
    duration: 9,
    featured: false,
    destinations: ["Antananarivo", "Andasibe", "Tamatave", "Canal des Pangalanes", "Sainte-Marie"],
    departureDates: ["2023-06-20", "2023-07-15", "2023-08-10", "2023-09-05"]
  },
  {
    id: "circuit-004",
    title: "Tsingy de Bemaraha",
    description: "Explorez le labyrinthe de pierre classé au patrimoine mondial",
    longDescription: "Les Tsingy de Bemaraha constituent l'une des merveilles naturelles les plus impressionnantes de Madagascar et sont classés au patrimoine mondial de l'UNESCO. Ce circuit vous emmène à la découverte de ces formations calcaires uniques, véritables cathédrales de pierre formant un labyrinthe spectaculaire. Vous traverserez des ponts suspendus, explorerez des grottes cachées et admirerez une biodiversité exceptionnelle avec de nombreuses espèces endémiques. Une aventure parfaite pour les amateurs de randonnée et les amoureux de paysages extraordinaires, offrant des sensations fortes tout en garantissant votre sécurité grâce à nos guides expérimentés.",
    image: "/lovable-uploads/ff44c0ca-da9c-4c81-8247-ea7dcb350e8b.png",
    price: 2800000,
    duration: 12,
    featured: false,
    destinations: ["Antananarivo", "Morondava", "Bekopaka", "Tsingy de Bemaraha", "Kirindy"],
    departureDates: ["2023-06-05", "2023-07-20", "2023-08-25", "2023-10-05"]
  },
  {
    id: "circuit-005",
    title: "Rova Manjakamiadana, Palais des Reines",
    description: "Découverte de l'histoire royale et de la culture des hauts plateaux",
    longDescription: "Le circuit du Rova Manjakamiadana vous plonge dans l'histoire fascinante de la royauté malgache. Situé sur la plus haute colline d'Antananarivo, ce palais royal était autrefois la résidence des souverains merina. Malgré l'incendie de 1995, le site a été magnifiquement restauré et offre aujourd'hui un témoignage précieux du riche patrimoine culturel et architectural de Madagascar. Votre visite guidée vous permettra de découvrir les appartements royaux, la salle du trône, et d'admirer une vue panoramique exceptionnelle sur la capitale. Un voyage dans le temps idéal pour les passionnés d'histoire et les groupes scolaires souhaitant approfondir leur connaissance de la culture malgache.",
    image: "/lovable-uploads/f6a4353a-95bf-46d4-8335-0d8e3d675257.png",
    price: 1900000,
    duration: 7,
    featured: true,
    destinations: ["Antananarivo", "Ambohimanga", "Rova Manjakamiadana", "Musée d'Andafiavaratra"],
    departureDates: ["2023-06-10", "2023-07-25", "2023-08-15", "2023-09-05"]
  },
  {
    id: "circuit-006",
    title: "Sud sauvage et épineux",
    description: "Immersion dans la culture Antandroy et forêt épineuse",
    longDescription: "Le Sud de Madagascar vous réserve des paysages uniques au monde. La forêt épineuse, avec ses fameux baobabs et didiéracées, crée un décor presque extraterrestre. Découvrez Fort-Dauphin (Taolagnaro) et ses environs, entre montagnes, forêts et océan. Rencontrez le peuple Antandroy et imprégnez-vous de leur culture authentique. Ce circuit hors des sentiers battus ravira les groupes aventuriers à la recherche d'une expérience authentique et mémorable dans un environnement naturel préservé et étonnant.",
    image: "/lovable-uploads/2fd9c707-a7ee-4d2b-b74e-9a5817c9e7d1.png",
    price: 2300000,
    duration: 10,
    featured: false,
    destinations: ["Antananarivo", "Tuléar", "Andohahela", "Fort-Dauphin", "Berenty"],
    departureDates: ["2023-07-05", "2023-08-20", "2023-10-10", "2023-11-15"]
  },
  {
    id: "circuit-007",
    title: "Nosy Be, l'île aux parfums",
    description: "Paradis tropical aux plages de sable blanc et eaux cristallines",
    longDescription: "Nosy Be, surnommée 'l'île aux parfums' en raison de ses plantations d'ylang-ylang, est un véritable joyau de l'océan Indien. Ce circuit vous invite à découvrir ses plages de sable blanc bordées d'eaux turquoise, ses fonds marins exceptionnels pour la plongée, et sa végétation luxuriante. Explorez les îles voisines comme Nosy Komba, l'île aux lémuriens, ou Nosy Tanikely, réserve marine protégée. Profitez d'excursions en bateau, de randonnées dans le parc national de Lokobe et immergez-vous dans l'ambiance décontractée et chaleureuse de cette île paradisiaque. Un séjour idéal pour les amateurs de farniente et d'activités nautiques.",
    image: "/lovable-uploads/d3a18240-b01f-4e43-9900-37a370c88dc3.png",
    price: 2600000,
    duration: 8,
    featured: true,
    destinations: ["Antananarivo", "Nosy Be", "Nosy Komba", "Nosy Tanikely", "Lokobe"],
    departureDates: ["2023-06-15", "2023-07-20", "2023-08-25", "2023-09-30"]
  },
  {
    id: "circuit-008",
    title: "Sainte Marie et observation des baleines",
    description: "Une expérience unique avec les géants des mers",
    longDescription: "L'île de Sainte-Marie (Nosy Boraha) est l'un des meilleurs endroits au monde pour observer les baleines à bosse. Entre juillet et septembre, ces majestueuses créatures viennent mettre bas dans les eaux chaudes du canal de Sainte-Marie, offrant un spectacle naturel extraordinaire. Ce circuit vous permet non seulement d'approcher ces géants des mers lors d'excursions en bateau respectueuses de leur environnement, mais aussi de découvrir l'histoire fascinante des pirates qui y établirent leur repaire au 17ème siècle. Profitez également des magnifiques plages de sable blanc et des fonds marins exceptionnels pour la plongée. Une expérience inoubliable pour les amoureux de la nature.",
    image: "/lovable-uploads/61aa0737-3863-495b-992a-cfbd19be56ed.png",
    price: 2100000,
    duration: 7,
    featured: true,
    destinations: ["Antananarivo", "Tamatave", "Île Sainte-Marie", "Île aux Nattes", "Cimetière des Pirates"],
    departureDates: ["2023-07-05", "2023-07-25", "2023-08-10", "2023-08-30"]
  },
  {
    id: "circuit-009",
    title: "Parc National de l'Isalo",
    description: "Randonnées spectaculaires dans le Grand Canyon malgache",
    longDescription: "Le Parc National de l'Isalo, souvent surnommé le 'Grand Canyon malgache', est un massif ruiniforme spectaculaire composé de formations de grès sculptées par l'érosion. Ce circuit vous emmène à travers des canyons profonds, des piscines naturelles d'eau cristalline, des cascades rafraîchissantes et des paysages à couper le souffle. Vous aurez l'occasion d'observer de nombreuses espèces endémiques, dont plusieurs types de lémuriens, dans leur habitat naturel. Les randonnées guidées vous permettront de découvrir la fenêtre de l'Isalo, la piscine noire et bleue, et la cascade des nymphes, parmi d'autres merveilles naturelles. Un incontournable pour les amateurs de trekking et les photographes paysagistes.",
    image: "/lovable-uploads/92283851-ccbb-4d65-b22e-fdaebf636e2e.png",
    price: 2400000,
    duration: 9,
    featured: false,
    destinations: ["Antananarivo", "Fianarantsoa", "Ranohira", "Parc National de l'Isalo", "Tuléar"],
    departureDates: ["2023-06-10", "2023-07-15", "2023-08-20", "2023-09-25"]
  }
];
