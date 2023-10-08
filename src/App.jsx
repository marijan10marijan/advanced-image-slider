import './App.css'
import ImageSlider from './components/ImageSlider'
import house1 from '/house1.jpg'
import house2 from '/house2.jpg'
import house3 from '/house3.jpg'
import house4 from '/house4.jpg'
import house5 from '/house5.jpg'
import house6 from '/house6.jpg'


const images = [house1, house2, house3, house4, house5, house6]

function App() {

  return (
    <div className="wrapper">
      <ImageSlider imagesUrls={images}/>
    </div>
  )
}

export default App
