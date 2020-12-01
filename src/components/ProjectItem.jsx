import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";
import Image from "components/Image";
import Icon from "components/Icon";
import ProjectDetailDialog from "components/ProjectDetailDialog";

import "./ProjectItem.scss";

const ProjectItem = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  imageFileNameDetail,
  imageAltDetail,
  extraInfo,
}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <>
      <Col md={4} sm={6} className="project-item">
        <a
          role="button"
          tabIndex={-1}
          className="project-link"
          data-toggle="modal"
          onClick={handleShowDetail}
        >
          <Image
            className="img-fluid"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />
          <div className="project-hover">
            <div className="project-hover-content">
              <Icon iconName="PlusIcon" size="2x" />
            </div>
          </div>
        </a>
        <div className="project-caption">
          <h4>{header}</h4>
          {subheader ? <p className="text-muted">{subheader}</p> : null}
        </div>
      </Col>
      <ProjectDetailDialog
        show={showDetail}
        onHide={handleHideDetail}
        imageFileName={imageFileNameDetail || imageFileName}
        imageAlt={imageAltDetail || imageAlt}
        header={header}
        subheader={subheader}
        content={content}
        extraInfo={extraInfo}
      />
    </>
  );
};

ProjectItem.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  content: PropTypes.string,
  imageFileNameDetail: PropTypes.string,
  imageAltDetail: PropTypes.string,
  extraInfo: PropTypes.any,
};

ProjectItem.defaultProps = {
  imageAlt: "",
  subheader: "",
  content: "",
  imageFileNameDetail: "",
  imageAltDetail: "",
  extraInfo: null,
};

export default ProjectItem;
