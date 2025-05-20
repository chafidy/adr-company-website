
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
    title: "Baobabs et Tsingy",
    description: "À la rencontre des paysages emblématiques de l'ouest malgache",
    longDescription: "Ce circuit exceptionnel vous emmène à la découverte des sites naturels les plus emblématiques de Madagascar. Admirez l'allée des Baobabs près de Morondava, où ces arbres millénaires créent un décor surréaliste au coucher du soleil. Explorez ensuite les impressionnants Tsingy de Bemaraha, labyrinthes de formations calcaires uniques au monde et classés au patrimoine de l'UNESCO. Une aventure parfaite pour les groupes à la recherche d'émotions fortes et de paysages à couper le souffle.",
    image: "/lovable-uploads/649e61b1-1f26-4213-a75d-61d26b12cd55.png",
    price: 2500000,
    duration: 10,
    featured: true,
    destinations: ["Antananarivo", "Morondava", "Allée des Baobabs", "Tsingy de Bemaraha", "Kirindy"],
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
    title: "Le Grand Nord sauvage",
    description: "Explorez les trésors cachés de l'extrême nord malgache",
    longDescription: "Partez à la découverte du nord sauvage de Madagascar avec ce circuit d'exception. De la montagne d'Ambre et ses forêts tropicales humides aux Tsingy Rouges et leur paysage lunaire, en passant par les magnifiques baies d'Antsiranana (Diego-Suarez), émerveillez-vous devant la diversité des paysages. L'excursion à Nosy Be et ses îles satellites vous offrira des moments de détente sur des plages idylliques aux eaux turquoise. Une aventure complète et variée, idéale pour les groupes d'amis en quête d'authenticité.",
    image: "/lovable-uploads/e92bfb39-cc9a-44ec-8ba4-6a564d270a41.png",
    price: 2800000,
    duration: 12,
    featured: false,
    destinations: ["Antananarivo", "Antsiranana", "Montagne d'Ambre", "Tsingy Rouges", "Nosy Be"],
    departureDates: ["2023-06-05", "2023-07-20", "2023-08-25", "2023-10-05"]
  },
  {
    id: "circuit-005",
    title: "Île Sainte-Marie et baleines",
    description: "Observation des baleines et détente sur l'île aux pirates",
    longDescription: "Ce séjour sur l'île Sainte-Marie (Nosy Boraha) vous plonge dans l'histoire fascinante des pirates qui y établirent leur repaire au 17ème siècle, tout en vous offrant un spectacle naturel extraordinaire. De juillet à septembre, assistez à la migration des baleines à bosse qui viennent mettre bas dans les eaux chaudes du canal de Sainte-Marie. Profitez également des magnifiques plages de sable blanc et des fonds marins exceptionnels pour la plongée. Un circuit parfait pour les familles et les groupes recherchant un équilibre entre découverte et farniente.",
    image: "/lovable-uploads/f6a4353a-95bf-46d4-8335-0d8e3d675257.png",
    price: 1900000,
    duration: 7,
    featured: true,
    destinations: ["Antananarivo", "Tamatave", "Île Sainte-Marie", "Île aux Nattes"],
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
  }
];
