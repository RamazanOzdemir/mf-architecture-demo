export type ErrorMessageProps = {
  error: Error;
};

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <section className="text-red-600 bg-red-50 p-4 rounded-md">
      Error: {error.message}
    </section>
  );
}
