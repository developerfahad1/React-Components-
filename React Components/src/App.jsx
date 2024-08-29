import Button from "./Components/button"
import Card from "./Components/card"
import Footer from "./Components/footer"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <>
      {/* <h1 className="text-center bg-[#f91d1d] text-white text-5xl p-3 ">Hello Navbar!</h1> */}
      <Navbar />
      <div className="flex flex-wrap gap-4 justify-center mt-5">
      <Button title = "Men Shoes" />
      <Button title = "Baby Shoes" />
      <Button title = "Women Shoes" />
      </div>
      
<div className="mt-5 flex flex-wrap justify-center gap-4">
  <Card   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes"  />
      <Card   src="https://m.media-amazon.com/images/I/41zi-wRsJEL._SR290,290_.jpg " title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes"  />
      <Card   src="https://m.media-amazon.com/images/I/71tu0EYgjzL._AC_SL1500_.jpg" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes"  />
      <Card   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes"  />
      <Card   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes"  />
      <Card   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes"  />
      <Card   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes"  />
      <Card   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes"  />
      <Card   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes"  />
</div>
   
   <div className="text-center text-lg">
    <Footer />
   </div>
    </>
  )
}

export default App