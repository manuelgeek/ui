<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Container',
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    d: {
      type: [Number, String],
    },
    dSm: {
      type: [Number, String],
    },
    dMd: {
      type: [Number, String],
    },
    dLg: {
      type: [Number, String],
    },
    m: {
      type: [Number, String],
    },
    mx: {
      type: [Number, String],
    },
    ml: {
      type: [Number, String],
    },
    mr: {
      type: [Number, String],
    },
    my: {
      type: [Number, String],
    },
    mt: {
      type: [Number, String],
    },
    mb: {
      type: [Number, String],
    },
    mn: {
      type: [Number, String],
    },
    p: {
      type: [Number, String],
    },
    px: {
      type: [Number, String],
    },
    pl: {
      type: [Number, String],
    },
    pr: {
      type: [Number, String],
    },
    py: {
      type: [Number, String],
    },
    pt: {
      type: [Number, String],
    },
    pb: {
      type: [Number, String],
    },
    pn: {
      type: [Number, String],
    },
  },

  setup(props) {
    const classes = computed(() => {
      const c: any = []
      
      if (props.fluid) {
        c.push('container-fluid')
      } else{
        c.push('container')
      }

      if (props.d) {
        c.push(`d-${props.d}`)
      }

      if (props.p) {
        c.push(`p-${props.p}`)
      }

      if (props.px) {
        c.push(`px-${props.px}`)
      }

      if (props.pl) {
        c.push(`pl-${props.pl}`)
      }

      if (props.pr) {
        c.push(`pr-${props.pr}`)
      }

      if (props.py) {
        c.push(`py-${props.py}`)
      }

      if (props.pt) {
        c.push(`pt-${props.pt}`)
      }

      if (props.pb) {
        c.push(`pb-${props.pb}`)
      }

      if (props.pn) {
        c.push(`pn-${props.pn}`)
      }

      if (props.m) {
        c.push(`m-${props.m}`)
      }

      if (props.mx) {
        c.push(`mx-${props.mx}`)
      }

      if (props.ml) {
        c.push(`ml-${props.ml}`)
      }

      if (props.mr) {
        c.push(`mr-${props.mr}`)
      }

      if (props.my) {
        c.push(`my-${props.my}`)
      }

      if (props.mt) {
        c.push(`mt-${props.mt}`)
      }

      if (props.mb) {
        c.push(`mb-${props.mb}`)
      }

      if (props.mn) {
        c.push(`mn-${props.mn}`)
      }

      return c.join(' ')
    })

    return { classes }
  },
})
</script>
