import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { NavLink, useParams } from "react-router";
import { isValidUserId } from "@/utils";
import InvalidUser from "@/components/invalid-user";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/model";
import Loading from "@/components/loading";
import ErrorMessage from "@/components/error";
import { Button } from "@/components/ui/button";

export default function UserDetau() {
  const { uid } = useParams<{ uid: string }>();

  const isValidId = isValidUserId(uid || "");

  if (!isValidId) {
    return <InvalidUser />;
  }

  const { data, isLoading, error } = useQuery<{ results: Array<User> }>({
    queryKey: ["user", uid],
    queryFn: async () => {
      const response = await fetch("https://randomuser.me/api");
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
  });

  const user = data?.results[0];

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error as Error} />;

  if (!user) {
    return <InvalidUser />;
  }

  return (
    <section className="flex justify-center items-center  min-h-dvh bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={user.picture.large} alt={user.name.first} />
            <AvatarFallback>
              {user.name.first[0]}
              {user.name.last[0]}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold text-gray-800">
            {user.name.first} {user.name.last}
          </CardTitle>
          <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded">
            {user.nat}
          </span>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <span className="block text-gray-500 text-xs">Email</span>
            <span className="text-gray-900">{user.email}</span>
          </div>
          <div>
            <span className="block text-gray-500 text-xs">Phone</span>
            <span className="text-gray-900">{user.phone}</span>
          </div>
          <div>
            <span className="block text-gray-500 text-xs">Location</span>
            <span className="text-gray-900">
              {user.location.city}, {user.location.country}
            </span>
          </div>

          <div>
            <Button variant="outline" className="w-full mt-4">
              <NavLink to="..">Back to Users List</NavLink>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
