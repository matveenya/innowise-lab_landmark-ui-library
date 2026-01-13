<template>
    <div class="ui-group" :class="containerClass">
      <label :for="id" class="ui-label">{{ label }}</label>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :required="required"
        class="ui-input"
        :class="{ 'ui-input_error': errorMessage }"
        :placeholder="placeholder"
      />
      <span v-if="errorMessage" class="ui-error">{{ errorMessage }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    modelValue: string;
    id: string;
    label: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    required?: boolean;
    errorMessage?: string;
    containerClass?: string;
  }
  
  withDefaults(defineProps<Props>(), {
    type: 'text',
    placeholder: '',
    required: false,
    errorMessage: '',
    containerClass: '',
  });
  
  defineEmits(['update:modelValue']);
  </script>
  
  <style scoped>
  .ui-group { margin-bottom: 1.5rem; }
  .ui-label { display: block; margin-bottom: 0.5rem; color: #4a5568; font-weight: 500; }
  .ui-input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e2e8f0;
    border-radius: 6px;
    transition: all 0.3s;
    background-color: #f7fafc;
  }
  .ui-input:focus { outline: none; border-color: #48bb78; background-color: #fff; }
  .ui-input_error { border-color: #e53e3e; background-color: #fed7d7; }
  .ui-error { color: #e53e3e; font-size: 0.875rem; margin-top: 0.25rem; }
  </style>