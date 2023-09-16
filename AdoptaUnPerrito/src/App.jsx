import './App.css'
import Cards from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <Header titulo = "Adopta un Perrito"/>
      <div className='grid'>
        <Cards 
        cardImg = "https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg" 
        cardTitle = "Firulais"
        tagColor = "primary" 
        tagTxt = "Love" 
        cardText="Hermoso perrito que es amoroso a mas no poder"/>

        <Cards 
        cardImg = "https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg" 
        cardTitle = "Puppy" 
        tagColor = "success" 
        tagTxt = "Activo" 
        cardText="Perrito bastante jugueton que te dara mucha alegria"/>

        <Cards cardImg = "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg" 
        cardTitle = "Fabian" 
        tagColor = "danger" 
        tagTxt = "Tranquilo" 
        cardText="Un tierno perrito que es muy tranquilo"/>
      </div>

      <Footer pie = "Ven y adopta al perrito perfecto que te esta esperando"/>
      
    </>
  )
}

export default App