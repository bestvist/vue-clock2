# vue clock


## Install

```
npm install vue-clock2
```

## Example

```
<template>
  <clock :time="time"></clock>
</template>

<script>
  import Clock from 'vue-clock2';
  export default {
    components: { Clock },
    data () {
      return {
          time: '10:40'
      }
    }
  }
</script>
```

## Props

| property | description | type | default |
|-|-|-|-|
| time | time to display | String | - |