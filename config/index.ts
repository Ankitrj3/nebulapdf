interface Config {
  apiUrl: string;
}

const development: Config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
}

const production: Config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://nebulapdf-backend.onrender.com'
}

const config: Config = process.env.NODE_ENV === 'production' ? production : development;

export default config; 