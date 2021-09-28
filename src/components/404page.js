//error 404 is for page not found
import React from "react";
function Error404() {
  return (
    <div className="container mt-5 flex-column">
      <h1 className="text-danger justify-content-center d-flex">404</h1>
      <h2 className="text-warning justify-content-center d-flex">
        باور کن چیزی پیدا نکردم دکمه پایینو بزن مشکل رفع شه
      </h2>
      <a
        href="/"
        className="btn btn-outline-danger d-flex justify-content-center"
      >
        کلیک کن
      </a>
    </div>
  );
}
export default Error404;