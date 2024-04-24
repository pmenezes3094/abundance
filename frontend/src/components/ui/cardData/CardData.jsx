import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../modal/Modal';
import ButtonIcon from '../buttonIcon/ButtonIcon';
import ButtonAction from '../buttonAction/ButtonAction';
import IconLinkType from "../../icons/IconLinkType";
import IconFileType from "../../icons/IconFileType";
import IconEdit from "../../icons/IconEdit";
import IconDelete from "../../icons/IconDelete";
import Rss from '../../ui/Rss/Rss';

const CardData = ({ id, data, type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/dashboard/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

   // Function to extract file extension
   const getFileExtension = (filename) => {
    return filename.split('.').pop().toLowerCase();
  };

  const getWebsiteName = (link) => {
    // Remove protocol (http://, https://) if present
    let cleanedLink = link.replace(/(^\w+:|^)\/\//, '');
  
    // Remove www. if present
    cleanedLink = cleanedLink.replace(/^www\./, '');
  
    // Extract website name (domain)
    const websiteName = cleanedLink.split('/')[0];
  
    return websiteName;
  };

  const getFileName = (filePath) => {
    // Extract filename from the filePath by splitting it by '/'
    const filenameWithExtension = filePath.split('/').pop();
  
    // Split filenameWithExtension to separate name and extension
    const lastDotIndex = filenameWithExtension.lastIndexOf('.');
    const name = filenameWithExtension.substring(0, lastDotIndex);
    const extension = filenameWithExtension.substring(lastDotIndex + 1);
  
    return `${name}.${extension}`;
  };

  let content;
  let updateroute;
  switch (type) {
    case 'text':
      content = <p>{data}</p>;
      updateroute = `/updateText/${id}`;
      break;
    case 'link':
      content = <div><IconLinkType /><a href={data} target='_blank' rel='noopener noreferrer'>{getWebsiteName(data)}</a></div>;
      updateroute = `/updateLink/${id}`;
      break;
    case 'image':
      content = <img src={`http://localhost:8800/${data}`} alt={data} />;
      updateroute = `/updateImage/${id}`;
      break;
    case 'audio':
      content = <audio controls><source src={`http://localhost:8800/${data}`} type={`audio/${getFileExtension(data)}`} /></audio>;
      updateroute = `/updateAudio/${id}`;
      break;
    case 'video':
      content = <video controls><source src={`http://localhost:8800/${data}`} type={`video/${getFileExtension(data)}`} /></video>;
      updateroute = `/updateVideo/${id}`;
      break;
    case 'file':
      content = <div><IconFileType /><a href={`http://localhost:8800/${data}`} download>{getFileName(data)}</a></div>;
      updateroute = `/updateFile/${id}`;
      break;
    case 'rss':
      content = <Rss feedUrl={data} />;
      updateroute = `/updateFile/${id}`;
      break;
    default:
      content = <p>{data}</p>;
  }

  return (
    <>
      <div className='cardData'>
        <div className='card' onClick={openModal}>
          {content}
          <div className="cardActions">
            <ButtonAction IconComponent={IconDelete} label="Delete" clickFunction={handleDelete} tooltip="Delete Card"/>
            <ButtonIcon IconComponent={IconEdit} label="Update" pageroute={updateroute} tooltip="Update Content"/>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <div className='modalContent'>
          {content}
        </div>
      </Modal>
    </>
  );
};

export default CardData;
