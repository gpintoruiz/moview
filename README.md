# moview

Moview is a comprehensive movie review platform designed to enhance your movie-watching experience. The platform features an interactive user interface that provides detailed information about movies, including reviews, ratings, and trailers.

![demo](https://github.com/gpintoruiz/moview/blob/main/moview.gif)

## Features
Moview offers dynamic movie carousels that showcase films under various categories such as 'Now Playing' and 'Trending'. Users can explore movies through visually appealing carousels. Each movie has its own dedicated page, where users can find a poster, title, and rating. The movie page also includes a trailer, reviews from Rotten Tomatoes, IMDb, and Metacritic, as well as a list of similar movies. The platform includes a dynamic search feature, allowing users to easily find movies using a powerful search tool.

## Technologies Used

### Frontend
- The frontend of Moview is built with React.js, which provides a component-based architecture for creating a responsive and interactive user interface.
- React Bootstrap is utilized for styling and ensuring a responsive design across devices.
- The platform consumes data from The Movie Database API, which provides movie posters, ratings, and reviews. Various plugins are integrated to enable dynamic movie searching and enhance user interaction.

### Backend
- On the backend, Node.js is employed to handle server-side logic and manage requests.
- MongoDB is used for user data management and storage.
- For secure password management, hash encoders are applied.
- Furthermore, JSON Web Tokens (JWT) are used to handle user authentication and ensure security.
