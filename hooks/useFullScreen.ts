import { MutableRefObject, useRef } from "react"

const fullScreen = (ref: MutableRefObject<any>) => {
  const div = ref.current

  if (!div) {
    return
  }

  if (div.requestFullscreen) {
    div.requestFullscreen()
    return
  }

  if (div.webkitRequestFullscreen) {
    div.webkitRequestFullscreen()
    return
  }

  if (div.msRequestFullScreen) {
    div.msRequestFullScreen()
    return
  }

  if (div.webkitEnterFullScreen) {
    div.webkitEnterFullScreen()
    return
  }
}

const useFullScreen = () => {
  const ref = useRef(null)

  return {
    fullScreen: () => fullScreen(ref),
    ref,
  }
}

export default useFullScreen
