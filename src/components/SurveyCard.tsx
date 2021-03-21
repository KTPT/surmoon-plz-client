import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';

function SurveyCard({ title }): JSX.Element {
  return (
    <Card>
      <CardContent>
        <Typography>hi {title}!</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <UnfoldMoreIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default SurveyCard;
