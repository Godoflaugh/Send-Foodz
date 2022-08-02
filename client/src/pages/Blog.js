import background from "../components/Images/bkrf.jpg"


const Blog = () => {
  return (

    <main>

      <div className="container" style={{ backgroundImage: `url(${background})`, color: 'Black', fontWeight: 'bold', paddingTop: '1000px', backgroundSize: 'cover' }}>

        <h1 style={{ textAlign: "center" }}>Coming Soon</h1>
      </div>


    </main>
    
  )
}

export default Blog