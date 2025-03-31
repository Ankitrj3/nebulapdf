'use client'
import React, { useState, useEffect } from "react";
import { FileText, Wifi, WifiOff } from "lucide-react";
import NavLink from "./nav-link";

function Header() {
  const [isConnected, setIsConnected] = useState(true);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkServerConnection = async () => {
      try {
        console.log('Checking server connection...');
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/health', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
        
        if (!response.ok) {
          throw new Error(`Server returned ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Response data:', data);

        setIsConnected(true);
        setError(null);
        setLastChecked(new Date());
      } catch (error) {
        console.error('Connection error:', error);
        setIsConnected(false);
        setError(error instanceof Error ? error.message : 'Connection failed');
        setLastChecked(new Date());
      }
    };

    // Initial check
    checkServerConnection();

    // Check every minute
    const interval = setInterval(checkServerConnection, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <nav className="container flex justify-between items-center py-4 lg:px-8 px-4 mx-auto">
      <div className="flex lg:flex-1">
        <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-gray-700 hover:rotate-12 transform transition duration-300 ease-in-out" />
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <span className="font-extrabold lg:text-xl text-gray-900">NebulaPDF</span>
        </NavLink>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 text-sm">
          {isConnected ? (
            <div className="flex items-center gap-1.5 text-emerald-500">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Connected</span>
              <Wifi className="w-4 h-4" />
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-rose-500">
              <div className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="font-medium">Disconnected</span>
              <WifiOff className="w-4 h-4" />
            </div>
          )}
          <span className="text-gray-500 text-xs">
            Last checked: {formatTime(lastChecked)}
          </span>
          {error && (
            <span className="text-rose-500 text-xs">
              {error}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
