import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.8.0", (api) => {
  api.decorateCookedElement(
    (element) => {
      const selector = window.location.hostname;
      element
        .querySelectorAll(
          "a[href^='http://" +
            selector +
            "'], a[href^='https://" +
            selector +
            "']"
        )
        .forEach((link) => {
          const url = link.getAttribute("href");
          const linkPath = url.split("/").slice(3).join("/");
          const found = settings.path_regex.split("|").find((r) => {
            let regex = new RegExp(r);
            return regex.exec(linkPath) !== null;
          });
          if (found) {
            link.addEventListener("click", (event) => {
              event.preventDefault();
              window.location = event.target.href;
            });
          }
        });
    },
    { id: "force-location" }
  );
});
