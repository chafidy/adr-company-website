
import { Circuit } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { formatAriary } from "@/utils/formatCurrency";

interface CircuitCardProps {
  circuit: Circuit;
  featured?: boolean;
}

const CircuitCard = ({ circuit, featured }: CircuitCardProps) => {
  return (
    <Card className={`overflow-hidden h-full flex flex-col ${featured ? 'border-secondary-brand shadow-lg' : ''}`}>
      <div className="relative h-52 overflow-hidden">
        <img
          src={circuit.image}
          alt={circuit.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {featured && (
          <Badge className="absolute top-2 right-2 bg-primary-brand">
            Populaire
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold">{circuit.title}</h3>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {circuit.duration} jours
          </div>
          <div className="font-semibold text-primary-brand">
            {formatAriary(circuit.price)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">
          {circuit.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {circuit.destinations.slice(0, 3).map((destination, index) => (
            <Badge key={index} variant="outline" className="bg-light-brand text-dark-brand">
              {destination}
            </Badge>
          ))}
          {circuit.destinations.length > 3 && (
            <Badge variant="outline" className="bg-light-brand text-dark-brand">
              +{circuit.destinations.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-primary-brand hover:bg-primary-brand/90">
          <Link to={`/circuits/${circuit.id}`}>
            Voir ce circuit
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CircuitCard;
