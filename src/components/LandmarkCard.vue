<template>
    <div
      class="landmark-card"
      :class="{ 'landmark-card_active': isActive }"
      @click="$emit('view-details')"
    >
      <div class="landmark-card__header">
        <h3 class="landmark-card__title">{{ name }}</h3>
        <div class="landmark-card__rating">
          <span class="landmark-card__rating-value">{{ rating.toFixed(1) }}</span>
          <span class="landmark-card__rating-star">★</span>
        </div>
      </div>
  
      <div class="landmark-card__meta">
        <span class="landmark-card__visits">{{ visits }} {{ labels.visits }}</span>
      </div>
  
      <div class="landmark-card__actions">
        <div class="landmark-card__user-rating">
          <span class="landmark-card__rating-label">{{ labels.yourRating }}:</span>
          <div class="landmark-card__stars">
            <button
              v-for="star in 5"
              :key="star"
              type="button"
              class="landmark-card__star"
              :class="{ 'landmark-card__star_active': star <= userRating }"
              @click.stop="$emit('rate', star)"
            >★</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    name: string;
    rating: number;
    visits: number;
    userRating: number;
    isActive: boolean;
    labels: {
      visits: string;
      yourRating: string;
    };
  }>();
  
  defineEmits(['view-details', 'rate']);
  </script>
  
  <style scoped>
  .landmark-card {
    background-color: #fff;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  .landmark-card:hover {
    border-color: #cbd5e0;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .landmark-card_active {
    border-color: #48bb78;
    background-color: #f0fff4;
  }
  .landmark-card__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  }
  .landmark-card__title { color: #2d3748; font-size: 1rem; font-weight: 600; }
  .landmark-card__rating {
    display: flex;
    align-items: center;
    background-color: #48bb78;
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
  .landmark-card__star {
    background: none;
    border: none;
    font-size: 1rem;
    color: #e2e8f0;
    cursor: pointer;
  }
  .landmark-card__star_active { color: #f6e05e; }
  </style>