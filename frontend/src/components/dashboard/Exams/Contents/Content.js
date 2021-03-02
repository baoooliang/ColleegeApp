import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Reading from './Reading';
import NonReading from './NonReading';

const data = {
  type: 'Reading',
  name: 'SAT Reading'
}

export default function Content(){
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/admin/exams">
            Exams
          </Link>
          <Typography color="textPrimary">{data.type}</Typography>
        </Breadcrumbs>
      {
        data.type === 'Reading' ?
        <Reading data={data} />
        :
        <NonReading data={data} />
      }
    </>
  )
}