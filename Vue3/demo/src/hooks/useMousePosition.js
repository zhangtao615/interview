import { ref, onMounted, onUnmounted } from 'vue'
const useMousePosition = () => {
  const x = ref(0)
  const y = ref(0)
  const update = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    console.log('mousemove')
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return {
    x,
    y
  }
}

export default useMousePosition