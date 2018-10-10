<template>
  <div>
    <div class="watch">
      <div class="watch-clock"></div>
      <div class="clock-hour" :style="{transform:hourRotate}"></div>
      <div class="clock-minute" :style="{transform:minuteRotate}"></div>

      <b class="hour"><span>12</span></b>
      <b class="hour"><span>1</span></b>
      <b class="hour"><span>2</span></b>
      <b class="hour"><span>3</span></b>
      <b class="hour"><span>4</span></b>
      <b class="hour"><span>5</span></b>
      <b class="hour"><span>6</span></b>
      <b class="hour"><span>7</span></b>
      <b class="hour"><span>8</span></b>
      <b class="hour"><span>9</span></b>
      <b class="hour"><span>10</span></b>
      <b class="hour"><span>11</span></b>
    </div>
    <p>{{time}}&nbsp;h</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hourRotate: 'rotatez(0deg)',
        minuteRotate: 'rotatez(0deg)'
      }
    },
    props: ['time'],
    watch: {
      time() {
        this.showTime();
      }
    },
    methods: {
      showTime() {
        let hour = this.time.split(":")[0];
        hour = hour > 11 ? (hour - 12) : hour;
        let minute = this.time.split(":")[1];
        let hourAngle = hour * 30 + (minute * 6 / 360 * 30);
        let minuteAngle = minute * 6;
        this.hourRotate = `rotatez(${hourAngle}deg)`;
        this.minuteRotate = `rotatez(${minuteAngle}deg)`;
      }
    },
    mounted() {
      this.showTime();
    }
  }
</script>

<style lang="scss" scoped>
  $angle: 30deg;

  .watch {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 10px auto;
    border: 2px solid;
    border-radius: 100%;
    text-align: center;

    .hour {
      position: absolute;
      top: 0px;
      left: 50%;
      display: block;
      width: 20px;
      height: 50%;
      margin-left: -10px;
      font-weight: 400;
      transform-origin: bottom;
      span {
        display: block;
      }
    }

    .hour:nth-of-type(2) {
      transform: rotatez($angle);
      span {
        transform: rotatez(-$angle);
      }
    }
    .hour:nth-of-type(3) {
      transform: rotatez($angle*2);
      span {
        transform: rotatez(-$angle*2);
      }
    }
    .hour:nth-of-type(4) {
      transform: rotatez($angle*3);
      span {
        transform: rotatez(-$angle*3);
      }
    }
    .hour:nth-of-type(5) {
      transform: rotatez($angle*4);
      span {
        transform: rotatez(-$angle*4);
      }
    }
    .hour:nth-of-type(6) {
      transform: rotatez($angle*5);
      span {
        transform: rotatez(-$angle*5);
      }
    }
    .hour:nth-of-type(7) {
      transform: rotatez($angle*6);
      span {
        transform: rotatez(-$angle*6);
      }
    }
    .hour:nth-of-type(8) {
      transform: rotatez($angle*7);
      span {
        transform: rotatez(-$angle*7);
      }
    }
    .hour:nth-of-type(9) {
      transform: rotatez($angle*8);
      span {
        transform: rotatez(-$angle*8);
      }
    }
    .hour:nth-of-type(10) {
      transform: rotatez($angle*9);
      span {
        transform: rotatez(-$angle*9);
      }
    }
    .hour:nth-of-type(11) {
      transform: rotatez($angle*10);
      span {
        transform: rotatez(-$angle*10);
      }
    }
    .hour:nth-of-type(12) {
      transform: rotatez($angle*11);
      span {
        transform: rotatez(-$angle*11);
      }
    }

    .watch-clock {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin-left: -8px;
      margin-top: -8px;
      border: 3px solid #666666;
      border-radius: 100%;
      background: #ffffff;
      z-index: 1;

      &:before {
        display: block;
        content: '';
        width: 4px;
        height: 4px;
        margin-top: 3px;
        margin-left: 3px;
        border-radius: 100%;
        background: #666666;
      }
    }

    .clock-hour, .clock-minute {
      position: absolute;
      top: 15%;
      left: 50%;
      display: block;
      width: 2px;
      height: 35%;
      margin-left: -1px;
      border-radius: 5px;
      transform-origin: bottom;
      background: #666666;
    }

    .clock-hour {
      top: 30%;
      width: 4px;
      height: 20%;
      margin-left: -2px;
    }

  }
</style>
