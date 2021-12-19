// Oncommence par import React. Est-ce toujours nécessaire avec Webpack ?
import React from 'react';

// Le composant Gatsby va être une simple fonction qui retourne un élément HTML

// ES6 module : on peut l'exporter par défaut à la définition
export default function HomePage() {
  return (
    <>
      <p>Hey! This is the Home Page</p>
    </>
  );
}
