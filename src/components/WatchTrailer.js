import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {trailers} from '../action/index';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import close from '../assets/close.svg'

const Watch = (props) => {
  const {movieid,trailer} = props
  const [modalOpen,setModalOpen] = useState(false)
  
  useEffect(() => {
    props.trailers(movieid)
    //eslint-disable-next-line
  },[movieid])

  console.log(modalOpen)
  const movieTrailer = (trailer && trailer.map(el => el.key))
  console.log(movieTrailer[0])

  return (
    
    <div>
      <button onClick={() => setModalOpen(!modalOpen)} className="watch-trailer">
        Watch Trailer
      </button>
      {/* </a> */}
      <Modal
      isOpen={modalOpen}
      className="Modal"
      overlayClassName="Overlay">
        <div className="close-modal">
          <button className="close-modal-btn" onClick={() => setModalOpen(!modalOpen)}>
            <img src={close} alt=""/>
          </button>
        </div>
        <div className="video-modal">
        <YouTube 
          videoId={`${movieTrailer[Math.floor(Math.random() * movieTrailer.length)]}`}
          opts={playerStyle}
        />
        </div>
      </Modal>
    </div>
  )
}

const playerStyle = {
  height: '505',
  width: '853'
}

const mapStateToProps = (state) => {
  return {
    trailer: state.getTrailers.trailers
  }
}

const WatchTrailer = connect(mapStateToProps,{trailers})(Watch)
export default WatchTrailer
