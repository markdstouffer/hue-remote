import { rgbToXY } from './rgbToXy'

const off = 
  {
    "on": false,
    "transitiontime": 0
  }

const blue = 
  {
    "on": true,
    "xy": rgbToXY(0, 0, 255),
    "bri": 254,
    "transitiontime": 0
  }

const setToColor = (col, tran) => 
  (
    {
      "on": true,
      "xy": rgbToXY(col.r, col.g, col.b),
      "bri": 254,
      "transitiontime": tran
    }
  )

export { off, blue, setToColor }