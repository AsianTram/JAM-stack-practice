import React from "react";
import PropTypes from "prop-types";

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
      <h4>{header}</h4>
      <p className="text-muted">{subheader}</p>
      {/* <div>
        {twitterPart}
        {facebookPart}
        {linkedinPart}
        {githubPart}
        {mediumPart}
      </div> */}
      <div>
        {description && description.length > 0 ? description.map((des) => (<p key={des}>{des}</p>)) : null}
      </div>
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
