import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import PriorityHigh from "@material-ui/icons/PriorityHigh";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
import Close from "@material-ui/icons/Close";
import Favorite from "@material-ui/icons/Favorite";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Pagination from "components/Pagination/Pagination.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import buttonsStyle from "assets/jss/material-dashboard-pro-react/views/buttonsStyle.jsx";

class Buttons extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.cardHeader}>
                <h4 className={classes.cardTitle}>Pick your Color</h4>
              </div>
              <div className={classes.cardContentLeft}>
                <Button className={classes.marginRight}>Default</Button>
                <Button color="primary" className={classes.marginRight}>
                  Primary
                </Button>
                <Button color="info" className={classes.marginRight}>
                  Info
                </Button>
                <Button color="success" className={classes.marginRight}>
                  Success
                </Button>
                <Button color="warning" className={classes.marginRight}>
                  Warning
                </Button>
                <Button color="danger" className={classes.marginRight}>
                  Danger
                </Button>
                <Button color="rose" className={classes.marginRight}>
                  Rose
                </Button>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.cardHeader}>
                <h4 className={classes.cardTitle}>Buttons with Label</h4>
              </div>
              <div className={classes.cardContentRight}>
                <Button className={classes.marginRight}>
                  <KeyboardArrowLeft className={classes.icons} /> Left
                </Button>
                <Button className={classes.marginRight}>
                  Right <KeyboardArrowRight className={classes.icons} />
                </Button>
                <Button color="info" className={classes.marginRight}>
                  <PriorityHigh className={classes.icons} /> Info
                </Button>
                <Button color="success" className={classes.marginRight}>
                  <Check className={classes.icons} /> Success
                </Button>
                <Button color="warning" className={classes.marginRight}>
                  <Warning className={classes.icons} /> Warning
                </Button>
                <Button color="danger" className={classes.marginRight}>
                  <Close className={classes.icons} /> Danger
                </Button>
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.cardHeader}>
                <h4 className={classes.cardTitle}>Pick your Size</h4>
              </div>
              <div className={classes.cardContentLeft}>
                <Button
                  color="primary"
                  size="sm"
                  className={classes.marginRight}
                >
                  Small
                </Button>
                <Button color="primary" className={classes.marginRight}>
                  Regular
                </Button>
                <Button
                  color="primary"
                  size="lg"
                  className={classes.marginRight}
                >
                  Large
                </Button>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.cardHeader}>
                <h4 className={classes.cardTitle}>Pick your Style</h4>
              </div>
              <div className={classes.cardContentRight}>
                <Button color="primary" className={classes.marginRight}>
                  Default
                </Button>
                <Button color="primary" round className={classes.marginRight}>
                  round
                </Button>
                <Button color="primary" round className={classes.marginRight}>
                  <Favorite className={classes.icons} /> with icon
                </Button>
                <Button
                  justIcon
                  round
                  color="primary"
                  className={classes.marginRight}
                >
                  <Favorite className={classes.icons} />
                </Button>
                <Button color="primary" simple className={classes.marginRight}>
                  simple
                </Button>
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.cardHeader}>
                <h4 className={classes.cardTitle}>Pagination</h4>
              </div>
              <div className={classes.cardContentLeft}>
                <Pagination
                  pages={[
                    { text: 1 },
                    { text: "..." },
                    { text: 5 },
                    { text: 6 },
                    { active: true, text: 7 },
                    { text: 8 },
                    { text: 9 },
                    { text: "..." },
                    { text: 12 }
                  ]}
                />
                <Pagination
                  pages={[
                    { text: "PREV" },
                    { text: 1 },
                    { text: 2 },
                    { active: true, text: 3 },
                    { text: 4 },
                    { text: 5 },
                    { text: "NEXT" }
                  ]}
                  color="info"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.cardHeader}>
                <h4 className={classes.cardTitle}>Button Group</h4>
              </div>
              <div className={classes.cardContentRight}>
                <div className={classes.buttonGroup}>
                  <Button color="info" className={classes.firstButton}>
                    Left
                  </Button>
                  <Button color="info" className={classes.middleButton}>
                    Middle
                  </Button>
                  <Button color="info" className={classes.lastButton}>
                    Right
                  </Button>
                </div>
                <br />
                <br />
                <div className={classes.buttonGroup}>
                  <Button color="info" round className={classes.firstButton}>
                    1
                  </Button>
                  <Button color="info" round className={classes.middleButton}>
                    2
                  </Button>
                  <Button color="info" round className={classes.middleButton}>
                    3
                  </Button>
                  <Button color="info" round className={classes.lastButton}>
                    4
                  </Button>
                </div>
                {` `}
                <div className={classes.buttonGroup}>
                  <Button color="info" round className={classes.firstButton}>
                    5
                  </Button>
                  <Button color="info" round className={classes.middleButton}>
                    6
                  </Button>
                  <Button color="info" round className={classes.lastButton}>
                    7
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    );
  }
}
Buttons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(buttonsStyle)(Buttons);
