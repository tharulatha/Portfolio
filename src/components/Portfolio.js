import portfolio1 from '../asset/prortfolio1.jpg';
import portfolio2 from '../asset/prortfolio2.jpg';
import portfolio3 from '../asset/portfolio3.jpg';
import portfolio4 from '../asset/portfolio4.jpg';
import portfolio5 from '../asset/portfolio5.jpg';
import portfolio6 from '../asset/portfolio6.jpg';




const Portfolio = () => {
    return (
        <section id="portfolio">
            <span className="portfolioHead">My Portfolio</span>
            <p className="portfolioPara">I take pride in playing attention to the smallest details and making sure that my work is pixel perfect.
                I am excited to bring my skills and experience to help businesses achieve their goals and create a strong oline presence.</p>
            <div className="myPortfolioImages">
                <img src={portfolio1} alt="portfolio1" className='portfolioImg' />
                <img src={portfolio2} alt="portfolio2" className='portfolioImg' />
                <img src={portfolio3} alt="portfolio3" className='portfolioImg' />
                <img src={portfolio4} alt="portfolio4" className='portfolioImg'/>
                <img src={portfolio5} alt="portfolio5" className='portfolioImg'/>
                <img src={portfolio6} alt="portfolio6" className='portfolioImg'/>
                
            </div>
            <button className='portfolioBtn'>See More</button>
      </section>
  )  
}

export default Portfolio