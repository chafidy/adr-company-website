
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import LoadingLogo from "@/components/LoadingLogo";

const ReservationsLoading = () => {
  return (
    <div className="space-y-6">
      <LoadingLogo className="mb-6 rounded-lg border" />
      
      {[1, 2, 3].map((i) => (
        <Card key={i} className="animate-pulse">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-6 w-1/4" />
              </div>
              <Skeleton className="h-4 w-1/2" />
              <div className="flex justify-between items-center mt-4">
                <Skeleton className="h-10 w-24" />
                <div className="flex space-x-2">
                  <Skeleton className="h-9 w-24" />
                  <Skeleton className="h-9 w-24" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReservationsLoading;
