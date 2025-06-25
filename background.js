overwolf.games.events.onGameInfoUpdated.addListener(event => {
  const info = event.gameInfo;
  if (info && info.isInGame && info.gameState === "launched") {
    // Show the in-game overlay
    overwolf.windows.obtainDeclaredWindow("in_game_overlay", win => {
      if (win.window_state_ex === "closed") {
        overwolf.windows.restore(win.window_id);
      }
    });
  }
});