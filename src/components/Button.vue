<template>
    <button
      type="submit"
      :disabled="disabled || loading"
      class="ui-button"
      :class="{ 'ui-button_loading': loading }"
    >
      <span class="ui-button-text">
        {{ loading ? loadingText : buttonText }}
      </span>
    </button>
  </template>
  
  <script setup lang="ts">
  interface Props {
    buttonText: string;
    loadingText?: string;
    loading?: boolean;
    disabled?: boolean;
  }
  
  withDefaults(defineProps<Props>(), {
    loadingText: 'Loading...',
    loading: false,
    disabled: false,
  });
  </script>
  
  <style scoped>
  .ui-button {
    width: 100%;
    padding: 0.75rem;
    background-color: #48bb78;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
  }
  .ui-button:hover:not(:disabled) {
    background-color: #38a169;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);
  }
  .ui-button:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
  </style>