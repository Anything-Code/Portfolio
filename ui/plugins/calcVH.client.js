const calcVH = () => {
  const VH = window.innerHeight
  document.documentElement.style.setProperty('--vh', `${VH}px`)
}

calcVH()
window.addEventListener('resize', () => calcVH())