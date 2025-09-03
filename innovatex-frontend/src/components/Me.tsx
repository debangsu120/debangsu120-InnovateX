import React, { useEffect, useState } from "react";
import { authClient } from "../authClient";

const Me: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await authClient.session.get();
        if (session?.user) {
          setUser(session.user);
        }
      } catch (err) {
        console.error("Session error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, []);

  const handleLogout = async () => {
    try {
      await authClient.session.signOut();
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (loading) return <p>⏳ Loading session...</p>;

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <>
          <p>👤 Logged in as: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>❌ Not logged in</p>
      )}
    </div>
  );
};

export default Me;
