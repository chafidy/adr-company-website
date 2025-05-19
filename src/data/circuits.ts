
import { Circuit } from "../types";

export const circuits: Circuit[] = [
  {
    id: "circuit-001",
    title: "Découverte de Paris",
    description: "Explorez la ville lumière et ses monuments emblématiques",
    longDescription: "Paris, la capitale française, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1973&auto=format&fit=crop",
    price: 1200,
    duration: 5,
    featured: true,
    destinations: ["Paris", "Versailles", "Fontainebleau"],
    departureDates: ["2023-06-15", "2023-07-10", "2023-08-05", "2023-09-12"]
  },
  {
    id: "circuit-002",
    title: "Safari au Kenya",
    description: "Partez à l'aventure et observez la faune sauvage africaine",
    longDescription: "Le Kenya est un pays d'Afrique de l'Est avec une côte bordant l'océan Indien. Il comprend des étendues de savane, des régions montagneuses, un lac élévé, la remarquable vallée du Grand Rift et d'abondantes populations d'animaux sauvages. C'est notamment le cas des lions, des éléphants et des rhinocéros. De Nairobi, la capitale, des safaris partent en direction de la réserve nationale du Masaï Mara et des montagnes enneigées du mont Kenya s'élèvent en arrière-plan.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1471&auto=format&fit=crop",
    price: 2800,
    duration: 10,
    featured: true,
    destinations: ["Nairobi", "Masai Mara", "Amboseli"],
    departureDates: ["2023-07-05", "2023-08-15", "2023-09-20", "2023-10-25"]
  },
  {
    id: "circuit-003",
    title: "Les îles grecques",
    description: "Croisière dans les îles grecques avec leurs paysages à couper le souffle",
    longDescription: "Les îles grecques sont des parcelles de terre idylliques éparpillées à travers les mers Égée et Ionienne, où les plages de sable fin rencontrent des eaux cristallines turquoise. Chaque île a sa propre personnalité : Santorin est connue pour ses maisons blanches perchées sur des falaises volcaniques surplombant la mer, Mykonos pour sa vie nocturne animée et ses plages festives, tandis que Crète, la plus grande île, mêle histoire millénaire et paysages naturels variés.",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1374&auto=format&fit=crop",
    price: 2200,
    duration: 8,
    featured: false,
    destinations: ["Athènes", "Mykonos", "Santorin", "Crète"],
    departureDates: ["2023-06-20", "2023-07-15", "2023-08-10", "2023-09-05"]
  },
  {
    id: "circuit-004",
    title: "Aventure en Amazonie",
    description: "Immersion dans la forêt amazonienne et rencontre avec les tribus locales",
    longDescription: "L'Amazonie est la plus grande forêt tropicale du monde, traversée par le fleuve Amazone et ses affluents. Véritable sanctuaire de biodiversité, elle abrite des millions d'espèces de plantes et d'animaux exotiques. Ce circuit vous permettra d'explorer les profondeurs de la jungle, d'observer des espèces rares comme les dauphins roses, de rencontrer des communautés indigènes et de vous imprégner de leur mode de vie en harmonie avec la nature.",
    image: "https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=1374&auto=format&fit=crop",
    price: 3200,
    duration: 12,
    featured: false,
    destinations: ["Manaus", "Fleuve Amazone", "Réserve naturelle"],
    departureDates: ["2023-06-05", "2023-07-20", "2023-08-25", "2023-10-05"]
  },
  {
    id: "circuit-005",
    title: "Trésors du Japon",
    description: "Voyage entre tradition et modernité au pays du soleil levant",
    longDescription: "Le Japon est un pays insulaire situé dans l'océan Pacifique, caractérisé par des villes densément peuplées, des palais impériaux, des parcs nationaux montagneux et des milliers de temples et sanctuaires. Ce circuit vous fera découvrir les contrastes saisissants entre l'ultramodernité de Tokyo, avec ses gratte-ciels futuristes, et la tradition millénaire de Kyoto, avec ses temples bouddhistes, ses jardins zen et ses maisons de geishas.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1470&auto=format&fit=crop",
    price: 3500,
    duration: 14,
    featured: true,
    destinations: ["Tokyo", "Kyoto", "Osaka", "Mont Fuji"],
    departureDates: ["2023-06-10", "2023-07-25", "2023-09-15", "2023-10-20"]
  },
  {
    id: "circuit-006",
    title: "Splendeurs de l'Inde",
    description: "Voyage culturel au cœur du Rajasthan et ses cités colorées",
    longDescription: "L'Inde est une vaste nation d'Asie du Sud avec des paysages variés allant des sommets himalayens aux plages de Goa, en passant par le désert du Rajasthan et les jungles du Kerala. Ce circuit vous emmène dans le Rajasthan, terre des maharajas, avec ses palais somptueux, ses forts imposants, ses villages traditionnels et ses marchés animés. Vous découvrirez également des sites incontournables comme le Taj Mahal, joyau architectural et symbole de l'amour éternel.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1471&auto=format&fit=crop",
    price: 2600,
    duration: 12,
    featured: false,
    destinations: ["Delhi", "Agra", "Jaipur", "Udaipur"],
    departureDates: ["2023-07-05", "2023-08-20", "2023-10-10", "2023-11-15"]
  }
];
