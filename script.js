window.onload = async () => {
  try {
    const res = await fetch("/.auth/me");
    const data = await res.json();
    if (data.clientPrincipal) {
      const user = data.clientPrincipal;
      document.getElementById("username").innerText = user.userDetails;
      document.getElementById("useremail").innerText = user.identityProvider + " | " + user.userId;
      document.getElementById("user-info").style.display = "block";
    }
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
};
