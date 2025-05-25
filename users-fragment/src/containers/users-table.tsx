import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { User } from "@/model";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import Loading from "@/components/loading";
import ErrorMessage from "@/components/error";
import { useNavigate } from "react-router";

export default function UsersTable() {
  const { data, isLoading, error } = useQuery<{ results: Array<User> }>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("https://randomuser.me/api/?results=10");
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
  });

  let navigate = useNavigate();

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error as Error} />;

  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Users List</h3>
      <Table className="min-w-full divide-y divide-gray-200">
        <TableCaption className="text-gray-500 mb-2">
          List of registered users with their contact information.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-[80px]">Avatar</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>National</TableHead>
            <TableHead>Country</TableHead>
            <TableHead className="text-right">Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.results.map((user, index) => (
            <TableRow
              key={`user-table-row-${index}`}
              className="hover:bg-gray-50 transition"
              onClick={() => navigate(`${index + 1}`)} // Navigate to user detail page
            >
              <TableCell className="font-medium">
                <Avatar className="h-10 w-10 border-2 border-gray-200 shadow-sm">
                  <AvatarImage
                    sizes="xl"
                    src={user.picture.thumbnail}
                    alt={`${user.name.first} ${user.name.last}`}
                  />
                </Avatar>
              </TableCell>
              <TableCell className="text-gray-900 font-semibold">
                {user.name.first} {user.name.last}
              </TableCell>
              <TableCell className="text-gray-700">{user.email}</TableCell>
              <TableCell>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                  {user.nat}
                </span>
              </TableCell>
              <TableCell className="text-gray-700">
                {user.location.country}
              </TableCell>
              <TableCell className="text-right text-gray-700">
                {user.phone}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
