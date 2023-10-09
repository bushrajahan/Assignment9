import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex justify-center items-center">
      <h1>Oops!</h1>
      <h1>404!! NOT Found</h1>
      <p>
        <i>{error.statusText || error.message}</i>
        
      </p>
    </div>
  );
}