import React from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        position: "fixed",
        bottom: theme.spacing.unit * 5,
        right: theme.spacing.unit * 9,
    },
});

class ListActionBar extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        label: PropTypes.string,
    };

    static defaultProps = {
        label: null,
    };

    render() {
        const { classes, label, onClick } = this.props;
        const variant = label ? "extended" : "round";
        return (
            <div style={this.cssStyles}>
                <Fab
                    color="primary"
                    aria-label="Add"
                    className={classes.fab}
                    size="large"
                    onClick={onClick}
                    data-test="list-action-bar"
                    variant={variant}
                >
                    {label || <AddIcon />}
                </Fab>
            </div>
        );
    }
}
//
export default withStyles(styles)(ListActionBar);
