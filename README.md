# vue clock

## Install

```
npm install vue-clock
```

## Example

```
<template>
  <clock :time="time"></clock>
</template>

<script>
  import Clock from 'vue-clock';
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