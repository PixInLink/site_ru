import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  // props: ['options', 'chart-data', 'data-labels'],
  props: {
    options: {
      type: Object,
      default: null
    },
    chartData: {
      type: Array,
      default: []
    },
    labels: {
      type: Array,
      default: []
    },
    type: {
      type: String,
      default: 'stay'
    }
  },
  data () {
    return {
      gradient: null
    }
  },
  mounted() {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba('+this.setColor+', 0.5)')
    this.gradient.addColorStop(0.15, 'rgba('+this.setColor+', 0.0)');
    this.gradient.addColorStop(1, 'rgba('+this.setColor+', 0)');

    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          borderColor: 'rgb('+this.setColor+')',
          pointBackgroundColor: 'white',
          borderWidth: 3,
          pointBorderColor: 'rgb('+this.setColor+')',
          backgroundColor: this.gradient,
          data: this.chartData
        }
      ]
    }, this.options)
  },
  computed: {
    setColor() {
      if (this.type === 'up') {
        return '93, 214, 98'
      } else if (this.type === 'down') {
        return '255, 114, 114'
      } else {
        return '185, 185, 185'
      }
    }
  }
}