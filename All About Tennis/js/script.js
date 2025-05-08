function showAchievements(player) {
  const achievements = {
    player1: `
      <h3>Player 1 Achievements</h3>
      <ul>
        <li>20 Grand Slam singles titles</li>
        <li>Olympic Gold Medalist</li>
        <li>Numerous ATP titles</li>
      </ul>
    `,
    player2: `
      <h3>Player 2 Achievements</h3>
      <ul>
        <li>18 Grand Slam singles titles</li>
        <li>World No. 1 for 300+ weeks</li>
        <li>2 Olympic Gold Medals</li>
      </ul>
    `,
    player3: `
      <h3>Player 3 Achievements</h3>
      <ul>
        <li>15 Grand Slam singles titles</li>
        <li>First to win all Grand Slams</li>
        <li>Multiple ATP Masters titles</li>
      </ul>
    `
  };

  document.getElementById("playerAchievements").innerHTML = achievements[player];
}

function showAchievements(player) {
  const playerAchievements = document.getElementById(player);
  if (playerAchievements.style.display === "none" || playerAchievements.style.display === "") {
    playerAchievements.style.display = "block";  // Show the achievements
  } else {
    playerAchievements.style.display = "none";  // Hide the achievements if already visible
  }
}
