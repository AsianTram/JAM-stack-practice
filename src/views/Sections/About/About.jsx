import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import Image from "components/Image";
import Icon from "components/Icon";
import * as SocialIcons from "../../../components/SocialIcons";
import './About.scss'

const About = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header,
    content,
    imageFileName,
    details,
    social: {
      github,
      linkedin
    }
  } = frontmatter;

  return (
    <PageSection className={clsx("py-5", className)} id={anchor}>
      <Row>
        <SectionHeader header={header} />
      </Row>
      <Row>
        <Col sm={7}>
          <Image className="image" fileName={imageFileName} alt='Tram Nguyen' />
        </Col>
        <Col className="float-right" sm={5}>
          {details ? details.map(detail => (
            <p key={detail}>{detail}</p>
          )) : null}
          {linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null}
          {github ? <SocialIcons.Github userName={github} /> : null}
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="about-quote-content">
            <span><Icon iconName="QuoteLeftIcon" size="2x" className="text-warning" />   </span>
            {content}
            <span>   <Icon iconName="QuoteRightIcon" size="0.5x" className="text-warning" />
            </span>
          </p>
        </Col>
      </Row>
    </PageSection>
  );
};

About.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

About.defaultProps = {
  className: null,
  frontmatter: null,
};

export default About;
