import React from 'react'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData'

export default function SliderComponent() {
  return (
    <div><ImageSlider slides={SliderData}></ImageSlider></div>
  )
}
