export default function InvalidUser() {
  return (
    <section className="flex justify-center items-center min-h-dvh bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-600 mb-4">User Not Found</h2>
        <p className="text-gray-700">
          The users ID you are trying to access does not exist or is invalid.
          Please check the URL and try again.
        </p>
      </div>
    </section>
  );
}
