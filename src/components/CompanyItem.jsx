import React from "react";
import PropTypes from "prop-types";
import { Accordion, Button } from "react-bootstrap";


import Image from "components/Image";
// import * as SocialIcons from "components/SocialIcons";

import "./CompanyItem.scss";

const CompanyItem = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  description,
}) => {
  // const twitterPart = twitter ? <SocialIcons.Twitter userName={twitter} /> : null;
  // const facebookPart = facebook ? <SocialIcons.Facebook userName={facebook} /> : null;
  // const linkedinPart = linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null;
  // const githubPart = github ? <SocialIcons.Github userName={github} /> : null;
  // const mediumPart = medium ? <SocialIcons.Medium userName={medium} /> : null;
  return (
    <div className="company-item">
      <Image
        className="mx-auto circle rounded-circle"
        fileName={imageFileName}
        alt={imageAlt || header || subheader}
      />
      <Accordion defaultActiveKey="0">
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          <h4>{header}</h4>
          <p className="text-muted">{subheader}</p>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <ul style={{ textAlign: 'left' }}>
            {description && description.length > 0 ? description.map((des) => (<li key={des}>{des}</li>)) : (<li>No detail provided</li>)}
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </div>
  );
};

CompanyItem.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  description: PropTypes.array,
};

CompanyItem.defaultProps = {
  imageAlt: null,
  header: "",
  subheader: "",
  description: null
};

export default CompanyItem;
