import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonProduct() {
  return (
    <Card className="transition-shadow hover:shadow-xl border border-gray-200 rounded-xl bg-white">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 text-2xl shadow-sm">
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
        <CardTitle className="text-lg font-bold text-gray-800">
          <Skeleton className="h-4 w-[100px]" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 px-4 pb-8">
        <p className="text-gray-700">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </p>
        <div className="flex flex-wrap gap-2 text-sm my-8">
          <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded">
            <Skeleton className="h-4 w-[150px]" />
          </span>
          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded">
            <Skeleton className="h-4 w-[150px]" />
          </span>
          <span className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded">
            <Skeleton className="h-4 w-[150px]" />
          </span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Skeleton className="h-4 w-[50px]" />
          <span className="font-bold text-lg text-blue-700">
            <Skeleton className="h-4 w-[50px]" />
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
