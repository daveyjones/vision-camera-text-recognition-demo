import { StyleSheet } from "react-native"
import {
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera"
import { Camera } from "react-native-vision-camera-text-recognition"

export default function App() {
  const { hasPermission, requestPermission } = useCameraPermission()
  const device = useCameraDevice("back")

  if (!hasPermission) {
    requestPermission()
  }

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={hasPermission}
      callback={(data) => console.log(data)}
    />
  )
}
