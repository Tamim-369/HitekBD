import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      alert("Token is missing");
      return;
    }

    const verify = async () => {
      try {
        const response = await fetch(`/api/users/verify/${token}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Verification failed");
        }

        alert("Verified successfully");
        navigate("/signin");
      } catch (error) {
        console.error("Error verifying token:", error);
        alert("Verification failed. Please try again.");
      }
    };

    verify();
  }, [token, navigate]);

  return null; // You can return null or a loading spinner while verifying
};

export default Confirm;
