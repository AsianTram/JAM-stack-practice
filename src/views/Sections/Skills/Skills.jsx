import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import SkillItem from "components/SkillItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Skills = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, skills } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="text-center">
        {skills.map((skill) => (
          <Col md={4} key={skill.header}>
            <SkillItem {...skill} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Skills.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Skills.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Skills;
