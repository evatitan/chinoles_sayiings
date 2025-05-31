# Chinoles Sayings

🇪🇸 ¿Por qué hice **Chinoles**?
Cuando empezaba a aprender español, me regalaron un par de libros de refranes… y me engancharon. Como bien dice el dicho, “el saber no ocupa lugar”, así que hice este mini proyecto para compartir un poco de lo que aprendí y divertirme programando.

Y mucho ánimo con el español. 🌟

## Features

- **Search**: Instantly filter sayings by typing in the search box.
- **Level Filter**: Select a difficulty level to show only sayings of that level, or show all.
- **Expandable Examples**: Click on a saying to show/hide its example.
- **Responsive UI**: Fixed header and search bar, scrollable sayings list.

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/) (for select and input components)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/chinoles_sayiings.git
    cd chinoles_sayiings
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  components/
    LevelSelect.tsx
    Sayings.tsx
    Search.tsx
    type.ts
  App.tsx
  App.css
public/
  sayings.json
```

- **App.tsx**: Main application logic and state.
- **components/**: Reusable UI components.
- **public/sayings.json**: Data source for sayings and levels.

## Customization

- To add or edit sayings or levels, modify `public/sayings.json`.
- To adjust styles, edit `src/App.css`.

## TODO

- add unit test
- add more function like "dark mode" etc..

## License

MIT

---
Made with ❤️ for Spanish learners.