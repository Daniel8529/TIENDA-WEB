import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../ContenedorImg/ContenedorImg.css"

function contenedorimg(){

    return(
        <div className="contener-img" id="carouselExampleSlidesOnly"  data-bs-ride="carousel">
            <div className="contener-img2">

                    <div  className="carousel-item active">

                        <img   src="https://th.bing.com/th/id/R.651be099de50dfbe853128d580964320?rik=SGfNfmBHsgZYxA&riu=http%3a%2f%2fwww.radiomargherita.com%2fwp-content%2fuploads%2f2016%2f04%2fMUSICA.jpg&ehk=lwkYsBgBU0V6K8IGvaQQrCPbxKtHsFef2cE8GvRcJ64%3d&risl=&pid=ImgRaw&r=0"
                        className="d-block w-100"  alt="..."/>
                    </div>
                    
                     <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.pIbQJMyzvXWHYYJK3L4OGAHaEo?pid=ImgDet&rs=1"className="d-block w-100" alt="..."/>
                    </div>

                    <div className="carousel-item">

                        <img src="https://th.bing.com/th/id/R.508ce2acc0cbf34301ed332f9a773527?rik=8tpZB5cvy9HFWA&riu=http%3a%2f%2ftodofondos.com%2fbin%2ffondos%2f00%2f84%2f00d.jpg&ehk=qi1jrKW7FXLMiVfdavMHQ6sT%2bwUwttMzLb34SOKkhQQ%3d&risl=&pid=ImgRaw&r=0"
                         className="d-block w-100" alt="..."/>
                         
                    </div>
               
            </div>
            
      </div>
    )
}

export default contenedorimg