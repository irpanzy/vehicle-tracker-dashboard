import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const HomeSkeleton = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-16 w-96 mx-auto" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>
        <Skeleton className="h-12 w-48 mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Skeleton className="w-12 h-12 rounded-full mx-auto mb-4" />
              <Skeleton className="h-8 w-16 mx-auto mb-2" />
              <Skeleton className="h-4 w-24 mx-auto mb-2" />
              <Skeleton className="h-4 w-12 mx-auto" />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="border-0 shadow-lg h-64">
              <CardContent className="p-6 text-center">
                <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-32 mx-auto mb-2" />
                <Skeleton className="h-4 w-40 mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSkeleton;
