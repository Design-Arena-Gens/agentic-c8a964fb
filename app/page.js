'use client';

import { useState } from 'react';
import styles from './page.module.css';

const horseData = [
  {
    id: 1,
    name: 'Arabian Horse',
    description: 'Known for their distinctive head shape and high tail carriage. One of the oldest horse breeds.',
    category: 'Breed',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80',
    facts: [
      'Origin: Arabian Peninsula',
      'Height: 14.1-15.1 hands',
      'Known for endurance and stamina',
      'Influenced almost every modern horse breed'
    ]
  },
  {
    id: 2,
    name: 'Thoroughbred',
    description: 'Developed for racing, these horses are known for their speed, agility, and spirit.',
    category: 'Breed',
    image: 'https://images.unsplash.com/photo-1551993005-75c4131b6bd8?w=800&q=80',
    facts: [
      'Origin: England',
      'Height: 15.2-17 hands',
      'Primarily used for racing',
      'Can reach speeds up to 44 mph'
    ]
  },
  {
    id: 3,
    name: 'Mustang',
    description: 'Wild horses of the American West, descendants of Spanish horses brought to the Americas.',
    category: 'Wild',
    image: 'https://images.unsplash.com/photo-1598974557064-59f7106c8b0f?w=800&q=80',
    facts: [
      'Free-roaming horses in the US',
      'Protected by federal law since 1971',
      'Highly adaptable and hardy',
      'Symbol of the American frontier'
    ]
  },
  {
    id: 4,
    name: 'Quarter Horse',
    description: 'The most popular breed in America, excellent for ranch work and short-distance racing.',
    category: 'Breed',
    image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&q=80',
    facts: [
      'Origin: United States',
      'Named for quarter-mile racing',
      'Excellent cattle herding abilities',
      'Calm and gentle temperament'
    ]
  },
  {
    id: 5,
    name: 'Friesian',
    description: 'Majestic black horses from the Netherlands, known for their flowing manes and graceful movement.',
    category: 'Breed',
    image: 'https://images.unsplash.com/photo-1594889194959-045f7cf197c9?w=800&q=80',
    facts: [
      'Origin: Netherlands',
      'Always black in color',
      'Baroque horse type',
      'Used in dressage and carriage driving'
    ]
  },
  {
    id: 6,
    name: 'Clydesdale',
    description: 'Large draft horses known for their strength and distinctive feathered legs.',
    category: 'Draft',
    image: 'https://images.unsplash.com/photo-1596066190600-3af9aadaaea1?w=800&q=80',
    facts: [
      'Origin: Scotland',
      'Height: 16-18 hands',
      'Weight: 1,800-2,000 lbs',
      'Famous as Budweiser mascots'
    ]
  }
];

export default function Home() {
  const [selectedHorse, setSelectedHorse] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Breed', 'Wild', 'Draft'];

  const filteredHorses = filter === 'All'
    ? horseData
    : horseData.filter(horse => horse.category === filter);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>🐴 Horse Content Browser</h1>
        <p className={styles.subtitle}>Explore magnificent horses from around the world</p>
      </header>

      <div className={styles.filterBar}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <main className={styles.main}>
        <div className={styles.grid}>
          {filteredHorses.map(horse => (
            <div
              key={horse.id}
              className={styles.card}
              onClick={() => setSelectedHorse(horse)}
            >
              <div className={styles.imageContainer}>
                <img src={horse.image} alt={horse.name} className={styles.image} />
                <div className={styles.overlay}>
                  <span className={styles.viewDetails}>View Details</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.horseName}>{horse.name}</h2>
                <p className={styles.category}>{horse.category}</p>
                <p className={styles.description}>{horse.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedHorse && (
        <div className={styles.modal} onClick={() => setSelectedHorse(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedHorse(null)}
            >
              ✕
            </button>
            <div className={styles.modalGrid}>
              <div className={styles.modalImage}>
                <img src={selectedHorse.image} alt={selectedHorse.name} />
              </div>
              <div className={styles.modalInfo}>
                <h2>{selectedHorse.name}</h2>
                <span className={styles.modalCategory}>{selectedHorse.category}</span>
                <p className={styles.modalDescription}>{selectedHorse.description}</p>
                <h3>Key Facts:</h3>
                <ul className={styles.factsList}>
                  {selectedHorse.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
