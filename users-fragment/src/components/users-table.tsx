import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { User } from "@/mode";
import { Avatar, AvatarImage } from "./ui/avatar";

const queryClient = new QueryClient();

export function Users() {
  const { data, isLoading, error } = useQuery<{
    results: Array<User>;
  }>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("https://randomuser.me/api/?results=10");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Table>
      <TableCaption>
        List of registered users with their contact information.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Avatar</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>National</TableHead>
          <TableHead>Country</TableHead>
          <TableHead className="text-right">Phone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.results.map((user, index) => (
          <TableRow key={`user-table-row-${index}`}>
            <TableCell className="font-medium">
              {
                <Avatar>
                  <AvatarImage sizes="xl" src={user.picture.thumbnail} />
                </Avatar>
              }
            </TableCell>
            <TableCell>{`${user.name.first} ${user.name.last}`}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.nat}</TableCell>
            <TableCell>{user.location.country}</TableCell>
            <TableCell className="text-right">{user.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function UsersTable() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="p-4">
        <h3 className="text-2xl font-bold mb-4">Users List</h3>
        <Users />
      </section>
    </QueryClientProvider>
  );
}
