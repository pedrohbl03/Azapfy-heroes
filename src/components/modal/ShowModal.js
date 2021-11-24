import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';

function ShowModal(props) {

  return (
    <div>
      <Modal
        backdrop={false}
        centered
        isOpen={props.open}
        toggle={props.toggle}
      >
        <ModalHeader className="bg-dark text-light" toggle={props.toggle}>
          About this hero
        </ModalHeader>
        <ModalBody className="bg-dark text-light">
          <div className="row">
            <div className="col-12 col-md-4 text-center align-items-center">
              <div>
                <img alt="close-btn" className="modal-hero_image" src={props.hero.images.sm}></img>
                <h3 className="pt-2 fs-6">{props.hero.name}</h3>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="biography_information">
                <h4>Biography:</h4>
                <p>Your full name is {props.hero.biography.fullName === "" ? props.hero.name : props.hero.biography.fullName}, birthplace {props.hero.biography.placeOfBirth === '-' ? 'not informed' : props.hero.biography.placeOfBirth}, made its first appearance in {props.hero.biography.firstAppearance}, belongs to the group {props.hero.connections.groupAffiliation === '-' ? 'not-informed' : props.hero.connections.groupAffiliation}.</p>
              </div>
              <div className="appearance_information row">
                <div className="col-6">
                  <h4 className="fs-6 mb-0">Gender:</h4>
                  <p className="mb-1">{props.hero.appearance.gender === null ? 'Not informed' : props.hero.appearance.gender}</p>
                </div>
                <div className="col-6">
                  <h4 className="fs-6 mb-0">Race:</h4>
                  <p className="mb-1">{props.hero.appearance.race === null ? 'Not informed' : props.hero.appearance.race}</p>
                </div>
                <div className="col-6">
                  <h4 className="fs-6 mb-0">Height:</h4>
                  <p className="mb-1">{props.hero.appearance.height[1]}</p>
                </div>
                <div className="col-6">
                  <h4 className="fs-6 mb-0">Weight:</h4>
                  <p className="mb-1">{props.hero.appearance.weight[1]}</p>
                </div>
              </div>
              <div>
                <h4 className="fs-6 mb-0">Work:</h4>
                <p className="mb-1">{props.hero.work.occupation === '-' ? 'Not informed' : props.hero.work.occupation}</p>
              </div>
              <div>
                <h4 className="fs-6 mb-0">Published by:</h4>
                <p className="mb-1">{props.hero.biography.publisher}</p>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ShowModal;