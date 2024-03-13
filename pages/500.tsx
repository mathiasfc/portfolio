import ErrorTemplate from "@/templates/Error";

export default function Page500() {
  return <ErrorTemplate page404={false} />;
}
