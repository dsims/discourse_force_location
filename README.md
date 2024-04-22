# *Force window.location* Discourse Theme Component

**Skips internal routing for matching internal domain urls**

The path_regex setting will be applied to any internal url paths in a post and if there is a match then the link's click event will set window.location to avoid internal discourse app routing.

Example:
* url in post: `https://discourse.example.com/blog`.
* path_regex: `^blog`

Even if /blog is handled correctly by the server, sharing that link in a post would normally result in a 404 page because discourse assumes it should be handled within the app.

This [theme component](https://meta.discourse.org/c/theme-component/120) sees a matching path (starts with `blog`) and so prevents the default event to instead force the browser to navigate to the url and thus reach the /blog server.