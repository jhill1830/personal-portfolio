import './index.scss';
import Loader from 'react-loaders'

const Projects = () => {
    return (
        <>
            <div className='container projects-page'>
                <div className='projects-grid'>
                    <a className='tile' href='#'>1</a>
                    <a className='tile' href='#'>2</a>
                    <a className='tile' href='#'>3</a>
                    <a className='tile' href='#'>4</a>
                    <a className='tile' href='#'>5</a>
                    <a className='tile' href='#'>6</a>
                    <a className='tile' href='#'>7</a>
                    
                </div>
            </div>
            <Loader type="line-scale" active/>
        </>
    )
}

export default Projects