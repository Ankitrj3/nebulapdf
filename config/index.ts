interface Config {
  apiUrl: string;
}

// Log environment variables for debugging
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);

const development: Config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
}

const production: Config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || ''
}

// Use production config if we're in production or if NEXT_PUBLIC_API_URL is set
const config: Config = (process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_API_URL) 
  ? production 
  : development;

console.log('Selected config:', config);

export default config; 