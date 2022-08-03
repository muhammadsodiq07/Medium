import React from 'react';
import { Link } from 'react-router-dom';
import DraftPublish from '../../Draft/DraftHeader/DraftPublish';
import "../User.scss";
import UserPublish from './UserPublish';

function UserHeader(props) {
  return (
    <div className='draft'>
      <div className='draft__container'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='draft__left'>
            <h1 className='draft__title'>
              {props.bio.name} {props.bio.lastName}
            </h1>
          </div>
          <div className='draft__right bio-right'>
            <svg className="dg le" width={25} height={25}><path d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z" fillRule="evenodd" /></svg>
          </div>
        </div>
        <div className='draft__list'>
          <ul className='draft__real-list d-flex'>
            <li className="draft__item">
              Home
            </li>
            <li className="draft__item">
              Lists
            </li>
            <li className="draft__item">
              About
            </li>
          </ul>
        </div>
        <ul className='draft__publish-list'>
          {
            props.inputSave.map((item, index) => {
              return <UserPublish 
                key={"y"+index} 
                inputSave={props.inputSave} 
                item={item}
            />
            })
          }
          
        </ul>
      </div>
    </div>
  )
}

export default UserHeader
