import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import CompanyItem from "components/CompanyItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Companies.scss";

const Companies = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    companies,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {companies.map(({ header, ...tmProps }) => (
          <Col sm={4} key={header}>
            <CompanyItem header={header} {...tmProps} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <p className="large text-muted">{rootContent}</p>
        </Col>
      </Row>
    </PageSection>
  );
};

Companies.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Companies.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Companies;
