const isDevelopment = process.env.NODE_ENV === 'development';
export const url = isDevelopment 
  ? 'http://localhost:3005/' 
  : 'https://gg-academy-backend-ddc5501470d3.herokuapp.com/';