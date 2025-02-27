<template>
  <table
    class="table"
    :class="{
      'table-sm': sm,
      'table-dark': dark,
      'table-light': light,
      'table-info': info,
      'table-warning': warning,
      'table-danger': danger,
      'table-success': success,
      'table-secondary': secondary,
      'table-striped': striped,
      'table-hover': hover,
      'table-bordered': border,
      'table-borderless': border == 0,
      'table-responsive': responsive,
    }"
  >
    <input class="form-control" v-if="searchable" @change="doSearch" />
    <caption v-if="caption">
      {{
        caption
      }}
    </caption>
    <thead
      :class="{
        'table-dark': head == 'dark',
        'table-light': head == 'light',
      }"
    >
      <tr>
        <th v-for="(h, i) in headers" :key="i" scope="col">
          {{ h }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in data" :key="r.id">
        <td v-for="(h, i) in headers" :key="i">
          {{ r[i] }}
        </td>
      </tr>
    </tbody>
    <tfoot
      v-if="footer"
      :class="{
        'table-dark': footer == 'dark',
        'table-light': footer == 'light',
      }"
    >
      <tr>
        <th v-for="(h, i) in headers" :key="i" scope="col">
          {{ h }}
        </th>
      </tr>
    </tfoot>
  </table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DataTable',
  
  props: {
    id: {
      default: Math.random().toString(36).substring(2, 9),
    },
    sm: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    border: {
      type: [Boolean, String],
      default: false,
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    head: {
      type: [Boolean, String],
      default: false,
    },
    footer: {
      type: Boolean,
      default: false,
    },
    caption: {
      type: String,
      default: '',
    },
    records: {
      type: Array,
    },
    headers: {
      type: [Array, Object],
    },
    searchable: {
      type: [Boolean, String],
      default: false,
    },
  },

  emits: ['search'],
  setup(props, { emit }) {
    const data: [] = ref(props.records)

    function doSearch(e: Event) {
      const s = e.target.value

      if (props.searchable) {
        data.value = data.value.filter((r: any) => s == r[props.searchable])
      } else {
        emit('search', s)
      }
    }
  },
})
</script>
