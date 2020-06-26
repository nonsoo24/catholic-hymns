<template>
    <div class="ml-2 hymn-categories">
        <div class="mb-5"  v-for="(hymnCategory, i) in hymnCategories" :key="i">
          <input v-model="filterByCategory" type="radio" :id = hymnCategory.id :value = hymnCategory.id :name = hymnCategory.category v-on:change="category">

          <label :for= hymnCategory.id >{{hymnCategory.id}} Hymns</label>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      filterByCategory: null,
      hymnCategories: [{
          id: 'all',
          name: 'category'
        },
        {
          id: 'entrance',
          name: 'category'
        },
        {
          id: 'offertory',
          name: 'category'
        },
        {
          id: 'consecration',
          name: 'category'
        },
        {
          id: 'communion',
          name: 'category'
        },
        {
          id: 'closing',
          name: 'category'
        },
        {
          id: 'indigenous',
          name: 'category'
        }
      ]
    }
  },

  methods: {
    category(value) {
      this.$emit('update:option', value);
    }
  }
}
</script>

<style>
    .hymn-categories {
       padding: 90px 0 0 20px;
     }

     .hymn-categories label {
       padding-left: 10px;
       font-weight: 700;
       font-size: 0.9rem;
       text-transform: capitalize;

     }
</style>
