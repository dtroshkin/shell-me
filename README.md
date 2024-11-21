# shell-me
terminal-style portfolio interface. built with react and typescript

https://github.com/user-attachments/assets/1fe5f10f-e8a4-4ca5-8c5f-035026c04b8f

### core features
- system-like command interface
- crt screen simulation
- advanced visual effects engine
- mobile responsive
- type-safe architecture

### available commands
```bash
$ help

general:
  help         - display available commands
  clear        - clear terminal output
  welcome      - show intro message

portfolio:
  about        - display profile info
  skills       - show tech stack details

visual:
  disco        - toggle disco effect
  matrix       - activate matrix mode
  glitch       - trigger glitch animation
  poweroff     - simulate shutdown
  oldscreen    - enable retro mode
  rainbow      - toggle rgb output
 ```

### tech implementation
```
core:
- react 18
- typescript 5
- custom terminal engine

architecture:
/src
  /commands      # command implementations
  /core          # terminal engine core
  /effects       # visual effect system
  /hooks         # react hooks
  /styles        # css modules
  /utils         # helper functions
```

### local setup
```bash
# install
git clone https://github.com/username/shell-me.git
cd shell-me
npm i

# run
npm run dev     # dev server
npm run build   # production build
npm run test    # run tests
```

### optimization notes
- command system uses dynamic imports
- responsive text rendering optimized for all screens
- minimal runtime overhead

### dev notes
project structure follows unix-like system patterns. all core functionality is modular and extendable. visual effects can be toggled independently.
pull requests welcome if they maintain architectural consistency.

### license
MIT
